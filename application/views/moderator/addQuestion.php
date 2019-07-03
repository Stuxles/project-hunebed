<div class="container content">

    <div class="section">
        <div class="container">
            <div class="row">
                <form class="col s12">
                    <h4>vraag toevoegen</h4>
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
                            <div class="roles-checklist">
                                
                            </div>
                        </div>
                    </div>
                    <div class="row center">
                        <a href="<?= base_url('moderator/moderator') ?>" class="btn waves-effect orange waves-light" id = "terug"><i class="material-icons left" >arrow_back</i>Terug</a>
                        <button data-target="modal1" class="btn modal-trigger waves-effect hb-green waves-light">Toevoegen
                            <i class="material-icons right">send</i>
                        </button>
                    </div>

                    <!-- Modal1 Structure -->
                    <div id="modal1" class="modal">
                        <div class="modal-content">
                            <h4>Weet u zeker dat u deze vraag wilt toevoegen?</h4>
                        </div>
                        <div class="modal-footer">
                            <div class="center">
                                <a href="#!" class="modal-close waves-effect hb-red waves-red btn">Annuleren</a>
                                <a class="modal-close waves-effect hb-green waves-green btn modal-trigger" id="add-question-btn">Toevoegen</a>
                            </div>
                        </div>
                    </div>

                    <!-- add-modal Structure -->
                    <div id="add-success-modal" class="modal">
                        <div class="modal-content center">
                            <h4>Gelukt</h4>
                            <p>De vraag is toegevoegd</p>
                            <i class="far fa-check-circle fa-9x hb-green-text"></i>
                        </div>
                        <div class="modal-footer">
                            <div class="center">
                                <a class="modal-close waves-effect waves-light btn hb-blue">Ga verder</a>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>