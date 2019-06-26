

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

function getCheckedUserRoles() {
    let categories = [];
    const checkboxes = document.querySelectorAll(".roleCheckbox");
    checkboxes.forEach(checkbox => {
        if(checkbox.checked){
            categories.push(db.doc(checkbox.id))
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

function approvedQuestionForm(questionID, collection){
    const questionRef = db.collection(collection).doc(questionID);
    console.log('reffe:', questionRef)
    const rolesRef = db.collection('Roles');
    let questionRoles = [];
    
    questionRef.get().then(question => {
        rolesRef.get().then(roles => {
            //checks if question exits
            if (question.exists) {
                //creates the variables that refer to the id's of the divs
                var questionText = document.querySelector('#question-text');

                //sets firestore data into input fields values
                if (typeof question.data().Question != 'undefined')
                    questionText.value = question.data().Question;
                    
                if (typeof question.data().Options != 'undefined' && typeof question.data().Answer != 'undefined') {
                    let correctHasSet = false;
                    for (let i = 0; i < question.data().Options.length; i++) {
                        if (i == question.data().Answer) {
                            document.querySelector('#correct-awnser-field').value = question.data().Options[i];
                            correctHasSet = true;
                            i++
                        }

                        let y = (i+1);
                        if (correctHasSet)
                            y--;
                        
                        console.log('#wrong-answer-' + y)
                        document.querySelector('#wrong-answer-' + y).value = question.data().Options[i];
                        
                    }
                }
                
                console.log(question.data().Options[question.data().Answer])

                M.updateTextFields();

                // Get the related question roles
                questionRolesRef = question.data().Related_User_Roles;
                if (typeof questionRolesRef === 'array') {
                    questionRolesRef.forEach(questionRole => {
                        questionRoles.push(questionRole.id);
                    });
                }

                // Load in RoleS
                loadRolesChecklist(roles, questionRoles);

                //when back button is pressed return to questions list
                document.getElementById("terug").addEventListener('click', (e) => {
                    window.location.href = BASE_URL + 'moderator/submittedQuestions';
                });

                
                document.getElementById("goedkeuren").addEventListener('click', (e) => {
                    // Get all the answers from the form
                    const correctAnswer = document.querySelector('#correct-awnser-field').value;
                    const wrongAnswer1 = document.querySelector('#wrong-answer-1').value;
                    const wrongAnswer2 = document.querySelector('#wrong-answer-2').value;
                    const wrongAnswer3 = document.querySelector('#wrong-answer-3').value;
                    let answers = [correctAnswer,wrongAnswer1,wrongAnswer2,wrongAnswer3]
                    answers = shuffleArray(answers);
    
                    //get correct answer index
                    let correctIndex = 0;
                    for (let i = 0; i < answers.length; i++) {
                        if (answers[i] === correctAnswer)
                            correctIndex = i;
                    }

                    relatedRoles = getCheckedUserRoles();

                    console.log('Answers', answers);
                    console.log(relatedRoles);

                    questionRef.set({
                        Question: questionText.value,
                        Likes: 0,
                        Options: answers,
                        Related_User_Roles: relatedRoles,
                        Answer: correctIndex
                    });
                });

            } else {
                    console.log("No such document in Questions collection!");

            }
        })
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

if (typeof parseURLParams(window.location.href) !== 'undefined') {
    console.log(parseURLParams(window.location.href).id[0])
    approvedQuestionForm(parseURLParams(window.location.href).id[0], 'Questions');
}

