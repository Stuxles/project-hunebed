  //select answer
  jQuery(document).ready(function() {
    jQuery('.answer').click(function(event) {
        //remove all pre-existing active classes
        jQuery('.answer-selected').removeClass('answer-selected');

        //add the active class to the link we clicked
        jQuery(this).addClass('answer-selected');
        jQuery(this).removeClass('answer');
        jQuery('.answer').addClass('answer');

        //Load the content
        //e.g.
        //load the page that the link was pointing to
        //$('#content').load($(this).find(a).attr('href'));

        event.preventDefault();
    });
});

//select wich quiz the user wants to make
document.querySelector('.quiz1').addEventListener('click', () => {
  const getRandomQuestion = functions.httpsCallable('getRandomQuestion');
  getRandomQuestion().then(result => {
      document.getElementById
  })
});

// //Initialize Firebase
// admin.initializeApp(functions.config().firebase);

// //Number of Questions. We could have evaluated the count of questions, but thats for a future
// //enhancement
// const countQuestions = 10

// //HTML Template for question
// let question_template = ({
//   id,
//   Question,
//   Option1,
//   Option2,
//   Option3,
//   Option4
// }) => {
//   return `
//   <div class="container content">
//   <div class="section">
//       <div class="container">
//           <div class="row">
//               <form class="col s12">
//                   <h4 class="center">Quiz Algemeen</h4>
//                   <div class="divider"></div>
//                   <div class="row center">
//                       <ul class="pagination center question-pagination">
//                       </ul>
//                       <div class="questionListContainer">
//                       </div>
//                   </div>
//           </div>

//           <div class="col s12">
//               <div class="card">
//                   <div class="card-content center">
//                       <span class="card-title">${Question}</span>
//                       <img class="responsive-img" src="<?= base_url('assets/img/bg1.jpg') ?>">
//                   </div>
//               </div>
//           </div>
//           <form action="#">
//               <div class="row">
//                   <div class="col s12">
//                       <div class="card hoverable answer hb-blue">
//                           <div class="card-content white-text">
//                               <span class="card-title">${Option1}</span>
//                           </div>
//                       </div>
//                   </div>
//               </div>
//               <div class="row">
//                   <div class="col s12">
//                       <div class="card hoverable answer hb-blue" onclick="">
//                           <div class="card-content white-text">
//                               <span class="card-title">${Option2}</span>
//                           </div>
//                       </div>
//                   </div>
//               </div>
//               <div class="row">
//                   <div class="col s12">
//                       <div class="card hoverable answer hb-blue">
//                           <div class="card-content white-text">
//                               <span class="card-title">${Option3}</span>
//                           </div>
//                       </div>
//                   </div>
//               </div>
//               <div class="row">
//                   <div class="col s12">
//                       <div class="card hoverable answer hb-blue">
//                           <div class="card-content white-text">
//                               <span class="card-title">${Option4}</span>
//                           </div>
//                       </div>
//                   </div>
//               </div>
//           </form>
//           <ul id="quizQuestion"></ul>
//           <div class="row center">
//               <p>Voor meer informatie over deze vraag:</p>
//               <a href="<?= base_url('moderator/moderator') ?>" class="btn waves-effect hb-red-bg waves-light" id="terug"><i class="material-icons left">question_answer</i>klik hier</a>
//           </div>
//           <div class="row center">
//               <a href="<?= base_url('moderator/moderator') ?>" class="btn waves-effect hb-red-bg waves-light" id="terug"><i class="material-icons left">arrow_back</i>Terug</a>
//               <button data-target="modal1" class="btn modal-trigger waves-effect hb-red-bg waves-light">Controleer antwoord
//                   <i class="material-icons right">check</i>
//               </button>
//           </div>
//       </div>
//       </form>
//   </div>
// </div>`;
// }

// let correct_answer_template = () => {
//   return `
//   <div class="container content">
//   <div class="section">
//       <div class="container">
//           <div class="row">
//               <form class="col s12">
//                   <h4 class="center">Quiz Algemeen</h4>
//                   <div class="divider"></div>
//                   <div class="row center">
//                       <ul class="pagination center question-pagination">
//                       </ul>
//                       <div class="questionListContainer">
//                       </div>
//                   </div>
//           </div>

//           <div class="col s12">
//               <div class="card">
//                   <div class="card-content center">
//                       <span class="card-title">${Question}</span>
//                       <img class="responsive-img" src="<?= base_url('assets/img/bg1.jpg') ?>">
//                   </div>
//               </div>
//           </div>
//           <form action="#">
//               <div class="row">
//                   <div class="col s12">
//                       <div class="card hoverable answer-right">
//                           <div class="card-content white-text">
//                               <span class="card-title">${Option1}</span>
//                           </div>
//                       </div>
//                   </div>
//               </div>
//               <div class="row">
//                   <div class="col s12">
//                       <div class="card hoverable answer hb-blue" onclick="">
//                           <div class="card-content white-text">
//                               <span class="card-title">${Option2}</span>
//                           </div>
//                       </div>
//                   </div>
//               </div>
//               <div class="row">
//                   <div class="col s12">
//                       <div class="card hoverable answer hb-blue">
//                           <div class="card-content white-text">
//                               <span class="card-title">${Option3}</span>
//                           </div>
//                       </div>
//                   </div>
//               </div>
//               <div class="row">
//                   <div class="col s12">
//                       <div class="card hoverable answer hb-blue">
//                           <div class="card-content white-text">
//                               <span class="card-title">${Option4}</span>
//                           </div>
//                       </div>
//                   </div>
//               </div>
//           </form>
//           <ul id="quizQuestion"></ul>
//           <div class="row center">
//               <p>Voor meer informatie over deze vraag:</p>
//               <a href="<?= base_url('moderator/moderator') ?>" class="btn waves-effect hb-red-bg waves-light" id="terug"><i class="material-icons left">question_answer</i>klik hier</a>
//           </div>
//           <div class="row center">
//               <a href="<?= base_url('moderator/moderator') ?>" class="btn waves-effect hb-red-bg waves-light" id="terug"><i class="material-icons left">arrow_back</i>Terug</a>
//               <button data-target="modal1" class="btn modal-trigger waves-effect hb-red-bg waves-light">Controleer antwoord
//                   <i class="material-icons right">check</i>
//               </button>
//           </div>
//       </div>
//       </form>
//   </div>
// </div>`;
// }

