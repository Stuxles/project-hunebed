// For the modal boxes
$(document).ready(function(){
  $('.modal').modal();
});

// To show the amount of characters in textareas
$(document).ready(function() {
  $('input#input_text, textarea#textarea1, textarea#textarea2, textarea#textarea3, textarea#textarea4, textarea#textarea5, textarea#textarea6').characterCounter();
});

// For the floating action button
$('.fixed-action-btn').floatingActionButton({
  direction: 'up',
  hoverEnabled: false
});

// For the images
$(document).ready(function() {
  $('.materialboxed').materialbox();
});

// Load questions form database
db.collection('Questions').get().then(snapshot => {
  showQuestions(snapshot);
})

// Show questions on questions page
const showQuestions = (data => {
    let html = '';
    data.forEach(doc => {
      const question = doc.data();
      const item = `
        <div class="card question-card hoverable">
          <div class="card-content">
            <p>${question.Question}</p>
          </div>
          <div class="card-action">
            <a class="hb-yellow-text" href="/test">Lees meer</a>
          </div>
        </div>
      `;
      html += item;
    })
    document.querySelector('.questionListContainer').innerHTML = html;
})


