<div class="container content">
    <div class="section">
        <div class="container">
            <div class="row">
                <form class="col s12">
                    <h4 class="center">Quiz Algemeen</h4>
                    <div class="divider"></div>
                    <div class="row center">
                        <ul class="pagination center question-pagination">
                        </ul>
                        <div class="questionListContainer">
                        </div>
                    </div>
            </div>

            <div class="col s12">
                <div class="card">
                    <div class="card-content center">
                        <span class="card-title">Hoe oud zijn de hunebedden?</span>
                        <img class="responsive-img" src="<?= base_url('assets/img/bg1.jpg') ?>">
                    </div>
                </div>
            </div>
            <form action="#">
                <div class="row">
                    <div class="col s12">
                        <div class="card hoverable answer hb-blue">
                            <div class="card-content white-text">
                                <span class="card-title">2 Dagen oud</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col s12">
                        <div class="card hoverable answer hb-blue" onclick="">
                            <div class="card-content white-text">
                                <span class="card-title">10.000 Jaar oud</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col s12">
                        <div class="card hoverable answer hb-blue">
                            <div class="card-content white-text">
                                <span class="card-title">5.000 Jaar oud</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col s12">
                        <div class="card hoverable answer hb-blue">
                            <div class="card-content white-text">
                                <span class="card-title">Wat is een Hunebed?</span>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <ul id="quizQuestion"></ul>
            <div class="row center">
                <p>Voor meer informatie over deze vraag:</p>
                <a href="<?= base_url('moderator/moderator') ?>" class="btn waves-effect hb-red waves-light" id="terug"><i class="material-icons left">question_answer</i>klik hier</a>
            </div>
            <div class="row center">
                <a href="<?= base_url('moderator/moderator') ?>" class="btn waves-effect hb-red waves-light" id="terug"><i class="material-icons left">arrow_back</i>Terug</a>
                <button data-target="modal1" class="btn modal-trigger waves-effect hb-red waves-light">Controleer antwoord
                    <i class="material-icons right">check</i>
                </button>
            </div>
        </div>
        </form>
    </div>
</div>