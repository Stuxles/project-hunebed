<div class="container content">

    <div class="section">
        <div class="container">
            <div class="row">
                <form class="col s12">
                    <h4 class="center">Quiz Algemeen</h4>
                    <div class="divider"></div>
                    <div class="row">
                        <div class="col s12">
                            <div class="card">
                                <div class="card-content">
                                    <span class="card-title">Vraag *nummer*</span>
                                    <p>Hoe oud zijn de hunebedden?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div class="row center">
                            <div class="col s12">
                                <img class="responsive-img" src="<?= base_url('assets/img/bg1.jpg') ?>">
                            </div>
                        </div>
                    <div class="divider"></div>

                    <form action="#">
                        <div class="row">
                            <div class="col s12">
                                <div class="card hoverable answer hb-blue">
                                    <div class="card-content white-text">
                                        <span class="card-title">2 Dagen oud</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col s12">
                                <div class="card hoverable answer hb-blue" onclick="">
                                    <div class="card-content white-text">
                                        <span class="card-title">10.000 Jaar oud</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col s12">
                                <div class="card hoverable answer hb-blue">
                                    <div class="card-content white-text">
                                        <span class="card-title">5.000 Jaar oud</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col s12">
                                <div class="card hoverable answer hb-blue">
                                    <div class="card-content white-text">
                                        <span class="card-title">Wat is een Hunebed?</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div class="row center">
                        <a href="<?= base_url('moderator/moderator') ?>" class="btn waves-effect hb-red-bg waves-light" id="terug"><i class="material-icons left">arrow_back</i>Terug</a>
                        <button data-target="modal1" class="btn modal-trigger waves-effect hb-red-bg waves-light">Volgende
                            <i class="material-icons right">arrow_forward</i>
                        </button>
                    </div>
            </div>
            </form>
        </div>
    </div>
</div>
<script>

// document.getElementsByClassName("answer")= function() {
//     document.getElementByClassName("answer").addClass("answer-selected").siblings().removeClass("answer-selected");
// }


// $(function() {
    
//     $('#answer').on("click", function(e)  {
//         $(this).addClass("answer-selected").siblings().removeClass("answer-selected");
//         //$(".answer-selected").removeClass("answer-selected");
//     });
// })

jQuery(document).ready(function(){
    jQuery('.answer').click(function(event){
        //remove all pre-existing active classes
        jQuery('.answer-selected').removeClass('answer-selected');

        //add the active class to the link we clicked
        jQuery(this).addClass('answer-selected');
        jQuery(this).removeClass('answer');
        jQuery('.answer').addClass('answer');

        //Load the content
        //e.g.
        //load the page that the link was pointing to
        //$('#content').load($(this).find(a).attr('href'));      

        event.preventDefault();
    });
});
</script>