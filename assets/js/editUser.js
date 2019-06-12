var userID2  = window.sessionStorage.getItem('idd');
var userRef = db.collection('Users').doc(userID2);
console.log(userID2);

// laad in data van doc als er op de input wordt gedrukt dan sla op in update funtie
document.getElementById("textChanger1").onclick = function() {
    document.getElementById("firstdiv1").innerHTML = "<div class='input-field col s12'><i class='material-icons prefix'>account_circle</i><input id='first_name' type='text' class='validate'><label for='first_name'>Voornaam</label></div>";
}
document.getElementById("textChanger2").onclick = function() {
    document.getElementById("firstdiv2").innerHTML = "<div class='input-field col s12'><i class='material-icons prefix'>account_circle</i><input id='last_name' type='text' class='validate'><label for='last_name'>Achternaam</label></div>";
}
document.getElementById("textChanger3").onclick = function() {
    document.getElementById("firstdiv3").innerHTML = "<div class='input-field col s12'><i class='material-icons prefix'>email</i><input id='email' type='email' class='validate'><label for='email'>Email</label></div>";
}

var back = document.getElementById("terug");
var opslaan = document.getElementById("opslaan");
var verwijder = document.getElementById("verwijderen");

var checkbox2 = document.getElementsByName("group2");
var funcArray = doc.data().Roles;
    checkbox2.forEach((group) => {
        funcArray.forEach((func) => {
            if(func == group.value){
                group.checked = true
        }
    });
});

verwijder.addEventListener('click', (e) => {
    deleteUser(userID2);
    clearSessionStorage();
});

opslaan.addEventListener('click', (e) => {
    var funcName = [];
        checkbox2.forEach((group) =>{
        if(group.checked == true){
            funcName.push(group.value);
                    
        }
    /*
    userRef.update({
        Email: ,
        FirstName: ,
        Roles: [],
        LastName: ,
    });
    clearSessionStorage();
    */
});


back.addEventListener('click', (e) => {
    clearSessionStorage();
});

function deleteUser(docID){
    var docID = doc;
    userRef.delete(docID).then(() => {
        console.log("Document successfully deleted!");
    }).catch(() => {
        console.error("Error removing document: ", error);
    });
    
}