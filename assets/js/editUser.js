document.getElementById("textChanger1").onclick = function() {
    document.getElementById("firstdiv1").innerHTML = "<div class='input-field col s12'><i class='material-icons prefix'>account_circle</i><input id='first_name' type='text' class='validate'><label for='first_name'>Voornaam</label></div>";
}
document.getElementById("textChanger2").onclick = function() {
    document.getElementById("firstdiv2").innerHTML = "<div class='input-field col s12'><i class='material-icons prefix'>account_circle</i><input id='last_name' type='text' class='validate'><label for='last_name'>Achternaam</label></div>";
}
document.getElementById("textChanger3").onclick = function() {
    document.getElementById("firstdiv3").innerHTML = "<div class='input-field col s12'><i class='material-icons prefix'>email</i><input id='email' type='email' class='validate'><label for='email'>Email</label></div>";
}

//firebase.Auth.currentUser.uid
//document.getElementById("push2db").onclick = (
function updateUser() {
	let userRef = db.collection("Users").doc("BGjfbunGEYMuaBa1VxPdUMLiGjF2");
	userRef.get().then(function(doc){
		alert("hodor");
		let user = { };
		var userRoles = {
			Algemeen: "/Roles/dIQfWKaJSNZ9raCPu1QN",
			Horeca: "/Roles/HHLpbBJXp9Od7ExLHBKD",
			Museum: "/Roles/JAvkRbnS1GzZcLGAa7P5",
			Winkel: "/Roles/vt2CPNKWcAhWMHVVq5iw"
		};
		if(doc.exists){
			alert("exists");
		if(document.getElementById("first_name") != null) { //this was processed from moderator pages
			user.FirstName = document.getElementById("first_name");
			user.LastName = document.getElementById("last_name");
		}
		if(document.getElementById("email") != null){
			user.Email = document.getElementById("email");
		}
		let activeRoles = [];
		activeRoles.push(db.doc(userRoles.Algemeen));
		if(document.getElementById("horecaRole").value === true) {
			activeRoles.push(db.doc(userRoles.Horeca));
		}

		if(document.getElementById("museumRole").value === true) {
			activeRoles.push(db.doc(userRoles.Museum));
		}

		if(document.getElementById("winkelRole").value === true) {
			activeRoles.push(db.doc(userRoles.Winkel));
		}
		alert(Object.entries(user));
		user.Roles = activeRoles;
		userRef.update(user);
		}
		else {
			alert("User ain't real");
		}
	});
}
