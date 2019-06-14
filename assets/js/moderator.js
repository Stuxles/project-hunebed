var user;
const userList = (window.location.pathname.indexOf("/moderator/") >= 0 && window.location.pathname.slice(-1) == "/") ? document.querySelector('#usertable') : document.createElement("ul");

// create element & render user
function renderUser(doc) {

    let tr = document.createElement('tr');
    let FirstName = document.createElement('td');
    let LastName = document.createElement('td');
    let Email = document.createElement('td');
    let Roles = document.createElement('td');
    let Edit = document.createElement('td');
    let Button = document.createElement('a');
    let Icon = document.createElement('i');

    tr.setAttribute('data-id', doc.id);
    FirstName.textContent = doc.data().FirstName;
    LastName.textContent = doc.data().LastName;
    Email.textContent = doc.data().Email;
    // need id and independently query the role
    console.log(doc.data().Roles);
    Roles.textContent = doc.data().Roles;
    Button.className = 'waves-effect waves-light hb-red-bg btn-floating';
    Icon.className = 'material-icons left';
    Icon.textContent = 'edit';

    tr.appendChild(FirstName);
    tr.appendChild(LastName);
    tr.appendChild(Email);
    tr.appendChild(Roles);
    tr.appendChild(Edit);
    Edit.appendChild(Button);
    Button.appendChild(Icon);

    userList.appendChild(tr);

}

function deleteUser(doc){

}

// getting data if we're on a moderator page
if(window.location.pathname.indexOf("/moderator/") >= 0 && window.location.pathname.slice(-1) == "/") {
	db.collection('Users').get().then(snapshot => {
	    snapshot.docs.forEach(doc => {
	        renderUser(doc);
	    });
	});
}
