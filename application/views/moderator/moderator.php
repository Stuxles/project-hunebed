<div class="container content">
    <div class="section">
        <div class="row">
            <div class="col s12 center">
                <h3 class="hb-blue-text">Beheerder</h3>
            </div>
        </div>
        </section>
        <div class="row">
            <div class="col s12 m3">
                <div class="card medium hoverable">
                    <div class="card-image">
                        <img src="<?= base_url('assets/img/User-Icon.png') ?>">
                    </div>
                    <div class="card-content ">
                        <span class="card-title black-text">Gebruiker toevoegen</span>
                    </div>
                    <div class="card-action center">
                        <a href="<?= base_url('moderator/addUser') ?>" class="hb-blue-text">Voeg een gebruiker toe</a>
                    </div>
                </div>
            </div>
            <div class="col s12 m3">
                <div class="card medium hoverable">
                    <div class="card-image">
                        <img src="<?= base_url('assets/img/vraag.jpg') ?>">
                    </div>
                    <div class="card-content">
                        <span class="card-title black-text">Vraag toevoegen</span>
                    </div>
                    <div class="card-action center">
                        <a href="<?= base_url('moderator/addQuestion') ?>" onclick="clearSessionStorage()" class="hb-blue-text">Voeg een vraag toe</a>
                    </div>
                </div>
            </div>
            <div class="col s12 m3">
                <div class="card medium hoverable">
                    <div class="card-image">
                        <img src="<?= base_url('assets/img/statistics.png') ?>">
                    </div>
                    <div class="card-content">
                        <span class="card-title black-text">Gebruikers</span>
                    </div>
                    <div class="card-action center">
                        <a href="<?= base_url('moderator/showUsers') ?>" class="hb-blue-text">Bekijk Gebruikers</a>
                    </div>
                </div>
            </div>
            <div class="col s12 m3">
                <div class="card medium hoverable">
                    <div class="card-image">
                        <img src="<?= base_url('assets/img/QA.jpg') ?>">
                    </div>
                    <div class="card-content">
                        <span class="card-title black-text">Alle vragen</span>
                    </div>
                    <div class="card-action center">
                        <a href="<?= base_url('moderator/allQuestions') ?>" class="hb-blue-text">Alle vragen</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>