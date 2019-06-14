<div class="container content">

    <div class="section">
        <div class="container">
            <div class="row">
                <form class="col s12 m6 offset-m3">
                    <h4>Gebruiker aanpasen</h4>
                    <h4>Gegevens</h4>
                    <div class="row">
                        <div id="firstdiv1">Voornaam : Joapie <a href="#!" id="textChanger1" class="secondary-content "><i class="material-icons">edit</i></a></div>
                    </div>
                    <div class="row">
                        <div id="firstdiv2">Achternaam : Jakkerman<a href="#!" id="textChanger2" class="secondary-content "><i class="material-icons">edit</i></a></div>
                    </div>
                    <div class="row">
                        <div id="firstdiv3">Email adres : Jjakkerman@hunebedcentrum.nl <a href="#!" id="textChanger3" class="secondary-content "><i class="material-icons">edit</i></a></div>
                    </div>
                    <div class="row">
                        <div>Functie:<div class="input-field col s12">
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


                    <div class="row center">
                        <a href="<?= base_url('moderator/moderator') ?>" class="btn waves-effect hb-blue waves-light"><i class="material-icons left">arrow_back</i>Terug</a>
                        <button class="btn waves-effect hb-blue waves-light" type="submit" name="action">opslaan
                            <i class="material-icons right">save</i>
                        </button>
                    </div>

                    <div class="row center">
                        <button data-target="modal1" class="btn modal-trigger waves-effect hb-red-bg waves-light" type="submit" name="action">verwijderen
                            <i class="material-icons right">delete</i>
                        </button>
                    </div>

                    <!-- Modal1 Structure -->
                    <div id="modal1" class="modal">
                        <div class="modal-content">
                            <h4>Weet u zeker dat u deze vraag wilt toevoegen?</h4>
                        </div>
                        <div class="modal-footer">
                            <a href="#!" class="modal-close waves-effect hb-red-bg btn">Nee</a>
                            <a href="#modal3" class="modal-close waves-effect hb-red-bg btn modal-trigger" id="toevoegen">JA</a>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    </div>
</div>