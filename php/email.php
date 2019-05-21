<?php
    //autoload from composer
    require '../vendor/autoload.php';
    //this file contains the API key however, THIS FILE IS IN THE .GITIGNORE and thus WILL NOT BE SHARED.
    //therefor you wil need to obtain YOUR OWN SENDGRID API KEY AND CREATE YOUR OWN <apicred.php> file if you want to make this script work.
    require_once ("../vendor\sendgrid\sendgrid\apicred.php");

    //Create Mail object
    $email = new \SendGrid\Mail\Mail(); 

    // Sender email (Can be any email as long as the <text>@<text>.com/net suffix is added)
    $email->setFrom("SPAM@gmail.com", "SPAM");

    //uncommment this line below to send to a single user
    //$email->addTo("test@example.com", "Example User");

    //comment this line if you aren't sending a mail to multiple users
    $tos = [ 
        "naam@gmail.com" => "naam",
        "naam@gmail.com" => "naam",
        "naam@gmail.com" => "naam",
        "naam@gmail.com" => "naam"
    ];
    //comment this line if you aren't sending a mail to multiple users
    $email->addTos($tos);
    //adds the subject of the mail
    $email->setSubject("Project");
    // adds the actual text to the mail , HTML TAGS can also be used
    $email->addContent("text/plain", "hakloo  !!! <br><br>");
    $email->addContent(
        "text/html", "<strong>IS SPAM NIET ANTWOORDEN!!!!<br></strong>
        <br> Groeten, <br><br> SPAM"
    );
    
    //adds to API KEY to the sendgrid VARIABLE for later use
    $sendgrid = new \SendGrid($API_KEY);
    try {
        //Sends the mail if API is included
        $response = $sendgrid->send($email);
        echo "Mail Send!!!";
    } catch (Exception $e) {
        echo 'Caught exception: '. $e->getMessage() ."\n";
    }

?>