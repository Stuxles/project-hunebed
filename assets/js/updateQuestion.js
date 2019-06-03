var dataID  = window.sessionStorage.getItem('data-id');
var ref = db.collection('Questions').doc(dataID);
ref.get().then((doc) => {
    if (doc.exists) {
        var text1 = document.getElementById('textarea1');
        var text2 = document.getElementById('textarea2');
        var text3 = document.getElementById('textarea3');
        var text4 = document.getElementById('textarea4');
        var text5 = document.getElementById('textarea5');
        var text6 = document.getElementById('textarea6');
        var rad = document.getElementsByName('group1');
        rad.forEach((group) =>{
            if(group.value == doc.data().Function){
                group.checked = true;
            }
        });
        text1.textContent = doc.data().Question;
        text2.textContent = doc.data().Question_answer;
        text3.textContent = doc.data().Question_wrong[0];
        text4.textContent = doc.data().Question_wrong[1];
        text5.textContent = doc.data().Question_wrong[2];
        text6.textContent = doc.data().Source;
        if(true ){
            ref.update({
                //update waardes hier in zetten
            });
        }

        
    } else {
            console.log("No such document!");
    }

}).catch(function(error) {
    console.log("Error getting document:", error);
});
