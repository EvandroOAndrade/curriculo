<?php
	$erro = $config = array();

	if(isset($_FILES['foto']))
	{

		$extensao = strtolower(substr($_FILES['foto']['name'], -4));
		$novo_nome = md5(time()) . $extensao;
		$diretorio = "imagens/";

		move_uploaded_file($_FILES['foto']['tmp_name'], $diretorio.$novo_nome);


	}

	if(sizeof($erro))
	{
		foreach ($erro as $err)
		{
			echo " - " .$err . "<BR>";
		}

	}
?>