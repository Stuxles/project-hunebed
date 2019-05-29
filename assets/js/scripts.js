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
  loadQuestions(snapshot);
})

let currentTab = 1;
let maxTab = 1;

const loadQuestions = (data => {
  let html = '';
  let tabHTML = '<li class="prev-tab disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>';
  let tempArray;
  const chunk = 2;
  let tabAmount = 1;
  let array = [];
  data.forEach(doc => {
    array.push(doc);
  })

  console.log(typeof array);
  console.log(array.length) ;
  for(i=0; i < array.length; i+= chunk) {
    console.log("Splitting array");
    let tabContentHTML = `<div id="content${tabAmount}" class="tabcontent">`;
    tabHTML += `<li id="tablink${tabAmount}" class="tablink waves-effect"><a href="#!">${tabAmount}</a></li>`
    tabAmount++;
    tempArray = array.slice(i, i+chunk);
    tempArray.forEach(doc => {
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
      tabContentHTML += item;
    })
    tabContentHTML += `</div>`
    html += tabContentHTML;
  }
  tabHTML += '<li class="next-tab waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>';
  document.querySelector('.question-pagination').innerHTML = tabHTML;
  document.querySelector('.questionListContainer').innerHTML = html;
  maxTab = tabAmount-1;

  for(i = 1; i < tabAmount; i++) {
    const x = i;
    document.querySelector(`#tablink${x}`).addEventListener('click', () => {
      showQuestions(x);
    })
  }

  document.querySelector('.next-tab').addEventListener('click', () => {
    showQuestions(currentTab+1);
    
  });

  document.querySelector('.prev-tab').addEventListener('click', () => {
    showQuestions(currentTab-1);
  });

  showQuestions(1);
})

const showQuestions = (tab => {
  if(tab > maxTab || tab < 1){
    return
  }
  if(tab == 1){
    document.querySelector('.prev-tab').className.replace("waves-effect", "disabled");
  } else if(tab == maxTab){
    document.querySelector('.next-tab').className = "next-tab disabled";
  } else {
    document.querySelector('.prev-tab').className.replace("disabled", "waves-effect");
    document.querySelector('.next-tab').className.replace("disabled", "waves-effect");
  }
  const tabcontent = document.querySelectorAll('.tabcontent');
  tabcontent.forEach(tabcont => tabcont.style.display = 'none');
  const tablinks = document.querySelectorAll('.tablink');
  tablinks.forEach(tablink => tablink.className = tablink.className.replace(" active", ""));
  console.log(tab);
  document.querySelector(`#content${tab}`).style.display = 'block';
  document.querySelector(`#tablink${tab}`).className += " active";
  currentTab = tab;
})