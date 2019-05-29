
function create_il(){
var x = 0;
db.collection('Questions').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        var ul = document.getElementById('qList');
        var li = document.createElement('LI');
        li.className = "collection-item avat0ar" ;
        var span = document.createElement('SPAN');
        span.classname = "title";
        span.textContent = doc.data().Question;
        var b = document.createElement('B');
        b.appendChild(span);
        var persoonP = document.createElement('P');
        var questionP = document.createElement('P');
        questionP.textContent = doc.data().Question_answer;


        li.appendChild(b);
        li.appendChild(persoonP);
        li.appendChild(questionP);
        ul.appendChild(li);
    
    })
})
}
create_il()
