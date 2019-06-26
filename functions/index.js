const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();

/*
Like or Dislike a question
@param question.id The question id
@param question.rate "like" for like "dislike" for a dislike
*/
exports.likeQuestion = functions.https.onCall((question, context) => {
    const user = context.auth;  // Set user
    let setLike = true; // Initial setLike to like a question
    let message = 'success';

    // Check if quesiton is disliked
    if (question.rate === 'dislike')
        setLike = false;

    // Check if a user is logged in
    if (typeof user === `undefined`)
        return {error: "Error: Not logged in!"};

    // Get like or dislike of the user for the question if there is one, else create one
    const questionLikes = db.collection('User_Rate_Question').where('User', '==', user.uid).where('Question', '==', question.id);
    return questionLikes.get().then(snapshot => {
        // If no like or dislike exist for this quesiton of the user then create one
        if (snapshot.docs.length == 0){
            return db.collection('User_Rate_Question').add({
                User: user.uid.toString(),
                Question: question.id.toString(),
                Like: setLike
            }).then(() => {
                // Add likes or dislikes to the question depending if question is liked or disliked
                if (setLike) {
                    return db.collection('Questions').doc(question.id).update({
                        Likes: admin.firestore.FieldValue.increment(1)
                    })
                } else if (!setLike) {
                    return db.collection('Questions').doc(question.id).update({
                        Dislikes: admin.firestore.FieldValue.increment(1)
                    })
                }
            })
        } else if (snapshot.docs.length == 1) {
            // If the the user already liked or disliked the quesiton update the choice if necessary
            return snapshot.docs[0].ref.get().then(doc => {
                if (doc.data().Like != setLike) {
                    snapshot.docs[0].ref.update({
                        Like: setLike
                    }).then(() => {
                        // Set the new like or dislike to the quesiton
                        if (setLike) {
                            return db.collection('Questions').doc(question.id).update({
                                Likes: admin.firestore.FieldValue.increment(1),
                                Dislikes: admin.firestore.FieldValue.increment(-1)
                            })
                        } else if (!setLike) {
                            return db.collection('Questions').doc(question.id).update({
                                Likes: admin.firestore.FieldValue.increment(-1),
                                Dislikes: admin.firestore.FieldValue.increment(1)
                            })
                        }
                    })
                } else {
                    if (setLike) {
                        return message = 'already liked';
                    } else {
                        return message = 'already disliked';
                    }
                }
            })
        }
    }).then(() => {
        // Message to return when successful
        return { msg: message };
    }).catch(err => {
        // Return error message wheb fail
        return err;
    })
})

exports.addAdminRole = functions.https.onCall((data, context) => {
  // check request is made by an admin
  if ( context.auth.token.admin !== true ) {
    return { error: 'Only admins can add other admins' }
  }
  // get user and add admin custom claim
  return admin.auth().getUserByEmail(data.email).then(user => {
    return admin.auth().setCustomUserClaims(user.uid, {
      admin: true
    })
  }).then(() => {
    return {
      message: `Succes! ${data.email} is nu een admin!`
    }
  }).catch(err => {
    return err;
  });
});


exports.createUser = functions.https.onCall((data, context) => {
    const userData = data;
    return admin.auth().createUser({
        email: data.email,
        password: data.password
    })
        .then(user => {
            return db.collection("Users").doc(user.uid).set({
                FirstName: userData.firstName,
                LastName: userData.lastName,
                Email: userData.email
            });
    }).then(user => {
        return {
            response: user
        }
    })
        .catch(error => {
        throw new functions.https.HttpsError(error)
    });
});
//HTML Template for question
let question_template = ({
  id,
  Question,
  Option1,
  Option2,
  Option3,
  Option4
}) => {
  return `
  <div class="container content">
  <div class="section">
      <div class="container">
          <div class="row">
              <form name="quizform" action="/checkanswer" method="POST">
                  <h4 class="center">Quiz Algemeen</h4>
                  <div class="divider"></div>
                  <div class="row center">
                      <ul class="pagination center question-pagination">
                      </ul>
                      <div class="questionListContainer">
                      </div>
                  </div>
          </div>

          <div class="col s12">
              <div class="card">
                  <div class="card-content center">
                      <span class="card-title">${Question}</span>
                      <img class="responsive-img" src="<?= base_url('assets/img/bg1.jpg') ?>">
                  </div>
              </div>
          </div>
              <div class="row">
                  <div class="col s12">
                      <div class="card hoverable answer hb-blue">
                          <div class="card-content white-text">
                              <span class="card-title">${Option1}</span>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col s12">
                      <div class="card hoverable answer hb-blue" onclick="">
                          <div class="card-content white-text">
                              <span class="card-title">${Option2}</span>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col s12">
                      <div class="card hoverable answer hb-blue">
                          <div class="card-content white-text">
                              <span class="card-title">${Option3}</span>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col s12">
                      <div class="card hoverable answer hb-blue">
                          <div class="card-content white-text">
                              <span class="card-title">${Option4}</span>
                          </div>
                      </div>
                  </div>
              </div>
          <ul id="quizQuestion"></ul>
          <div class="row center">
              <p>Voor meer informatie over deze vraag:</p>
              <a href="<?= base_url('moderator/moderator') ?>" class="btn waves-effect hb-red-bg waves-light" id="terug"><i class="material-icons left">question_answer</i>klik hier</a>
          </div>
          <div class="row center">
              <a href="<?= base_url('moderator/moderator') ?>" class="btn waves-effect hb-red-bg waves-light" id="terug"><i class="material-icons left">arrow_back</i>Terug</a>
              <button data-target="modal1" class="btn modal-trigger waves-effect hb-red-bg waves-light">Controleer antwoord
                  <i class="material-icons right">check</i>
              </button>
          </div>
      </div>
      </form>
  </div>
</div>`;
}

