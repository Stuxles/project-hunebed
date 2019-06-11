document.getElementById("textChanger1").onclick = function() {
    document.getElementById("firstdiv1").innerHTML = "<div class='input-field col s12'><i class='material-icons prefix'>account_circle</i><input id='first_name' type='text' class='validate'><label for='first_name'>Voornaam</label></div>";
}
document.getElementById("textChanger2").onclick = function() {
    document.getElementById("firstdiv2").innerHTML = "<div class='input-field col s12'><i class='material-icons prefix'>account_circle</i><input id='last_name' type='text' class='validate'><label for='last_name'>Achternaam</label></div>";
}
document.getElementById("textChanger3").onclick = function() {
    document.getElementById("firstdiv3").innerHTML = "<div class='input-field col s12'><i class='material-icons prefix'>email</i><input id='email' type='email' class='validate'><label for='email'>Email</label></div>";
}

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
		let activeRoles = {
			Algemeen: db.doc(userRoles.Algemeen),
			Horeca: null,
			Museum: null,
			Winkel: null
			};
		if(document.getElementById("horecaRole").value === true) {
			activeRoles.Horeca = db.doc(userRoles.Horeca);
		}

		if(document.getElementById("museumRole").value === true) {
			activeRoles.Museum = db.doc(userRoles.Museum);
		}

		if(document.getElementById("winkelRole").value === true) {
			activeRoles.Winkel = db.doc(userRoles.Winkel);
		}
		user.Roles = activeRoles;
		userRef.update(user);
		}
		else {
			alert("User ain't real");
		}
	});
}
