
function showSubmittedQuestions(){
    db.collection('Submitted_Questions').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            var ul = document.getElementById('qListSubmit');
            let ilItem = `

            <il classname = 'collection-item avatar'> 
                <b><span classname = 'title'>${doc.data().Question}</span></b>
                <p>${doc.data().Question_answer}</p>
                <button onclick = 'clickGoedKeurKnop()' data-id = ${doc.id} className = 'waves-effect waves-light red btn'>Goedkeuren</button>
            </il>
            `;

            //append <UL> to <UL> tag
            ul.insertAdjacentHTML('afterbegin',ilItem);
        });
    });
}


//create the IL tags and appends to the existing UL tag
function showApprovedQuestions(){

    db.collection('Questions').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            var ul = document.getElementById('qListApproved');
            let ilItem = `

            <il classname = 'collection-item avatar'> 
                <b><span classname = 'title'>${doc.data().Question}</span></b>
                <p>${doc.data().Question_answer}</p>
                <button onclick = 'clickGoedKeurKnop()' data-id = ${doc.id} className = 'waves-effect waves-light red btn'>Goedkeuren</button>
            </il>
            `;
        
            //append <IL> to <UL> tag
            ul.insertAdjacentHTML('afterbegin',ilItem);
        });
    });
}

//onlclick event that stores htmlsession storage value and redirects to removeApproveQuestionPage
function clickGoedKeurKnop(){
    var id = $( "button" ).attr( "data-id" );
    window.sessionStorage.setItem('data-id', id);
    location.href = pathArray[3].replace("moderator", "").concat("removeApproveQuestion");
}

//call function showSubmittedQuestions()
showSubmittedQuestions();
//call function showApprovedQuestions()
showApprovedQuestions();
