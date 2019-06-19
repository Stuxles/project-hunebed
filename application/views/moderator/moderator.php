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
                        <span class="card-title black-text">Statistieken</span>
                    </div>
                    <div class="card-action center">
                        <a href="<?= base_url('moderator/showUsers') ?>" class="hb-blue-text">Bekijk Statistieken</a>
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
                        <a href="<?= base_url('moderator/showQuestions') ?>" class="hb-blue-text">Ingezonden vragen</a>
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
                            <th>Voornaam</th>
                            <th>Achternaam</th>
                            <th>E-mailadres</th>
                            <th>Functie</th>
                            <th>Aanpassen</th>
                        </tr>
                    </thead>

                    <tbody id="usertable">
                        <tr>
                            <td>Harrie</td>
                            <td>Wolters</td>
                            <td>hwolters@hunebedcentrum.nl</td>
                            <td>Algemeen Directeur</td>
                            <td><a href="<?= base_url('moderator/editUser') ?>" class="waves-effect waves-light hb-red-bg btn-floating"><i class="material-icons left">edit</i></a></td>
                        </tr>
                        <tr>
                            <td>Gijs</td>
                            <td>Klompmaker</td>
                            <td>gklompmaker@hunebedcentrum.nl</td>
                            <td>Marketing</td>
                            <td><a href="<?= base_url('moderator/editUser') ?>" class="waves-effect waves-light hb-red-bg btn-floating"><i class="material-icons left">edit</i></a></td>
                        </tr>
                        <tr>
                            <td>Jopie</td>
                            <td>Jakkerman</td>
                            <td>Jjakkerman@hunebedcentrum.nl</td>
                            <td>Winkel</td>
                            <td><a href="<?= base_url('moderator/editUser') ?>" class="waves-effect waves-light hb-red-bg btn-floating"><i class="material-icons left">edit</i></a></td>
                        </tr>
                    </tbody>
                </table>
                <div class="divider"></div>
            </div>
        </div>
    </div>
</div>