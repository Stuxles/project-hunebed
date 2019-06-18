
var dataID  = window.sessionStorage.getItem('data-id');
var qRef = db.collection('Questions').doc(dataID);
var sqRef = db.collection('Submitted_Questions').doc(dataID);
console.log(dataID);

function question(){
    qRef.get().then((doc) => {
        console.log(doc);
        //checks if docs exits
        if (doc.exists) {
            //creates the variables that refer to the id's of the divs
            var text = document.getElementById('vraag1');
            // for(x=2; x <= 7;x++){
            // window["text" + x] = document.getElementById('vraag'.concat(x));
            // }

            //sets firestore data into input field values
            text.value = doc.data().Question;

            //when back button press clear sessionstorage
            document.getElementById("terug").addEventListener('click', (e) => {
                clearSessionStorage();
            });

            document.getElementById("goedkeuren").addEventListener('click', (e) => {
                
                qRef.update({
                    //Related_User_Role: funcName,
                    Question: text.value,
                    Question_wrong: [text3.value,text4.value,text5.value],
                    Source: text6.value,
                    Question_answer: text2.value,
                    Picture:text7.value,
                });
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

function sqQuestion(){
    sqRef.get().then((doc) => {
        console.log(doc);
        //checks if docs exits
        if (doc.exists) {
            //creates the variables that refer to the id's of the divs
            var text = document.getElementById('vraag1');
            // for(x=2; x <= 7;x++){
            // window["text" + x] = document.getElementById('vraag'.concat(x));
            // }

            //sets firestore data into input field values
            text.value = doc.data().Question;

            //when back button press clear sessionstorage
            document.getElementById("terug").addEventListener('click', (e) => {
                clearSessionStorage();
            });

            document.getElementById("goedkeuren").addEventListener('click', (e) => {
                
                sqRef.update({
                    //Related_User_Role: funcName,
                    Question: text.value,
                    Question_wrong: [text3.value,text4.value,text5.value],
                    Source: text6.value,
                    Question_answer: text2.value,
                    Picture:text7.value,
                });
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

//sqQuestion();

question();