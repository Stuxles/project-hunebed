<div class="container content">
    <div class="section">
        <div class="row">
            <div class="col s12 center">
                <h3 class="hb-blue-text">Beheer</h3>
            </div>
        </div>
        </section>
        <div class="container">
        <div class="row">
            <div class="col s12 m3">
                <a href="<?= base_url('moderator/addUser') ?>" class="hb-blue-text">
                    <div class="card medium hoverable">
                        <div class="card-image">
                            <img src="<?= base_url('assets/img/User-Icon.png') ?>">
                        </div>
                        <div class="card-content ">
                            <span class="card-title black-text">Gebruiker toevoegen</span>
                        </div>
                        <div class="card-action center">
                            Voeg een gebruiker toe
                        </div>
                    </div>
                </a>
            </div>
            <div class="col s12 m3">
                <a href="<?= base_url('moderator/addQuestion') ?>" onclick="clearSessionStorage()" class="hb-blue-text">
                    <div class="card medium hoverable">
                        <div class="card-image">
                            <img src="<?= base_url('assets/img/vraag.jpg') ?>">
                        </div>
                        <div class="card-content">
                            <span class="card-title black-text">Vraag toevoegen</span>
                        </div>
                        <div class="card-action center">
                            Voeg een vraag toe
                        </div>
                    </div>
                </a>
            </div>
            <div class="col s12 m3">
                <a href="<?= base_url('moderator/showUsers') ?>" class="hb-blue-text">
                    <div class="card medium hoverable">
                        <div class="card-image">
                            <img src="<?= base_url('assets/img/statistics.png') ?>">
                        </div>
                        <div class="card-content">
                            <span class="card-title black-text">Gebruikers</span>
                        </div>
                        <div class="card-action center">
                            Bekijk Gebruikers
                        </div>
                    </div>
                </a>
            </div>
            <div class="col s12 m3">
                <a href="<?= base_url('moderator/allQuestions') ?>" class="hb-blue-text">
                    <div class="card medium hoverable">
                        <div class="card-image">
                            <img src="<?= base_url('assets/img/QA.jpg') ?>">
                        </div>
                        <div class="card-content">
                            <span class="card-title black-text">Alle vragen</span>
                        </div>
                        <div class="card-action center">
                            Alle vragen
                        </div>
                    </div>
                </a>
            </div>
        </div>
        </div>
    </div>
</div>