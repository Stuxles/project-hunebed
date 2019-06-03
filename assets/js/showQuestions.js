
function create_il(){

var x = 0;
var pathArray = window.location.pathname.split( '/' );

db.collection('Questions').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
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
        a.href = pathArray[3].replace("moderator", "").concat("addQuestion");
        a.setAttribute('data-id', doc.id);
        var butt = document.createElement('BUTTON');
        butt.className = "waves-effect waves-light btn";
        butt.addEventListener('click', (e) => {
            var id = e.target.parentElement.getAttribute('data-id');
            window.sessionStorage.setItem('data-id', id);
            
        })
        a.appendChild(butt);
        

        li.appendChild(b);
        li.appendChild(persoonP);
        li.appendChild(questionP); 
        li.appendChild(a);
        ul.appendChild(li);
    
    })
})
}

create_il();
