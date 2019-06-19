<?php

require 'vendor/autoload.php';

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Reader\Csv;
use PhpOffice\PhpSpreadsheet\Reader\Xlsx;

$sheetData = [];
$file_mimes = array('text/x-comma-separated-values', 'text/comma-separated-values', 'application/octet-stream', 'application/vnd.ms-excel', 'application/x-csv', 'text/x-csv', 'text/csv', 'application/csv', 'application/excel', 'application/vnd.msexcel', 'text/plain', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');

if(isset($_FILES['file']['name']) && in_array($_FILES['file']['type'], $file_mimes)) {

    $arr_file = explode('.', $_FILES['file']['name']);
    $extension = end($arr_file);

    if('csv' == $extension) {
        $reader = new \PhpOffice\PhpSpreadsheet\Reader\Csv();
    } else {
        echo "FOUT: Dit is geen .CSV bestand, zie handleiding";
    }
    $reader->setDelimiter(';');
    $spreadsheet = $reader->load($_FILES['file']['tmp_name']);

    $sheetData = $spreadsheet->getActiveSheet()->toArray();
    //print_r($sheetData);

    array_shift($sheetData);                 // Deletes first row of sheet
    $sheetDataLength = count($sheetData);           // Get array length

}
?>
<script type="text/javascript">
    var sheetData =  <?php echo json_encode($sheetData); ?>;
    var sheetDataLength = sheetData.length;


    $( document ).ready(function() {
        for (var c = 0; c <  sheetDataLength; c++) {
            var fullName   = sheetData[c][0];                // Set full name
            var email      = sheetData[c][1];                // Set email
            var fullName   = fullName.split(",");           // explode on the , to separate first name from last name
            var firstName  = fullName[1].trim();               // set first name and remove the spaces
            var lastName   = fullName[0].trim();               // set last name  and remove the spaces


                addUserFunction(firstName, lastName, email, "wachtwoord", "");
                console.log(email);
            }

        }
    );

</script>