let correct_answer_template = () => {
  return `
  <div class="container content">
  <div class="section">
      <div class="container">
          <div class="row">
              <form class="col s12">
                  <h4 class="center">Quiz Algemeen</h4>
                  <div class="divider"></div>
                  <div class="row center">
                      <ul class="pagination center question-pagination">
                      </ul>
                      <div class="questionListContainer">
                      </div>
                  </div>
          </div>

          <div class="col s12">
              <div class="card">
                  <div class="card-content center">
                      <span class="card-title">${Question}</span>
                      <img class="responsive-img" src="<?= base_url('assets/img/bg1.jpg') ?>">
                  </div>
              </div>
          </div>
          <form action="#">
              <div class="row">
                  <div class="col s12">
                      <div class="card hoverable answer-right">
                          <div class="card-content white-text">
                              <span class="card-title">Je hebt de vraag goed beantwoord!</span>
                          </div>
                      </div>
                  </div>
              </div>
          </form>
          <ul id="quizQuestion"></ul>
          <div class="row center">
              <p>Voor meer informatie over deze vraag:</p>
              <a href="<?= base_url('moderator/moderator') ?>" class="btn waves-effect hb-red-bg waves-light" id="terug"><i class="material-icons left">question_answer</i>klik hier</a>
          </div>
          <div class="row center">
          <input name="submit" type="submit" class="btn waves-effect hb-red-bg waves-light"><i class="material-icons left">arrow_back</i>Terug</input>
          </div>
      </div>
      </form>
  </div>
</div>`;
}

//HTML Template for wrong answer
let wrong_answer_template = ({
  correct_answer
}) => {
  return `
  <div class="section">
      <div class="container">
          <div class="row">
              <form class="col s12">
                  <h4 class="center">Quiz Algemeen</h4>
                  <div class="divider"></div>
                  <div class="row center">
                      <ul class="pagination center question-pagination">
                      </ul>
                      <div class="questionListContainer">
                      </div>
                  </div>
          </div>

          <div class="col s12">
              <div class="card">
                  <div class="card-content center">
                      <span class="card-title">${Question}</span>
                      <img class="responsive-img" src="<?= base_url('assets/img/bg1.jpg') ?>">
                  </div>
              </div>
          </div>
          <form action="#">
              <div class="row">
                  <div class="col s12">
                      <div class="card hoverable answer-wrong">
                          <div class="card-content white-text">
                              <span class="card-title">${correct_answer}</span>
                          </div>
                      </div>
                  </div>
              </div>
          </form>
          <ul id="quizQuestion"></ul>
          <div class="row center">
              <p>Voor meer informatie over deze vraag:</p>
              <a href="<?= base_url('moderator/moderator') ?>" class="btn waves-effect hb-red-bg waves-light" id="terug"><i class="material-icons left">question_answer</i>klik hier</a>
          </div>
          <div class="row center">
              <a href="<?= base_url('/getRandomQuestion') ?>" class="btn waves-effect hb-red-bg waves-light" id="terug"><i class="material-icons right">arrow_forward</i>Volgende</a>
          </div>
      </div>
      </form>
  </div>`;
};

//Function to check the answer submitted
exports.checkanswer = functions.https.onCall((req, res) => {

  //Extract out the id and the answer
  let id = req.body.id;
  let Answer = req.body.Answer;

  var questionRef = db.collection('Questions').doc(id.toString());
  var getDoc = questionRef.get()
      .then(doc => {
          if (!doc.exists) {
              throw new Error("No such document");
          } else {
              if (doc.get('Answer') === Answer) {
                  res.status(200).send(correct_answer_template());
              } else {
                  res.status(200).send(wrong_answer_template({
                      correct_answer: getAnswer(doc, doc.get('Answer'))
                  }));
              }
          }
      })
      .catch(err => {
          console.log('Error getting document', err);
          res.status(400).send('Error');
      });
})

//Retrieve the answer from the Question DocumentRef based on the option provided
function getAnswer(doc, answer) {
  let answer_text = "";
  switch (answer) {
      case "1":
          answer_text = doc.get('Option1');
          break;
      case "2":
          answer_text = doc.get('Option2');
          break;
      case "3":
          answer_text = doc.get('Option3');
          break;
      case "4":
          answer_text = doc.get('Option4');
          break;
  }
  return answer_text;
}
