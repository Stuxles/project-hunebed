
function submittedQuestions(){
    db.collection('Submitted_Questions').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            var ul = document.getElementById('qListSubmit');
            var li = document.createElement('LI');
            var li = document.createElement('LI');
            li.className = "collection-item avatar";
            var span = document.createElement('SPAN');
            span.classname = "title";
            span.textContent = doc.data().Question;
            var b = document.createElement('B');
            b.appendChild(span);
            var persoonP = document.createElement('P');
            var questionP = document.createElement('P');
            questionP.textContent = doc.data().Question_answer;
            var a = document.createElement('A');

            //create base url for delete/approve Question
            var butt_Delete_Approve = document.createElement("BUTTON");
            butt_Delete_Approve.className = "waves-effect waves-light red btn";
            butt_Delete_Approve.textContent = "Goedkeuring / verwijderen";
            var aDelApr = document.createElement('A');
            aDelApr.setAttribute('delete-id', doc.id);
            aDelApr.appendChild(butt_Delete_Approve);
            butt_Delete_Approve.addEventListener('click', (e) => {
                var id = e.target.parentElement.getAttribute('delete-id');
                window.sessionStorage.setItem('delete-id', id);
                location.href = pathArray[3].replace("moderator", "").concat("removeApproveQuestion");
            })
            
            //append button to <A> tag
            aDelApr.appendChild(butt_Delete_Approve);
            li.appendChild(aDelApr);
            //appends the rest of the elements to the UL Tag
            li.appendChild(b);
            li.appendChild(persoonP);
            li.appendChild(questionP); 
            li.appendChild(a);
            ul.appendChild(li);
        })
    })
}



//create the IL tags and appends to the existing UL tag
function approvedQuestions(){

    // required to find the base url
    var pathArray = window.location.pathname.split( '/' );
    //gets questions from the firestore database
    db.collection('Questions').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            //creates LI elements which partiallu displays the question contents
            var ul = document.getElementById('qListApproved');
            var li = document.createElement('LI');
            li.className = "collection-item avatar";
            var span = document.createElement('SPAN');
            span.classname = "title";
            span.textContent = doc.data().Question;
            var b = document.createElement('B');
            b.appendChild(span);
            var persoonP = document.createElement('P');
            var questionP = document.createElement('P');
            questionP.textContent = doc.data().Question_answer;
            var a = document.createElement('A');

            //create base url for delete/approve Question
            var butt_Delete_Approve = document.createElement("BUTTON");
            butt_Delete_Approve.className = "waves-effect waves-light red btn";
            butt_Delete_Approve.textContent = "Goedkeuring / verwijderen";
            var aDelApr = document.createElement('A');
            aDelApr.setAttribute('delete-id', doc.id);
            aDelApr.appendChild(butt_Delete_Approve);
            butt_Delete_Approve.addEventListener('click', (e) => {
                var id = e.target.parentElement.getAttribute('delete-id');
                window.sessionStorage.setItem('delete-id', id);
                location.href = pathArray[3].replace("moderator", "").concat("removeApproveQuestion");
            })

            //create base url for update Question
            a.href = pathArray[3].replace("moderator", "").concat("updateQuestion");
            a.setAttribute('data-id', doc.id); 
            var butt = document.createElement('BUTTON');
            butt.className = "waves-effect waves-light btn";
            butt.textContent = "Bewerken";
            //creates eventlistener on the created button which creates a sessionstorage with the Document ID from the firestore
            butt.addEventListener('click', (e) => {
                var id = e.target.parentElement.getAttribute('data-id');
                window.sessionStorage.setItem('data-id', id);
                
            })
            //append button to <A> tag
            aDelApr.appendChild(butt_Delete_Approve);
            a.appendChild(butt);
            li.appendChild(aDelApr);
            //appends the rest of the elements to the UL Tag
            li.appendChild(b);
            li.appendChild(persoonP);
            li.appendChild(questionP); 
            li.appendChild(a);
            ul.appendChild(li);
        
        })
    })
}
//call function approvedQuestions()
approvedQuestions();
