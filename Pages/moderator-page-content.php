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

    <div class="section no-pad-bot" id="index-banner">
        <div class="container">
            <br><br>
            <h1 class="header center hb-blue-text">Welkom</h1>
            <div class="row center">
                <h5 class="header col s12 light"><?php $setInIndexDotPhp ?></h5>
            </div>
            <div class="row center">
                <a href="#" id="download-button" class="btn-large waves-effect waves-light orange">Maak vragen!</a>
            </div>
            <br><br>
        </div>
    </div>

    <div class="container">
        <div class="section">
            <!--   Icon Section   -->
            <div class="row">
                <div class="row-content">
                    <div class="col s12 m6">
                        <div class="icon-block">
                            <h2 class="center hb-blue-text"><i class="medium material-icons">question_answer</i></h2>
                            <h5 class="center">Top 3 vragen</h5>
                            <div class="card">
                                <div class="card-content small-card-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
                                </div>
                                <div class="card-action">
                                    <a href="#"><strong>Zie het antwoord</strong></a>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-content small-card-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
                                </div>
                                <div class="card-action">
                                    <a href="#"><strong>Zie het antwoord</strong></a>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-content small-card-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
                                </div>
                                <div class="card-action">
                                    <a href="#"><strong>Zie het antwoord</strong></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m6">
                        <div class="icon-block">
                            <h2 class="center hb-blue-text"><i class="medium material-icons">book</i></h2>
                            <h5 class="center">Top 20 pagina's</h5>
                            <div class="card">
                                <div class="card-content small-card-content">
                                    <h6>Lorem ipsum dolor sit amet</h6>
                                </div>
                                <div class="card-action">
                                    <a href="#"><strong>lees meer</strong></a>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-content small-card-content">
                                    <h6>Lorem ipsum dolor sit amet</h6>
                                </div>
                                <div class="card-action">
                                    <a href="#"><strong>lees meer</strong></a>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-content small-card-content">
                                    <h6>Lorem ipsum dolor sit amet</h6>
                                </div>
                                <div class="card-action">
                                    <a href="#"><strong>lees meer</strong></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div
        </div>
        <br><br>
    </div>
</div>
