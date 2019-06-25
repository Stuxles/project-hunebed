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
                    <!-- <div class="row">
                        <div class="file-field input-field col s6 offset-s3">
                            <div class="btn hb-red-bg">
                                <span>File</span>
                                <input type="file" multiple>
                            </div>
                            <div class="file-path-wrapper">
                                <input class="file-path validate" type="text" placeholder="Upload een foto of video">
                            </div>
                        </div>
                    </div> -->
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
                            <a href="#modal2" class="modal-close waves-effect hb-blue btn modal-trigger tooltipped" data-position="bottom" data-tooltip="Voeg deze vraag toe en voeg gelijk nog een vraag toe" onclick="addQuestion()">Meerdere vragen toevoegen</a>
                            <a href="#modal3" id="redirect" class="modal-close waves-effect green btn modal-trigger" id="toevoegen" onclick="addQuestion()">Toevoegen</a>
                        </div>
                    </div>

                    <!-- Modal2 Structure -->
                    <div id="modal2" class="modal">
                        <div class="modal-content">
                            <h4>De vraag is toegevoegd.</h4>
                            <p>Klik op doorgaan om een nieuwe vraag toe te voegen</p>
                        </div>
                        <div class="modal-footer">
                            <a href="#!" class="modal-close waves-effect green btn">Doorgaan</a>
                        </div>
                    </div>

                    <!-- Modal3 Structure -->
                    <div id="modal3" class="modal">
                        <div class="modal-content">
                            <h4>De vraag is toegevoegd.</h4>
                        </div>
                        <div class="modal-footer">
                            <div class="progress">
                                <div class="indeterminate"></div>
                            </div>
                            <!-- <a href="<?= base_url('home') ?>" class="modal-close waves-effect hb-red btn">Terug</a> -->
                        </div>
                    </div>

            </div>
            </form>
        </div>
    </div>
</div>

<script>
    document.getElementById("redirect").onclick = function() {
        setTimeout(function() {
            window.location.href = "home";
        }, 1234);
    };

    //For the tooltips
    $(document).ready(function() {
        $('.tooltipped').tooltip();
    });
</script>