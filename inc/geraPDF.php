<?php 
require_once("/mpdf/mpdf.php");
require_once("header.php");
require_once("footer.php");

$mpdf = new mPDF(
    'en-X', //  mode - default ''
    'A4',   //  format - A4, for example, default ''
    '',     //  font size - default 0
    '',     //  default font family
    20,     //  margin_left
    15,     //  margin right
    15,     //  margin top
    15,     //  margin bottom
    5,     	//  margin header
    5,     //  margin footer
    'P');   //  L - landscape, P - portrait

// Cabeçalho e Rodapé precisam ser setados antes do conteúdo

//$mpdf->SetHTMLHeader($header);
//$mpdf->SetHTMLFooter($footer);


// Escreve o conteúdo no PDF
$mpdf->WriteHTML($pdf_html);

// Mostra o PDF na tela
$mpdf->Output();
?>