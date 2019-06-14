<div class="container content">
    <?php
    require APPPATH.'php/csv_reader_writer.php';
    ?>
    <div class="section">


        <div class="section no-pad-bot">
            <div class="container">




                <ul class="collapsible popout">
                    <li class="active">
                        <div class="collapsible-header ac"><i class="material-icons">filter_drama</i>Gebruiker toevoegen</div>
                        <div class="collapsible-body">
                            <h4>Gebruiker toevoegen</h4>
                            <div class="row">
                                <form class="col s12" id="signup-form">
                                    <div class="row">
                                        <div class="input-field col s6">
                                            <i class="material-icons prefix">account_circle</i>
                                            <input id="first_name" type="text" class="validate">
                                            <label for="first_name">Voornaam</label>
                                        </div>
                                        <div class="input-field col s6">
                                            <input id="last_name" type="text" class="validate">
                                            <label for="last_name">Achternaam</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="input-field col s12">
                                            <i class="material-icons prefix">email</i>
                                            <input id="signup_email" type="email" class="validate">
                                            <label for="signup_email">Email</label>
                                        </div>
                                    </div>
                                    <div class="row center">
                                        <button class="btn waves-effect hb-red-bg waves-light" type="submit" name="action">Toevoegen
                                            <i class="material-icons right">send</i>
                                        </button>
                                        <p class="error pink-text center-align"></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="collapsible-header"><i class="material-icons">filter_drama</i>Meerdere gebruikers toevoegen</div>
                        <div class="collapsible-body">
                            <h4>Meerdere gebruikers tegelijk toevoegen</h4>
                            <form method="post" enctype="multipart/form-data">
                                <div class="row">
                                    <div class="file-field input-field">
                                        <div class="btn hb-red-bg">
                                            <span>File</span>
                                            <input type="file" multiple>
                                        </div>
                                        <div class="file-path-wrapper">
                                            <input class="file-path validate" placeholder="Voeg CSV bestand in." type="file" name="file" id="file-upload">
                                            <label for="exampleInputFile" >Voeg hier een .CSV bestand in om meerdere nieuwe medewerkers tegelijk toe te voegen.</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row center">
                                    <button class="btn waves-effect hb-red-bg waves-light" type="submit" name="action">Toevoegen
                                        <i class="material-icons right">send</i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
<script>

    function addUserFunction(firstName, lastName, email, password, form) {
        auth.createUserWithEmailAndPassword(email, password).then(cred => {
            return db.collection('Users').doc(cred.user.uid).set({
                FirstName: firstName,
                LastName: lastName,
                Email: email
            });
            console.log(email);
        }).then(() => {
            if(form != ''){
                // close the signup modal & reset form
                form.reset();
                form.querySelector('.error').innerHTML = 'Gebruiker aangemaakt';
            }}).catch(err => {
            if(form != ''){
                form.querySelector('.error').innerHTML = 'Er is iets misgegaan bij het aanmaken!';
            }
        });
    }

    const signupForm = document.querySelector('#signup-form');
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        addUserFunction(signupForm['first_name'].value, signupForm['last_name'].value, signupForm['signup_email'].value, 'password', signupForm);
    });




    $(document).ready(function(){
        $('.collapsible').collapsible();
    });
</script>