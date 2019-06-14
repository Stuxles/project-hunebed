
var dataID  = window.sessionStorage.getItem('data-id');
var ref = db.collection('Questions').doc(dataID);


ref.get().then((doc) => {
    //checks if docs exits
    if (doc.exists) {
        //creates the variables that refer to the id's of the divs
        var text = document.getElementById('textarea1');
        for(x=2; x <= 7;x++){
        window["text" + x] = document.getElementById('textarea'.concat(x));
        }

        //checks which checkbox is checked
        var checkbox = document.getElementsByName("group1");
        var funcArray = doc.data().Related_User_Role;
        checkbox.forEach((group) =>{
            funcArray.forEach((func) => {
                if(func == group.value){
                    group.checked = true
                }
            });
        });
        //sets firestore data into input field values
        text.textContent = doc.data().Question;
        text2.textContent = doc.data().Question_answer;
        text3.textContent = doc.data().Question_wrong[0];
        text4.textContent = doc.data().Question_wrong[1];
        text5.textContent = doc.data().Question_wrong[2];
        text6.textContent = doc.data().Source;
        text7.value = doc.data().Picture;
        //when back button press clear sessionstorage
        document.getElementById("terug").addEventListener('click', (e) => {
            clearSessionStorage();
        });

        // when button is pressed update and return to the showQuestion page and clears sessionStorage
        document.getElementById("weerBewerken").addEventListener('click', (e) => {
            var funcName = [];
            checkbox.forEach((group) =>{
                if(group.checked == true){
                    funcName.push(group.value);
                    
                }
                
            });
            ref.update({
                Related_User_Role: funcName,
                Question: text.value,
                Question_wrong: [text3.value,text4.value,text5.value],
                Source: text6.value,
                Question_answer: text2.value,
                Picture:text7.value,
            });
            clearSessionStorage();
        })
        
        // when button is pressed updaten and return to the moderator page and clears sessionStorage
        document.getElementById("bewerken").addEventListener('click', (e) => {
            var funcName = [];
            checkbox.forEach((group) =>{
                if(group.checked == true){
                    funcName.push(group.value);
                    
                }
                
            });
            ref.update({
                Related_User_Role: funcName,
                Question: text.value,
                Question_wrong: [text3.value,text4.value,text5.value],
                Source: text6.value,
                Question_answer: text2.value,
                Picture:text7.value,
            });
            clearSessionStorage();
        });
        
    } else {
            console.log("No such document!");
    }

}).catch((error) => {
    console.log("Error getting document:", error);
});

//function to call sessionstorage clear function.
function clearSessionStorage(){
    window.sessionStorage.clear();
}