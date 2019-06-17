<div class="container content">
    <div class="section">
        <div class="container">
            <div class="row">
                <form class="col s12 m6 offset-m3">
                    <!---  foto die gebruiker heeft gekozen weergeven-->
                    <h4>Vraag Goedkeuring</h4>
                    <div class="row">
                        <div class='input-field col s12'>
                            <i class='material-icons prefix'>assignment</i>
                            <input id='vraag1' type='text' class='validate'>
                            <label for='vraag1'>VraagTitel</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class='input-field col s12'>
                            <i class='material-icons prefix'>done</i>
                            <input id='vraag2' type='text' class='validate'>
                            <label for='vraag2'>juist antwoord</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class='input-field col s12'>
                            <i class='material-icons prefix'>assignment_late</i>
                            <input id='vraag3' type='text' class='validate'>
                            <label for='vraag3'>fout antwoord 1</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class='input-field col s12'>
                            <i class='material-icons prefix'>assignment_late</i>
                            <input id='vraag4' type='text' class='validate'>
                            <label for='vraag4'>fout antwoord 2</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class='input-field col s12'>
                            <i class='material-icons prefix'>assignment_late</i>
                            <input id='vraagd5' type='text' class='validate'>
                            <label for='vraag5'>fout antwoord 3</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class='input-field col s12' >
                            <i class='material-icons prefix'>library_books</i>
                            <input id='vraag6' type='text' class='validate'>
                            <label for='vraag6'>Bron</label>
                        </div>
                    </div>
                    <div class="row">
                        <div>Functie:<div class="input-field col s12">
                                <p>
                                    <label>
                                        <input type="checkbox" name = "group2" value = "Winkel"/>
                                        <span>Winkel</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input type="checkbox" name = "group2"value = "Horeca"  />
                                        <span>Horeca</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input type="checkbox" name = "group2" value = "Museum"/>
                                        <span>Museum</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input type="checkbox" name = "group2" value = "Algemeen"/>
                                        <span>Algemeen</span>
                                    </label>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row center">
                        <a href="<?= base_url('moderator/showQuestions') ?>" class="btn waves-effect hb-blue waves-light" id  = "terug"><i class="material-icons left">arrow_back</i>Terug</a>
                        <button class="btn waves-effect hb-blue waves-light" type="submit" name="action" >Goedkeuren
                            <i class="material-icons right">Goedkeuren</i>
                        </button>
                    </div>

                    <div class="row center">
                        <button data-target="modal1" class="btn modal-trigger waves-effect hb-red-bg waves-light" type="submit" name="action">verwijderen
                            <i class="material-icons right">delete</i>
                        </button>
                    </div>

                    <!-- Modal1 Structure -->
                    <div id="modal1" class="modal">
                        <div class="modal-content">
                            <h4>Weet u zeker dat u deze vraag wilt verwijderen?</h4>
                        </div>
                        <div class="modal-footer">
                            <a href="#!" class="modal-close waves-effect hb-red-bg btn">Nee</a>
                            <a href="#modal3" class="modal-close waves-effect hb-red-bg btn modal-trigger" id="verwijderenQuestion">JA</a>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    </div>
</div>