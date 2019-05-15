<?php
    function hashPass($pass, $username) {
        //Got the pseudo-random string from https://www.random.org/strings/?num=2&len=11&digits=on&upperalpha=on&loweralpha=on&unique=on&format=html&rnd=new
        $salt = str_pad(str_rot13($username), 22, "DCtNSdPbK9Ad9JNigUuKkK");
        return password_hash(str_pad($pass, 72, $salt), PASSWORD_BCRYPT, ["salt" => $salt]);
    }
    
    function getBrowser() {
            
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
        } else if(strpos(strtolower($device), "android")) {
            if(strpos(strtolower($device), "tv")) {
                return "Android TV";
            }
        } else {
            return $device;
        }
    }
    
    function getSafeUA() {
        return $_SERVER['HTTP_USER_AGENT']??"No User-Agent given";
    }
    printf(getSafeUA());
?>