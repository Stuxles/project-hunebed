//create the IL tags and appends to the existing UL tag
function showEditQuestions(collection){
    var x = 1;
    db.collection(collection).get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            var ul = document.getElementById('qListApproved');
            let ilItem = `
            <hr>
            <il classname='collection-item avatar'>
                <span classname = 'title'><b>Vraag ${x}</b> : ${doc.data().Question}</span>
                <p><button onclick='clickApprovedBtn("${doc.id}", "${collection}")' class='approve-btn waves-effect waves-light red btn'>Goedkeuren / Verwijderen</button></p>
            </il>
            <hr>
            `;

            //append <IL> to <UL> tag
            ul.insertAdjacentHTML('afterbegin',ilItem);

            // document.querySelector('.approve-btn').addEventListener('click', () => {
            //     approveQuestionForm(doc.ref);
            // })

            x++;
        });
    });
}

// GO to edit the question
function clickApprovedBtn(id, collection){
    window.location.href = BASE_URL + `moderator/removeApproveQuestion?id=${id}&collection=${collection}`;
}

if(CURRENT_PAGE === '/moderator/approvedQuestions') {
    showEditQuestions('Questions');
} else if (CURRENT_PAGE === '/moderator/submittedQuestions') {
    showEditQuestions('Submitted_Questions');
}
