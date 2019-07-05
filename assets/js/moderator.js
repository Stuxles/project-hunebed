const userList = document.querySelector('#usertable');
var userRef = db.collection('Users');
var pathArray = window.location.pathname.split( '/' );

// function to delete user
function deleteUserFunction(funcUid) {
    var deleteUser = firebase.functions().httpsCallable('deleteUser');
    deleteUser({uid: funcUid}).then(function(result) {
        M.toast({html: 'Gebruiker wordt binnen enkele minuten verwijderd'})
    });
}

// create element & render user
function renderUser(doc) {

    let tr = document.createElement('tr');
    let FirstName = document.createElement('td');
    let LastName = document.createElement('td');
    let Email = document.createElement('td');
    //let Roles = document.createElement('td');
    let Edit = document.createElement('td');
    let Button = document.createElement('a');
    let Icon = document.createElement('i');

    tr.setAttribute('data-id', doc.id);
    FirstName.textContent = doc.data().FirstName;
    LastName.textContent = doc.data().LastName;
    Email.textContent = doc.data().Email;


    //!!!weergeeft de rollen (want rol is een reference in de user collection) en wil geen undefined (niet bestaande/onleesbare) rollen in Users lezen!!!!!
    // niet volledig werkend
    // if (typeof doc.data().Roles !== 'undefined') {
    //     doc.data().Roles.forEach(ref => {
    //         ref.get().then(role => {

    //         //stringRol = role.data().Naam;
    //         Roles.textContent = role.data().Naam;
    //         });

    //     });
    // }


    Button.className = 'waves-effect waves-light hb-red btn-floating';
    Icon.className = 'material-icons left';
    Icon.textContent = 'delete_forever';
    // Button.href = pathArray[3].replace("showUsers", "").concat("editUser");
    //set attribute on Button variable with idd as name and doc.id as value
    Button.setAttribute('idd', doc.id);
    //buttons sends id to editUser page to retrieve user
    Button.addEventListener('click', (e) => {
        // let id = e.target.parentElement.getAttribute('idd');
        // window.sessionStorage.setItem('idd', doc.id);
       deleteUserFunction(doc.id);
    });

    tr.appendChild(FirstName);
    tr.appendChild(LastName);
    tr.appendChild(Email);
    //tr.appendChild(Roles);
    tr.appendChild(Edit);
    Edit.appendChild(Button);
    Button.appendChild(Icon);

    userList.appendChild(tr);

}

// getting data if we're on a showUsers page
if(CURRENT_PAGE == '/moderator/showUsers') {
userRef.get().then(snapshot => {
	    snapshot.docs.forEach(doc => {
	        renderUser(doc);
	    });
	});
}

function updateUser() {
	let userRef = db.collection("Users").doc(firebase.auth().currentUser.uid.toString());
	userRef.get().then(function(doc){
		let usr = { };
		if(doc.exists){
			if(document.getElementById("first_name") != null) { 
				usr.FirstName = document.getElementById("first_name").value;
			}
			if(document.getElementById("last_name") != null) {
				usr.LastName = document.getElementById("last_name").value;
			}
			if(document.getElementById("email") != null){
				usr.Email = document.getElementById("email").value;
			}
			let checkboxes = document.getElementsByClassName("roleCheckbox");
			for(let r of checkboxes){
				if(r.checked) {
					activeRoles.push(db.doc("/" + r.id));
				}
			}
			usr.Roles = activeRoles;
			userRef.update(usr).then(function(){
				window.location.href="../user/userpage";
			});


		}
	});
}