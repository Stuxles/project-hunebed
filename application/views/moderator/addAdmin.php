<div class="container content">

    <div class="section">
        <div class="container">
            <div class="row">
                <form class="col s12 admin-actions">
                    <h4>Admin toewijzen</h4>
                    <div class="row">
                        <div class="input-field col s12">
                            <i class="material-icons prefix">supervisor_account</i>
                            <input type="email" id="admin-email" class="materialize-input" name="emailaddress">
                            <label for="admin-email">Voeg admin toe met email</label>
                        </div>
                    </div>
                    <div class="row center">
                        <a href="<?= base_url('moderator/moderator') ?>" class="btn waves-effect hb-red waves-light" id="terug"><i class="material-icons left">arrow_back</i>Terug</a>
                        <button data-target="modal1" class="btn modal-trigger waves-effect hb-red waves-light">Toevoegen
                            <i class="material-icons right">send</i>
                        </button>
                        <p class="error pink-text center-align"></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<script>
    const adminForm = document.querySelector('.admin-actions');
    adminForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const adminEmail = document.querySelector('#admin-email').value;
        const addAdminRole = functions.httpsCallable('addAdminRole');
        addAdminRole({
            email: adminEmail
        }).then(result => {
            adminForm.reset();
            if(result.data.errorInfo){
                adminForm.querySelector('.error').innerHTML = 'Er is iets misgegaan!';
            }else{
                adminForm.querySelector('.error').innerHTML = result.data.message;
            }
        });
    });
</script>