<?php
/**
 *Returns a link to this page with the email address of the requesting user,
 * base64 encoded to make sure it's both unique and safe.
 */
function generateLink($email) {
	$validDate = date("dmY-L");
	return "http://" . $_SERVER['HTTP_HOST'] . $_SERVER['PHP_SELF'] . "?reset=" . base64_encode($validDate . "//" . $email);
}

/**
 *Parses $_GET to check if a valid password reset request was given
 */
function parseLink() {
	if(!isset($_GET['reset']) && !isset($_GET['passReset'])) {
		//TESTING CODE! THIS STILL NEEDS TO BE CHANGED TO REDIRECT TO HOME
		$link = generateLink("pretender0906@gmail.com");
		header("Location: " . $link, true, 303);
	} elseif(isset($_GET['passReset'])){
		if(filter_var($_GET['passReset'], FILTER_VALIDATE_BOOLEAN) && isset($_GET['email'])) {
			return "Your password has been reset!";
		} else {
			return "Something went wrong and your password did not change.";
		}
	} else {
		$info = explode("//", base64_decode($_GET['reset']));
		if(strcmp(date("dmY-L"), $info[0]) != 0) {
			return "This reset link is invalid or has expired. Please <a href='../index.php'>try logging in</a> or reset the password from there.";
		} else {
			//This is where basic HTML becomes relevant
			echo "<!DOCTYPE html><html><head></head><body><p style='display: none;' id='hiddenMailP'>" . $info[1] . "</p>";
			include("../html/newPassword.html");
			echo "</body></html>";
			return "Please set a password you will remember.";
		}
	}
}
parseLink();
?>
