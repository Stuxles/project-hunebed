<?php
    /*
     *This function serves to create a safe, useful password hash.
     *It creates a salt based on the user's username and 22 randomly selected characters.
     *It proceeds to encrypt using the Blowfish algorithm.
     *Returns the ENCRYPTED password.
    */
    function hashPass($pass, $username) {
        //Got the pseudo-random string from https://www.random.org/strings/?num=2&len=11&digits=on&upperalpha=on&loweralpha=on&unique=on&format=html&rnd=new
        $salt = str_pad(str_rot13($pass), 22, "DCtNSdPbK9Ad9JNigUuKkK");
        //Make sure it's no more than 22 characters long.
        $salt = substr($salt, 0, 22);
        return password_hash(str_pad($pass, 72, $salt), PASSWORD_BCRYPT, ["salt" => $salt]);
    }

    /*
     *Get the browser's rendering engine and version.
     *Purposefully ignores extremely outdated browsers due to support issues.
     *
     *If you get "undertermined version 0.0.0" from this, it means the user is
     *on an ancient Opera or on Internet Explorer (NOT Edge)
     *These are hoprribly outdated and will probably break the website.
    */
    function getBrowser() {
        //Due to formatting and slight differences in presentation, we'll need to edit stuff anyways.
        //Thus tolower so we're certain that there are no issues there.
        $uaString = strtolower(getSafeUA());
        $uaEngine = "undetermined";
        $splitAt = "";
        $uaVersion = "0.0.0";
        if(strcmp($uaString, "No User-Agent given") == 0) {
            //There is no UA. This request shouldn't even have been processed
            return "Undetermined";
        }
        //Webkit first, because it contains the phrase "like Gecko"
        if(strpos($uaString, "webkit") !== FALSE) { //Check for webkit
            $uaEngine = "AppleWebKit / WebKit";
            $splitAt = "webkit/";
        } elseif(strpos($uaString, "gecko")) { //Check for Gecko. Gecko is best grill
            $uaEngine = "Gecko";
            $splitAt = "gecko/";
        } elseif(strpos($uaString, "blink")) { //check for Blink, Google's webkit
            $uaEngine = "Blink";
            $splitAt = "webkit/";
        }
        //The only remaining options mean that the user is on IE or an ancient Opera.
        //Neither supports modern websites and should thus not even be serviced.
        if(strcmp($uaEngine, "undetermined") != 0) {
            $uaVersion = explode(" ", explode($splitAt, $uaString)[1])[0];
        }
        return $uaEngine . " version " . $uaVersion;
    }

    /*
     *Get the type of device someone is using.
     *This is taken from the standard buildup of the User-Agent.
     *If a browser presents this in a very abnormal format, it will be
     *"undetermined". Otherwise, it'll present the easily retrievable device
     *information, or the device as given in the UA.
    */
    function getDevice() {
        $uaString = getSafeUA();
        //No UA given. Don't service this visitor!
        if(strcmp($uaString, "No User-Agent given") == 0) {
            return "Undetermined";
        }
        //Define the starting position and length of the substring that represents OS and Device
        $firstPos = strpos($uaString, "(")+1;
        $len = strpos($uaString, ")") - $firstPos;
        //Now get that specific piece
        $device = explode(";", substr($uaString, $firstPos, $len))[0];
        //Is it windows?
        if(strpos(strtolower($device), "windows") !== FALSE) {
            //NT means it's a PC/Laptop
            if(strpos($device, "NT") !== FALSE) {
                return "Windows PC/Laptop";
            } else {
                //Anything else is a phone, tablet, PDA or other non-standard arch
                return "Windows Phone/Tablet";
            }
        } elseif(strpos(strtolower($device), "android")) { //Might be Android!
            if(strpos(strtolower($device), "tv") || strpos(strtolower($device), "t.v.")) {
                return "Android TV";
            }
        } elseif(strpos(strtolower($device), "x") !== FALSE) {
            //Check for Unix, Linux and everything similar. The x has become somewhat of a convention there
                if(strpos(strtolower($device), "mobile") || strpos(strtolower($device), "phone")) {
                    return "Unix-like Mobile OS";
                } else {
                    return "Unix-like OS";
                }
        }else {
            //Return whatever it reports, because it's VERY non-standard.
            return $device;
        }
    }

    /*
     *Gets the User-Agent in a safe manner.
     *If there's no UA, it returns the value "No User-Agent given"
    */
    function getSafeUA() {
        return $_SERVER['HTTP_USER_AGENT']??"No User-Agent given";
    }
?>
