

// var dataID  = window.sessionStorage.getItem('data-id');
// var qRef = db.collection('Questions').doc(dataID);
// var sqRef = db.collection('Submitted_Questions').doc(dataID);
// console.log(dataID);


// function question(){
//     qRef.get().then((doc) => {
//         //checks if docs exits
//         if (doc.exists) {
//             //creates the variables that refer to the id's of the divs
//             var text = document.getElementById('question-text');

//             for(x=2; x <= 8;x++){
//             window["text" + x] = document.getElementById('vraag'.concat(x));
//             }

//             //sets firestore data into input field values
//             text.value = doc.data().Question;

//             //when back button press clear sessionstorage
//             document.getElementById("terug").addEventListener('click', (e) => {
//                 clearSessionStorage();
//             });

            
//             document.getElementById("weergoedkeuren").addEventListener('click', (e) => {
                
//                 qRef.set({
//                     //Related_User_Role: funcName,
//                     Dislikes: 0,
//                     Likes: 0,
//                     Answer: text.value,
//                     Options: [text3.value,text4.value,text5.value,text8.value],
//                     Source: text6.value,
//                     Question_answer: text2.value,
//                     Picture:text7.value,
//                     Approved: true,
//                 });
//                 clearSessionStorage();
//             });

//             document.getElementById("goedkeuren").addEventListener('click', (e) => {

                
//                 qRef.set({
//                     //Related_User_Role: funcName,
//                     Dislikes: 0,
//                     Likes: 0,
//                     Answer: text.value,
//                     Options: [text3.value,text4.value,text5.value,text8.value],
//                     Source: text6.value,
//                     Question_answer: text2.value,
//                     Picture:text7.value,
//                     Approved: true,

//                 });
//                 clearSessionStorage();
//             });

//         } else {

//                 console.log("No such document in Questions collection!");

//         }

//     }).catch((error) => {
//         console.log("Error getting document:", error);
//     });
// }

// //needs doesnt create new document in Questions
// function sqQuestion(){
//     sqRef.get().then((doc) => {

//         //checks if docs exits
//         if (doc.exists) {
//             //creates the variables that refer to the id's of the divs
//             var text = document.getElementById('question-text');

//             for(x=2; x <= 8;x++){

//             window["text" + x] = document.getElementById('vraag'.concat(x));
//             }

//             //sets firestore data into input field values
//             text.value = doc.data().Question;

//             //when back button press clear sessionstorage
//             document.getElementById("terug").addEventListener('click', (e) => {
//                 clearSessionStorage();
//             });

//             document.getElementById("weergoedkeuren").addEventListener('click', (e) => {

                
//                 qRef.set({
//                     //Related_User_Role: funcName,
//                     Dislikes: 0,
//                     Likes: 0,
//                     Answer: text.value,
//                     Options: [text3.value,text4.value,text5.value,text8.value],
//                     Source: text6.value,
//                     Question_answer: text2.value,
//                     Picture:text7.value,
//                     Approved: true,

//                 });
//                 clearSessionStorage();
//             });

//             document.getElementById("goedkeuren").addEventListener('click', (e) => {

                
//                 qRef.set({
//                     //Related_User_Role: funcName,
//                     Dislikes: 0,
//                     Likes: 0,
//                     Answer: text.value,
//                     Options: [text3.value,text4.value,text5.value,text8.value],
//                     Source: text6.value,
//                     Question_answer: text2.value,
//                     Picture:text7.value,
//                     Approved: true,

//                 });
//                 clearSessionStorage();
//             });

//         } else {

//                 console.log("No such document in Submitted_Questions collection!");

//         }

//     }).catch((error) => {
//         console.log("Error getting document:", error);
//     });
// }


// //function to call sessionstorage clear function.
// function clearSessionStorage(){
//     window.sessionStorage.clear();
// }


// function deleteQuestion(doc, ref){
//     ref.doc(doc).delete().then(() => {
//         console.log("Document successfully deleted!");
//     }).catch(function(error) {
//         console.error("Error removing document: ", error);
//     });
// }

//function to fill inputs fields from Submitted_Questions collection
// sqQuestion();
//function to fill inputs fields from Question collection
// question();

if (typeof parseURLParams(window.location.href) !== 'undefined') {
    console.log(parseURLParams(window.location.href).id[0])
    approveQuestionForm(parseURLParams(window.location.href).id[0]);
}

function getCheckedUserRoles() {
    let categories = [];
    const checkboxes = document.querySelectorAll(".catCheckbox");
    checkboxes.forEach(checkbox => {
        if(checkbox.checked){
            categories.push(db.doc('/Roles/' + checkbox.value))
        }
    })
    return categories;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function approveQuestionForm(questionID){
    console.log("HELLLOOO")
    const questionRef = db.collection('Questions').doc(questionID);
    
    questionRef.get().then(question => {
        //checks if question exits
        if (question.exists) {
            //creates the variables that refer to the id's of the divs
            var questionText = document.querySelector('#question-text');

            //sets firestore data into input field values
            questionText.value = question.data().Question;

            // Get all the answers from the form
            const correctAnswer = document.querySelector('#correct-awnser-field').value;
            const wrongAnswer1 = document.querySelector('#wrong-answer-1').value;
            const wrongAnswer2 = document.querySelector('#wrong-answer-2').value;
            const wrongAnswer3 = document.querySelector('#wrong-answer-3').value;
            let answers = [correctAnswer,wrongAnswer1,wrongAnswer2,wrongAnswer3]
            answers = shuffleArray(answers);

            let correctIndex = 0;

            //get correct answer index
            for (let i = 0; i < answers.length; i++) {
                if (answers[i] === correctAnswer)
                    correctIndex = i;
            }

            //when back button is pressed return to questions list
            document.getElementById("terug").addEventListener('click', (e) => {
                window.location.href = BASE_URL + 'moderator/submittedQuestions';
            });

            document.getElementById("goedkeuren").addEventListener('click', (e) => {
                questionRef.set({
                    Answer: questionText.value,
                    Likes: 0,
                    Options: answers,
                    Question: questionText,
                    Related_User_Roles: getCheckedUserRoles()
                });
            });

        } else {
                console.log("No such document in Questions collection!");

        }

    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

// showRolesChecklist();

