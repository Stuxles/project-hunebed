var dataID  = window.sessionStorage.getItem('data-id');
console.log(dataID);
var ref = db.collection('Questions').doc(dataID);

function showApprovedQuestion (){
    
    ref.get().then((dataID) => {
        //checks if docs exits
        if (dataID.exists) {
            console.log(dataID.data().Question);
            //!! werkt raar en niet helemaal !!!
            var vraag = document.getElementById('vraag1');
            for(x=2; x <= 6;x++){
            window["vraag" + x] = document.getElementById('vraag'.concat(x));
            }
            // vult niet alle input velden in 
            vraag.value = dataID.data().Question;
            vraag2.value = dataID.data().Question_answer;
            vraag3.value = dataID.data().Question_wrong[0];
            vraag4.value = dataID.data().Question_wrong[1];
            vraag5.value = dataID.data().Question_wrong[2];
            vraag6.value = dataID.data().Source;
            console.log("bubba");
        } else {
                console.log("No such document!");
        }

    }).catch((error) => {
        console.log("Error getting document:", error);
    });

}

function deleteQuestion(){
    ref.delete().then(() => {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
}

function approveQuestion(){
    
}

showApprovedQuestion();