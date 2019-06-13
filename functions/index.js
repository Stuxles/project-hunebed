const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.likeQuestion = functions.https.onCall((question, context) => {
    const db = admin.firestore();
    const user = context.auth;
    // Check if a user is logged in
    if (user.uid == null) {
        return {error: "Not logged in"}
    }

    const likes = db.collection('User_Rate_Question').where('User', '==', user.uid.toString()).where('Question', '==', question.id.toString());
    likes.get().then(snapshot => {
        if (snapshot.docs.length == 0){
            db.collection('User_Rate_Question').add({
                User: user.uid.toString(),
                Question: question.id.toString(),
                Like: true
            })
            return {message: "Succes!"};
        } else if (snapshot.docs.length == 1) {
            snapshot.docs[0].ref.update({
                Like: true
            })
            return {message: "Succes!"};
        }
    }).catch(err => {
        return err
    })


    return;
})