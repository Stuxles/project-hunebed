<div class="container content">
    <div class="section">
        <div class="row">
            <div class="col s12 center">
                <h3>Beheerder</h3>
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
                        <a href="<?= base_url('moderator/addUser') ?>">Voeg een gebruiker toe</a>
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
                        <a href="<?= base_url('moderator/addQuestion') ?>">Voeg een vraag toe</a>
                    </div>
                </div>
            </div>
            <div class="col s12 m3">
                <div class="card medium hoverable">
                    <div class="card-image">
                        <img src="<?= base_url('assets/img/statistics.png') ?>">
                    </div>
                    <div class="card-content">
                        <span class="card-title black-text">Statistieken</span>
                    </div>
                    <div class="card-action center">
                        <a href="<?= base_url('moderator/showUsers') ?>">Bekijk Statistieken</a>
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
                        <a href="<?= base_url('moderator/showQuestions') ?>">Ingezonden vragen</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="section no-pad-bot">
            <div class="container">
                <h4>Accountoverzicht</h4>
                <table class="highlight responsive-table">
                    <thead>
                        <tr>
                            <th>Naam</th>
                            <th>E-mailadres</th>
                            <th>Functie</th>
                            <th>Aanpassen</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Harrie Wolters</td>
                            <td>hwolters@hunebedcentrum.nl</td>
                            <td>Algemeen Directeur</td>
                            <td><a href="<?= base_url('moderator/editUser') ?>" class="waves-effect waves-light orange btn-floating"><i class="material-icons left">edit</i></a></td>
                        </tr>
                        <tr>
                            <td>Gijs Klompmaker</td>
                            <td>gklompmaker@hunebedcentrum.nl</td>
                            <td>Marketing</td>
                            <td><a href="<?= base_url('moderator/editUser') ?>" class="waves-effect waves-light orange btn-floating"><i class="material-icons left">edit</i></a></td>
                        </tr>
                        <tr>
                            <td>Jopie Jakkerman</td>
                            <td>Jjakkerman@hunebedcentrum.nl</td>
                            <td>Winkel</td>
                            <td><a href="<?= base_url('moderator/editUser') ?>" class="waves-effect waves-light orange btn-floating"><i class="material-icons left">edit</i></a></td>
                        </tr>
                    </tbody>
                </table>
                <div class="divider"></div>
            </div>
        </div>
    </div>
</div>