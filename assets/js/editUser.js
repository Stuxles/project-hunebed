
let url = window.location.href;
let aurl = url.split("/");
let activeRoles = [];

// Load questions form database
const addEditFields = (() => {
    document.getElementById("textChanger1").onclick = function() {
        document.getElementById("firstdiv1").innerHTML = "<div class='input-field col s12'><i class='material-icons prefix'>account_circle</i><input id='first_name' type='text' class='validate'><label for='first_name'>Voornaam</label></div>";
    };
    document.getElementById("textChanger2").onclick = function() {
        document.getElementById("firstdiv2").innerHTML = "<div class='input-field col s12'><i class='material-icons prefix'>account_circle</i><input id='last_name' type='text' class='validate'><label for='last_name'>Achternaam</label></div>";
    };
	document.getElementsByTagName('form')[0].addEventListener('submit', (e) => {
		e.preventDefault();
		updateUser();
	});
});

/*
Shows the data of the logged in user on the /user/edit page
@param user The user who is logged in
*/
const showUserDataEditUser = (user => {
    let url = window.location.href;
	let aurl = url.split("/");
	let html = ``;
	let userRoles = [];

	// Check if this is the /user/edit page
    if(!(aurl[aurl.length-2] == "user" && aurl[aurl.length-1] == "edit"))
		return;

	// Get and write user info
	db.collection('Users').doc(user.uid).get().then(doc => {
		// Get roles
		db.collection('Roles').get().then(roles => {
			if(!doc.exists) {
				document.querySelector('.editUserContent').innerHTML = '<h1 class="header center">Error: could not load data</h1>';
				return;
			}

			// User data
			const userInfo = doc.data();
			// Get the user roles
			if (typeof userInfo.Roles !== 'undefined') {
				userInfo.Roles.forEach(userRole => {
					userRoles.push(userRole.id);
				});
			}
			
			// Write user data
			html += `
				<div class="row">
					<div id="firstdiv1">Voornaam : <span id="change-firstname-label">${userInfo.FirstName}</span><a href="#!" id="textChanger1" class="secondary-content "><i class="material-icons">edit</i></a></div>
				</div>
				<div class="row">
					<div id="firstdiv2">Achternaam : <span id="change-lastname-label">${userInfo.LastName}</span><a href="#!" id="textChanger2" class="secondary-content "><i class="material-icons">edit</i></a></div>
				</div>
				<div class="row">
					<div id="firstdiv3">Email adres : <span id="change-email-label">${userInfo.Email}</span></div>
				</div>
				<div class="row">
					<div>Functie:
						<div class="input-field col s12 roles-checklist">
						</div>
					</div>
				</div>
			`;
			// Write all the HTML and load the JS
			document.querySelector('.edit-fields').innerHTML = html;
			loadRolesChecklist(roles, userRoles);
			addEditFields();
		});
	});
});

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

/*
Reset the password of the currently logged in user
*/
function resetPassword() {
	// Check if on the correct page
	if (CURRENT_PAGE !== '/user/password')
		throw 'Not the right page';
		
	const newPassword = document.querySelector('#password').value;
	const repeatPassword = document.querySelector('#repeat_password').value;
	const oldPassword = document.querySelector('#old_password').value;

	// Reset icon colors
	document.querySelector('.fa-unlock-alt').style.color = "black";
	document.querySelector('.fa-redo-alt').style.color = "black";
	document.querySelector('.fa-key').style.color = "black";


	// Check if the new passwords match
	if (newPassword !== repeatPassword) {
		document.querySelector('.error-message').innerHTML = `<span class='red-text'>De wachtwoorden komen niet overeen</span>`
		document.querySelector('.fa-unlock-alt').style.color = "red";
		document.querySelector('.fa-redo-alt').style.color = "red";
		return;
	}

	// Get the current user information
	auth.onAuthStateChanged(function(user) {
		if (user) {
			const email = user.email;
			const credential = firebase.auth.EmailAuthProvider.credential(email, oldPassword);

			// re authenticate the user with the created credential
			user.reauthenticateWithCredential(credential).then(function() {
				// User re-authenticated.
				user.updatePassword(newPassword).then(function() {
					// Update successful.
					// Show the success modal
					$('#succes-modal').modal({
						dismissible: true, // Modal can be dismissed by clicking outside of the modal
						onCloseEnd: function() { // Callback for Modal close
							window.location.href = BASE_URL + 'user/userpage';
						}
					});
					$('#succes-modal').modal('open');
				}).catch(function(error) {
					// Cant log the use rin for a reason. most likely wrong password was given
					document.querySelector('.error-message').innerHTML = `<span class='red-text'>${error.message}</span>`;
					// If the wrong password was given
					if (error.message == 'The password must be 6 characters long or more.') {
						document.querySelector('.fa-unlock-alt').style.color = "red";
						document.querySelector('.fa-redo-alt').style.color = "red";
						console.log('jo')
					}
					return;
				});
			}).catch(function() {
				// An error happened.
				document.querySelector('.error-message').innerHTML = `<span class='red-text'>Is het correcte wachtwoord ingevuld?</span>`;
				document.querySelector('.fa-key').style.color = "red";
				return;
			});
		} else {
			throw "user not logged in"
		}
	});
}

if (CURRENT_PAGE === '/user/password') {
	document.querySelector('#send-password-reset').addEventListener('click', () => resetPassword())
}

  