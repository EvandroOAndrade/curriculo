'use strict';

FormData.prototype.Fappend = function (name, elem) {

	if(typeof elem === "string" ||typeof elem === "number" || typeof elem === "boolean")
		this.append(name, elem);
	else
		for(var i in elem)
			typeof elem[i] == "object" ? append(this, name+"["+i+"]", elem[i]) : this.append(name+"["+i+"]", elem[i]);
			
	return this;
}

function Global() {

    this.site_url = function(value){

        this.site_url = value;
    }

    /** 
     * Decodifica uma string HTML.
     *
     * @function
     * @name decode 
     * @param {String} VALUE
     * @return String
     */

    this.decode = function (value) {

        return value.replace("&Agrave;", unescape("%C0"))
        .replace("&Aacute;", unescape("%C1"))
        .replace("&Acirc;", unescape("%C2"))
        .replace("&Atilde;", unescape("%C3"))
        .replace("&Auml;"  , unescape("%C4"))
        .replace("&Ccedil;", unescape("%C7"))
        .replace("&Egrave;", unescape("%C8"))
        .replace("&Eacute;", unescape("%C9"))
        .replace("&Ecirc;", unescape("%CA"))
        .replace("&Euml;", unescape("%CB"))
        .replace("&Igrave;", unescape("%CC"))
        .replace("&Iacute;", unescape("%CD"))
        .replace("&Icirc;", unescape("%CE")) 
        .replace("&Iuml;", unescape("%CF"))
        .replace("&Ntilde;", unescape("%D1"))
        .replace("&Ograve;", unescape("%D2"))
        .replace("&Oacute;", unescape("%D3"))
        .replace("&Ocirc;", unescape("%D4"))
        .replace("&Otilde;", unescape("%D5"))
        .replace("&Ouml;", unescape("%D6"))
        .replace("&Ugrave;", unescape("%D9"))
        .replace("&Uacute;", unescape("%DA"))
        .replace("&Ucirc;", unescape("%DB"))
        .replace("&Uuml;", unescape("%DC"))
        .replace("&Yacute;", unescape("%DD"))
        .replace("&agrave;", unescape("%E0"))
        .replace("&aacute;", unescape("%E1"))
        .replace("&acirc;" , unescape("%E2"))
        .replace("&atilde;", unescape("%E3"))
        .replace("&auml;", unescape("%E4"))
        .replace("&ccedil;", unescape("%E7"))
        .replace("&egrave;", unescape("%E8"))
        .replace("&eacute;", unescape("%E9"))
        .replace("&ecirc;", unescape("%EA"))
        .replace("&euml;", unescape("%EB"))
        .replace("&igrave;",unescape("%EC"))
        .replace("&iacute;",unescape("%ED"))
        .replace("&icirc;",unescape("%EE"))
        .replace("&iuml;",unescape("%EF"))
        .replace("&ntilde;",unescape("%F1"))
        .replace("&ograve;",unescape("%F2"))
        .replace("&oacute;",unescape("%F3"))
        .replace("&ocirc;",unescape("%F4"))
        .replace("&otilde;",unescape("%F5"))
        .replace("&ouml;",unescape("%F6"))
        .replace("&ugrave;",unescape("%F9"))
        .replace("&uacute;",unescape("%FA"))
        .replace("&ucirc;",unescape("%FB"))
        .replace("&uuml;",unescape("%FC"))
        .replace("&yacute;",unescape("%FD"))
        .replace("&yuml;",unescape("%FF"))
        .replace("&Yuml;",unescape("%u0178"))
        .replace("&ccedil;",unescape("%E7"))
        .replace("&Ccedil;",unescape("%C7"))
    }
    
    /**
    * Esconde as listas e tabelas se não existirem tr ou li visiveis.
    *
    * @function
    * @name handleEmptyLists 
    */
     
    this.handleEmptyLists = function() {

        $(".not-found").each(function(){

            $(this).parent("div").find("table, ul").show();

            if($(this).parent("div").find("table tbody tr, ul li").filter(":visible").length) {
                $(this).hide();
            } else {
                $(this).show();
                $(this).parent("div").find("table, ul").hide();
            }
        });
    };
    
    /**
    * Recarrega a página.
    *
    * @function
    * @name reloadDefault 
    */
    
    this.reloadDefault = function() {

        setTimeout(function (){location.reload(true)}, 1500);
    };

    /**
     * Função que exibe ou encerra a animação de loading o nome do navegador atual na página.
     *
     * @function
     * @name loading 
     * @param {bool} show True para exibir, False para encerrar
     */

    this.loading = function (show) {

        if(show)
            $(".loading").stop(true,true,true).fadeIn(100);
        else
            $(".loading").stop(true,true,true).fadeOut(300);
    }

    /**
     * Função que exibe uma mensagem passada por parâmetro na página com um alert do javascript e executa uma função de callback, se existir.
     *
     * @function
     * @name showMessage 
     * @param {string} message.
     * @param {function} callback.
     */

    this.showMessage = function (message, callback) {

        alert($g.decode(message));
        
        if(typeof(callback) === "function")
            callback.call();
    }

    /**
     * Função que exibe uma mensagem passada por parâmetro na página com um modal do bootstrap e executa uma função de callback, se existir.
     *
     * @function
     * @name showModal 
     * @param {string} element.
     * @param {string} title.
     * @param {string} message.
     * @param {function} callback.
     */

    this.showModal = function (message, element, callback) {

        $(element).find(".modal-body").html(message);
        $(element).modal("show");

        if(typeof(callback) === "function")
           $(element).on("hide.bs.modal", callback);
    }
	
	this.showBootstrapNotify = function (message, type, callback) {

        if (type === true){
            type = "success";
        }

        if (type === false){
            type = "danger";
        }

		$.notify(
			{
				message: message,
			},
			{
				type:type,

				placement: {
					from: "top",
					align: "center"
				},
				
				z_index: 1060
			}
		);

        if(typeof(callback) === "function") {
            callback.call();
        }
    }
	
	this.confirm = function(element, options, callback){
		
		var configs = {
			
			title 	: "",
			message : ""
		};
		
		if(typeof options == "string")
			options = {message : options};

		$.extend(true, configs, options);
		
		if(configs.message.length)
			$(element).find(".modal-body").html(configs.message);
		
		if(configs.title.length)
			$(element).find(".dialog-title").html(configs.title);
		
		$(element).find("button[data-type=confirm], button[data-type=cancel]").off();
		
		$(element).find("button[data-type=confirm], button[data-type=cancel]").click(function(){
			
			callback.call(undefined, $(this).attr("data-type") == "confirm");
		});
		
		$(element).modal("show");
	};
    
    /**
    * Aplica formatações especiais em campos de um formulário.
    *
    * @function
    * @param form
    * @name formDefault 
    */
    
    this.formDefault = function(form) {
		
		if(form === undefined)
            form = $("form");
    
        $(form).find("input, textarea").filter(":not([type=file])").on("blur, change", function() {
            $(this).val($(this).val().trim());
        });
        
        // Moeda
        
        $(form).find("input.currency, td.currency").keypress(function(event){

           var key = parseInt(event.keyCode || event.which);

           return ((key >= 47 && key <= 57) || key == 8 || key == 44 || key == 46 || key == 13 || (key >= 37 && key <= 40) || (key == 118 && event.ctrlKey) || event.key == "Del")

        }).on("focusout change", function(event){

			if(event.type == "focusout" && event.target.value != undefined)
				return false;

			var value = $(this).val() || $(this).text();

            value = value.replace(/[^0-9\,\.]/g , "").replace(/\./g , ",");

            while(value.indexOf(",") != value.lastIndexOf(","))
                value = value.replace(/\,/ , "");

            if(value.indexOf(",") < 0)
                value = value+",00";
                
            var v1 = value.split(",")[0].length ? parseInt(value.split(",")[0]) : 0;
            var v2 = value.split(",")[1].length ? value.split(",")[1] : "00";

            if(v2.toString().length < 2)
                v2 = parseInt(v2)+"0";
            else if(v2.toString().length > 2)
                v2 = v2.toString().substr(0, 2);
			
			value = v1+","+v2;

			event.target.value != undefined ? $(this).val(value) : $(this).text(value);
        });

        $(form).find('input.number, input[type=number]').keypress(function(event) {
        
            var key = event.keyCode || event.which;

            if((key < 48 || key > 57) && key != 13)
                return false;
				
        }).on("change, blur", function(){
        
            $(this).val($(this).val().replace(/[^0-9]/g, ""));
        });
        
        $(form).on("change", "select, textarea, input", function() {

            $(this).closest('.form-group').removeClass('has-error');
        });
    };
    
    /**
    * Aplica uma validação no formulário com mensagens do alert do bootstrap, em caso de erro.
    *
    * @function
    * @param form
    * @name formBootstrapValidation
    @ @return Boolean
    */
    
    this.formBootstrapValidation = function (form) {
    
        $(form).find('.form-group').removeClass('has-error');

        var envia = true;
        
        $(form).find('input, textarea, select').not(":hidden").each(function() {
            
            if($(this).closest(".form-group").attr('data-required') != undefined) {
                
                if((($(this).attr('type') == 'radio' || $(this).attr('type') == 'checkbox') && !$("input[name='"+ $(this).attr('name') +"']:checked").length) ||
                (
                    (
                                $(this).attr('type')         == 'text'
                                ||$(this).attr('type')         == 'email'
                                ||$(this).attr('type')         == 'url'
                                ||$(this).attr('type')         == 'file'
                                ||$(this).attr('type')         == 'number'
                                ||$(this).attr('type')         == 'password'
                                ||$(this).prop('type')         == 'textarea'
                                ||$(this).prop('type')         == 'select-one'
                                ||$(this).hasClass('date')
                                ||$(this).hasClass('time')
                                ||$(this).hasClass('datetime')
                            )
                        
                            && !$(this).val().length
                        )
                    )
                {
                    inputError(this, $(this).closest(".form-group").attr("data-required"));
                    envia = false;
                    return false;
                }
            }
                
            if(!validateInput(this)) {
            
                inputError(this, $(this).closest(".form-group").attr("data-invalid"));
                envia = false;
                return false;
            }
        });
    
        return envia;
    }
    
    /**
    * Adiciona mask em um inputs.
    *
    * @function
    * @param element Especifica os elementos para serem adicionados a máscara. se não especificado, aplica em todos os campos.
    * @name maskInputs
    */
    
    this.maskInputs = function (element) {
    
        if(element === undefined)
            element = $("*");
            
        $(element).filter('.datetime').mask("99/99/9999 99:99");
        $(element).filter('.time').mask("99:99");
        $(element).filter('.date').mask("99/99/9999");
        $(element).filter('.tel').mask("(99) 9999-9999?9");
		$(element).filter('.0800').mask("9999 999 9999");
        $(element).filter('.cpf').mask("999.999.999-99");
		$(element).filter('.cep').mask("99999-999");
		$(element).filter('.rg').mask("99 99 99 99 99");

    }
    
    /**
    * Adiciona os picker de date e time em um ou mais campos.
    *
    * @function
    * @param element Especifica os elementos paraa serem adicionados o picker. se não especificado, aplica em todos os campos.
    * @name addPicker
    */

    this.addPicker = function (element) {
    
        if(element === undefined)
            element = $("*");
        
        $(element).filter('.date').datetimepicker({
            pickTime: false,
            language: "pt-br"
        });
    
        $(element).filter('.time').datetimepicker({
            pickDate: false,
            language: "pt-br"
        });
        
        $(element).filter('.datetime').datetimepicker({
            language: "pt-br"
        });
    }
    
    /**
    * Adiciona um objeto em um FormData
    *
    * @function
    * @param formData
    * @param object
    * @name formDataAppend
    * @return FormData
    */
    
    this.formDataAppend = function (formData, object) {

        for(var i in object) {

            if(typeof object[i] == "object") {

                if(object[i].length == undefined)
                    object[i] = Array(object[i]);
                    
                for(var j in object[i]) {

                    if(typeof object[i][j] == "object") {
                    
                        for(var k in object[i][j])
                            formData.append(i+"["+j+"]["+k+"]", object[i][j][k]);
                            
                    } else { 

                        formData.append(i+"[]", object[i][j]);
                    }
                }
            } else 
                formData.append(i, object[i]);
        }
        
        return formData;
    }
    
    /** 
     * Retorna os dias, horas, minutos e segundos de diferença entre uma data maior e uma data menor.
     *
     * @function
     * @name subDates 
     * @param {Date Object} date1 Data maior
     * @param {Date Object} date2 Data menor
     * @return Object
     */

    this.subDates = function (date1, date2) {
    
        var date2        = date2.getTime();
        var date1           = date1.getTime();
        var dateDiff     = Math.abs(date1 - date2);
        var result         = {}

        if(date2 > date1)
            return false;
        
        result.dias  = parseInt(dateDiff / convert(1, "day"));
        
        result.horas = parseInt((dateDiff - convert(result.dias, "day")) / convert(1, "hour"));
        
        result.min   = parseInt((dateDiff - convert(result.dias, "day") - convert(result.horas, "hour")) / convert(1, "min"));
        
        result.seg   = parseInt((dateDiff - convert(result.dias, "day") - convert(result.horas, "hour") - convert(result.min, "min")) / convert(1, "seg"));
        
        return result;
        
        function convert(value, type) {
        
            switch(type) {
                case "day"         : return value * 86400000;
                case "hour"     : return value * 3600000;
                case "min"         : return value * 60000;
                case "seg"         : return value * 1000;
            }
        }
    }
	
	this.initForms = function (options) {
		
		$("form[data-global]").each(function(){
			
			var funcs = $(this).attr("data-global").split(" ");
			var confirmSubmit = false;
			
			options 	= options || {};
			var configs = {callback : {success : $g.reloadDefault}, message : {type : "notify"}};
			
			 if(typeof(options) === "object")
				$.extend(true, configs, options);
			
			if(funcs.indexOf("confirm") >= 0)
				confirmSubmit = true;
			
			if(funcs.indexOf("formdefault") >= 0)
				$g.formDefault(this);
			
			if(funcs.indexOf("maskinputs") >= 0)
				$g.maskInputs($(this).find("input"));
			
			if(funcs.indexOf("addpicker") >= 0)
				$g.addPicker($(this).find("input"));

			if(funcs.indexOf("submit-bootstrap") >= 0) {

				$(this).submit(function(){

					if(!$g.formBootstrapValidation(this))
						return false;
					
					if(confirmSubmit) {
						
						var form = this;
						
						$g.confirm("#confirm-dialog", {message :"Deseja realmente enviar este formulário?"}, function (response){
							
							if(response)
								$g.send(form, configs);
						});
						
					}else
						$g.send(this, configs);
					
					return false;
				});
			}
			
			if(funcs.indexOf("submit-default") >= 0) {
				
				$(this).submit(function(){

					if(confirmSubmit) {
						
						var form = this;
						
						$g.confirm("#confirm-dialog", "Deseja realmente enviar este formulário?", function (response){
							
							if(response)
								$g.send(form, configs);
						});
						
					}else
						$g.send(this, configs);
					
					return false;
				});
			}
		});
	}

    /**
     * Função que envia dados para o servidor de um form ou FormData.
     *
     * Aceita HTML
     *
     * Se form for do tipo form, é necessario que form possua os atributos action e method ou é obrigatorio informar os parâmetros url e method.
     *
     * @function
     * @name send 
     * @param {Object} form.
     * @param {String} url.
     * @param {String} method.
     * @param {Object} options options = {callback : {success : function, fail : function}, url : "url do form", method : "post", loading : true, alertify : true}.
     */
     
    this.send = function (form, options) {

        var $ajax   = {};

        var configs = {

            'callback' : {
                success  : function () {},
                fail     : function () {},
            },
            
            'progressbar' : {
                element  : null,
                delay    : 2000,
            },
            
            'url'      : '',
            
            'method'   : "POST",
            
            'loading'  : true,
			
			'message'	: {
				
				type 	: 'alert', /* types: alert (alert javascript), modal, notify, false (nao exibir mensagem) */
                element : null,
			},

            'opt_data' : false,
        };
        
        if(typeof(options) === "object")
            $.extend(true, configs, options);
            
        $ajax.method     = configs.method;
        
        if(form.constructor.name == "FormData" || $(form).prop("tagName") !== undefined) {
        
            $ajax.processData     = false;
            $ajax.contentType     = false;
            $ajax.data             = form;

            if($(form).prop("tagName") !== undefined){

                $(form).attr("enctype", "multipart/form-data");
                $ajax.method     = $(form).attr("method");
                $ajax.url        = $(form).attr("action");
                $ajax.data       = new FormData($(form).get(0));
            }
            
            if(typeof configs.opt_data == "object")
                $g.formDataAppend($ajax.data, configs.opt_data);

        } else {
        
            $ajax.data = typeof form == "object" ? form : {};

            if(typeof configs.opt_data == "object")
                $.extend($ajax.data, configs.opt_data)
        }
        
        if(configs.url.length == undefined || configs.url.length)
            $ajax.url = configs.url;
        
        if($ajax.url == undefined || !$ajax.url.length) {
            console.log("url is not set");
            return false;
        }        
        
        $ajax.beforeSend = function() {

            if(configs.loading)
                $g.loading(true);
        };

        $ajax.success = function(data) {

            try {
                data = JSON.parse(data);
            }
            catch (err) {
            }
            
            if(data.message === undefined) {
                
                var json     = data;
                data         = {};
                
                data.message = json.toString();
                
                if(json == "true")
                    data.success = true;
                else
                    data.success = false;
            }
			
			var callback_type = data.success ? "success" : "fail";
			
			if(data.id != undefined && data.id != null) {

				var tmp = configs.callback[callback_type];
				
				configs.callback[callback_type] = function(){
					
					tmp.call(undefined, data.id);
				};
			}
			
			if(data.message === null)
				configs.callback[callback_type].call();
			else {

				switch (configs.message.type) {

					case "notify" 	: $g.showBootstrapNotify(data.message, data.success ? "success" : "danger", configs.callback[callback_type]);break;
					
					case "modal"  	: $g.showModal(data.message, configs.message.element, configs.callback[callback_type]);break;

					case "alert"	: $g.showMessage(data.message, configs.callback[callback_type]);break;
					
					default 		: configs.callback[callback_type].call();
				}
			}
        };
        
        if(configs.progressbar.element != null) {
        
            $(configs.progressbar.element).closest(".progress").slideDown();
        
            $ajax.xhr = function() {
            
                var xhr = new window.XMLHttpRequest();
                
                try {
                    xhr.upload.addEventListener("progress", function(evt)
                    {
                        if (evt.lengthComputable)
                            $(configs.progressbar.element).css("width", Math.round(evt.loaded/evt.total*100)+"%");
                    },false);
                    
                    xhr.onload = function (ev)    {
                    
                        $(configs.progressbar.element).closest(".progress").delay(configs.progressbar.delay).slideUp(function() {
                        
                            $(configs.progressbar.element).css("width", "0");
                        });
                    };

                    return xhr;
                }
                catch(err){}
            };
        }
        
        $ajax.error = function(xhr, textStatus, errorThrown) {

			console.log(arguments[0]["responseText"]);
			alert("Ocorreu um erro nesta operação.");
			
			if(location.hostname.indexOf("localhost") >= 0) {
				
				var w= window.open();
				w.document.write(arguments[0]["responseText"]);
			}
        };
        
        $ajax.complete = function(data) {

            $g.loading(false);
        };

        try {
            $.ajax($ajax);
        }
        catch(err) {
            console.log(err)
        }
    }



    this.redirect = function (location, time, new_tab = false){

        var path  = this.site_url + location;
        
        setTimeout(function(){

            if (new_tab)  
                window.open(path, null);
            else 
                window.location.href = path;
           
        },time);
    }

    this.funcao_ajax = function (location, dados, resposta){

        var $ajax = {};

        $ajax.method = "POST";

        if (dados != null){
            $ajax.data = dados;
        }
        $ajax.url = this.site_url + location;

        console.log(this.site_url);

        $ajax.dataType  = "json";
        $ajax.complete = function(resp){
            resposta(resp.responseJSON);
        }

        resposta;

        try {
            $.ajax($ajax);
        }
        catch(err) {
            console.log(err);
        }
    }

    this.debug_element = function (element){
        window.debug_elem = element;
        console.log(window.debug_elem);
    }
	
	/* ==================================== PRIVATE FUNCTIONS ==================================== */
	
	/**
    * Mostra um alert e marca o campo que consta o erro.
    *
    * @function
    * @param input
    * @param msg
    * @name inputError
    */
    
    var inputError = function (input, msg) {
    
        var formGroup = $(input).closest('.form-group');

        $(input).focus();
        formGroup.addClass('has-error');
		
		if(typeof alertify != "undefined")
			alertify.error(msg || "Valor incorreto");
		else if(typeof $.notify != "undefined")
			$g.showBootstrapNotify((msg || "Valor incorreto"), "danger");

        $("html, body").delay(1000).animate({ scrollTop: $(input).offset().top-120 }, 500);        
    }
    
    /**
    * Valida um input
    *
    * @function
    * @param input
    * @name validateInput
    * @return Boolean
    */
    
    var validateInput = function (input) {

        input = $(input);
        var value = input.val();

        if(input.attr('type') == 'email' && value.length && !testEmail(value))
            return false;
            
        if(input.hasClass('date') && value.length && !testDate(value))
            return false;
            
        if(input.hasClass('time') && value.length && !testTime(value))
            return false;
            
        if(input.hasClass('datetime') && value.length && !testDatetime(value))
            return false;
            
        if((input.attr('type') == 'number' || input.hasClass('number')) && value.length && !testNumber(value))
            return false;
            
        return  true;
    }
    
    /**
    * Valida um email
    *
    * @function
    * @param value
    * @name testEmail
    * @return Boolean
    */
    
    var testEmail = function (value) {

        try {
        
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
        }
        catch(error) {
        
            return false;
        }
    }
    
    /**
    * Valida uma data
    *
    * @function
    * @param value
    * @name testDate
    * @return Boolean
    */
    
    var testDate = function (value) {

        try {
        
            return value.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/) && checkdate((value.split("/"))[0], ((value.split("/"))[1]), ((value.split("/"))[2]));
        }
        catch(error) {
        
            return false;
        }
    }
    
    /**
    * Valida um horário
    *
    * @function
    * @param value
    * @name testTime
    * @return Boolean
    */
    
    var testTime = function (value) {

        try {
        
            return /^([0-9]{2})\:([0-9]{2})$/g.test(value) && parseInt((value.split(":"))[0]) < 24 && parseInt((value.split(":"))[1]) < 60
        }
        catch(error) {
        
            return false;
        }
    }
    
    /**
    * Valida uma data com horário
    *
    * @function
    * @param value
    * @name testDatetime
    * @return Boolean
    */
    
    var testDatetime = function (value) {

        try {
            
            return value.indexOf(" ") >= 0 && testDate((value.split(" "))[0]) && testTime((value.split(" "))[1])
        }
        catch(error) {
        
            console.log(error);
        
            return false;
        }
    }
    
    /**
    * Valida um número
    *
    * @function
    * @param value
    * @name testNumber
    * @return Boolean
    */
    
    var testNumber = function (value) {

        try {
        
            return /\d$/g.test(value);
        }
        catch(error) {
        
            return false;
        }
    }
    
    /**
    * Verifica se o dia, mês e ano existem no calendário
    *
    * @function
    * @param d
    * @param m
    * @param y
    * @name checkdate
    * @return Boolean
    */
    
    var checkdate = function (d, m, y) {

      return m > 0 && m < 13 && y > 0 && y < 32768 && d > 0 && d <= (new Date(y, m, 0)).getDate();
    }

    
}

var $g = new Global();