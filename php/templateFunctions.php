<?php 
    function renderLayoutWithContentFile($contentFile, $variables = array())
    {
        $templatePath = dirname(__FILE__) . "/../Pages";
        $contentFileFullPath = $templatePath . "/" . $contentFile;
     
        // making sure passed in variables are in scope of the template
        // each key in the $variables array will become a variable
        if (count($variables) > 0) {
            foreach ($variables as $key => $value) {
                if (strlen($key) > 0) {
                    ${$key} = $value;
                }
            }
        }

        // Inlcude head
        require_once($templatePath . "/head/head.php");
        // Iinclude header with navbar
        require_once($templatePath . "/header/header.php");
     
        // Executes the content of the page
        if (file_exists($contentFileFullPath)) {
            require_once($contentFileFullPath);
        } else {
            /*
                If the file isn't found the error can be handled in lots of ways.
                In this case we will just include an error template.
            */
            require_once("error.php");
        }
     
        require_once($templatePath . "/footer/footer.php");
    }
?>