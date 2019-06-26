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
            Gemaakt door <a href="<?=base_url('about')?>">NHL Stenden studenten</a>
        </div>
    </div>
</footer>

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/6.0.4/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#config-web-app -->
<script src="https://www.gstatic.com/firebasejs/6.0.4/firebase-firestore.js"></script>
<script src="https://www.gstatic.com/firebasejs/6.0.4/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/6.0.4/firebase-functions.js"></script>

<!-- Include firebase config file -->
<script src="<?= base_url('assets/js/firebase.js')?>"></script>

<!-- Firebase variables -->
<script>
    const auth = firebase.auth();
    const db = firebase.firestore();
    const functions = firebase.functions();
</script>

<!-- Load in custom javascript -->
<script src="<?= base_url('assets/js/firestore.js') ?>"></script>

<script src="<?= base_url('assets/js/scripts.js') ?>"></script>
<script src="<?= base_url('assets/js/init.js') ?>"></script>
<script src="<?=base_url('assets/js/showQuestions.js')?>"></script>
<script src="<?=base_url('assets/js/moderator.js')?>"></script>
<script src="<?=base_url('assets/js/approve.js')?>"></script>
<script src="<?= base_url('assets/js/questions.js') ?>"></script>
<script src="<?=base_url('assets/js/index.js')?>"></script>
<script src="<?=base_url('assets/js/auth.js')?>"></script>
<script type="text/javascript" src="<?=base_url('assets/js/quiz.js')?>"></script>
<script src="<?= base_url('assets/js/scripts.js') ?>"></script>
<script type="text/javascript" src="<?= base_url('assets/js/randomSelect.js')?>"></script>
</body>
</html>
