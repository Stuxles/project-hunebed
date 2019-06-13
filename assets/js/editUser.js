
let url = window.location.href;
let aurl = url.split("/");
let userRoles = {}; //fill this with the code from Kevin
let activeRoles = []; //fill this with Kevin's code as well

// Load questions form database
const addEditFields = (() => {
    document.getElementById("textChanger1").onclick = function() {
        document.getElementById("firstdiv1").innerHTML = "<div class='input-field col s12'><i class='material-icons prefix'>account_circle</i><input id='first_name' type='text' class='validate'><label for='first_name'>Voornaam</label></div>";
    }
    document.getElementById("textChanger2").onclick = function() {
        document.getElementById("firstdiv2").innerHTML = "<div class='input-field col s12'><i class='material-icons prefix'>account_circle</i><input id='last_name' type='text' class='validate'><label for='last_name'>Achternaam</label></div>";
    }
    document.getElementById("textChanger3").onclick = function() {
        document.getElementById("firstdiv3").innerHTML = "<div class='input-field col s12'><i class='material-icons prefix'>email</i><input id='email' type='email' class='validate'><label for='email'>Email</label></div>";
    }
})

function updateUser() {
	let userRef = db.collection("Users").doc(firebase.Auth.currentUser.uid.toString());
	userRef.get().then(function(doc){
		let user = { };
		if(doc.exists){
			if(document.getElementById("first_name") != null) { //this was processed from moderator pages
				user.FirstName = document.getElementById("first_name");
				user.LastName = document.getElementById("last_name");
			}
			if(document.getElementById("email") != null){
				user.Email = document.getElementById("email");
			}
			for(let role of userRoles) {

			}
			user.Roles = activeRoles;
			userRef.update(user);
		}
	});
}

/*
Shows the data of the logged in user on the /user/edit page
@param user The user who is logged in
*/
const showUserData = (user => {
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
				document.querySelector('.editUserContent').innerHTML = '<h1 class="header center">Error: could not load data</h1>'
				return;
			}

			// User data
			const userInfo = doc.data();
			// Get the user roles
			userInfo.Roles.forEach(userRole => {
				userRoles.push(userRole.id);
			})	
			// Write user data
			html += `
				<div class="row">
					<div id="firstdiv1">Voornaam : <span id="change-firstname-label">${userInfo.FirstName}</span><a href="#!" id="textChanger1" class="secondary-content "><i class="material-icons">edit</i></a></div>
				</div>
				<div class="row">
					<div id="firstdiv2">Achternaam : <span id="change-lastname-label">${userInfo.LastName}</span><a href="#!" id="textChanger2" class="secondary-content "><i class="material-icons">edit</i></a></div>
				</div>
				<div class="row">
					<div id="firstdiv3">Email adres : <span id="change-email-label">${userInfo.Email}</span><a href="#!" id="textChanger3" class="secondary-content "><i class="material-icons">edit</i></a></div>
				</div>
				<div class="row">
					<div>Functie:
						<div class="input-field col s12">
					`

			// Write the roles and check the user roles
			roles.forEach(role => {
				let checked = "";
				if(userRoles.includes(role.id)){
					checked = 'checked="checked"';
				}
				html += `
				<p>
					<label>
						<input type="checkbox" ${checked} />
						<span>${role.data().Naam}</span>
					</label>
				</p>
				`
			})

			html += `
					</div>
				</div>
			</div>
			`
			
			// Write all the HTML and load the JS
			document.querySelector('.edit-fields').innerHTML = html;
			addEditFields();
		})
	});
})
