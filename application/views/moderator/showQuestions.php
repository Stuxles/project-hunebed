<div class="container content">

    <div class="section">
        <div class="row">
            <div class="col s12 center">
                <h3>Ingezonden vragen</h3>
            </div>
        </div>
        <div class="container">
            <ul class="collection" id = 'qList'>
                <li class="collection-item avatar">
                    <!-- De icons geven de categorie aan -->
                    <i class="material-icons circle">restaurant</i>
                    <span class="title">Titel van de vraag</span>
                    <p>Persoon 1 </p>
                    <p>De vraag</p>
                    <a href="<?= base_url('moderator/addQuestion') ?>" class="secondary-content"><i class="material-icons">arrow_forward</i></a>
                </li>
            </ul>
            
            <div class="divider"></div>
        </div>
    </div>

    <div class="section no-pad-bot">
        <div class="container">
            <div class="row center">
                <a onclick="history.back(-1)" class=" btn waves-effect orange waves-light"><i class="material-icons left">arrow_back</i>Terug</a>

            </div>
            <div class="divider"></div>
        </div>
    </div>