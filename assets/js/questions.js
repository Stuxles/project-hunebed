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
            categories.push(checkbox.value)
        }
    })

    // Add the data to the database
    db.collection('Submitted_Questions').add({
        Question: question,
        Categories: categories
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
Add data from the form in the database
@param resetForm fill in anything when form needs to be resetted.
*/
const addModQuestion = (resetForm => {
    let question;
    let userRole = [];
    let answer;
    let wrongAnswers = [];
    let source;

    // Get the data from the form
    question = document.querySelector('#textarea1').value;
    file = document.querySelector('#file').value;
    answer = document.querySelector('#textarea2').value;
    source = document.querySelector('#textarea6').value;
    const checkboxes = document.querySelectorAll(".catCheckbox");
    checkboxes.forEach(checkbox => {
        if(checkbox.checked){
            userRole.push(checkbox.value)
        }
    })
    const wrongs = document.querySelectorAll(".wrong-answer-text");
    wrongs.forEach(wrong => {
        wrongAnswers.push(wrong.value)
    })

    // Add the data to the database
    db.collection('Questions').add({
        Question: question,
        Related_User_Role: userRole,
        Picture: file,
        Question_answer: answer,
        Question_wrong: wrongAnswers,
        Source: source
    })

    // Reset the form
    // Reset the form if needed
    if(resetForm == null){        
        document.querySelector('#textarea1').value = "";
        document.querySelector('#file').value = "";
        document.querySelector('#textarea2').value = "";
        document.querySelector('#textarea6').value = "";
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        })
        wrongs.forEach(wrong => {
            wrong.value = "";
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
    for(i=0; i < array.length; i+= chunk) {
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
                <div class="card question-card hoverable">
                    <div class="card-content">
                        <span>${question.Question}</span>
                        <div class="right">
                            <span class=" badge like-badge" data-badge-caption="${likeString}">${likes}</span>
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
            const html = `
            <div class="card">
                <div class="card-content small-card-content">
                    <p>${data.Question}</p>
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
                <p id="short-answer">${data.Question_answer}</p>
            </div>
        </div>
    `
    // Put the like and dislike bttons here aswell ^^^^
    document.getElementById('questionContent').innerHTML = html;

    if(typeof data.Likes !== 'undefined')
        document.querySelector('.like-number').innerHTML = data.Likes;
    if(typeof data.Dislikes !== 'undefined')
        document.querySelector('.dislike-number').innerHTML = data.Dislikes;

    document.querySelector('.like-button').addEventListener('click', () => {
        const likeQuestion = functions.httpsCallable('likeQuestion');
        likeQuestion({ id: doc.id, rate: 'like' }).then(result => {
            console.log(result.data);
        })
    });

    document.querySelector('.dislike-button').addEventListener('click', () => {
        const likeQuestion = functions.httpsCallable('likeQuestion');
        likeQuestion({ id: doc.id, rate: 'dislike' }).then(result => {
            console.log(result.data);
        })
    });
    

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

if(aurl[aurl.length-1] == "questions") {
    loadRolesInSelector();

    // Load questions form database
    // db.collection('Questions').get().then(snapshot => {
    //     loadQuestions(snapshot);
    // })
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
if(aurl[aurl.length-1] == "show") {
    const docID = document.querySelector('#questionContainter').getAttribute('value');
    if(docID == ""){
        showQuestionError();
    }else {
        const docRef = db.collection('Questions').doc(docID);
        docRef.get().then(doc => showQuestionDetails(doc));
    }
}