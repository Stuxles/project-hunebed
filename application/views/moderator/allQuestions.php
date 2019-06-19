<div class="container content">
    <div class="section">
        <div class="row">
            <div class="col s12 m3">
                <div class="card medium hoverable">
                    <div class="card-image">
                        <img src="<?= base_url('assets/img/goedgekeurd.jpg') ?>">
                    </div>
                    <div class="card-content">
                        <span class="card-title black-text">Goedgekeurde vragen</span>
                    </div>
                    <div class="card-action center">
                        <a href="<?= base_url('moderator/approvedQuestions') ?>" class="hb-blue-text">Bekijk goedgekeurde vragen</a>
                    </div>
                </div>
            </div>
            <div class="col s12 m3">
                <div class="card medium hoverable">
                    <div class="card-image">
                        <img src="<?= base_url('assets/img/check.png') ?>">
                    </div>
                    <div class="card-content">
                        <span class="card-title black-text">Ingezonden vragen</span>
                    </div>
                    <div class="card-action center">
                        <a href="<?= base_url('moderator/submittedQuestions') ?>" class="hb-blue-text">Ingezonden vragen</a>
                    </div>
                </div>
            </div>

        </div>

    </div>

    <div class="section no-pad-bot">
        <div class="container">
            <div class="row center">
                <a href="<?= base_url('moderator/moderator') ?>" class=" btn waves-effect orange waves-light"><i class="material-icons left">arrow_back</i>Terug</a>
            </div>

        </div>
        <div class="divider"></div>
    </div>

</div>