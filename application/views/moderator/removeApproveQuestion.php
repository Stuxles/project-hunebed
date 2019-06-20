<div class="container content">

    <div class="section">
        <div class="container">
            <div class="row">
                <form class="col s12">
                    <h4>vraag goedkeuren</h4>
                    <div class="row">
                        <div class="input-field col s12">
                            <i class="material-icons prefix">question_answer</i>
                            <textarea id="vraag1" class="materialize-textarea" data-length="120"></textarea>
                            <label for="vraag1">Vraag</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="file-field input-field col s6 offset-s3">
                            <div class="btn hb-red-bg">
                                <span>File</span>
                                <input type="file" multiple>
                            </div>
                            <div class="file-path-wrapper">
                                <input class="file-path validate" id="vraag7" type="text" placeholder="Upload een foto of video">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <i class="material-icons prefix green-text">check</i>
                            <textarea id="vraag2" class="materialize-textarea" data-length="120"></textarea>
                            <label for="vraag2">Vul hier het antwoord nummer in </label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <i class="material-icons prefix red-text">filter_1</i>
                            <textarea id="vraag3" class="materialize-textarea wrong-answer-text" data-length="120"></textarea>
                            <label for="vraag3">vul hier een fout antwoord in</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <i class="material-icons prefix red-text">filter_2</i>
                            <textarea id="vraag4" class="materialize-textarea wrong-answer-text" data-length="120"></textarea>
                            <label for="vraag4">vul hier een fout antwoord in</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <i class="material-icons prefix red-text">filter_3</i>
                            <textarea id="vraag8" class="materialize-textarea wrong-answer-text" data-length="120"></textarea>
                            <label for="vraag8">vul hier een fout antwoord in</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <i class="material-icons prefix red-text">filter_4</i>
                            <textarea id="vraag5" class="materialize-textarea wrong-answer-text" data-length="120"></textarea>
                            <label for="vraag5">vul hier een fout antwoord in</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <p>Kies de functie waar de vraag bij hoort</p>
                            <p>
                                <label>

                                    <input type="checkbox" name = "group1" value="Winkel"/>
                                    <span>Winkel</span>
                                </label>
                            </p>
                            <p>
                                <label>

                                    <input type="checkbox" name = "group1" value="Horeca"/>

                                    <span>Horeca</span>
                                </label>
                            </p>
                            <p>
                                <label>

                                    <input type="checkbox" name = "group1" value="Museum"/>

                                    <span>Museum</span>
                                </label>
                            </p>
                            <p>
                                <label>

                                    <input type="checkbox" name = "group1" value="Algemeen"/>

                                    <span>Algemeen</span>
                                </label>
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <i class="material-icons prefix">library_books</i>
                            <textarea id="vraag6" class="materialize-textarea" data-length="120"></textarea>
                            <label for="vraag6">vul hier een bron in</label>
                        </div>
                    </div>
                    <div class="row center">
                        <a href="<?= base_url('moderator/moderator') ?>" class="btn waves-effect orange waves-light" id = "terug"><i class="material-icons left" >arrow_back</i>Terug</a>
                        <button data-target="modal1" class="btn modal-trigger waves-effect orange waves-light">goedkeuren
                            <i class="material-icons right">send</i>
                        </button>
                    </div>

                    <!-- Modal1 Structure -->
                    <div id="modal1" class="modal">
                        <div class="modal-content">
                            <h4>Weet u zeker dat u deze vraag wilt goedkeuren?</h4>
                            <p>Klik op "Bewerken" om de vraag te goedkeuren.<br>
                                Klik op "Nog een vraag goedkeuren" om de vraag te updaten en daarna nog een vraag goedkeuren.<br>
                                Klik op "Annuleren" om de vraag
                                 niet te goedkeuren.</p>
                        </div>
                        <div class="modal-footer">

                            <a href="#!" class="modal-close waves-effect red waves-red btn">Annuleren</a>
                            <a href="#modal2" class="modal-close waves-effect orange waves-orange btn btn modal-trigger" id ="weergoedkeuren">Nog een vraag goedkeuren</a>
                            <a href="#modal3" class="modal-close waves-effect green waves-green btn modal-trigger" id = "goedkeuren">goedkeuren</a>

                        </div>
                    </div>

                    <!-- Modal2 Structure -->
                    <div id="modal2" class="modal">
                        <div class="modal-content">
                            <h4>De vraag is bewerkt.</h4>
                            <p>Klik op "Doorgaan" om een andere vraag te goedkeuren</p>
                        </div>
                        <div class="modal-footer">
                        <a href="<?= base_url('moderator/allQuestions') ?>" class="modal-close waves-effect hb-red-bg btn">Doorgaan</a>
                        </div>
                    </div>

                    <!-- Modal3 Structure -->
                    <div id="modal3" class="modal">
                        <div class="modal-content">
                            <h4>De vraag is bewerkt.</h4>
                            <p>Klik op terug om terug te gaan naar het hoofdscherm</p>
                        </div>
                        <div class="modal-footer">
                            <a href="<?= base_url('moderator/allQuestions') ?>" class="modal-close waves-effect hb-red-bg btn">Terug</a>
                        </div>
                    </div>

            </div>
            </form>
        </div>
    </div>
</div>