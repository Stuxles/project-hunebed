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
      message: `Success! ${data.email} has been made an admin.`
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
                firstname: userData.firstName,
                lastname: userData.lastName,
                email: userData.email
            });
    }).then(user => {
        return {
            respone: user
        }
    })
        .catch(error => {
        throw new functions.https.HttpsError(error)
    });
});