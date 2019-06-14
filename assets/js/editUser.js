var userID2  = window.sessionStorage.getItem('idd');
var userRef = db.collection('Users').doc(userID2);
console.log(userID2);

userRef.get().then((doc) => {
    if (doc.exists) {

        var email = document.getElementById('email');
        var first = document.getElementById('first_name');
        var last = document.getElementById('last_name');

        //werkt nog niet 
        email.value =  doc.data().Email;
        first.value =  doc.data().FirstName;
        last.value =  doc.data().LastName;

        var back = document.getElementById("terug");
        var opslaan = document.getElementById("opslaan");
        var verwijder = document.getElementById("verwijderen");

        var checkbox2 = document.getElementsByName("group2");
        //werkt nu niet met references
        //var funcArray = doc.data().Roles;
        // checkbox2.forEach((group) => {
        //     doc.data().Roles.forEach(ref => {
        //         ref.get().then(role => {
        //             console.log(role.Data().Naam);
        //             if(role.Data().Naam == group.value){
        //                 group.checked = true
        //             }
        //         })
        //     })
        // });

        verwijder.addEventListener('click', (e) => {
            deleteUser(userID2);
            clearSessionStorage();
        });

        // update niet meer textfields en checkboxes
        opslaan.addEventListener('click', (e) => {
            // werkt nog niet met references
            // var funcName = [];
            //     checkbox2.forEach((group) =>{
            //     if(group.checked == true){
            //         funcName.push(group.value);
                            
            //     }
            // });
            userRef.update({
                Email: email.value,
                FirstName: first.value,
                //Roles: [],
                LastName: last.value,
            });
            clearSessionStorage();
            
        });


        back.addEventListener('click', (e) => {
            clearSessionStorage();
        });

    } else {
        console.log("No such document!");
    }

}).catch((error) => {
console.log("Error getting document:", error);
});

function deleteUser(docID){
    userRef.delete(docID).then(() => {
        console.log("User successfully deleted!");
    }).catch(() => {
        console.error("Error removing document: ", error);
    });
    
}