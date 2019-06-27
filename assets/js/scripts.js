// For the modal boxes
$(document).ready(function () {
  $('.modal').modal();
});

//For the tooltips
$(document).ready(function () {
  $('.tooltipped').tooltip();
});

// To show the amount of characters in textareas
$(document).ready(function () {
  $('input#input_text, textarea#textarea1, textarea#textarea2, textarea#textarea3, textarea#textarea4, textarea#textarea5, textarea#textarea6').characterCounter();
});

// For the images
$(document).ready(function () {
  $('.materialboxed').materialbox();
});

// For select
$(document).ready(function () {
  $('select').formSelect();
});

// For the sidenav
$(document).ready(function () {
  $('.sidenav').sidenav();
});

/*
Parses get request for Javascript
*/
function parseURLParams(url) {
  var queryStart = url.indexOf("?") + 1,
    queryEnd = url.indexOf("#") + 1 || url.length + 1,
    query = url.slice(queryStart, queryEnd - 1),
    pairs = query.replace(/\+/g, " ").split("&"),
    parms = {}, i, n, v, nv;

  if (query === url || query === "") return;

  for (i = 0; i < pairs.length; i++) {
    nv = pairs[i].split("=", 2);
    n = decodeURIComponent(nv[0]);
    v = decodeURIComponent(nv[1]);

    if (!parms.hasOwnProperty(n)) parms[n] = [];
    parms[n].push(nv.length === 2 ? v : null);
  }
  return parms;
}

/*
Loads all the roles in a checklist.
@param roles all the roles that needs to be loaded.
@param hasRoles the roles that needs to be checked in an array.
*/
function loadRolesChecklist(roles, hasRoles = []) {
  if (typeof roles == 'undefined') {
    throw 'No roles or has roles has been given as parameter (loadRolesChecklist)'
  }
  let html = ``;

  roles.forEach(role => {
    let checked = "";
    if (hasRoles.includes(role.id)) {
      checked = 'checked="checked"';
    }
    html += `
    <p>
      <label>
        <input type="checkbox" ${checked} class="roleCheckbox" id="${role._key.toString()}" />
        <span>${role.data().Naam}</span>
      </label>
    </p>
  `;
  });

  document.querySelector('.roles-checklist').innerHTML = html;
}