<?php include("../head/head.php"); ?>
    <body>
<div class="container">
    <div class="row login">
        <div class="col s12 m6 offset-m3">
            <div class="card">
                <div class="card-action light-blue white-text center-align">
                    <h3>Login form</h3>
                </div>
                <div class="card-content">
                    <div class="form-field">
                        <label for="username">Username</label>
                        <input type="text" id="username">
                    </div>
                    <br>
                    <div class="form-field">
                        <label for="password">Password</label>
                        <input type="password" id="password">
                    </div>
                    <br>
                    <div class="form-field">

                        <label for="remember">
                            <input type="checkbox" id="remember">
                            <span>Remember me</span>
                        </label>
                    </div>
                    <br>
                    <div class="form-field center-align">
                        <a href="../home" class="btn-large light-blue">Login</a>
                    </div>
                    <br>
                </div>
            </div>
        </div>
    </div>
    <!--  Scripts-->
    <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
    <script src="js/materialize.js"></script>
    <script src="js/init.js"></script>
</body>
</html>

