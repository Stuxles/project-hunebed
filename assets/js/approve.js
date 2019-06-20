

var dataID  = window.sessionStorage.getItem('data-id');
var qRef = db.collection('Questions').doc(dataID);
var sqRef = db.collection('Submitted_Questions').doc(dataID);
console.log(dataID);
function question(){
    qRef.get().then((doc) => {
        //checks if docs exits
        if (doc.exists) {
            //creates the variables that refer to the id's of the divs
            var text = document.getElementById('vraag1');

            for(x=2; x <= 8;x++){
            window["text" + x] = document.getElementById('vraag'.concat(x));
            }

            //sets firestore data into input field values
            text.value = doc.data().Question;

            //when back button press clear sessionstorage
            document.getElementById("terug").addEventListener('click', (e) => {
                clearSessionStorage();
            });

            
            document.getElementById("weergoedkeuren").addEventListener('click', (e) => {
                
                qRef.set({
                    //Related_User_Role: funcName,
                    Dislikes: 0,
                    Likes: 0,
                    Answer: text.value,
                    Options: [text3.value,text4.value,text5.value,text8.value],
                    Source: text6.value,
                    Question_answer: text2.value,
                    Picture:text7.value,
                    Approved: true,
                });
                clearSessionStorage();
            });

            document.getElementById("goedkeuren").addEventListener('click', (e) => {

                
                qRef.set({
                    //Related_User_Role: funcName,
                    Dislikes: 0,
                    Likes: 0,
                    Answer: text.value,
                    Options: [text3.value,text4.value,text5.value,text8.value],
                    Source: text6.value,
                    Question_answer: text2.value,
                    Picture:text7.value,
                    Approved: true,

                });
                clearSessionStorage();
            });

        } else {

                console.log("No such document in Questions collection!");

        }

    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

//needs doesnt create new document in Questions
function sqQuestion(){
    sqRef.get().then((doc) => {

        //checks if docs exits
        if (doc.exists) {
            //creates the variables that refer to the id's of the divs
            var text = document.getElementById('vraag1');

            for(x=2; x <= 8;x++){

            window["text" + x] = document.getElementById('vraag'.concat(x));
            }

            //sets firestore data into input field values
            text.value = doc.data().Question;

            //when back button press clear sessionstorage
            document.getElementById("terug").addEventListener('click', (e) => {
                clearSessionStorage();
            });

            document.getElementById("weergoedkeuren").addEventListener('click', (e) => {

                
                qRef.set({
                    //Related_User_Role: funcName,
                    Dislikes: 0,
                    Likes: 0,
                    Answer: text.value,
                    Options: [text3.value,text4.value,text5.value,text8.value],
                    Source: text6.value,
                    Question_answer: text2.value,
                    Picture:text7.value,
                    Approved: true,

                });
                clearSessionStorage();
            });

            document.getElementById("goedkeuren").addEventListener('click', (e) => {

                
                qRef.set({
                    //Related_User_Role: funcName,
                    Dislikes: 0,
                    Likes: 0,
                    Answer: text.value,
                    Options: [text3.value,text4.value,text5.value,text8.value],
                    Source: text6.value,
                    Question_answer: text2.value,
                    Picture:text7.value,
                    Approved: true,

                });
                clearSessionStorage();
            });

        } else {

                console.log("No such document in Submitted_Questions collection!");

        }

    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}


//function to call sessionstorage clear function.
function clearSessionStorage(){
    window.sessionStorage.clear();
}


function deleteQuestion(doc, ref){
    ref.doc(doc).delete().then(() => {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
}

//function to fill inputs fields from Submitted_Questions collection
sqQuestion();
//function to fill inputs fields from Question collection
question();

