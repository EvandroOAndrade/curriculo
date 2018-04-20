	<html lang="pt-br">
	
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1">
	<meta charset="UTF-8">
			
			<script type="text/javascript" src="design/jquery.js"></script>
			<script src="design/jquery/3.1.js"></script>

			<script src="design/bootstrap/bootstrap-datepicker-1.6.4-dist/js/bootstrap-datepicker.js"></script>
			<script src="design/bootstrap/bootstrap-datepicker-1.6.4-dist/locales/bootstrap-datepicker.pt-BR.min.js"></script>
			<link rel="stylesheet" href="design/bootstrap/bootstrap-datepicker-1.6.4-dist/css/bootstrap-datepicker3.css"/>

			<link rel="stylesheet" type="text/css" href="design/bootstrap/themes/paper.min.css">
			<link rel="stylesheet" type="text/css" href="design/style.css">

			<script type="text/javascript"  src="design/bootstrap/js/bootstrap.min.js"></script>
	<div class="container-fluid">
		
		
	<form class="form-horizontal" action="gera.php" method="post" enctype="multipart/form-data" id="formulario">
	<fieldset>

	<legend>Foto de Perfil</legend>
	<div class="form-group">
		<label class="col-md-4 control-label" for="Foto 3x4">Foto 3x4:</label>

		<div class="col-md-4">
			<input type="file" name="foto">
		</div>
	</div>	

	<!-- Form Name -->
	<legend>Dados Pessoais</legend>

	<!-- Text input-->
	<div class="form-group">
	  <label class="col-md-4 control-label" for="Nome Completo:">Nome:</label>  
	  <div class="col-md-4">
	  <input id="nome:" name="nome" placeholder="Seu Nome" class="form-control input-md" required="" type="text">
	    
	  </div>
	</div>

	<!-- Text input-->
	<div class="form-group">
	  <label class="col-md-4 control-label" for="idade">Idade:</label>  
	  <div class="col-md-4">
	  <input id="idade" name="idade" placeholder="Idade" class="form-control input-md" type="text">
	    
	  </div>
	</div>

	<!-- Select Basic -->
	<div class="form-group">
	  <label class="col-md-4 control-label" for="civil">Estado Civil</label>
	  <div class="col-md-4">
	    <select id="civil" name="civil" class="form-control">
	      <option value="Solteiro(a)">Solteiro(a)</option>
	      <option value="Casado(a)">Casado(a)</option>
	      <option value="Viúvo(a)">Viuvo(a)</option>
	      <option value="Outro">Outro</option>
	    </select>
	  </div>
	</div>

	<!-- Text input-->
	<div class="form-group">
	  <label class="col-md-4 control-label" for="cargo">Cargo Pretendido:</label>  
	  <div class="col-md-4">
	  <input id="cargo" name="cargo" placeholder="Cargo Pretendido" class="form-control input-md" type="text">
	    
	  </div>
	</div>


	<!-- Text input-->
	<div class="form-group">
	  <label class="col-md-4 control-label" for="cnh">CNH:</label>  
	  <div class="col-md-4">
	  <input id="cnh" name="cnh" placeholder="Tipo da CNH (A - B)" class="form-control input-md" type="text">
	    
	  </div>
	</div>

	<legend>Dados de Contato</legend>

	<!-- Text input-->
	<div class="form-group">
	  <label class="col-md-4 control-label" for="endereco">Endereço:</label>  
	  <div class="col-md-4">
	  <input id="endereco" name="endereco" placeholder="Endereço completo(rua, avenida, nº)" class="form-control input-md" type="text">
	  <!--<span class="help-block">help</span>  -->
	  </div>
	</div>

	<!-- Text input-->
	<div class="form-group">
	  <label class="col-md-4 control-label" for="telefone">Telefone:</label>  
	  <div class="col-md-4">
	  <input id="telefone" name="telefone" placeholder="Telefone" class="form-control input-md" type="text">
	  <!--<span class="help-block">help</span>  -->
	  </div>
	</div>

	<!-- Text input-->
	<div class="form-group">
	  <label class="col-md-4 control-label" for="email">E-mail:</label>  
	  <div class="col-md-4">
	  <input id="email" name="email" placeholder="E-mail" class="form-control input-md" type="text">
	  <!--<span class="help-block">help</span>  -->
	  </div>
	</div>

	<!-- Select Basic -->
	<div class="form-group">
	  <label class="col-md-4 control-label" for="estado">Estado</label>
	  <div class="col-md-4">
	    <select id="estado" name="estado" class="form-control">
	        <option value="">Selecione</option>
			<option value="AC">AC</option>
			<option value="AL">AL</option>
			<option value="AM">AM</option>
			<option value="AP">AP</option>
			<option value="BA">BA</option>
			<option value="CE">CE</option>
			<option value="DF">DF</option>
			<option value="ES">ES</option>
			<option value="GO">GO</option>
			<option value="MA">MA</option>
			<option value="MG">MG</option>
			<option value="MS">MS</option>
			<option value="MT">MT</option>
			<option value="PA">PA</option>
			<option value="PB">PB</option>
			<option value="PE">PE</option>
			<option value="PI">PI</option>
			<option value="PR">PR</option>
			<option value="RJ">RJ</option>
			<option value="RN">RN</option>
			<option value="RS">RS</option>
			<option value="RO">RO</option>
			<option value="RR">RR</option>
			<option value="SC">SC</option>
			<option value="SE">SE</option>
			<option value="SP">SP</option>
			<option value="TO">TO</option> 
	    </select>
	  </div>
	</div>

	<!-- Text input-->
	<div class="form-group">
	  <label class="col-md-4 control-label" for="cidade">Cidade:</label>  
	  <div class="col-md-4">
	  <input id="cidade" name="cidade" placeholder="Cidade" class="form-control input-md" type="text">
	  <!--<span class="help-block">help</span>  -->
	  </div>
	</div>

	<!-- Text input-->
	<div class="form-group">
	  <label class="col-md-4 control-label" for="bairro">Bairro:</label>  
	  <div class="col-md-4">
	  <input id="bairro" name="bairro" placeholder="Bairro" class="form-control input-md" type="text">
	  <!--<span class="help-block">help</span>  -->
	  </div>
	</div>

	<legend>Perfil</legend>

	<!-- Textarea -->
	<div class="form-group">
	  <label class="col-md-4 control-label" for="formacao">Formação Acadêmica:</label>
	  <div class="col-md-4">                     
	    <textarea class="form-control" id="formacao" name="formacao" placeholder="Sua formação: Digite sua formação e logo abaixo onde cursou..."></textarea>
	  </div>
	</div>

	<!-- Textarea -->
	<div class="form-group">
	  <label class="col-md-4 control-label" for="objetivo">Objetivo Profissional:</label>
	  <div class="col-md-4">                     
	    <textarea class="form-control" id="objetivo" name="objetivo" placeholder="Descreva seu objetivo profissional."></textarea>
	  </div>
	</div>

	<!-- Textarea -->
	<div class="form-group">
	  <label class="col-md-4 control-label" for="perfil">Perfil Profissional:</label>
	  <div class="col-md-4">                     
	    <textarea class="form-control" id="perfil" name="perfil" placeholder="Responsável, Organizado, etc..."></textarea>
	  </div>
	</div>

	<!-- Textarea -->
	<div class="form-group">
	  <label class="col-md-4 control-label" for="cursos">Cursos:</label>
	  <div class="col-md-4">                     
	    <textarea class="form-control" id="cursos" name="cursos" placeholder="Quais cursos profissionalizantes já realizou?"></textarea>
	  </div>
	</div>

	<!-- Textarea -->
	<div class="form-group">
	  <label class="col-md-4 control-label" for="idioma">Idiomas:</label>
	  <div class="col-md-4">                     
	    <textarea class="form-control" id="idioma" name="idioma" placeholder="Idiomas? Iniciante, Intermediario ou Avançado?"></textarea>
	  </div>
	</div>

	<legend>Experiência Profissional</legend>

	<!-- Textarea -->
	<div class="form-group">
	  <label class="col-md-4 control-label" for="empresa1">Empresa1:</label>
	  <div class="col-md-4">                     
	    <textarea class="form-control" id="empresa1" name="empresa1" placeholder="Nome da Empresa; Cargo; Período; Descrição dos Serviços prestados"></textarea>
	  </div>
	</div>

	<!-- Textarea -->
	<div class="form-group">
	  <label class="col-md-4 control-label" for="empresa2">Empresa2:</label>
	  <div class="col-md-4">                     
	    <textarea class="form-control" id="empresa2" name="empresa2" placeholder="Nome da Empresa; Cargo; Período; Descrição dos Serviços prestados"></textarea>
	  </div>
	</div>

	<!-- Textarea -->
	<div class="form-group">
	  <label class="col-md-4 control-label" for="empresa3">Empresa3:</label>
	  <div class="col-md-4">                     
	    <textarea class="form-control" id="empresa3" name="empresa3" placeholder="Nome da Empresa; Cargo; Período; Descrição dos Serviços prestados"></textarea>
	  </div>
	</div>

	<!-- Textarea -->
	<div class="form-group">
	  <label class="col-md-4 control-label" for="empresa4">Empresa4:</label>
	  <div class="col-md-4">                     
	    <textarea class="form-control" id="empresa4" name="empresa4" placeholder="Nome da Empresa; Cargo; Período; Descrição dos Serviços prestados"></textarea>
	  </div>
	</div>

	<!-- Textarea -->
	<div class="form-group">
	  <label class="col-md-4 control-label" for="referencia">Referências:</label>
	  <div class="col-md-4">                     
	    <textarea class="form-control" id="referencia" name="referencia" placeholder="Informe Nome e Telefone de pessoas que possam falar com você"></textarea>
	  </div>
	</div>

	<!-- Textarea -->
	<div class="form-group">
	  <label class="col-md-4 control-label" for="adicionais">Informações Adicionais:</label>
	  <div class="col-md-4">                     
	    <textarea class="form-control" id="adicionais" name="adicionais" placeholder="Informações importantes para sua carreira, premiações, informações específicas da sua área, trabalhos voluntários, etc..."></textarea>
	  </div>
	</div>

	
	<div class="panel-footer text-center">
		<button type="reset" class="btn btn-secondary">Limpar</button>
 		<button type="submit" class="btn btn-success">Gerar Currículo</button>
	</div>
	

	</fieldset>
	</form>
    </div>
	</html>