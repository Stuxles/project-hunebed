<?php
/**
 *Returns a link to this page with the email address of the requesting user,
 * base64 encoded to make sure it's both unique and safe.
 */
function generateLink($email) {
	$validDate = date("dmY-L");
	return "http://" . $_SERVER['HTTP_HOST'] . $_SERVER['PHP_SELF'] . "?email=" . base64_encode($validDate . "//" . $email);
}

//Testcode, prints a proven working copy of the data
if(!isset($_GET['email']) && !isset($_GET['passReset'])) {
		$link = generateLink("pretender0906@gmail.com");
		header("Location: " . $link, true, 303);
} elseif(isset($_GET['passReset'])){
	if(filter_var($_GET['passReset'], FILTER_VALIDATE_BOOLEAN) && isset($_GET['email'])) {
		printf("Your password has been reset!");
	} else {
		printf("Something went wrong and your password did not change.");
	}
} else {
	$info = explode("//", base64_decode($_GET['email']));
	if(strcmp(date("dmY-L"), $info[0]) != 0) {
		printf("This reset link is invalid or has expired. Please <a href='../index.php'>try logging in</a> or reset the password from there.");
	} else {
		echo "<p style='display: none;' id='hiddenMailP'>" . $info[1] . "</p>";
		include("../html/newPassword.html");
	}
}
?>
