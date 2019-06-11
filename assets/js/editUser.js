let url = window.location.href;
let aurl = url.split("/");

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

const test123 = (user => {
    let url = window.location.href;
    let aurl = url.split("/");

    // Load questions form database
    if(aurl[aurl.length-2] == "user" && aurl[aurl.length-1] == "edit") {
        let html;
        console.log(user)
        console.log(db.collection('Users').doc(user.uid))
        db.collection('Users').doc(user.uid).get().then(doc => {
            console.log(doc)
            if(doc.exists) {
                const userInfo = doc.data();
                db.collection('Roles').get().then(roles => {

                })
                userInfo.roles.forEach(element => {
                    
                });
                
                html = `
                    <div class="row">
                        <div id="firstdiv1">Voornaam : <span id="change-firstname-label">${userInfo.firstName}</span><a href="#!" id="textChanger1" class="secondary-content "><i class="material-icons">edit</i></a></div>
                    </div>
                    <div class="row">
                        <div id="firstdiv2">Achternaam : <span id="change-lastname-label">${userInfo.lastName}</span><a href="#!" id="textChanger2" class="secondary-content "><i class="material-icons">edit</i></a></div>
                    </div>
                    <div class="row">
                        <div id="firstdiv3">Email adres : <span id="change-email-label">${userInfo.email}</span><a href="#!" id="textChanger3" class="secondary-content "><i class="material-icons">edit</i></a></div>
                    </div>
                    <div class="row">
                        <div>Functie:
                            <div class="input-field col s12">
                                <p>
                                    <label>
                                        <input type="checkbox" />
                                        <span>Winkel</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input type="checkbox" checked="checked" />
                                        <span>Horeca</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input type="checkbox" />
                                        <span>Museum</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input type="checkbox" checked="checked" />
                                        <span>Algemeen</span>
                                    </label>
                                </p>
                            </div>
                        </div>
                    </div>
                `
                
                document.querySelector('.edit-fields').innerHTML = html;
                addEditFields();
            } else {
                document.querySelector('#change-firstname-label').innerHTML = "Error"
            }
        });
    }
})