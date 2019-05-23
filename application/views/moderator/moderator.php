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
                <div class="card medium">
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
                <div class="card medium">
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
                <div class="card medium">
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
                <div class="card medium">
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
                            <td><a class="waves-effect waves-light orange btn-floating"><i class="material-icons left">edit</i></a></td>
                        </tr>
                        <tr>
                            <td>Gijs Klompmaker</td>
                            <td>gklompmaker@hunebedcentrum.nl</td>
                            <td>Marketing</td>
                            <td><a class="waves-effect waves-light orange btn-floating"><i class="material-icons left">edit</i></a></td>
                        </tr>
                        <tr>
                            <td>Jopie Jakkerman</td>
                            <td>Jjakkerman@hunebedcentrum.nl</td>
                            <td>Winkel</td>
                            <td><a class="waves-effect waves-light orange btn-floating"><i class="material-icons left">edit</i></a></td>
                        </tr>
                    </tbody>
                </table>
                <div class="divider"></div>
            </div>
        </div>

        <div class="section no-pad-bot">
            <div class="container">
                <h4>Meerdere gebruikers tegelijk toevoegen</h4>
                <form action="#">
                    <div class="row">


                        <div class="file-field input-field">
                            <div class="btn orange">
                                <span>File</span>
                                <input type="file" multiple>
                            </div>
                            <div class="file-path-wrapper">
                                <input class="file-path validate" type="text" placeholder="Voeg excel bestand in." id="file-upload">
                                <label for="file-upload">Voeg hier een Excel bestand in om meerdere nieuwe medewerkers tegelijk toe te voegen.</label>
                            </div>
                        </div>
                    </div>
                    <div class="row center">
                        <button class="btn waves-effect orange waves-light" type="submit" name="action">Toevoegen
                            <i class="material-icons right">send</i>
                        </button>
                    </div>
                </form>
                <div class="divider"></div>
            </div>
        </div>

        <div class="section no-pad-bot">
            <div class="container">
                <h4>Gebruiker toevoegen</h4>
                <div class="row">
                    <form class="col s12">
                        <div class="row">
                            <div class="input-field col s6">
                                <i class="material-icons prefix">account_circle</i>
                                <input id="first_name" type="text" class="validate">
                                <label for="first_name">Voornaam</label>
                            </div>
                            <div class="input-field col s6">
                                <input id="last_name" type="text" class="validate">
                                <label for="last_name">Achternaam</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <i class="material-icons prefix">email</i>
                                <input id="email" type="email" class="validate">
                                <label for="email">Email</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <p>Kies de functie van de persoon die u wilt toevoegen</p>
                                <p>
                                    <label>
                                        <input class="with-gap" name="group1" type="radio" />
                                        <span>Winkel</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input class="with-gap" name="group1" type="radio" />
                                        <span>Horeca</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input class="with-gap" name="group1" type="radio" />
                                        <span>Museum</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input class="with-gap" name="group1" type="radio" />
                                        <span>Iets anders</span>
                                    </label>
                                </p>
                            </div>
                        </div>
                        <div class="row center">
                            <button class="btn waves-effect orange waves-light" type="submit" name="action">Toevoegen
                                <i class="material-icons right">send</i>
                            </button>
                        </div>
                    </form>
                </div>
                <div class="divider"></div>
            </div>
        </div>


        <div class="section no-pad-bot">
            <div class="container">
                <h4>Vraag toevoegen</h4>
                <div class="row">
                    <form class="col s12">
                        <div class="row">
                            <div class="input-field col s12">
                                <i class="material-icons prefix">mode_edit</i>
                                <textarea id="textarea1" class="materialize-textarea" data-length="120"></textarea>
                                <label for="textarea1">Voeg een vraag toe</label>
                            </div>
                            <div class="row center">
                                <button class="btn waves-effect orange waves-light" type="submit" name="action">Toevoegen
                                    <i class="material-icons right">send</i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="divider"></div>
            </div>
        </div>
    </div>
</div>