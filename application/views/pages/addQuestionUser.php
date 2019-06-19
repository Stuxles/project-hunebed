<div class="container content">

    <div class="section">
        <div class="container">
            <div class="row">
                <form class="col s12">
                    <h4 class="header center hb-blue-text">Vraag toevoegen</h4>
                    <div class="row">
                        <div class="input-field col s12">
                            <i class="material-icons prefix">question_answer</i>
                            <textarea id="questionText" class="materialize-textarea" data-length="120"></textarea>
                            <label for="textarea1">Voeg een vraag toe</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="file-field input-field col s6 offset-s3">
                            <div class="btn hb-red-bg">
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
                            <p>Kies de functie waar de vraag bij hoort</p>
                            <p>
                                <label>
                                    <input class="catCheckbox" type="checkbox" value="Winkel" />
                                    <span>Winkel</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input class="catCheckbox" type="checkbox" value="Horeca" />
                                    <span>Horeca</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input class="catCheckbox" type="checkbox" value="Museum" />
                                    <span>Museum</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input class="catCheckbox" type="checkbox" value="Algemeen" />
                                    <span>Algemeen</span>
                                </label>
                            </p>
                        </div>
                    </div>
                    <div class="row center">
                        <a href="<?= base_url('home') ?>" class="btn waves-effect hb-red waves-light"><i class="material-icons left" id="terug">arrow_back</i>Terug</a>
                        <button data-target="modal1" class="btn modal-trigger waves-effect hb-red waves-light">Toevoegen
                            <i class="material-icons right">send</i>
                        </button>
                    </div>

                    <!-- Modal1 Structure -->
                    <div id="modal1" class="modal">
                        <div class="modal-content">
                            <h4>Weet u zeker dat u deze vraag wilt toevoegen?</h4>
                            <p>Klik op Toevoegen om de vraag toe te voegen.<br>
                                Klik op Nog een vraag toevoegen om de vraag toe tevoegen en daarna nog een vraag toe te voegen.<br>
                                Klik op annuleren om de vraa
                                g niet toe tevoegen.</p>
                        </div>
                        <div class="modal-footer">
                            <a href="#!" class="modal-close waves-effect hb-red btn" onclick="addQuestion(true)">Annuleren</a>
                            <a href="#modal2" class="modal-close waves-effect hb-blue btn btn modal-trigger" onclick="addQuestion()">Nog een vraag toevoegen</a>
                            <a href="#modal3" class="modal-close waves-effect hb-red btn modal-trigger" id="toevoegen"  onclick="addQuestion()">Toevoegen</a>
                        </div>
                    </div>

                    <!-- Modal2 Structure -->
                    <div id="modal2" class="modal">
                        <div class="modal-content">
                            <h4>De vraag is toegevoegd.</h4>
                            <p>Klik op doorgaan om een nieuwe vraag toe te voegen</p>
                        </div>
                        <div class="modal-footer">
                            <a href="#!" class="modal-close waves-effect hb-red btn">Doorgaan</a>
                        </div>
                    </div>

                    <!-- Modal3 Structure -->
                    <div id="modal3" class="modal">
                        <div class="modal-content">
                            <h4>De vraag is toegevoegd.</h4>
                            <p>Klik op terug om terug te gaan naar het hoofdpagina</p>
                        </div>
                        <div class="modal-footer">
                            <a href="<?= base_url('home') ?>" class="modal-close waves-effect hb-red-bg btn">Terug</a>
                        </div>
                    </div>

            </div>
            </form>
        </div>
    </div>
</div>