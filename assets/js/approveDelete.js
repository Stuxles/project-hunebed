var dataID3  = window.sessionStorage.getItem('delete-id');
console.log(dataID3);
var ref = db.collection('Questions').doc(dataID3);

function showQuestion (){
    
    ref.get().then((dataID3) => {
        //checks if docs exits
        if (dataID3.exists) {
            console.log(dataID3.data().Question);
            //!! werkt raar en niet helemaal !!!
            // var vraag = document.getElementById('vraag1');
            // for(x=2; x <= 6;x++){
            // window["vraag" + x] = document.getElementById('vraag'.concat(x));
            // }
            // vult niet alle input velden in 
            vraag.value = dataID3.data().Question;
            vraag2.value = dataID3.data().Question_answer;
            vraag3.value = dataID3.data().Question_wrong[0];
            vraag4.value = dataID3.data().Question_wrong[1];
            vraag5.value = dataID3.data().Question_wrong[2];
            vraag6.value = dataID3.data().Source;
            console.log("bubba");
        } else {
                console.log("No such document!");
        }

    }).catch((error) => {
        console.log("Error getting document:", error);
    });

}

function deleteQuestion(){

}

function approveQuestion(){

}

showQuestion();