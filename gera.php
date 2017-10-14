<?php
	$nome = $_POST["nome"];
	$idade = $_POST["idade"];
	$civil = $_POST["civil"];
	$cargo = $_POST["cargo"];
	$cnh = $_POST["cnh"];
	$endereco = $_POST["endereco"];
	$telefone = $_POST["telefone"];
	$email = $_POST["email"];
	$estado = $_POST["estado"];
	$cidade = $_POST["cidade"];
	$bairro = $_POST["bairro"];
	$formacao = $_POST["formacao"];
	$objetivo = $_POST["objetivo"];
	$perfil = $_POST["perfil"];
	$cursos = $_POST["cursos"];
	$idioma = $_POST["idioma"];
	$empresa1 = $_POST["empresa1"];
	$empresa2 = $_POST["empresa2"];
	$empresa3 = $_POST["empresa3"];
	$empresa4 = $_POST["empresa4"];
	$adicionais = $_POST["adicionais"];


	$pagina = 0;
	//kecho $nome,$idade; 
	
	
	function retornaParte($numero){
		if($numero<10)
			return "0".$numero;
		else
			return $numero;
	}

	function removeAccent($value){

	$ret = "";
	$vetor_1 = array(192,193,194,195,196,197,199,200,201,202,203,204,205,206,207,210,211,212,213,214,217,218,219,220,224,225,226,227,228,229,231,232,233,234,235,236,237,238,239,242,243,244,245,246,249,250,251,252);
	$vetor_2 = array("A","A","A","A","A","A","C","E","E","E","E","I","I","I","I","O","O","O","O","O","U","U","U","U","a","a","a","a","a","a","c","e","e","e","e","i","i","i","i","o","o","o","o","o","u","u","u","u");
	for ($cont=0;$cont <= (strlen($value)-1);$cont++) {
		$ord = ord($value[$cont]);
		if (($ord<32) or ($ord>126)) {
			$varx = "";
			for ($contj=0;$contj <= (count($vetor_1));$contj++) {
				if ($ord == $vetor_1[$contj])
					$varx = $vetor_2[$contj];
			}
			$ret .= $varx;
		}
		else
			$ret .= $value[$cont];
	}
	return $ret;
	
}
	
	$pdf_html = '
			<!DOCUMENT html>
			<html>
				<head>
					<title>CURR&Iacute;CULO</title>
					<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
					<style>
						div {
							margin	:0px;
							padding	:0px;
						}
						td {
							padding: 3px;
						}
						h1 {
							padding:50px 0px;
							text-align:center;
						}
						h2 {
							padding:10px 0px;
							text-align:left;
						}
						p {
							text-indent:0px;
							font-size:16px;
						}
					</style>
				</head>
				<body>';
		
	
		//if($pagina)$pdf_html.='<pagebreak />';
			

		$space='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
		$space2 = $space.$space;
		$space3 = $space.$space.$space;
		$lines = '_________________________________________________';
		$lines2 = $lines.$lines;
		$lines6 = $lines2.$lines2.$lines2;
		
		$pdf_html.='
			<h1>CURR&Iacute;CULO</h1>
			<h2>DADOS PESSOAIS</h2>
			<p align="left">
				<b>Nome Completo: </b>'.utf8_decode($nome).'
			</p>
			<p align="left">
				<b>Idade: </b>'.utf8_decode($idade).'
			</p>
			<p align="left">
				<b>Civil: </b>'.utf8_decode($civil).'
			</p>
			<p align="left">
				<b>Cargo: </b>'.utf8_decode($cargo).'
			</p>
			<p align="left" style="margin-bottom:30px">
				<b>CNH: </b>'.utf8_decode($cnh).'
			</p>

			<h2>DADOS DE CONTATO</h2>

			<p align="left">
				<b>Endere&ccedil;o: </b>'.utf8_decode($endereco).'
			</p>
			<p align="left">
				<b>Telefone: </b>'.utf8_decode($telefone).'
			</p>
			<p align="left">
				<b>E-mail: </b>'.utf8_decode($email).'
			</p>
			<p align="left">
				<b>Estado: </b>'.utf8_decode($estado).'
			</p>
			<p align="left">
				<b>Cidade: </b>'.utf8_decode($cidade).'
			</p>
			<p align="left" style="margin-bottom:30px">
				<b>Bairro: </b>'.utf8_decode($bairro).'
			</p>

			<h2>PERFIL</h2>

			<p align="left">
				<b>Forma&ccedil;&atilde;o: </b>'.utf8_decode($formacao).'
			</p>
			<p align="left">
				<b>Objetivo: </b>'.utf8_decode($objetivo).'
			</p>
			<p align="left">
				<b>Perfil: </b>'.utf8_decode($perfil).'
			</p>
			<p align="left">
				<b>Cursos: </b>'.utf8_decode($cursos).'
			</p>
			<p align="left" style="margin-bottom:30px">
				<b>Idioma: </b>'.utf8_decode($idioma).'
			</p>

			<h2>EXPERI&Ecirc;NCIA PROFISSIONAL</h2>

			<p align="left">
				<b>Empresa: </b>'.utf8_decode($empresa1).'
			</p>
			<p align="left">
				<b>Empresa: </b>'.utf8_decode($empresa2).'
			</p>
			<p align="left">
				<b>Empresa: </b>'.utf8_decode($empresa3).'
			</p>
			<p align="left">
				<b>Empresa: </b>'.utf8_decode($empresa4).'
			</p>
			<p align="left">
				<b>Adicionais: </b>'.utf8_decode($adicionais).'
			</p>
			
			';
	

	$pdf_html.='
		</body>
	</html>';

	//echo $pdf_html;
	require_once("inc/geraPDF.php");
	//require_once('inc/config.php');
?>