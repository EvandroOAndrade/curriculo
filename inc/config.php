<?php
    @header("Content-Type: text/html; charset=ISO-8859-1",true);
    @session_start();
	
    @require_once($_SERVER["DOCUMENT_ROOT"]."/inc/conP.php");
	$conPerseus = new conPerseus();
	
	$db="central_estagios";
	@require_once($_SERVER['DOCUMENT_ROOT'].'/inc/conZ.php');
	
    //SQL Inject
    $badwords=array("'",'"',"--;","*","=","union ","insert ","update ","drop ","select ","<",">");
    foreach($_POST as $value)
		foreach($badwords as $word)
			if(substr_count($value,$word)>0)die("Simbolo não permitido, remova-o e tente novamente.($word)");
	foreach($_GET as $value)
		foreach($badwords as $word)
			if(substr_count($value,$word)>0)die("Simbolo não permitido, remova-o e tente novamente.($word)");
?>