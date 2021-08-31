//app.controller('controllerCambioClave', function($http, $scope, $state){
	
app.controller('controllerAdministracion', ['$scope', '$http', '$localStorage', '$location', '$state', '$filter',function($scope, 
									$http, 
									$localStorage, 
									$location,
									$state, 
									$filter){




















      
$('body').addClass('waitMe_body');
		var elem = $("<div class='waitMe_container img' ng-hide='eventos'><div class='fa-spin fa-5x'></div></div>");
		$('body').prepend(elem);
		
		setTimeout(function(){ 
			//$http.post('src/models/sql/perfilUsuario.class.php',{ accion: 'sesion_usuario' })	
			
			//$http.post('src/models/usuario.class.php',{ action: 'sesion_usuario' })	
			$http.post('src/models/login.class.php',{ accion 		: 'sesion_usuario', pagina : 'Administracion'})
																																		   
			.success(function(response){	

					console.log(response);
					
					if(response.session == "0"){
						
						$state.go('login');
						
					}else{
						
						if(response.acceso_url == "1"){
						
							$scope.usuario = response.sesion_usuario;
							
							if (!(localStorage.getItem("idCentroOperacion"))) {
							  //$scope.listarCentroOperacion();
							  $state.go('login');
							}else{
								$scope.CentroOperacion = localStorage.getItem("CentroOperacion");
								$scope.centroOperacionPorDefecto = localStorage.getItem("idCentroOperacion");
								
							}
							
							$http.post('src/models/menu.class.php',{ action : 'listarMenuHTML', pagina : 'Cambio de Clave'})
							
							/*
							$http.post('src/models/menu.class.php?action=listarMenuHTML',{pagina: 'Eventos',
																														    						idUsuario: 2})
							*/
							
							.success(function(response){
								//console.log(response);
								
								$("#menu").html(response);
								
							})	
							
							window.localStorage.setItem("backURL", 'cambioclave');
							
						
						}else{
							
							swal({title: "Mensaje!!!", text: "No tiene permisos para acceder a esta pagina... !!!", type: "warning"});
							
							//$state.go('login');
							
							$state.go(window.localStorage.getItem('backURL'));
						
						}
						
						
					}
					
					$('body.waitMe_body').find('.waitMe_container:not([data-waitme_id])').remove();
					$('body.waitMe_body').removeClass('waitMe_body hideMe');
					
												
			});		
		},0000);
		
		
		
		
		
		
		
/*		
setTimeout(function(){ 
	
	$http.post('src/models/menu.class.php?action=listarMenuHTML',{pagina: 'Cambio de Clave',
																															idUsuario: 2})
		.success(function(response){
			//console.log(response);
			$("#menu").html(response);
		}
	)
	
},0000);





$('body').addClass('waitMe_body');
var elem = $("<div class='waitMe_container img' ng-hide='eventos'><div class='fa-spin fa-5x'></div></div>");
$('body').prepend(elem);

setTimeout(function(){ 
	$http.post('src/models/eventos.class.php',{action: 'sesion_usuario'})	
															   
	.success(function(response){	
			
		$scope.usuario = response;
		
			$('body.waitMe_body').find('.waitMe_container:not([data-waitme_id])').remove();
			$('body.waitMe_body').removeClass('waitMe_body hideMe');
										
	});		
},0000);
*/













$scope.validaFormCambioClaveUsuario = {
	rules: {		
		txtContrasenaActual: {
			required: true,
			minlength: 4,
			maxlength: 8
		},
		txtContrasenaNueva: {
			required: true,
			minlength: 4,
			maxlength: 8
		},
		txtRepitaContrasenaNueva: {
			required: true,
			minlength: 4,
			maxlength: 8,
			equalTo: "#txtContrasenaNueva"
		}
	},
	messages: {				
		txtContrasenaActual: {
			required: "Debe Ingresar su Contrase\361a Actual",
			minlength: "Su contrase\361a debe tener una longitud m\355nima de 4 caracteres",
			maxlength: "Su contrase\361a no debe sobrepasar una longitud m\341xima de 8 caracteres"
		},
		txtContrasenaNueva: {
			required: "Debe Ingresar una Contrase\361a",
			minlength: "Su contrase\361a debe tener una longitud m\355nima de 4 caracteres",
			maxlength: "Su contrase\361a no debe sobrepasar una longitud m\341xima de 8 caracteres"
		},
		txtRepitaContrasenaNueva: {
			required: "Debe Ingresar una Contrase\361a",
			minlength: "Su contrase\361a debe tener una longitud m\355nima de 4 caracteres",
			maxlength: "Su contrase\361a no debe sobrepasar una longitud m\341xima de 8 caracteres",
			equalTo: "Repita Contrase\361a (Debe ser igual a la nueva contrase\361a)"
		}
	}
}




$scope.cambioClave = function(form){	
		
		//alert("cambiando clave...");
		  
		if(form.validate()){
																		  															
			$http.post('src/models/usuario.class.php',{ action 											: 'cambioClave',
																									txtContrasenaActual 				: $scope.txtContrasenaActual,
																									txtContrasenaNueva 				: $scope.txtContrasenaNueva})
			
			
																		   																					
			.success(function(response){
				
				console.log(response);
				//return false;
				
				if(response.tipo == 'ok'){
					
					if(response.commit == '1'){
						
						//$(swal("Mensaje!!!", "Usuario ha sido editado!!!", "success"));
						swal({title: "Mensaje!!!",
						  text: "La Clave ha sido Modificada...!!!",
						  type: "success",   
						  showCancelButton: false,
						  //confirmButtonColor: "#DD6B55",
						  confirmButtonText: "Aceptar",
						  cancelButtonText: "Cancelar",
						  closeOnConfirm: true,
						  closeOnCancel: true },
				
						  function(isConfirm){
							if(isConfirm){
								
								$scope.$apply(function() {								
								  	$state.go('login');
									//$location.path('/usuarios');
								});	
							}							
						 }
						 
						);
						
					}
					
					if(response.commit=='0'){
						$(swal("Mensaje!!!", "No hubo cambios realizados!", "info"));
						$scope.loading = true;
					}
					
					
					if(response.commit=='2'){
						$(swal("Mensaje!!!", "La Contrase\361a Actual no coincide con la ingresada!", "warning"));
						$scope.loading = true;
					}
					
					
				}else{
					swal("Mensaje!!!", response.mensaje, "error");
	
				}
					
			})
		}else{
		  console.log("1111");
		  return false;	
		}

}























	
}]);



