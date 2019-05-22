<div class="container content">

<div class="section">
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
                <a href="<?=base_url('moderator-homepage')?>" class="btn waves-effect orange waves-light"><i class="material-icons left">arrow_back</i>Terug</a>
                    <button class="btn waves-effect orange waves-light" type="submit" name="action">Toevoegen
                        <i class="material-icons right">send</i>
                    </button>
                </div>
            </form>
            <div class="divider"></div>
        </div>
    </div>
</div>