// //HTML Template for wrong answer
// let wrong_answer_template = ({
//   correct_answer
// }) => {
//   return `
//   <div class="container content">
//   <div class="section">
//       <div class="container">
//           <div class="row">
//               <form class="col s12">
//                   <h4 class="center">Quiz Algemeen</h4>
//                   <div class="divider"></div>
//                   <div class="row center">
//                       <ul class="pagination center question-pagination">
//                       </ul>
//                       <div class="questionListContainer">
//                       </div>
//                   </div>
//           </div>

//           <div class="col s12">
//               <div class="card">
//                   <div class="card-content center">
//                       <span class="card-title">${Question}</span>
//                       <img class="responsive-img" src="<?= base_url('assets/img/bg1.jpg') ?>">
//                   </div>
//               </div>
//           </div>
//           <form action="#">
//               <div class="row">
//                   <div class="col s12">
//                       <div class="card hoverable answer-wrong">
//                           <div class="card-content white-text">
//                               <span class="card-title">${Option1}</span>
//                           </div>
//                       </div>
//                   </div>
//               </div>
//               <div class="row">
//                   <div class="col s12">
//                       <div class="card hoverable answer hb-blue" onclick="">
//                           <div class="card-content white-text">
//                               <span class="card-title">${Option2}</span>
//                           </div>
//                       </div>
//                   </div>
//               </div>
//               <div class="row">
//                   <div class="col s12">
//                       <div class="card hoverable answer hb-blue">
//                           <div class="card-content white-text">
//                               <span class="card-title">${Option3}</span>
//                           </div>
//                       </div>
//                   </div>
//               </div>
//               <div class="row">
//                   <div class="col s12">
//                       <div class="card hoverable answer hb-blue">
//                           <div class="card-content white-text">
//                               <span class="card-title">${Option4}</span>
//                           </div>
//                       </div>
//                   </div>
//               </div>
//           </form>
//           <ul id="quizQuestion"></ul>
//           <div class="row center">
//               <p>Voor meer informatie over deze vraag:</p>
//               <a href="<?= base_url('moderator/moderator') ?>" class="btn waves-effect hb-red-bg waves-light" id="terug"><i class="material-icons left">question_answer</i>klik hier</a>
//           </div>
//           <div class="row center">
//               <a href="<?= base_url('moderator/moderator') ?>" class="btn waves-effect hb-red-bg waves-light" id="terug"><i class="material-icons left">arrow_back</i>Terug</a>
//               <button data-target="modal1" class="btn modal-trigger waves-effect hb-red-bg waves-light">Controleer antwoord
//                   <i class="material-icons right">check</i>
//               </button>
//           </div>
//       </div>
//       </form>
//   </div>
// </div>`;
// }

// //Function to get a random question from the Firestore questions collection
// exports.getRandomQuestion = (req, res) => {

//   //Get a random id
//   const id = Math.floor(Math.random() * (countQuestions) + 1)
//   var questionRef = db.collection('Questions').doc(id.toString());
//   var getDoc = questionRef.get()
//       .then(doc => {
//           if (!doc.exists) {
//               throw new Error("Deze vraag bestaat niet");
//           } else {
//               console.log('Document data:', doc.data());
//               res.status(200).send(question_template({
//                   id: doc.id,
//                   title: doc.get('Question'),
//                   option1: doc.get('Option1'),
//                   option2: doc.get('Option2'),
//                   option3: doc.get('Option3'),
//                   option4: doc.get('Option4')
//               }));
//           }
//       })
//       .catch(err => {
//           console.log('Error getting document', err);
//           res.status(400).send('Error');
//       });
// }

// //Function to check the answer submitted
// exports.checkanswer = (req, res) => {

//   //Extract out the id and the answer
//   let id = req.body.id;
//   let Answer = req.body.Answer;

//   var questionRef = db.collection('Questions').doc(id.toString());
//   var getDoc = questionRef.get()
//       .then(doc => {
//           if (!doc.exists) {
//               throw new Error("No such document");
//           } else {
//               if (doc.get('Answer') === Answer) {
//                   res.status(200).send(correct_answer_template());
//               } else {
//                   res.status(200).send(wrong_answer_template({
//                       correct_answer: getAnswer(doc, doc.get('Answer'))
//                   }));
//               }
//           }
//       })
//       .catch(err => {
//           console.log('Error getting document', err);
//           res.status(400).send('Error');
//       });
// }

// //Retrieve the answer from the Question DocumentRef based on the option provided
// function getAnswer(doc, answer) {
//   let answer_text = "";
//   switch (answer) {
//       case "1":
//           answer_text = doc.get('Option1');
//           break;
//       case "2":
//           answer_text = doc.get('Option2');
//           break;
//       case "3":
//           answer_text = doc.get('Option3');
//           break;
//       case "4":
//           answer_text = doc.get('Option4');
//           break;
//   }
//   return answer_text;
// }
