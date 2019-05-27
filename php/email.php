<?php

    // COMPOSER MUST BE INSTALLED AND IN THE DIRECTORY THE DEPENDENCIES WILLE BE MANAGED IN ORDER FOR THIS SCRIPT TO WORK
    //sendgrid/php-http-client dependency must be added to composer

    //autoload from composer
    require '../vendor/autoload.php';
    require_once 'passgen.php';
    //this file contains the API key however, THIS FILE IS IN THE .GITIGNORE and thus WILL NOT BE SHARED.
    //therefor you wil need to obtain YOUR OWN SENDGRID API KEY AND CREATE YOUR OWN <apicred.php> file if you want to make this script work.
    require_once ("../vendor\sendgrid\sendgrid\apicred.php");

    //adress to recieve mail
    $targetEmail = "justin.westerling@student.nhlstenden.com";
    //adress to send mail from
    $SenderEmail = "wachtwoordwijzigen@HunebedCentrum.nl";

    //a form to send mail on a button press
    echo " <form action = 'email.php' method = 'POST'>
    <p>----------------------</p>
    <p>Send an E-mail</p>
    <input type = 'submit' name = 'SEND' value = 'SEND'>
    </form>";

    //Create Mail object
    $sendEmail = new \SendGrid\Mail\Mail(); 

    // Sender email (Can be any email as long as the <text>@<text>.com/net suffix is added)
    $sendEmail->setFrom($SenderEmail, "Hunebed Centrum Borger");

    //uncommment this line below to send to a single user
    $sendEmail->addTo($targetEmail, "email");

    //comment this line if you aren't sending a mail to multiple users
    /*$tos = [ 
        "naam@gmail.com" => "naam",
        "naam@gmail.com" => "naam",
        "naam@gmail.com" => "naam",
        "naam@gmail.com" => "naam"
    ];*/
    //comment this line if you aren't sending a mail to multiple users
    //$sendEmail->addTos($tos);
    //adds the subject of the mail
    $sendEmail->setSubject("Wachtwoord wijzigen");
    // adds the actual text to the mail , HTML TAGS can also be used
    $sendEmail->addContent(
        //MAIL RESET LINK MOET NAAR EEN ANDERE PAGINA VERWIJZEN ALS DIT SCRIPT WORDT GEBRUIKT, NIET NAAR DEZELFDE PAGINA ALS DE MAIL VERSTUUR PAGINA.
        "text/html", "Beste medewerker, <br><br> Hierbij kunt u uw wachtwoord wijzigen.<br> <a href = '".generateLink($targetEmail)."' >".generateLink($targetEmail)."  </a> <br><br>
        <strong>Er kunnen geen rechten worden ontleend aan deze mail!<br></strong>
        <br> Groeten, <br><br> Hunebed Centrum Borger"
    );
    
    //adds to API KEY to the sendgrid VARIABLE for later use
    $sendgrid = new \SendGrid($API_KEY);
    try {
        if(isset($_POST['SEND'])){
            //Sends the mail if API_KEY was correctly included
            $response = $sendgrid->send($sendEmail);
        }
    } catch (Exception $e) {
        echo 'Caught exception: '. $e->getMessage() ."\n";
    }

?>