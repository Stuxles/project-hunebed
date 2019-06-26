<div class="container content">
    <div class="section no-pad-bot">
        <div class="container">
            <div class="row">
                <div class="col s12 m6 offset-m3">
                    <div class="logged-out" id="login-container" style="display:none">
                        <div class="center-align">
                            <h3>Inloggen</h3>
                        </div>
                        <form id="login-form">
                            <div class="form-field">
                                <label for="login-email" class="black-text">Emailadres</label>
                                <input type="email" id="login-email">
                            </div>
                            <br>
                            <div class="form-field">
                                <label for="login-password" class="black-text">Wachtwoord</label>
                                <input type="password" id="login-password">
                            </div>
                            <br>
                            <div class="form-field center-align">
                                <button class="btn-large hb-blue">Login</button>
                                <p class="error pink-text center-align"></p>
                            </div>
                        </form>
                    </div>
                    <br>
                    <a class="center logged-out" id="showPwdForget">Wachtwoord vergeten</a>
                    <div class="card-content showForgotten" style="display:none">
                    <h3 class="header">Wachtwoord resetten.</h3>
                    <p>Vul je emailadres om je wachtwoord te resetten.</p>
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
                    <div class="card logged-in" id="logged-container" style="display:none">
                        <div class="card-action hb-blue white-text center-align">
                            <h3>Je bent al ingelogd.</h3>
                        </div>
                    </div>
                    <li class="logged-in" style="display:none;" ><a class="waves-effect waves-light btn hb-red" href="<?=base_url('log-out')?>"></i>Klik hier om als een andere gebruiker in te loggen</a></li>
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
        
        var BASE_URL = "<?php echo base_url().index_page();?>";

        auth.signInWithEmailAndPassword(email, password).then(cred => {
            loginForm.reset();
            loginForm.querySelector('.error').innerHTML = '';
            document.location.href=BASE_URL;
        }).catch(err => {
            loginForm.querySelector('.error').innerHTML = "Combinatie van email en/of wachtwoord wordt niet herkend!";
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

