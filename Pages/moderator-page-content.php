<?php
/**
 * Created by PhpStorm.
 * User: Sander Paping
 * Date: 20-5-2019
 * Time: 14:30
 */
?>
<div class="container content">



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
            <h4>Meerder gebruikers tegelijk toevoegen</h4>
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
                                <input class="with-gap" name="group1" type="radio"  />
                                <span>Winkel</span>
                            </label>
                            </p>
                            <p>
                            <label>
                                <input class="with-gap" name="group1" type="radio"  />
                                <span>Horeca</span>
                            </label>
                            </p>
                            <p>
                            <label>
                                <input class="with-gap" name="group1" type="radio"  />
                                <span>Museum</span>
                            </label>
                            </p>
                            <p>
                            <label>
                                <input class="with-gap" name="group1" type="radio"  />
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

    <div class="section no-pad-bot">
        <div class="container">
            <h4>Statestieken $naam</h4>
            <div class="row">
                <div class="col s12 m6">
                    <div class="card">
                        <div class="card-image">
                            <img src="./assets/img/plattegrond.jpg">
                            <span class="card-title black-text">$naam</span>
                            <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">edit</i></a>
                        </div>
                        <div class="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="divider"></div>
            <div class="row">
                <div class="col s12">
                    <!-- grafiek -->
                </div>
            </div>
            <div class="row">
                <div class="col s12 m6">
                    <div class="card">
                        <div class="card-image">
                            <img src="./assets/img/favicon.png">
                            <span class="card-title black-text">Grafiek</span>
                            <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">insert_chart</i></a>
                        </div>
                        <div class="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>
                </div>
                <div class="col s12 m6">
                    <div class="card">
                        <div class="card-image">
                            <img src="./assets/img/favicon.png">
                            <span class="card-title black-text">Grafiek</span>
                            <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">insert_chart</i></a>
                        </div>
                        <div class="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <table class="highlight responsive-table">
                    <thead>
                    <tr>
                        <th>Functie</th>
                        <th>Niveau</th>

                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td>Winkel</td>
                        <td>Kiezelsteen</td>
                    </tr>
                    <tr>
                        <td>Horeca</td>
                        <td>Kei</td>
                    </tr>
                    <tr>
                        <td>Museum</td>
                        <td>Hunebed</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</div>
