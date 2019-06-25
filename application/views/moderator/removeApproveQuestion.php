<div class="container content">

    <div class="section">
        <div class="container">
            <div class="row">
                <form class="col s12">
                    <h4>vraag goedkeuren</h4>
                    <div class="row">
                        <div class="input-field col s12">
                            <i class="material-icons prefix">question_answer</i>
                            <textarea id="question-text" class="materialize-textarea" data-length="120"></textarea>
                            <label for="question-text">Vraag</label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-field col s12">
                            <i class="material-icons prefix green-text">check</i>
                            <textarea id="correct-awnser-field" class="materialize-textarea" data-length="120"></textarea>
                            <label for="correct-awnser-field">Vul hier het correcte antwoord in</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <i class="material-icons prefix red-text">filter_1</i>
                            <textarea id="wrong-answer-1" class="materialize-textarea wrong-answer-text" data-length="120"></textarea>
                            <label for="wrong-answer-1">vul hier een fout antwoord in</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <i class="material-icons prefix red-text">filter_2</i>
                            <textarea id="wrong-answer-2" class="materialize-textarea wrong-answer-text" data-length="120"></textarea>
                            <label for="vraag4">vul hier een fout antwoord in</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <i class="material-icons prefix red-text">filter_3</i>
                            <textarea id="wrong-answer-3" class="materialize-textarea wrong-answer-text" data-length="120"></textarea>
                            <label for="wrong-answer-3">vul hier een fout antwoord in</label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-field col s12">
                            <p>Kies de functie waar de vraag bij hoort</p>
                            <div class="roles-list">
                                
                            </div>
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
                            <a href="#modal3" class="modal-close waves-effect green waves-green btn modal-trigger" id = "goedkeuren">goedkeuren</a>

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