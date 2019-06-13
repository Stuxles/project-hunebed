<div class="container content">
    <?php
    require '/Applications/MAMP/htdocs/hunebed/project-hunebed/php/csv_reader_writer.php';
    ?>

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
                    <div class="row center">
                        <button class="btn waves-effect hb-red-bg waves-light" type="submit" name="action">Toevoegen
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
            <form method="post" enctype="multipart/form-data">
                <div class="row">


                    <div class="file-field input-field">
                        <div class="btn hb-red-bg">
                            <span>File</span>
                            <input type="file" multiple>
                        </div>
                        <div class="file-path-wrapper">
                            <input class="file-path validate" placeholder="Voeg CSV bestand in." type="file" name="file" id="file-upload">
                            <label for="exampleInputFile" >Voeg hier een .CSV bestand in om meerdere nieuwe medewerkers tegelijk toe te voegen.</label>
                        </div>
                    </div>
                </div>
                <div class="row center">
                    <a href="<?= base_url('moderator/moderator') ?>" class="btn waves-effect hb-red-bg waves-light"><i class="material-icons left">arrow_back</i>Terug</a>
                    <button class="btn waves-effect hb-red-bg waves-light" type="submit" name="action">Toevoegen
                        <i class="material-icons right">send</i>
                    </button>
                </div>
            </form>

        </div>
    </div>
</div>