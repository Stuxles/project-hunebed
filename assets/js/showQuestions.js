
function showSubmittedQuestions(){
    var x = 1;
    db.collection('Submitted_Questions').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            var ul = document.getElementById('qListSubmit');
            let ilItem = `
            <hr>
            <il classname = 'collection-item avatar'>
                <span classname = 'title'><b>Vraag ${x}</b> : ${doc.data().Question}</span>
                <p><button onclick = 'clickGoedKeurKnop(this)' data-id = ${doc.id} class = 'waves-effect waves-light red btn'>Goedkeuren</button></p>
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
            <hr>
            <il classname = 'collection-item avatar'>
                <span classname = 'title'><b>Vraag ${x}</b> : ${doc.data().Question}</span>
                <p><button onclick = 'clickGoedKeurKnop(this)' data-id = ${doc.id} class = 'waves-effect waves-light red btn'>Bewerken</button></p>
            </il>
            `;

            //append <IL> to <UL> tag
            ul.insertAdjacentHTML('afterbegin',ilItem);
            x++;
        });
    });
}

//onclick event that stores htmlsession storage value and redirects to removeApproveQuestionPage
function clickGoedKeurKnop(btn){
    var id = btn.getAttribute("data-id");
    window.sessionStorage.setItem('data-id', id);
    location.href = pathArray[2].replace("moderator", "").concat("removeApproveQuestion");
}

if(CURRENT_PAGE.indexOf("dQuestions") > 0) {
//call function showSubmittedQuestions()
showSubmittedQuestions();
//call function showApprovedQuestions()
showApprovedQuestions();
}
