app.controller('controllerLogin', function($scope,$http, $state, $location){
	
$("#txtRut").focus();

localStorage.clear();

$http.post('src/models/login.class.php',{ accion : 'cerrarSesion' })
			
	.success(function(data){
				
})




$scope.txtRut = "";
$scope.txtPassword = "";


//$scope.txtRut = "15215890-4";
//$scope.txtPassword = "0000";








$scope.validationOptions = {
	rules: {
		txtRut: {
			required: true
		},
		txtPassword: {
			required: true,
			minlength: 4,
			maxlength: 8
		}
	},
	messages: {
		txtRut: {
			required: "Ingrese su RUT sin digito verificador"
		},
		txtPassword: {
			required: "Ingrese su Contraseña",
			minlength: "Su contraseña debe tener una longitud mínima de 4 caracteres",
			maxlength: "Su contraseña no debe sobrepasar una longitud máxima de 8 caracteres"
		}
	}
}
	
	
$scope.verificarRut = function(){
	//alert(tipoDoc);
	
	//if(tipoDoc == 1){
		$('#txtRut').Rut({
			  on_error: function()
			  {
				$(swal("Mensaje!!!", "El RUT ingresado es Incorrecto...", "warning"));
				$("#txtRut").val("");
				$("#txtRut").focus();
			  },
			  format_on: 'keyup'
			});
			
		
		$('#txtRutSolicita').Rut({
			  on_error: function()
			  {
				$(swal("Mensaje!!!", "El RUT ingresado es Incorrecto...", "warning"));
				$("#txtRut").val("");
				$("#txtRut").focus();
			  },
			  format_on: 'keyup'
			});
	//}
}





	
	
$scope.entrar = function(form){	
	//alert("ingresando...");
	if(form.validate()){
		
		$('body').addClass('waitMe_body');
			
		var elem = $("<div class='waitMe_container img' ng-hide='eventos'><div class='fa-spin fa-5x'></div></div>");
		$('body').prepend(elem);
		
		setTimeout(function(){ 
				
			//$http.post('src/models/login.class.php',{ rut : $scope.txtRut , contrasena : $scope.txtPassword })
			$http.post('src/models/login.class.php',{ rut : $scope.txtRut , contrasena : $scope.txtPassword , accion : 'consultarLogin' })
			
			.success(function(data){
				
				
				console.log(data);				
				//console.log(String(data.tipo));
				//console.log(String(data.mensaje));
				//console.log(String(data.url));
				
				
				
				//return false;
					
					if(String(data.tipo) == "error"){
						data.mensaje=data.mensaje.replace('\r\n',' ');
						
						$scope.rsJSON = data.mensaje;
					
						$("#mensaje").html("<div class='alert alert-danger alert-dismissible fade in' role='alert' ng-hide='alertaError'>" +
											"<button type='button' class='close' data-dismiss='alert'><span aria-hidden='true'>×</span><span class='sr-only'>Cerrar</span></button>" +
											"<strong>Alerta!</strong> " + data.mensaje +"</div>");
											
						$scope.txtRut    = '';
						$scope.txtPassword = '';
							
						$("#txtRut").focus();
												
						
						return false;			
					}else{
						
						if((String(data.mensaje) == "null")){
							
							/*$("#mensaje").html("<div class='alert alert-warning alert-dismissible fade in' role='alert' ng-hide='alertaLoginError'>" +
												"<button type='button' class='close' data-dismiss='alert'><span aria-hidden='true'>×</span><span class='sr-only'>Cerrar</span></button>" +
												"<strong>Lo sentimos!</strong> Su Usuario o Contraseña estan incorrectos.</div>");*/
												
							swal("Mensaje!!!", "Lo sentimos! Su Usuario o Contraseña estan incorrectos.", "warning");					
												
							$scope.txtRut = "";
							$scope.txtPassword = "";
							
							$("#txtRut").focus();						
							
						}
						
						if((String(data.mensaje) == "0")){
							swal("Mensaje!!!", "El Usuario se encuentra Inactivo...!!!", "warning");						
						}
						
						if((String(data.mensaje) == "1")){						
							localStorage.clear();
							window.localStorage['yearNow'] = JSON.stringify(data.yearNow);
							window.localStorage['usuario'] = JSON.stringify(data);
							
							
							/*
							if(String(data.url) == 1){
								$state.go('inicio');
							}
							
							if(String(data.url) == 2){
								$state.go('inspecciones');
							}
							*/
							
							$state.go('inicio');
							
						}
				}		
			})	
			
			$('body.waitMe_body').find('.waitMe_container:not([data-waitme_id])').remove();
			$('body.waitMe_body').removeClass('waitMe_body hideMe');
			
		},500);	
			
	}
};











$scope.validaSolicitaCuenta = {
		rules: {
			txtRutSolicita: {
				required: true
			},			
			txtNombresSolicita: {
				required: true
			},	
			txtApellidoPaternoSolicita: {
				required: true
			},		
			txtApellidoMaternoSolicita: {
				required: true
			},	
			txtPasswordSolicita: {
				required: true,
				minlength: 4,
				maxlength: 8
			},				
			txtRepitaPasswordSolicita: {
				required: true,
				minlength: 4,
				maxlength: 8,
				equalTo: "#txtPasswordSolicita"
			},
			txtEmailSolicita: {
        required: true,
        email: true
    	}
		},
		messages: {
			txtRutSolicita: {
				required: "Ingrese su RUT."
			},
			txtNombresSolicita: {
				required: "Ingrese sus nombres."
			},
			txtApellidoPaternoSolicita: {
				required: "Ingrese su apellido paterno."
			},
			txtApellidoMaternoSolicita: {
				required: "Ingrese su apellido materno."
			},
			txtPasswordSolicita: {
				required: "Debe Ingresar una contraseña.",
				minlength: "Su contraseña debe tener una longitud mínima de 4 caracteres",
				maxlength: "Su contraseña no debe sobrepasar una longitud máxima de 8 caracteres"
			},
			txtRepitaPasswordSolicita: {
				required: "Vuelva a ingresar su contraseña.",
				minlength: "Su contraseña debe tener una longitud mínima de 4 caracteres",
				maxlength: "Su contraseña no debe sobrepasar una longitud máxima de 8 caracteres",
				equalTo: "Repita Contraseña (Debe ser igual a la ingresada)"
			},
			txtEmailSolicita: {
				required: "Ingrese un email válido."
			}
		}
}
	
	
	
	
	

$scope.SolicitaCuenta = function(form){
	//alert("Solicita Cuenta de Usuario");
	
	if(form.validate()){
		
		
		
	}
	
}








$scope.validaRestableceCuenta = {
		rules: {
			txtEmailRestablece: {
        required: true,
        email: true
    	}
		},
		messages: {
			txtEmailRestablece: {
				required: "Ingrese un email válido"
			}
		}
}

$scope.RestableceCuenta = function(form){
	//alert("Restablece Cuenta de Usuario");
	
	if(form.validate()){
		
		
		
		
	}

}













	
});

	
		
			
			




