function generateQuiz(questions) {
    const quizContainer = document.querySelector('#quiz');
    const wrongAnswered = [];
    const correctAnswered = [];

    function showQuestionResult(question, questionContainer) {
        var userAnswer = '';
            
        userAnswer = questionContainer.querySelector('.answer-selected').getAttribute('index');

        console.log(typeof parseInt(userAnswer))
        console.log(typeof question.Answer)
        if (userAnswer == question.Answer) {
            console.log('Correct');
            if (!correctAnswered.includes(question) && !wrongAnswered.includes(question))
                correctAnswered.push(question);

            questionContainer.querySelector('.next-question').classList.remove('disabled');
            $('.answer-right').removeClass('answer-right');
            $('.answer-wrong').removeClass('answer-wrong');
            $('.answer-selected').addClass('answer-right');
        } else {
            console.log('wrong')
            if (!correctAnswered.includes(question) && !wrongAnswered.includes(question)) {
                const answer = {
                    question: question,
                    givenAnswer: document.querySelector('.answer-selected').querySelector('span').innerHTML
                }
                wrongAnswered.push(answer);
            }

            $('.answer-right').removeClass('answer-right');
            $('.answer-wrong').removeClass('answer-wrong');
            $('.answer-selected').addClass('answer-wrong');
        }
    }

    function showNextQuestion(index, max) {
        if (index != max) {
            if (index != 0) {
                document.querySelectorAll('.question').forEach(questionDiv => {
                    questionDiv.classList.add('hidden')
                })
            }
            document.querySelector('#question'+index).classList.remove('hidden');
        } else {
            showResult();
        }
    }

    function showPrevQuestion(index) {
        if (index >= 0) {
            document.querySelectorAll('.question').forEach(questionDiv => {
                questionDiv.classList.add('hidden')
            })

            document.querySelector('#question'+index).classList.remove('hidden');
        }
    }

    function showQuestions(questions, quizContainer) {
        for (var i=0; i < questions.length; i++) {
            quizContainer.innerHTML += question_template('', questions[i].id, questions[i].Question, questions[i].Options, i);
            
        }

        for (var i=0; i < questions.length; i++) {
            const index = i;
            document.querySelector('#submit'+index).addEventListener('click', function() {
                showQuestionResult(questions[index], document.querySelector('#question'+index));
            })

            document.querySelector('#next-question'+index).addEventListener('click', function() {
                showNextQuestion(index+1, questions.length);
            })

            document.querySelector('#prev-question'+index).addEventListener('click', function() {
                showPrevQuestion(index-1);
            })
        }
        
        showNextQuestion(0, questions.length);
    }

    function showResult() {
        wrongAnswered.forEach(answer => {
            const html = `
                <div class="question-result">
                    <h5>${answer.question.Question}</h5>
                    <p class="hb-red-text">Uw antwoord: ${answer.givenAnswer}</p>
                    <p class="hb-green-text">Juiste antwoord: ${answer.question.Options[answer.question.Answer]}</p>
                </div>
            `
            document.querySelector('.wrong-content').innerHTML += html;
        });
        correctAnswered.forEach(answer => {
            const html = `
                <div class="question-result">
                    <h5>${answer.Question}</h5>
                    <p class="hb-green-text">Het antwoord: ${answer.Options[answer.Answer]}</p>
                </div>
            `
            document.querySelector('.correct-content').innerHTML += html;
        })

        document.querySelector('#quiz').style.display = 'none';
        document.querySelector('.results').style.display = 'block';

    }

    showQuestions(questions, quizContainer);
}

const getQuestions = ((categorie, limit = 5) => {
    const questionsRef = db.collection('Questions');
    const categorieRef = db.collection('Roles').doc(categorie);

    categorieRef.get().then(categorie => {
        console.log(categorie)
        document.querySelector('.quiz-title').innerHTML = categorie.data().Naam;
    })

    questionsRef.where('Categories', 'array-contains', categorieRef).get().then(snap => {
        const array = shuffleArray(snap.docs);
        let questions = [];
        for (let i = 0; i < limit && i < array.length; i++) {

            questions.push(array[i].data());
        }

        generateQuiz(questions);

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
    })

    
})

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

//HTML Template for question
let question_template = ((hidden, id, Question, Options, index) => {
  let html = `
  <div id="question${index}" class="question container hidden" ${hidden}>
  <div class="section">
      <div class="container">
          <div class="col s12">
              <div class="card">
                  <div class="card-content center">
                      <span class="card-title">${Question}</span>
                  </div>
              </div>
          </div>`

    for (let i=0; i < Options.length; i++) {
        html += `
        <div class="row">
            <div class="col s12">
                <div index="${i}" id="option${i}" class="card hoverable answer hb-blue">
                    <div class="card-content white-text">
                        <span class="card-title">${Options[i]}</span>
                    </div>
                </div>
            </div>
        </div>
        `
    };

    html += `
            <ul id="quizQuestion"></ul>
            <div class="row center">
                <button id="submit${index}" data-target="modal1" class="btn modal-trigger waves-effect hb-red-bg waves-light">Controleer antwoord
                <i class="material-icons right">check</i>
                </button>            
            </div>
            <div class="row center">
                <button id="prev-question${index}" class="btn waves-effect hb-red-bg waves-light">Vorrige
                <i class="material-icons left">arrow_back</i>
                </button>                
                <button id="next-question${index}" class="next-question btn waves-effect hb-red-bg waves-light disabled">Volgende
                <i class="material-icons right">arrow_forward</i>
                </button>
            </div>
        </div>
      </form>
  </div>
</div>`;
return html;
});

function showQuiz() {
    db.collection('Roles').get().then(snapshot => {
        snapshot.forEach(role => {
            console.log(role);
            console.log(role.data());
            const html = `
            <div class="col s12 m6">
                <a href="${BASE_URL}/quiz/quizQuestion?cat=${role.id}" class="white-text">
                <div class="card medium hoverable hb-blue">
                    <div class="card-content center hb-blue">
                        <span class="card-title white-text">${role.data().Naam}</span>
                    </div>
                    <div class="card-image">
                        <img src="${BASE_URL}/assets/img/${role.data().Naam}.jpg">
                    </div>
                    <div class="card-action center hb-blue">
                    <div class="hb-red btn">Doe de quiz!</div>
                    </div>
                </div>
                </a>
            </div>
            `
            document.querySelector('.categories').innerHTML += html;
        })
    })
}

if (CURRENT_PAGE == '/quiz/quizQuestion') {
    getQuestions(parseURLParams(window.location.href).cat[0]);
}

if (CURRENT_PAGE == '/quiz') {
    showQuiz();
}