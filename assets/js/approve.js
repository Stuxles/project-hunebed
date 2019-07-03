/*
Returns the categories which are checked in the checklist
*/
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

/*
Shuffles an array
*/
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/*
Load the form to edit and aprove a question
*/
function approvedQuestionForm(questionID, collection){
    const questionRef = db.collection(collection).doc(questionID);
    const rolesRef = db.collection('Roles');
    let questionRoles = [];
    
    questionRef.get().then(question => {
        rolesRef.get().then(roles => {
            //checks if question exits
            if (question.exists) {
                //creates the variables that refer to the id's of the divs
                const questionText = document.querySelector('#question-text');

                //sets firestore data into input fields values
                if (typeof question.data().Question != 'undefined')
                    questionText.value = question.data().Question;
                    
                if (typeof question.data().Options != 'undefined' && typeof question.data().Answer != 'undefined') {
                    let correctHasSet = false;
                    for (let i = 0; i < question.data().Options.length; i++) {
                        if (i == question.data().Answer) {
                            document.querySelector('#correct-awnser-field').value = question.data().Options[i];
                            correctHasSet = true;
                            if (i != 3)
                                i++
                        }

                        let y = (i+1);
                        if (correctHasSet)
                            y--;
                        
                        console.log(document.querySelector('#wrong-answer-' + y))
                        console.log(question.data().Options.length)
                        document.querySelector('#wrong-answer-' + y).value = question.data().Options[i];
                        
                    }
                }
                M.updateTextFields();

                // Get the related question roles
                questionRolesRef = question.data().Categories;
                if (typeof questionRolesRef !== 'undefined') {
                    questionRolesRef.forEach(questionRole => {
                        questionRoles.push(questionRole.id);
                        console.log(questionRole)
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

                    if (collection == 'Questions') {
                        questionRef.set({
                            Question: questionText.value,
                            Options: answers,
                            Categories: relatedRoles,
                            Answer: correctIndex
                        });
                    } else if (collection == 'Submitted_Questions') {
                        db.collection('Questions').add({
                            Question: questionText.value,
                            Options: answers,
                            Categories: relatedRoles,
                            Answer: correctIndex
                        })
                        questionRef.delete();
                    }
                });

            } else {
                    console.log("No such document in Questions collection!");

            }
        })
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

/*
Add a question to questions. This is only for admins
*/
function addAdminQuestion() {
    const questionText = document.querySelector('#question-text');
    // Get all the answers from the form
    const correctAnswer = document.querySelector('#correct-awnser-field').value;
    const wrongAnswer1 = document.querySelector('#wrong-answer-1').value;
    const wrongAnswer2 = document.querySelector('#wrong-answer-2').value;
    const wrongAnswer3 = document.querySelector('#wrong-answer-3').value;
    let answers = [correctAnswer,wrongAnswer1,wrongAnswer2,wrongAnswer3]
    answers = shuffleArray(answers);
    
    const relatedRoles = getCheckedUserRoles();

    //get correct answer index
    let correctIndex = 0;
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === correctAnswer)
            correctIndex = i;
    }

    // Add the question to the database
    db.collection('Questions').add({
        Question: questionText.value,
        Options: answers,
        Categories: relatedRoles,
        Answer: correctIndex
    }).then(() => {
        // Give feedback that the question has been added
        $('#add-success-modal').modal({
            onCloseEnd: function() {
                window.location.href = BASE_URL + '/moderator';
            }
        })
        $('#add-success-modal').modal('open');
    })

}

/*
Delete a question from a collection
*/
function deleteQuestion(quesitonID, collection) {
    const questionRef = db.collection(collection).doc(quesitonID);
    questionRef.delete().then(() => {
        console.log('Succesfully delted the question');
            $('#delete-success-modal').modal({
                onCloseEnd: function() {
                    window.location.href = BASE_URL + 'moderator/allQuestions';
                }
            })
            $('#delete-success-modal').modal('open');
    }).catch(err => {
        console.log('Error: ', err.message);
    })
}

// Load approve / edit form
if (CURRENT_PAGE == '/moderator/removeApproveQuestion') {
    if (typeof parseURLParams(window.location.href) !== 'undefined') {
        const id = parseURLParams(window.location.href).id[0];
        const collection = parseURLParams(window.location.href).collection[0];
        approvedQuestionForm(id, collection);
    }
}

// Add event listender to delete button
if (document.querySelector('#delete-question-btn') !== null) {
    document.querySelector('#delete-question-btn').addEventListener('click', () => {
        const id = parseURLParams(window.location.href).id[0];
        const collection = parseURLParams(window.location.href).collection[0];
        deleteQuestion(id, collection);
    })
}

// Add event lister for adding a question
if (CURRENT_PAGE == '/moderator/addQuestion') {
    db.collection('Roles').get().then(roles => {
        loadRolesChecklist(roles);
        document.querySelector('#add-question-btn').addEventListener('click', () => {
            addAdminQuestion();
        })
    })
}