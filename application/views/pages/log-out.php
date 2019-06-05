<div class="container content">

    <div class="section no-pad-bot">
        <div class="container">
            <h4>Je bent uitgelogd</h4>
                <p>Je wordt over enkele seconde doorgestuurd naar de home pagina.</p>

            <div class="progress">
                <div class="indeterminate"></div>
            </div>

        </div>
    </div>
</div>



<script>
    window.onload = function() {
        //call to your function here
        auth.signOut().then()
    };
    setTimeout(function(){
        window.location.href = "home";
    }, 5000);
</script>



