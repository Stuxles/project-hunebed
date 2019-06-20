<div class="container content">

    <div class="section">
        <div class="container">
            <div class="row">
                <form class="col s12">
                    <h4>Admin toewijzen</h4>
                    <div class="row">
                        <div class="input-field col s12">
                            <i class="material-icons prefix">supervisor_account</i>
                            <input type="email" id="textarea1" class="materialize-input" name="emailaddress">
                            <label for="textarea1">Voeg admin toe met email</label>
                        </div>
                    </div>
                    <div class="row center">
                        <a href="<?= base_url('moderator/moderator') ?>" class="btn waves-effect orange waves-light" id="terug"><i class="material-icons left">arrow_back</i>Terug</a>
                        <button data-target="modal1" class="btn modal-trigger waves-effect orange waves-light">Toevoegen
                            <i class="material-icons right">send</i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>