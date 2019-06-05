let currentTab = 1;
let maxTab = 1;
let url = window.location.href;
let aurl = url.split("/");

/*
Generates the html with all the questions from the database.
@param data Is a snapshot with all the documnents from a firestore database.
*/
const loadQuestions = (data => {
    let html = '';      // HTML to load
    let tabHTML = '<li class="prev-tab disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>'; // The tab controller
    let tempArray;      // Temporary array whichw will store single tab
    const chunk = 2;    // The amount of items in a tab
    let tabAmount = 1;  // The amount of tabs on the page

    // Puts the object with all the docs in an array which can be split
    let array = [];
    data.forEach(doc => {
        array.push(doc);
    })

    // Load write each page html
    for(i=0; i < array.length; i+= chunk) {
        // Create div with corresponding tab class
        let tabContentHTML = `<div id="content${tabAmount}" class="tabcontent">`;
           
        tabHTML += `<li id="tablink${tabAmount}" class="tablink waves-effect"><a href="#!">${tabAmount}</a></li>`
        tabAmount++;
        tempArray = array.slice(i, i+chunk);
        tempArray.forEach(doc => {
        const question = doc.data();
        // Write the html with the data
        const item = `
            <div class="card question-card hoverable">
                <div class="card-content">
                <p>${question.Question}</p>
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
    tabHTML += '<li class="next-tab waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>';

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

// Writes the html for question details
const showQuestionDetails = (data => {
    const mediaLink = '../assets/img/hunebed1800x400.jpg';  // Media link of the question
    let html = `
        <div class="col xl12 s12 question-content">
            <h4>${data.Question}</h4>
                <img class="responsive-img materialboxed" src="${mediaLink}" alt="questionImage">
                <h5 class="header">Antwoord</h5>
                <p id="short-answer">${data.Question_answer}</p>
            </div>
        </div>
    `
    // Put the like and dislike bttons here aswell ^^^^
    document.getElementById('questionContent').innerHTML += html;

    // Reload materialize script
    $(document).ready(function() {
        $('.materialboxed').materialbox();
    });
})

// Show an error on the page when a question that doesnt exist is asked
const showQuestionError = (() => {
    console.log("test");
    const html = `<br><br>
    <h4 class="header container center">Could not find that question.</h4>
    `    
    document.getElementById('questionContent').innerHTML = html;
})

// Load questions form database
if(aurl[aurl.length-1] == "questions") {
    db.collection('Questions').get().then(snapshot => {
        loadQuestions(snapshot);
    })
}

// Show the details of a question if the url ends with show
// And get the data from post
if(aurl[aurl.length-1] == "show") {
    const docID = document.querySelector('#questionContainter').getAttribute('value');
    console.log(docID);
    if(docID == ""){
        showQuestionError();
    }else {
        const docRef = db.collection('Questions').doc(docID);
        docRef.get().then(doc => showQuestionDetails(doc.data()));
    }
}