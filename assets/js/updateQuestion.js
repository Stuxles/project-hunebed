
var dataID  = window.sessionStorage.getItem('data-id');
console.log(dataID);
var ref = db.collection('Questions').doc(dataID);

ref.get().then((doc) => {
    if (doc.exists) {
        var text = document.getElementById('textarea1');
        for(x=2; x <= 6;x++){
        window["text" + x] = document.getElementById('textarea'.concat(x));
        }

        var checkbox = document.getElementsByName("group1");
        var funcArray = doc.data().Function;
        checkbox.forEach((group) =>{
            funcArray.forEach((func) => {
                if(func == group.value){
                    group.checked = true
                }
            });
        });

        text.textContent = doc.data().Question;
        text2.textContent = doc.data().Question_answer;
        text3.textContent = doc.data().Question_wrong[0];
        text4.textContent = doc.data().Question_wrong[1];
        text5.textContent = doc.data().Question_wrong[2];
        text6.textContent = doc.data().Source;

        document.getElementById("terug").addEventListener('click', (e) => {
            window.sessionStorage.clear();
        })

        document.getElementById("nieuweVraag").addEventListener('click', (e) => {
            window.sessionStorage.clear();
            location.reload();
        })
        
        //werk niet soort van
        document.getElementById("toevoegen").addEventListener('click', (e) => {

        });
        
    } else {
            console.log("No such document!");
    }

}).catch((error) => {
    console.log("Error getting document:", error);
});

