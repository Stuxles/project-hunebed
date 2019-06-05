<footer class="page-footer blue-grey container">
    <div class="row">
        <div class="col l6 s12">
            <h5 class="white-text">Hunebedcentrum</h5>
            <p class="grey-text text-lighten-4">
                Het Hunebedcentrum is een museaal merk, gericht op de presentatie en bescherming van hunebedden
                en prehistorische monumenten – in heden, verleden en toekomst – , waarbij aan interessegroepen
                belevenissen worden geboden voor doelen van bewustwording, onderricht en amusement.
            </p>


        </div>
        <div class="col l3 s12">
        </div>
        <div class="col l3 s12">
        </div>
    </div>
    <div class="footer-copyright">
        <div class="container">
            Made with <a class="orange-text text-lighten-3" href="http://materializecss.com">Materialize</a>
        </div>
    </div>
</footer>
</div>
<!--FAB Button-->
<div class="fixed-action-btn">
    <a class="btn-floating btn-large red">
        <i class="large material-icons">mode_edit</i>
    </a>
    <ul>
        <li><a class="btn-floating red"><i class="material-icons">insert_chart</i></a></li>
        <li><a class="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></a></li>
        <li><a class="btn-floating green"><i class="material-icons">publish</i></a></li>
        <li><a class="btn-floating blue"><i class="material-icons">attach_file</i></a></li>
    </ul>
</div>

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/6.0.4/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#config-web-app -->
<script src="https://www.gstatic.com/firebasejs/6.0.4/firebase-firestore.js"></script>

<!-- Include firebase cibfig file -->
<script src="<?=base_url('assets/js/firebase.js')?>"></script>

<!-- Firebase variables -->
<script>
    const db = firebase.firestore();
</script>

<script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
<script type="text/javascript" src="<?= base_url('assets/js/materialize.min.js') ?>"></script>
<script type="text/javascript" src="<?= base_url('assets/js/init.js') ?>"></script>
<!-- Load in custom javascript -->
<script src="<?= base_url('assets/js/firestore.js') ?>"></script>

<script src="<?= base_url('assets/js/scripts.js') ?>"></script>
<script type="text/javascript" src="<?=base_url('assets/js/showQuestions.js')?>"></script>
<script type="text/javascript" src="<?=base_url('assets/js/updateQuestion.js')?>"></script>
<script type="text/javascript" src="<?=base_url('assets/js/editUser.js')?>"></script>
<script src="<?= base_url('assets/js/questions.js') ?>"></script>
<script src="<?= base_url('assets/js/scripts.js') ?>"></script>
</body>
</html>
