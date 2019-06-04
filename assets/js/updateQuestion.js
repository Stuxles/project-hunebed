var dataID  = window.sessionStorage.getItem('data-id');
console.log(dataID);
var ref = db.collection('Questions').doc(dataID);
ref.get().then((doc) => {
    if (doc.exists) {
        var text = document.getElementById('textarea1');
        for(x=2; x <= 6;x++){
        window["text" + x] = document.getElementById('textarea'.concat(x));
        }
        var rad = document.getElementsByName('group1');
        rad.forEach((group) =>{
            if(group.value == doc.data().Function){
                group.checked = true;
            }
        });
        text.textContent = doc.data().Question;
        text2.textContent = doc.data().Question_answer;
        text3.textContent = doc.data().Question_wrong[0];
        text4.textContent = doc.data().Question_wrong[1];
        text5.textContent = doc.data().Question_wrong[2];
        text6.textContent = doc.data().Source;
        //werk niet soort van
        document.getElementById("terug").addEventListener('click', (e) => {
            window.sessionStorage.clear();
            console.log("it works the link atleast");
            });
        document.getElementById("toevoegen").addEventListener('click', (e) => {
            var functionName;
            rad.forEach((group) =>{
                if( group.checked == true){
                    functionName = group.value;
                }
            });
            ref.update({
                //update waardes hier in zetten
                Function : functionName,
                Question_wrong: { 0: text3.textContent, 1: text4.textContent, 2: text5.textContent },
                Question : text.textContent ,
                Source : text6.textContent,
                Question_answer : text2.textContent
            });
            console.log("it worked yeah");
        })
        
    } else {
            console.log("No such document!");
    }

}).catch(function(error) {
    console.log("Error getting document:", error);
});
