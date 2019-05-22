<div class="container content">

    <div class="section">
        <div class="container">
            <div class="row">
                <form class="col s12">
                    <h4>Vraag toevoegen</h4>
                    <div class="row">
                        <div class="input-field col s12">
                            <i class="material-icons prefix">question_answer</i>
                            <textarea id="textarea1" class="materialize-textarea" data-length="120"></textarea>
                            <label for="textarea1">Voeg een vraag toe</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="file-field input-field col s6 offset-s3">
                            <div class="btn orange">
                                <span>File</span>
                                <input type="file" multiple>
                            </div>
                            <div class="file-path-wrapper">
                                <input class="file-path validate" type="text" placeholder="Upload een foto of video">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <i class="material-icons prefix">check</i>
                            <textarea id="textarea2" class="materialize-textarea" data-length="120"></textarea>
                            <label for="textarea2">Vul hier het goed antwoord in</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <i class="material-icons prefix">cancel</i>
                            <textarea id="textarea3" class="materialize-textarea" data-length="120"></textarea>
                            <label for="textarea3">vul hier een fout antwoord in</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <i class="material-icons prefix">cancel</i>
                            <textarea id="textarea4" class="materialize-textarea" data-length="120"></textarea>
                            <label for="textarea4">vul hier een fout antwoord in</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <i class="material-icons prefix">cancel</i>
                            <textarea id="textarea5" class="materialize-textarea" data-length="120"></textarea>
                            <label for="textarea5">vul hier een fout antwoord in</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <p>Kies de functie waar de vraag bij hoort</p>
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
                                    <span>Algemeen</span>
                                </label>
                            </p>
                        </div>
                    </div>
                    <div class="row center">
                        <a href="<?= base_url('moderator-homepage') ?>" class="btn waves-effect orange waves-light"><i class="material-icons left">arrow_back</i>Terug</a>
                        <button class="btn waves-effect orange waves-light" type="submit" name="action">Toevoegen
                            <i class="material-icons right">send</i>
                        </button>
                    </div>
            </div>
            </form>
        </div>
    </div>
</div>

</div>