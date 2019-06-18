
var dataID  = window.sessionStorage.getItem('data-id');
var ref = db.collection('Questions').doc(dataID);
console.log(dataID);
function question(){
    ref.get().then((doc) => {
        console.log(doc.data().Question);
        //checks if docs exits
        if (doc.exists) {
            //creates the variables that refer to the id's of the divs
            var text = document.getElementById('textarea1');
            for(x=2; x <= 7;x++){
            window["text" + x] = document.getElementById('textarea'.concat(x));
            }

            //sets firestore data into input field values
            text.textContent = doc.data().Question;

            //when back button press clear sessionstorage
            document.getElementById("terug").addEventListener('click', (e) => {
                clearSessionStorage();
            });

            
        } else {
                console.log("No such document!");
        }

    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

//function to call sessionstorage clear function.
function clearSessionStorage(){
    window.sessionStorage.clear();
}

question();