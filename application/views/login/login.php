<div class="container content">

    <div class="section no-pad-bot">
        <div class="container">
            <div class="col s12 m6 offset-m3">
                <div class="card logged-out" id="login-container" style="display:none">
                    <div class="card-action hb-blue white-text center-align">
                        <h3>Login form</h3>
                    </div>
                    <div class="card-content">
                        <form id="login-form">
                            <div class="form-field">
                                <label for="login-email">Emailadres</label>
                                <input type="email" id="login-email">
                            </div>
                            <br>
                            <div class="form-field">
                                <label for="login-password">Wachtwoord</label>
                                <input type="password" id="login-password">
                            </div>
                            <br>
                            <div class="form-field center-align">
                                <button class="btn-large hb-blue">Login</button>
                                <p class="error pink-text center-align"></p>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="card">
                    <button class="btn-large hb-blue logged-out" id="showPwdForget">Wachtwoord vergeten</button>
                    <div class="card-content showForgotten" style="display:none">
                        <form id="forgotten-form">
                            <div class="form-field">
                                <label for="forgotten-email">Emailadres</label>
                                <input type="email" id="forgotten-email">
                            </div>
                            <br>
                            <div class="form-field center-align">
                                <button class="btn-large hb-blue">Wachtwoord resetten</button>
                                <p class="error pink-text center-align"></p>
                            </div>
                        </form>
                    </div>

                </div>
                <div class="card logged-in" id="logged-container" style="display:none">
                    <div class="card-action hb-blue white-text center-align">
                        <h3>Gebruiker al ingelogd</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script>
    //login
    const loginForm = document.querySelector('#login-form');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        //get user info
        const email = loginForm['login-email'].value;
        const password = loginForm['login-password'].value;

        auth.signInWithEmailAndPassword(email, password).then(cred => {
            loginForm.reset();
            loginForm.querySelector('.error').innerHTML = '';
            document.location.href="/hunebed";
        }).catch(err => {
            loginForm.querySelector('.error').innerHTML = "Combinatie van emaill en/of wachtwoord wordt niet herkend!";
        });
    });

    //password reset show
    document.getElementById("showPwdForget").addEventListener("click", function(){
        document.querySelectorAll('.showForgotten').forEach(item => item.style.display = 'block');
        document.querySelectorAll('.logged-in').forEach(item => item.style.display = 'none');
        document.querySelectorAll('.logged-out').forEach(item => item.style.display = 'none');
    });

    //password reset
    const resetForm = document.querySelector('#forgotten-form');
    resetForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = resetForm['forgotten-email'].value;

        auth.sendPasswordResetEmail(email).then(function() {
        // Email sent.
        resetForm.reset();
        }).catch(function(error) {
        // An error happened.
        });
    });

</script>

