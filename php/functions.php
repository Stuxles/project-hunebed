<?php
    function hashPass($pass, $username) {
        //Got the pseudo-random string from https://www.random.org/strings/?num=2&len=11&digits=on&upperalpha=on&loweralpha=on&unique=on&format=html&rnd=new
        $salt = str_pad(str_rot13($username), 22, "DCtNSdPbK9Ad9JNigUuKkK");
        return password_hash(str_pad($pass, 72, $salt), PASSWORD_BCRYPT, ["salt" => $salt]);
    }
    
    function getBrowser() {
        $uaString = strtolower(getSafeUA());
        $uaEngine = "undetermined";
        $splitAt = "";
        $uaVersion = "0.0.0";
        if(strcmp($uaString, "No User-Agent given") == 0) {
            return "Undetermined";
        }
        if(strpos($uaString, "webkit") !== FALSE) {
            $uaEngine = "AppleWebKit / WebKit";
            $splitAt = "webkit/";
        } elseif(strpos($uaString, "gecko")) {
            $uaEngine = "Gecko";
            $splitAt = "gecko/";
        } elseif(strpos($uaString, "blink")) {
            $uaEngine = "Blink";
            $splitAt = "webkit/";
        }
        if(strcmp($uaEngine, "undetermined") != 0) {
            $uaVersion = explode(" ", explode($splitAt, $uaString)[1])[0];
        }
        return $uaEngine . " version " . $uaVersion;
    }
    
    function getDevice() {
        $uaString = getSafeUA();
        if(strcmp($uaString, "No User-Agent given") == 0) {
            return "Undetermined";
        }
        $firstPos = strpos($uaString, "(")+1;
        $len = strpos($uaString, ")") - $firstPos;
        $device = explode(";", substr($uaString, $firstPos, $len))[0];
        if(strpos(strtolower($device), "windows") !== FALSE) {
            if(strpos($device, "NT") !== FALSE) {
                return "Windows PC/Laptop";
            } else {
                return "Windows Phone/Tablet";
            }
        } elseif(strpos(strtolower($device), "x") !== FALSE) {
                if(strpos(strtolower($device), "mobile") || strpos(strtolower($device), "phone")) {
                    return "Unix-like Mobile OS";
                }
        } elseif(strpos(strtolower($device), "android")) {
            if(strpos(strtolower($device), "tv") || strpos(strtolower($device), "t.v.")) {
                return "Android TV";
            }
        } else {
            return $device;
        }
    }
    
    function getSafeUA() {
        return $_SERVER['HTTP_USER_AGENT']??"No User-Agent given";
    }
    print_r(getSafeUA());
    echo '<br />';
    print_r(getDevice());
    echo '<br />';
    print_r(getBrowser());
    echo '<br />';
    
?>