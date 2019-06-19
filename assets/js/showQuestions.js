//create the IL tags and appends to the existing UL tag
function create_il(){
    // required to find the base url
    var pathArray = window.location.pathname.split( '/' );
    //gets questions from the firestore database
    db.collection('Questions').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            //creates LI elements which partiallu displays the question contents
            var ul = document.getElementById('qList');
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
            //create base url
            a.href = pathArray[3].replace("moderator", "").concat("updateQuestion");
            a.setAttribute('data-id', doc.id);
            var butt = document.createElement('BUTTON');
            butt.className = "waves-effect waves-light btn";
            //creates eventlistener on the created button which creates a sessionstorage with the Document ID from the firestore
            butt.addEventListener('click', (e) => {
                var id = e.target.parentElement.getAttribute('data-id');
                window.sessionStorage.setItem('data-id', id);
            });
            //append button to <A> tag
            a.appendChild(butt);
            //appends the rest of the elements to the UL Tag
            li.appendChild(b);
            li.appendChild(persoonP);
            li.appendChild(questionP);
            li.appendChild(a);
            ul.appendChild(li);
        });
    });
}
//call function create_il()
if(document.getElementById('qList')!=null){
	create_il();
}
