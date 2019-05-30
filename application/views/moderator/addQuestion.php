<div class="container content">

    <div class="section">
        <div class="container">
            <div class="row">
                <form class="col s12">
                    <h4>Vraag toevoegen</h4>
                    <div class="row">
                        <div class="input-field col s12">
                            <i class="material-icons prefix">question_answer</i>
                            <textarea id="textarea1" class="materialize-textarea" data-length="120"></textarea>
                            <label for="textarea1">Voeg een vraag toe</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="file-field input-field col s6 offset-s3">
                            <div class="btn orange">
                                <span>File</span>
                                <input type="file" multiple>
                            </div>
                            <div class="file-path-wrapper">
                                <input class="file-path validate" type="text" placeholder="Upload een foto of video">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <i class="material-icons prefix green-text">check</i>
                            <textarea id="textarea2" class="materialize-textarea" data-length="120"></textarea>
                            <label for="textarea2">Vul hier het goed antwoord in</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <i class="material-icons prefix red-text">cancel</i>
                            <textarea id="textarea3" class="materialize-textarea" data-length="120"></textarea>
                            <label for="textarea3">vul hier een fout antwoord in</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <i class="material-icons prefix red-text">cancel</i>
                            <textarea id="textarea4" class="materialize-textarea" data-length="120"></textarea>
                            <label for="textarea4">vul hier een fout antwoord in</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <i class="material-icons prefix red-text">cancel</i>
                            <textarea id="textarea5" class="materialize-textarea" data-length="120"></textarea>
                            <label for="textarea5">vul hier een fout antwoord in</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <p>Kies de functie waar de vraag bij hoort</p>
                            <p>
                                <label>
                                    <input class="with-gap" name="group1" type="radio" />
                                    <span>Winkel</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input class="with-gap" name="group1" type="radio" />
                                    <span>Horeca</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input class="with-gap" name="group1" type="radio" />
                                    <span>Museum</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input class="with-gap" name="group1" type="radio" />
                                    <span>Algemeen</span>
                                </label>
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <i class="material-icons prefix">library_books</i>
                            <textarea id="textarea6" class="materialize-textarea" data-length="120"></textarea>
                            <label for="textarea6">vul hier een bron in</label>
                        </div>
                    </div>
                    <div class="row center">
                        <a href="<?= base_url('moderator/moderator') ?>" class="btn waves-effect orange waves-light"><i class="material-icons left">arrow_back</i>Terug</a>
                        <button data-target="modal1" class="btn modal-trigger waves-effect orange waves-light">Toevoegen
                            <i class="material-icons right">send</i>
                        </button>
                    </div>

                    <!-- Modal1 Structure -->
                    <div id="modal1" class="modal">
                        <div class="modal-content">
                            <h4>Weet u zeker dat u deze vraag wilt toevoegen?</h4>
                            <p>Klik op Toevoegen om de vraag toe te voegen.<br>
                            Klik op Nog een vraag toevoegen om de vraag toe tevoegen en daarna nog een vraag toe te voegen.<br>
                        Klik op annuleren om de vraag niet toe tevoegen.</p>
                        </div>
                        <div class="modal-footer">
                            <a href="#!" class="modal-close waves-effect red waves-red btn">Annuleren</a>
                            <a href="#modal2" class="modal-close waves-effect orange waves-orange btn btn modal-trigger">Nog een vraag toevoegen</a>
                            <a href="#modal3" class="modal-close waves-effect green waves-green btn modal-trigger">Toevoegen</a>
                        </div>
                    </div>

                    <!-- Modal2 Structure -->
                    <div id="modal2" class="modal">
                        <div class="modal-content">
                            <h4>De vraag is toegevoegd.</h4>
                            <p>Klik op doorgaan om een nieuwe vraag toe te voegen</p>
                        </div>
                        <div class="modal-footer">
                            <a href="#!" class="modal-close waves-effect orange waves-orange btn">Doorgaan</a>
                        </div>
                    </div>

                    <!-- Modal3 Structure -->
                    <div id="modal3" class="modal">
                        <div class="modal-content">
                            <h4>De vraag is toegevoegd.</h4>
                            <p>Klik op terug om terug te gaan naar het hoofdscherm</p>
                        </div>
                        <div class="modal-footer">
                            <a href="<?= base_url('moderator/moderator') ?>" class="modal-close waves-effect orange waves-orange btn">Terug</a>
                        </div>
                    </div>

            </div>
            </form>
        </div>
    </div>