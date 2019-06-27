//select answer
$(function() {
    $('.answer').click(function(event) {
        //remove all pre-existing active classes
        $('.answer-selected').removeClass('answer-selected');

        //add the active class to the link we clicked
        $(this).addClass('answer-selected');
        $(this).removeClass('answer');
        $('.answer').addClass('answer');

        event.preventDefault();
    });
});

let questions = [];
let currentQuestion = 0;
async function loadQuestionPage() {
	      //There should be only one result, but better safe than sorry
			let category = parseURLParams().cat[0];
			console.log(category);
			await db.collection('Roles').where('Naam', '==', category).onSnapshot(snap => {
            snap.docs.forEach(doc =>{
                //Now push the array of document references into the localStorage
								console.log(doc);
								console.log(doc.ref);
								getRandomQuestions(doc.ref);
            });
	  });
				nextQuestion();
}

function nextQuestion() {
	let q = questions[currentQuestion];
		$(".container").innerHTML = question_template({
			Question: q.Question,
			Option1: q.Options[0],
			Option2: q.Options[1],
			Option3: q.Options[2],
			Option4: q.Options[3]
		});
	currentQuestion++;
}

//HTML Template for question
let question_template = ({
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
};
