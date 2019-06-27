/*
Loads the roles in the select input on the questions page
*/
const loadRolesInSelector = (() => {
    const select = document.querySelector('.select-role');  // The selector
    db.collection('Roles').get().then(snapshot => {
        snapshot.forEach(doc => {
            select.innerHTML += `<option value="${doc.id}">${doc.data().Naam}</option>`;
        })
        
        // Reload the JS for the selector
        $(document).ready(function(){
            $('select').formSelect();
        });
    })
})

/*
Shows the roles in add questions in a list
*/
const showRolesChecklist = (() => {
    const rolesList = document.querySelector('.roles-list');
    db.collection('Roles').get().then(roles => {
        roles.forEach(role => {
            rolesList.innerHTML += `
            <p>
                <label>
                    <input class="catCheckbox" type="checkbox" value="${role.id}" />
                    <span>${role.data().Naam}</span>
                </label>
            </p>
            `
        })
    })
})

/*
Add data from the form in the database
@param resetForm fill in anything when form needs to be resetted.
*/
const addQuestion = (resetForm => {
    let question;
    let categories = [];

    // Get the data from the form
    question = document.querySelector('#questionText').value;
    const checkboxes = document.querySelectorAll(".catCheckbox");
    checkboxes.forEach(checkbox => {
        if(checkbox.checked){
            categories.push(db.doc('/Roles/' + checkbox.value))
        }
    })

    // Add the data to the database
    db.collection('Submitted_Questions').add({
        Question: question,
        Categories: categories
    }).then(() => {
        $('#modal3').modal({
            dismissible: true, // Modal can be dismissed by clicking outside of the modal
            onCloseEnd: setTimeout( function() { // Callback for Modal close
                window.location.href = BASE_URL;
            }, 1234)
        })
        $('#modal3').modal('open');
    })

    // Reset the form if needed
    if(resetForm == null){
        document.querySelector('#questionText').value = "";
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        })
    }

    
})

/*
Generates the html with all the questions from the database.
@param snapshot Is a snapshot with all the documnents from a firestore database.
*/
const loadQuestions = (snapshot => {
    let html = '';      // HTML to load
    let tabHTML = '<li class="prev-tab disabled"><a><i class="material-icons">chevron_left</i></a></li>'; // The tab controller
    let tempArray;      // Temporary array whichw will store single tab
    const chunk = 4;    // The amount of items in a tab
    let tabAmount = 1;  // The amount of tabs on the page

    // Puts the object with all the docs in an array which can be split
    let array = [];
    snapshot.forEach(doc => {
        array.push(doc);
    })

    // Load write each page html
    for(i=0; i < array.length; i += chunk) {
        // Create div with corresponding tab class
        let tabContentHTML = `<div id="content${tabAmount}" class="tabcontent">`;
           
        tabHTML += `<li id="tablink${tabAmount}" class="tablink waves-effect" ><a>${tabAmount}</a></li>`
        tabAmount++;
        tempArray = array.slice(i, i+chunk);
        tempArray.forEach(doc => {
            const question = doc.data();

            let likeString = 'Likes';
            if (question.Likes === 1)
                likeString = 'Like'
            

            let likes = question.Likes;
            if (typeof question.Likes == 'undefined')
                likes = 0;

            // Write the html with the data
            const item = `
                <div class="card question-card">
                    <div class="card-content small-card-content">
                        <div class="row">
                            <div class="col s8">
                                <span class="">${question.Question}</span>
                            </div>
                            <div class="col s4">
                                <span class=" badge like-badge" data-badge-caption="${likeString}">${likes}</span>
                            </div>
                        </div>
                    </div>
                    <div class="card-action">
                        <form action="questions/show" method="POST">
                            <button type="submit" name="showButton" class="btn  hb-blue" value="${doc.id}">Lees meer</button>
                        </form>
                    </div>
                </div>
            `;
            tabContentHTML += item;
        })
        tabContentHTML += `</div>`
        html += tabContentHTML;
    }
    tabHTML += '<li class="next-tab waves-effect"><a><i class="material-icons">chevron_right</i></a></li>';

    // Set html
    document.querySelector('.question-pagination').innerHTML = tabHTML;
    document.querySelector('.questionListContainer').innerHTML = html;
    // Increase tab amount
    maxTab = tabAmount-1;   

    // Add eventlistener for each tab link
    for(i = 1; i < tabAmount; i++) {
        const x = i;
        document.querySelector(`#tablink${x}`).addEventListener('click', () => {
        showQuestions(x);
        })
    }

    // Add eventlistener to next en prev buttons
    document.querySelector('.next-tab').addEventListener('click', () => {
        showQuestions(currentTab+1);
    });
    document.querySelector('.prev-tab').addEventListener('click', () => {
        showQuestions(currentTab-1);
    });

    // Standart load first page
    showQuestions(1);
})

