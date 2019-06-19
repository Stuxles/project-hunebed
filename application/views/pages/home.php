<div class="container content">
    <div class="section no-pad-bot" id="index-banner">
        <br><br>
        <h1 class="header center hb-blue-text">Welkom</h1>
        <div class="row center">
            <h5 class="header col s12 light"><?php $setInIndexDotPhp ?></h5>
        </div>
        <div class="row center">
            <a href="<?= base_url('addQuestionUser') ?>" id="download-button" class="btn-large waves-effect waves-light hb-red">Stel je vraag!</a>
        </div>
        <br><br>
    </div>

    <div class="container">
        <div class="section">
            <!--   Icon Section   -->
            <div class="row">
                <div class="row-content">
                    <div class="col s12 m8 offset-m2 top-questions">
                        <h2 class="center hb-blue-text"><i class="medium material-icons">question_answer</i></h2>
                        <h5 class="center">Top 3 vragen</h5>
                    </div>
                </div>
			</div>
        </div>
        <br><br>
    </div>
</div>
<script>
$(document).ready(() => {
    showTopQuestions();
})
</script>