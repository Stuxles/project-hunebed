<?php
    //autoload from composer
    require '../vendor/autoload.php';

    use PhpOffice\PhpSpreadsheet\Spreadsheet;
    use PhpOffice\PhpSpreadsheet\Writer\Csv;

    $spreadsheet = new Spreadsheet();

    $sheet = $spreadsheet->getActiveSheet()->calculateColumnWidths();
    $sheet = $spreadsheet->getActiveSheet();
    $sheet->setCellValue('A1', 'Achternaam, Voornaam');
    $sheet->setCellValue('B1','E-mail');

    $writer = new Csv($spreadsheet);
    $writer->save('personeel.csv');
    if($writer){
        rename("personeel.csv", "../CSV_Files/personeel.csv");
        echo "file created";
    }
    unset($spreadsheet);
?>