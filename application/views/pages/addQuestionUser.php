<div class="container content">

    <div class="section">
        <div class="container">
            <div class="row">
                <form class="col s12">
                    <h4 class="header center hb-blue-text">Vraag toevoegen</h4>
                    <div class="row">
                        <div class="input-field col s6 offset-s3">
                            <i class="material-icons prefix">question_answer</i>
                            <input id="questionText" type="text" data-length="120">
                            <label for="questionText">Voeg een vraag toe</label>
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
                        <a href="<?= base_url('home') ?>" class="btn waves-effect hb-red waves-light"><i class="material-icons left" id="terug">arrow_back</i>Terug</a>
                        <button data-target="modal1" class="btn modal-trigger waves-effect hb-red waves-light">Toevoegen
                            <i class="material-icons right">send</i>
                        </button>
                    </div>

                    <!-- Modal1 Structure -->
                    <div id="modal1" class="modal">
                        <div class="modal-content">
                            <h4>Weet u zeker dat u deze vraag wilt toevoegen?</h4>
                        </div>
                        <div class="modal-footer">
                            <a href="#!" class="modal-close waves-effect hb-red btn" onclick="addQuestion(true)">Annuleren</a>
                            <a href="#modal2" class="modal-close waves-effect hb-blue btn btn modal-trigger" onclick="addQuestion()">Nog een vraag toevoegen</a>
                            <a class="modal-close waves-effect btn modal-trigger hb-green" id="toevoegen"  onclick="addQuestion()">Toevoegen</a>
                        </div>
                    </div>

                    <!-- Modal2 Structure -->
                    <div id="modal2" class="modal">
                        <div class="modal-content">
                            <h4>De vraag is toegevoegd.</h4>
                            <p>Klik op doorgaan om een nieuwe vraag toe te voegen</p>
                        </div>
                        <div class="modal-footer">
                            <a class="modal-close waves-effect hb-red btn">Doorgaan</a>
                        </div>
                    </div>

                    <!-- Modal3 Structure -->
                    <div id="modal3" class="modal">
                        <div class="modal-content center">
                            <h4>De vraag is toegevoegd.</h4>
                            <i class="far fa-check-circle fa-9x hb-green-text"></i>
                        </div>
                    </div>

            </div>
            </form>
        </div>
    </div>
</div>
