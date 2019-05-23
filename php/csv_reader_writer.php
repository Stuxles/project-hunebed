<?php
    //autoload from composer
    require '../vendor/autoload.php';

    use PhpOffice\PhpSpreadsheet\Spreadsheet;
    use PhpOffice\PhpSpreadsheet\Writer\Csv;
    use PhpOffice\PhpSpreadsheet\WorkSheet\ColumnDimension;


    //creates new spreadsheet object
    $spreadsheet = new Spreadsheet();

    /*
    //create CSV reader and read existing CSV file 
    $reader = new \PhpOffice\PhpSpreadsheet\Reader\Csv();
    $reader->setDelimiter(';');
    $reader->setEnclosure('');
    $reader->setSheetIndex(5);
    //Import existing CSV file into active spreadsheet
    $reader->loadIntoExisting("CSV_FILE_TO_BE_IMPORTED_TO_NEWLY_CREATED_FILE.csv", $spreadsheet);*/

    $sheet = $spreadsheet->getActiveSheet();
    //write set data to a specifice coordinate 
    $sheet->setCellValue('A1', 'Achternaam, Voornaam');
    $sheet->setCellValue('B1','E-mail');
    //automatically set width of spreadsheet cells
    $sheet->calculateColumnWidths(); // line werkt niet 
    
    // creates writer
    $writer = new Csv($spreadsheet);

    //these four lines of code make sure that the data is inserted properly instead of being concat
    $writer->setDelimiter(';');
    $writer->setEnclosure('');
    $writer->setLineEnding("\r\n");
    $writer->setSheetIndex(0);

    //saves written file to php folder
    $writer->save('personeel.csv');
    // if the CSV file is saved and written rename file and move file to another directory 
    if($writer){
        rename("personeel.csv", "../CSV_Files/personeel.csv");
        echo "file created";
    }
    //unsets spreadsheet inorder to prevent memory leaks
    unset($spreadsheet);
?>