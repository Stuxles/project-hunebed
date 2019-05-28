<div class="container content">
    <div class="section">
        <div class="container">
            <h2 class="header center hb-blue-text">Vragen</h2>
            <div class="row">
                <input class="center" id="search-question" placeholder="Zoeken" id="first_name" type="text">
            </div>
        </div>
        <form id="testForm" class="center">
            <button class="btn testButton">Show Questions</button>
        </form>
        <div class="container">
            <ul class="pagination center">
                <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
                <li class="active"><a href="#!">1</a></li>
                <li class="waves-effect"><a href="#!">2</a></li>
                <li class="waves-effect"><a href="#!">3</a></li>
                <li class="waves-effect"><a href="#!">4</a></li>
                <li class="waves-effect"><a href="#!">5</a></li>
                <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
            </ul>
            <div class="questionListContainer"></div>
            <!-- <?php for ($x = 0; $x <= 5; $x++) { ?>
            <div class="card question-card hoverable">
                <div class="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information?</p>
                </div>
                <div class="card-action">
                    <a class="hb-yellow-text" href="<?=base_url('questions/show')?>">Lees meer</a>
                </div>
            </div>
            <?php } ?> -->
        </div>
    </div>
    <br><br>
</div>