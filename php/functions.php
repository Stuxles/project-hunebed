<?php
    function hashPass($pass, $username) {
        //Got the pseudo-random string from https://www.random.org/strings/?num=2&len=11&digits=on&upperalpha=on&loweralpha=on&unique=on&format=html&rnd=new
        $salt = str_pad(str_rot13($username), 22, "DCtNSdPbK9Ad9JNigUuKkK");
        return password_hash(str_pad($pass, 72, $salt), PASSWORD_BCRYPT, ["salt" => $salt]);
    }
?>