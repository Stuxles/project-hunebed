<div class="container content">
    <div class="section">
        <div class="container">
            <div class="row editUserContent">
                <form class="col s12 m6 offset-m3">
                    <h4>Gebruiker aanpasen</h4>
                    <h4>Gegevens</h4>
                    <div class="edit-fields">
                        <div class="information-fields">

                        </div>
                        <div class="role-fields">

                        </div>

                    </div>

                    <div class="row center">
                        <a href="<?= base_url('user/userpage') ?>" class="btn waves-effect hb-blue waves-light"><i class="material-icons left">arrow_back</i>Terug</a>
                        <button class="btn waves-effect hb-blue waves-light" type="submit" name="action" id="updateButton">opslaan
                            <i class="material-icons right">save</i>
                        </button>
                    </div>

                    <div class="row center">
                        <button data-target="modal1" class="btn modal-trigger waves-effect hb-red-bg waves-light" type="submit" name="action">verwijderen
                            <i class="material-icons right">delete</i>
                        </button>
                    </div>

                </form>
            </div>
        </div>
    </div>
</div>
<script src="<?=base_url('assets/js/editUser.js')?>"></script>
