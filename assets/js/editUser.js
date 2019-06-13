document.getElementById("textChanger1").onclick = function() {
    document.getElementById("firstdiv1").innerHTML = "<div class='input-field col s12'><i class='material-icons prefix'>account_circle</i><input id='first_name' type='text' class='validate'><label for='first_name'>Voornaam</label></div>";
}
document.getElementById("textChanger2").onclick = function() {
    document.getElementById("firstdiv2").innerHTML = "<div class='input-field col s12'><i class='material-icons prefix'>account_circle</i><input id='last_name' type='text' class='validate'><label for='last_name'>Achternaam</label></div>";
}
document.getElementById("textChanger3").onclick = function() {
    document.getElementById("firstdiv3").innerHTML = "<div class='input-field col s12'><i class='material-icons prefix'>email</i><input id='email' type='email' class='validate'><label for='email'>Email</label></div>";
}

let userRoles = {}; //fill this with the code from Kevin
let activeRoles = []; //fill this with Kevin's code as well

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
