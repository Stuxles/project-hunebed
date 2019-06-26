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

//select wich quiz the user wants to make
if($('.quiz1')) {
    $('.quiz1').click(function(event) {
		alert("Made it in");
        //There should be only one result, but better safe than sorry
		let resCount = 0;
		db.collection('Roles').where('Naam', '==', 'Horeca').onSnapshot(snap => {
            snap.forEach(doc =>{
                //Now push the array of document references into the sessionStorage
                window.sessionStorage.setItem("Questions-" + resCount.toString(), getRandomQuestions(doc.ref));
                resCount++;
            });
            window.sessionStorage.setItem("questionNumber", 0);
            window.sessionStorage.setItem("arrayCount", resCount);
	    });
    });
}

var categories = {};
function loadQuestionPage() {
	let count = window.sessionStorage.getItem("arrayCount");
	//Shouldn't fill further than cat1, but make sure that we can handle multiples.
	for(let i = 0; i < count; i++) {
		categories["cat" + (i+1).toString()] = window.sessionStorage.getItem("Questions-" + count.toString());
	}
	nextQuestion(categories.cat1[window.sessionStorage.getItem("questionNumber")].data());
}

function nextQuestion(q) {
	window.sessionStorage.setItem("questionNumber", window.sessionStorage.getItem("questionNumber")+1);
	$(".container").innerHTML = question_template({
		id: q.id,
		Question: q.Question,
		Option1: q.Options[0],
		Option2: q.Options[1],
		Option3: q.Options[2],
		Option4: q.Options[3]
	});
}

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
};
