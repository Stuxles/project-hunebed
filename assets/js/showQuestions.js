
function showSubmittedQuestions(){
    var x = 1;
    db.collection('Submitted_Questions').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            var ul = document.getElementById('qListSubmit');
            let ilItem = `
            
            <il classname = 'collection-item avatar'> 
                <span classname = 'title'><b>Vraag ${x}</b> : ${doc.data().Question}</span>
                <p><button onclick = 'clickGoedKeurKnop()' data-id = ${doc.id} class = 'waves-effect waves-light red btn'>Goedkeuren</button></p>
            </il>
            <hr>
            `;

            //append <UL> to <UL> tag
            ul.insertAdjacentHTML('afterbegin',ilItem);
            x++;
        });
    });
}


//create the IL tags and appends to the existing UL tag
function showApprovedQuestions(){
    var x = 1;
    db.collection('Questions').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            var ul = document.getElementById('qListApproved');
            let ilItem = `
            
            <il classname = 'collection-item avatar'> 
                <span classname = 'title'><b>Vraag ${x}</b> : ${doc.data().Question}</span>
                <p><button onclick = 'clickGoedKeurKnop()' data-id = ${doc.id} class = 'waves-effect waves-light red btn'>Goedkeuren</button></p>
            </il>
            <hr>
            `;
        
            //append <IL> to <UL> tag
            ul.insertAdjacentHTML('afterbegin',ilItem);
            x++;
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
