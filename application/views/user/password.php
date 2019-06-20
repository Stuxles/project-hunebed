
<div class="container content">
    <div class="section">
        <div class="container center" id="reset-content">      
            <h4>Wachtwoord wijzigen</h4>
            <div class="row">
                <div class="input-field col s6 offset-s3">
                    <i class="fas fa-key prefix"></i>
                    <input id="old_password" type="password" class="validate">
                    <label for="old_password">Oud Wachtwoord</label>
                </div>
                <div class="input-field col s6 offset-s3">
                    <i class="fas fa-unlock-alt prefix"></i>
                    <input id="password" type="password" class="validate">
                    <label for="password">Nieuw Wachtwoord</label>  
                </div>
                <div class="input-field col s6 offset-s3">
                    <i class="fas fa-redo-alt prefix"></i>
                    <input id="repeat_password" type="password" class="validate">
                    <label for="repeat_password">Herhaal Nieuw Wachtwoord</label>  
                </div>
                <div class="error-message col s12">
                    
                </div>
            </div>
            <div class="row center">
                <button class="btn waves-effect hb-red-bg waves-light" name="action">Terug
                    <i class="material-icons left">arrow_back</i>
                </button>
                <button class="btn waves-effect hb-red-bg waves-light" id="send-password-reset" name="action">Opslaan
                    <i class="material-icons right">send</i>
                </button>
            </div>
        </div>
        <!-- Modal Structure -->
        <div id="succes-modal" class="modal">
                <div class="modal-content">
                    <div class="center">
                        <i class="far fa-check-circle fa-9x green-text"></i> 
                        <h4>Gelukt</h4>
                    </div>
                </div>
                <div class="modal-footer">
                    <a href="#!" class="modal-close waves-effect waves-green btn hb-green">Ga terug</a>
                </div>
            </div>
    </div>  
</div>