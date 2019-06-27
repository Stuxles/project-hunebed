/*
Shows the data of the logged in user on the /user/userpage page
@param user The user who is logged in
*/
const showUserDataUserPage = (user => {
    let url = window.location.href;
    let aurl = url.split("/");
    let html = ``;
    let userRoles = [];

    // Check if this is the /user/userpage page
    if(!(aurl[aurl.length-2] === "user" && aurl[aurl.length-1] === "userpage"))
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
            html +=`
            <div class="row valign-wrapper">
                                <div class="col s1 m1 l1">
                                    <i class="material-icons">account_circle</i>
                                </div>
                                <div class="col s10">
                                     <span id="change-name-label">${userInfo.FirstName} ${userInfo.LastName}</span>
                                </div>
                            </div>

                            <div class="row valign-wrapper">
                                <div class="col s1 m1 l1">
                                    <i class="material-icons">email</i>
                                </div>
                                <div class="col s10">
                                    <span id="change-firstname-label">${userInfo.Email}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>           
            `;



            // Write the roles and check the user roles
            roles.forEach(role => {
                let checked = "";
                if(userRoles.includes(role.id)){
                    checked = 'checked="checked"';
                }
                html += `
				<div class="row valign-wrapper">
                <label>
                    <input type="checkbox" ${checked} class="roleCheckbox" disabled="disabled" id="${role._key.toString()}" />
                    <span>${role.data().Naam}</span>
                  </label>
				</div>
				`;
            });


            // Card actions
            html +=`
                <div class="card-action">
                    <a href="edit" class="hb-blue-text">Aanpassen</a>
                    <a href="password" class="hb-blue-text">Wachtwoord wijzigen</a>
                </div>
            `;





            // Write all the HTML and load the JS
            document.querySelector('.edit-fields').innerHTML = html;
        });
    });
});

