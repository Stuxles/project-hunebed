<div class="container content">
    <div class="section">
        <div class="container">
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
            <div class="divider"></div>
        </div>
    </div>

    <div class="section no-pad-bot">
        <div class="container">
            <h4>Meerdere gebruikers tegelijk toevoegen</h4>
            <form action="#">
                <div class="row">


                    <div class="file-field input-field">
                        <div class="btn hb-red-bg">
                            <span>File</span>
                            <input type="file" multiple>
                        </div>
                        <div class="file-path-wrapper">
                            <input class="file-path validate" type="text" placeholder="Voeg excel bestand in." id="file-upload">
                            <label for="file-upload">Voeg hier een Excel bestand in om meerdere nieuwe medewerkers tegelijk toe te voegen.</label>
                        </div>
                    </div>
                </div>
                <div class="row center">
                    <a href="<?= base_url('moderator/moderator') ?>" class="btn waves-effect hb-red-bg waves-light"><i class="material-icons left">arrow_back</i>Terug</a>
                    <button class="btn waves-effect hb-red-bg waves-light" type="submit" name="action">Toevoegen
                        <i class="material-icons right">send</i>
                    </button>
                </div>
            </form>
            <div class="divider"></div>
        </div>
    </div>
</div>
<script>

const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = signupForm['signup_email'].value;

  // sign up the user & add firestore data
  auth.createUserWithEmailAndPassword(email, "password").then(cred => {
    return db.collection('Users').doc(cred.user.uid).set({
      FirstName: signupForm['first_name'].value,
      LastName: signupForm['last_name'].value
    });
  }).then(() => {
    // close the signup modal & reset form
    signupForm.reset();
    signupForm.querySelector('.error').innerHTML = 'Gebruiker aangemaakt';
  }).catch(err => {
    signupForm.querySelector('.error').innerHTML = 'Er is iets misgegaan bij het aanmaken!';
  });
});

</script>