/*
Shows the given tabs
@param tab the tab number that needs to be shown
*/
const showQuestions = (tab => {
    // Dont load tabs that dont exist
    if(tab > maxTab || tab < 1){
    return
    }
    // If first or last tab dont go further
    // Enable and disable the prev and next buttons depending on current page
    if(tab == 1){
        document.querySelector('.prev-tab').className = "prev-tab disabled waves-effect";
        document.querySelector('.next-tab').className = "next-tab waves-effect";
    } else if(tab == maxTab){
        document.querySelector('.next-tab').className = "next-tab disabled waves-effect";
        document.querySelector('.prev-tab').className = "prev-tab waves-effect";
    } else {
        document.querySelector('.prev-tab').className = "prev-tab waves-effect";
        document.querySelector('.next-tab').className = "next-tab waves-effect";
    }
    // Stop showing current tab
    const tabcontent = document.querySelectorAll('.tabcontent');
    tabcontent.forEach(tabcont => tabcont.style.display = 'none');
    // Disable current active tablink
    const tablinks = document.querySelectorAll('.tablink');
    tablinks.forEach(tablink => tablink.className = tablink.className.replace(" active", ""));

    // Show tab content and set the right tablink active
    document.querySelector(`#content${tab}`).style.display = 'block';
    document.querySelector(`#tablink${tab}`).className += " active";
    // Set current tab
    currentTab = tab;
})

/*
Shows top questions
@param amount The amount of questions to show
*/
const showTopQuestions = ((amount = 3) => {
    db.collection('Questions').orderBy('Likes', 'desc').limit(amount).get().then(snapshot => {
        snapshot.forEach(doc => {
            const data = doc.data();

            let likeString = 'Likes';
            if (data.Likes === 1)
                likeString = 'Like'
            

            let likes = data.Likes;
            if (typeof data.Likes == 'undefined')
                likes = 0;

            const html = `
            <div class="card question-card">
                <div class="card-content small-card-content row">
                    <div class="col s8">
                        <span class="">${data.Question}</span>
                    </div>
                    <div class="col s4">
                        <span class=" badge like-badge" data-badge-caption="${likeString}">${likes}</span>
                    </div>
                </div>
                <div class="card-action ">
                <form action="questions/show" method="POST">
                    <button type="submit" name="showButton" class="btn  hb-blue" value="${doc.id}">Lees meer</button>
                </form>
                </div>
            </div>
            `;
            document.querySelector('.top-questions').innerHTML += html;
        })
    })
})

// Writes the html for question details
const showQuestionDetails = (doc => {
    const data = doc.data();
    const mediaLink = '../assets/img/hunebed1800x400.jpg';  // Media link of the question
    let html = `
        <div class="question-content">
            <h4>${data.Question}</h4>
                <img class="responsive-img materialboxed" src="${mediaLink}" alt="questionImage">
                <h5 class="header">Antwoord</h5>
                <p id="short-answer">${data.Options[data.Answer]}</p>
            </div>
        </div>
    `
    // Put the like btton here aswell ^^^^
    document.getElementById('questionContent').innerHTML = html;

    if(typeof data.Likes !== 'undefined')
        document.querySelector('.like-number').innerHTML = data.Likes;
        document.querySelector('.like-number').value = data.Likes;

    
    

    // Reload materialize script
    $(document).ready(function() {
        $('.materialboxed').materialbox();
    });

})

// Show an error on the page when a question that doesnt exist is asked
const showQuestionError = (() => {
    const html = `<br><br>
    <h4 class="header container center">Could not find that question.</h4>
    `    
    document.getElementById('questionContent').innerHTML = html;
})

let currentTab = 1;
let maxTab = 1;

if(CURRENT_PAGE == "/questions") {
    loadRolesInSelector();

    // NOT REALTIME
    // Load questions form database
    // db.collection('Questions').get().then(snapshot => {
    //     loadQuestions(snapshot);
    // })

    // REALTIME
    db.collection('Questions').onSnapshot(snapshot => {
        loadQuestions(snapshot);
    })

    // Select specific questions with specific roles
    document.querySelector('.search-question-button').addEventListener('click', () => {
        const selector = document.querySelector('.select-role');
        const out = selector.options[selector.selectedIndex].value;

        db.collection('Roles').doc(out).get().then(doc => {
            if (doc.exists) {
                db.collection('Questions').where('Related_User_Roles', 'array-contains', doc.ref).onSnapshot(snapshot => {
                    loadQuestions(snapshot);
                })
            }
        })
    })
}

// Show the details of a question if the url ends with show
// And get the data from post
if(CURRENT_PAGE == "/questions/show") {
    const docID = document.querySelector('#questionContainter').getAttribute('value');
    if(docID == ""){
        showQuestionError();
    }else {
        const docRef = db.collection('Questions').doc(docID);
        docRef.onSnapshot(doc => showQuestionDetails(doc));

        document.querySelector('.like-button').addEventListener('click', () => {
            const likeSpan = document.querySelector('.like-number');
            likeSpan.innerHTML = `
            <div class="preloader-wrapper small active" style="height:20px;width:20px;">
            <div class="spinner-layer spinner-green-only">
              <div class="circle-clipper left">
                <div class="circle"></div>
              </div><div class="gap-patch">
                <div class="circle"></div>
              </div><div class="circle-clipper right">
                <div class="circle"></div>
              </div>
            </div>
          </div>`
            const likeQuestion = functions.httpsCallable('likeQuestion');
            likeQuestion({ id: docID, rate: 'like' }).then(result => {
                console.log(result.data);
                if (result.data.msg === 'already liked')
                    likeSpan.innerHTML = likeSpan.value;
            })
        });
    }
}

if (CURRENT_PAGE === '/addQuestionUser') {
	showRolesChecklist();
}