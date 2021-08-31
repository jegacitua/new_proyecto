app.controller('controllerEditarTicket', ['$scope', 'serviceUploadFile', '$http', '$localStorage', '$location', '$state', '$timeout',function($scope, 
									serviceUploadFile,
									$http,
									$localStorage, 
									$location,
									$state,
									$timeout){
										
										
										
										


$scope.convertToInt = function(id){
    return parseInt(id, 10);
};	


		
				
				
//$scope.cmbFiltroYears = JSON.parse(window.localStorage.getItem('yearNow'));
var f = new Date();
$scope.cmbFiltroYears = JSON.stringify(f.getFullYear());




      
$('body').addClass('waitMe_body');
var elem = $("<div class='waitMe_container img' ng-hide='eventos'><div class='fa-spin fa-5x'></div></div>");
$('body').prepend(elem);

setTimeout(function(){ 
	//$http.post('src/models/sql/perfilUsuario.class.php',{ accion: 'sesion_usuario' })	
	
	//$http.post('src/models/usuario.class.php',{ action: 'sesion_usuario' })	
	$http.post('src/models/login.class.php',{ accion 		: 'sesion_usuario', pagina : 'Ingreso Vehiculo'})
																																   
	.success(function(response){	

			console.log(response);

			
			if(response.session == "0"){
				
				$state.go('login');
				
			}else{
				
				if(response.acceso_url == "1"){
					
					
					$scope.sesionUsuario = response.sesion_usuario;
					
					if (!(localStorage.getItem("idCentroOperacion"))) {
					  //$scope.listarCentroOperacion();
					  $state.go('login');
					}else{
						$scope.CentroOperacion = localStorage.getItem("CentroOperacion");
						$scope.centroOperacionPorDefecto = localStorage.getItem("idCentroOperacion");
						
					}
					
					//$scope.centroOperacion = 
					
					$http.post('src/models/ingresoVehiculo.class.php',{ action : 'listarCentroOperacion'})
					.success(function(response){
						
						console.log(response);
						
						$scope.centroOperacion = response.data.centroOperacion;
						
						//alert($scope.centroOperacion.length);

						if($scope.centroOperacion.length == 1){
						
								$scope.centroOperacionPorDefecto = $scope.centroOperacion[0].ID_CENTRO_OPERACION;
								
								$('#cmbLugarEvento').attr('disabled', 'disabled');
								
								angular.element('#txtPatente').focus()
								
						}
						
						angular.element('#txtPatente').focus()
						
					})
					
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





        

































$scope.ListarEventos = function(){
	
	$('body').addClass('waitMe_body');
	
	var elem = $("<div class='waitMe_container img' ng-hide='eventos'><div class='fa-spin fa-5x'></div></div>");
	$('body').prepend(elem);
	
	setTimeout(function(){ 	
		
		$http.post('src/models/eventos.class.php',{ action : 'cargarYears' })
			.success(function(response){
				
				console.log(response);
				//console.log(String(response.success));
				//return false;
				
				if(String(response.success) == "error"){
					//alert("1");
					response.mensaje=response.mensaje.replace('\r\n',' ');
					
					$scope.rsJSON = response.mensaje;
				
					$("#mensaje").html("<div class='alert alert-danger alert-dismissible fade in' role='alert' ng-hide='alertaError'>" +
										"<button type='button' class='close' data-dismiss='alert'><span aria-hidden='true'>×</span><span class='sr-only'>Cerrar</span></button>" +
										"<strong>Alerta!</strong> " + response.mensaje +"</div>");
				}else{
					//alert("2");
					if(response.contador > 0){
						$scope.years = response.data.years;	
						
						$scope.listarEventos();
						
					}else{
						
						$scope.listarEventos();
						
						$scope.years = "";
			        
						swal({title: "Mensaje!!!", text: "No existen datos para mostrar... !!! Revise si el usuario tiene File Asignados.", type: "info"});
						
					}
				}
				
				$('body.waitMe_body').find('.waitMe_container:not([data-waitme_id])').remove();
				$('body.waitMe_body').removeClass('waitMe_body hideMe');
		
		});
			
	},0000);
	
}


$scope.NuevoEvento = function(){
	
	$('body').addClass('waitMe_body');
	var elem = $("<div class='waitMe_container img' ng-hide='eventos'><div class='fa-spin fa-5x'></div></div>");
	$('body').prepend(elem);
	
	setTimeout(function(){ 
		$http.post('src/models/eventos.class.php',{ action: 'cargarZonas_insertar' })	
																   
		.success(function(response){	
			if(response.contador > 0){
			
				$scope.grupozona = response.data.grupozona;
				
				$('body.waitMe_body').find('.waitMe_container:not([data-waitme_id])').remove();
				$('body.waitMe_body').removeClass('waitMe_body hideMe');
				
			}else{
				
				swal({title: "Mensaje!!!", text: "No existen Zonas para mostrar... !!! Revise si el usuario tiene File Asignados.", type: "info"});
				
			}		
											
		});		
	},0000);
	
}


$scope.EditarEvento = function(){
	
	//alert("Editar Evento...");
	
  var IDEvento = window.localStorage.getItem('IDEvento');
  //alert(idUsuario);
  
  $('body').addClass('waitMe_body');
	var elem = $("<div class='waitMe_container img' ng-hide='eventos'><div class='fa-spin fa-5x'></div></div>");
	$('body').prepend(elem);
	
	setTimeout(function(){ 
																													    
		$http.post('src/models/eventos.class.php',{ action: 'cargarZonas' })	
																   
		.success(function(response){	
			
			console.log(response);
				
			$scope.grupozona = response.data.grupozona;
			
			$('body.waitMe_body').find('.waitMe_container:not([data-waitme_id])').remove();
			$('body.waitMe_body').removeClass('waitMe_body hideMe');
											
		});		
	},0000);
  
  setTimeout(function(){ 
      $http.post('src/models/eventos.class.php',{ action: 'buscarEvento',
                                                  IDEvento: IDEvento
                                                  })												   
			.success(function(response){
          console.log(response);
          $scope.evento = response;
          
          $scope.cargarFiles($scope.evento.ID_GRUPO_ZONA);
          
          $scope.cargarAfectado($scope.evento.ID_LUGAR_EVENTO)
			})
			
  },0000);
  
}



























		



	
	
	
	
$scope.listarEventos = function(){
	
	//alert($scope.cmbFiltroYears);
	
	$("#mensaje").html("");
	
	if(JSON.stringify($scope.cmbFiltroYears) == undefined){
		//alert("1");
		
		$scope.eventos = "";
		$("#mensaje").html("");
		
		$scope.options = [
										  { label: '15' },
										  { label: '30' },
										  { label: '60' }		
										]
		
		$scope.data_limit = $scope.options[0];
		$scope.filter_data = 0;
		$scope.entire_user = 0;
		
		$("#mensaje").html("<div class='alert alert-warning alert-dismissible fade in' role='alert' ng-hide='alertaLoginError'>" +
											"<button type='button' class='close' data-dismiss='alert'><span aria-hidden='true'></span><span class='sr-only'>Cerrar</span></button>" +
											"<strong>Mensaje:</strong> No existen Registros.</div>");
		
		
		/*					
		$scope.totalItems = $scope.eventos.length;
		$scope.currentPage = 1;
		$scope.itemsPerPage = $scope.viewby.label;
		$scope.maxSize = 10; //Number of pager buttons to show			
		
		var length = $scope.eventos.length;
		*/

	}else{
	
		$('body').addClass('waitMe_body');
	
		var elem = $("<div class='waitMe_container img' ng-hide='eventos'><div class='fa-spin fa-5x'></div></div>");
		$('body').prepend(elem);
		
		//var $year		= $scope.cmbFiltroYears;
		//alert($scope.cmbFiltroYears);
		//exit;
		
		var $year		= $scope.cmbFiltroYears;
		
		window.localStorage['yearNow'] = JSON.stringify($scope.cmbFiltroYears);
		
		//alert($scope.cmbPeriodo);
		
		setTimeout(function(){
			//$http.get('src/models/eventos.class.php?action=listarEventos')	
			$http.post('src/models/eventos.class.php',{ action : 'listarEventos', year : $year })
			
				.success(function(response) {
					
					console.log(response);
					//return false;
					
					if(response.tipo == 'error'){
						response.mensaje=response.mensaje.replace('\r\n',' ');
				
						$scope.rsJSON = response.mensaje;
				
						$("#mensaje").html("<div class='alert alert-danger alert-dismissible fade in' role='alert' ng-hide='alertaError'>" +
										"<button type='button' class='close' data-dismiss='alert'><span aria-hidden='true'>×</span><span class='sr-only'>Cerrar</span></button>" +
										"<strong>Alerta!</strong> " + response.mensaje +"</div>");
										
					}else{
						
						if(response.contador > 0){
							//$("#cant_reg").html("<br><b>Se encontraron "+response.contador+" Registros</b>");
							
							$scope.eventos = response.data.eventos;
				
					    
					    $scope.options = [
										  { label: '15' },
										  { label: '30' },
										  { label: '60' }		
										]
		
							$scope.data_limit = $scope.options[0];
					    
					    
					    //$scope.file = user_data;
			        $scope.current_grid = 1;
			        //$scope.data_limit = 15;
			        $scope.filter_data = $scope.eventos.length;
			        $scope.entire_user = $scope.eventos.length;
			        
			        $scope.maxSize = 10; //Number of pager buttons to show	
					    
					    					
															
						}else{
							
							$scope.eventos = "";
							
							$scope.options = [
										  { label: '15' },
										  { label: '30' },
										  { label: '60' }		
										]
		
							$scope.data_limit = $scope.options[0];
					    
					    
					    //$scope.file = user_data;
			        $scope.current_grid = 1;
			        //$scope.data_limit = 15;
			        $scope.filter_data = $scope.eventos.length;
			        $scope.entire_user = $scope.eventos.length;
			        
			        $scope.maxSize = 10; //Number of pager buttons to show	
		
							//$("#cant_reg").html("<br>Se encontraron "+response.contador+" Registros");
							
							$("#mensaje").html("<div class='alert alert-warning alert-dismissible fade in' role='alert' ng-hide='alertaLoginError'>" +
											"<button type='button' class='close' data-dismiss='alert'><span aria-hidden='true'></span><span class='sr-only'>Cerrar</span></button>" +
											"<strong>Mensaje:</strong> No existen Registros.</div>");
							
						}
						
						
					}
	
					$('body.waitMe_body').find('.waitMe_container:not([data-waitme_id])').remove();
					$('body.waitMe_body').removeClass('waitMe_body hideMe');
												
				});
	
		},0000);
	}
}
	
	



$scope.page_position = function(page_number) {
    $scope.current_grid = page_number;
};

$scope.filter = function() {
    $timeout(function() {
        $scope.filter_data = $scope.searched.length;
    }, 20);
};

$scope.sort_with = function(base) {
    $scope.base = base;
    $scope.reverse = !$scope.reverse;
};	
	
	
$scope.search = function (item) {
    if($scope.searchEventos == undefined) {
        return true;
    }else{
        if(item.FECHAHORA_EVENTO.toLowerCase().indexOf($scope.searchEventos.toLowerCase()) != -1 ||
           item.NOMBRE_TIPO_EVENTO.toLowerCase().indexOf($scope.searchEventos.toLowerCase()) != -1 ||
           item.NOMBRE_AFECTADO.toLowerCase().indexOf($scope.searchEventos.toLowerCase()) != -1 ||
           item.FILES.toLowerCase().indexOf($scope.searchEventos.toLowerCase()) != -1 ||
           item.NOMBRE_ESTADO_EVENTO.toLowerCase().indexOf($scope.searchEventos.toLowerCase()) != -1) {
            return true;
        }
    }
    return false;
};		
	





	
	
	
	
	
	
	
	
	
	
	
	


	
$scope.ingresarEvento = function(form){
	
	
	//alert("registrando ingreso...");
	//return false;
	
	if(form.validate()){
	
		
		$('body').addClass('waitMe_body');		
		var elem = $("<div class='waitMe_container img' ng-hide='eventos'><div class='fa-spin fa-5x'></div></div>");
		$('body').prepend(elem);
		
		

		//Capturando ID del select cmbLugarEvento
		
		var selectedOptionText = $('#cmbLugarEvento').find(":selected").text();//selected option text
		var selectedOptionVal = $('#cmbLugarEvento').find(":selected").val();//selected option value
		
 	  //********************************************
 	  
       
		setTimeout(function(){ 
			$http.post('src/models/ingresoVehiculo.class.php',{action 										: 'ingresarVehiculo'
																												,txtFechaEntrada 						: document.getElementById('txtFechaEntrada').value
																												,txtHoraEntrada 						: document.getElementById('txtHoraEntrada').value
																												,cmbLugarEvento 						: selectedOptionVal
																												,txtPatente 								: document.getElementById('txtPatente').value																																																							
																												})
			.success(function(response){

					console.log(response);
					//return false;
					
					
					if(response.data){
						
						//window.localStorage.setItem("IDEvento", response.data);
						
						swal({title: "Mensaje!!!",
						  text: "El Ingreso de Vehículo fue ingresado... !!!",
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
								  	$state.go('inicio');
								  	
										$('body.waitMe_body').find('.waitMe_container:not([data-waitme_id])').remove();
										$('body.waitMe_body').removeClass('waitMe_body hideMe');
								});	
							}							
						  }						 
						);
							
					}else{
						
						$('body.waitMe_body').find('.waitMe_container:not([data-waitme_id])').remove();
						$('body.waitMe_body').removeClass('waitMe_body hideMe');	
						
					}
									
			})
		
		},0000);		
	}
}
	
	
	
	
	
	
	
	
	

$scope.editarEvento = function(form){	

	if(form.validate()){

		/*
		$scope.txtFechaInicio  = new Date(formEditarEven.txtFechaInicio);
		$scope.txtFechaInicio= document.getElementById('txtFechaInicio').value
		
		$scope.txtHoraInicio  = new Date(formEditarEven.txtHoraInicio);
		$scope.txtHoraInicio= document.getElementById('txtHoraInicio').value
		*/
		
		$('body').addClass('waitMe_body');
		var elem = $("<div class='waitMe_container img' ng-hide='eventos'><div class='fa-spin fa-5x'></div></div>");
		$('body').prepend(elem);
		
		
		var c = 0;
		var indice = 0;
		
		angular.forEach($scope.files, function () {
		  if($scope.files[c]['ID_FILE'] == $scope.evento.ID_FILE_TEMP){
		     indice = c;
		  }
		  c = c + 1;
		});
		
		
				  
		setTimeout(function(){ 
			
			$http.post('src/models/eventos.class.php',{action 										: 'editarEvento'
																								,txtIDEvento 								: $scope.evento.ID_EVENTO
																								
																								,cmbGrupoZona								: $scope.evento.ID_GRUPO_ZONA
																								,cmbFiles										: $scope.evento.ID_FILE_TEMP
																							  
																							  ,nombreZona									: $("#cmbGrupoZona option:selected").text()
																							  ,nroFiles										: $scope.files[indice]['NOMBRE_FILE']
																								
																								/*
																								,txtFechaEvento 						: $scope.evento.FECHA_EVENTO
																								,txtHoraEvento 							: $scope.evento.HORA_EVENTO
																								,txtFechaReporteEvento 			: $scope.evento.FECHA_REPORTE_EVENTO
																								*/
																								
																								,txtFechaEvento 						: document.getElementById('txtFechaEvento').value
																								,txtHoraEvento 							: document.getElementById('txtHoraEvento').value
																								,txtFechaReporteEvento 			: document.getElementById('txtFechaReporteEvento').value
																								
																								,cmbLugarEvento 						: $scope.evento.ID_LUGAR_EVENTO
																								,cmbTipoEvento 							: $scope.evento.ID_TIPO_EVENTO
																								,cmbAfectadoEvento 					: $scope.evento.ID_AFECTADO_EVENTO
																								,cmbArtefactoEvento 				: $scope.evento.ID_DANO_EVENTO
																								
																								,txtMonto										: $scope.evento.MONTO
																								,txtNombreReportaEvento			: $scope.evento.NOMBRE_REPORTA
																								,txtNarracionEvento					: $scope.evento.NARRACION_EVENTO
																								})
											   
																					
			.success(function(response){
				console.log(response);
				//return false;

				if(response.tipo == 'ok'){
					if(response.commit == '1'){
						
						//$(swal("Mensaje!!!", "Usuario ha sido editado!!!", "success"));
						swal({title: "Mensaje!!!",
						  text: "Evento ha sido editado...!!!",
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
								  //$location.path('/eventos');
								  $state.go('eventos');
									$scope.listarEventos();
								});	
							}							
						  }						 
						);
						
					}if(response.commit=='0'){
						$(swal("Mensaje!!!", "No hubo cambios realizados!", "info"));	
					}					
				}else{
					swal("Mensaje!!!", response.mensaje, "error");										
				}
			})
			
			$('body.waitMe_body').find('.waitMe_container:not([data-waitme_id])').remove();
			$('body.waitMe_body').removeClass('waitMe_body hideMe');
			
		},0000);
	}

}











$scope.eliminarEvento = function(opcion){
	
	swal({title: "Esta seguro ?",
		  text: "El Evento será Eliminado...!!!",
	  	  type: "warning",
	  	  showCancelButton: true,
	  	  confirmButtonColor: "#DD6B55",
	  	  confirmButtonText: "Si",
	  	  closeOnConfirm: false
		},
		
		function(isConfirm){
								
			if(isConfirm){
										
				//Agregar sweetalert de procsando....
				
				$http.post('src/models/eventos.class.php',{action 										: 'eliminarEvento'
																								 ,txtIDEvento 								: $scope.evento.ID_EVENTO
																								  })
																								
				.success(function (response, status, headers, config){ 
					
					console.log(response);
					
					if(response.tipo == 'ok'){
						if(response.commit == '1'){
							swal({title: "Mensaje!!!",
							  text: "El Evento fue Eliminado...!!!",
							  type: "success",   showCancelButton: false,
							  confirmButtonColor: "#DD6B55",
							  confirmButtonText: "Aceptar",
							  cancelButtonText: "Cancelar",
							  closeOnConfirm: true,
							  closeOnCancel: true },
					
							  function(isConfirm){
								if(isConfirm){
									$state.go('eventos');
									$scope.listarEventos();
								}
							 });						
						}
					}else{
						swal("Mensaje!!!", response.mensaje, "error");
					}
				})
			}
		 }
	);
}








$scope.activarEvento = function(){
	
	swal({title: "Esta seguro ?",
		  text: "El Evento será Activado...!!!",
	  	  type: "warning",
	  	  showCancelButton: true,
	  	  confirmButtonColor: "#5CB85C",
	  	  confirmButtonText: "Si",
	  	  closeOnConfirm: false
		},
		
		function(isConfirm){
								
			if(isConfirm){
										
				//Agregar sweetalert de procsando....
				
				$http.post('src/models/eventos.class.php',{action 										: 'activarEvento'
																								 ,txtIDEvento 								: $scope.evento.ID_EVENTO
																								  })
																								
				.success(function (response, status, headers, config){ 
					
					console.log(response);
					
					if(response.tipo == 'ok'){
						if(response.commit == '1'){
							swal({title: "Mensaje!!!",
							  text: "El Evento fue Activado...!!!",
							  type: "success",   showCancelButton: false,
							  confirmButtonColor: "#5CB85C",
							  confirmButtonText: "Aceptar",
							  cancelButtonText: "Cancelar",
							  closeOnConfirm: true,
							  closeOnCancel: true },
					
							  function(isConfirm){
								if(isConfirm){
									$state.go('eventos');
									$scope.listarEventos();
								}
							 });						
						}
					}else{
						swal("Mensaje!!!", response.mensaje, "error");
					}
				})
			}
		 }
	);
}








$scope.validarEvento = function(idEvento){
		
		//alert($scope.evento.ESTADO_EVENTO);
		
		$http.post('src/models/eventos.class.php',{action 								: 'validarEvento'
																						 ,observacion							: $scope.evento.OBSERVACION_EVENTO
																						 ,idEstado								: $scope.evento.ESTADO_EVENTO
																						 ,idEvento 								: idEvento
																						  })
																						
		.success(function(response) {
			
			console.log(response);
			
			if(response.tipo == 'ok'){
				if(response.commit == '1'){
					
					
					
					$(swal("Mensaje!!!", "El evento fue validado con exito...!", "info"));	
					
					
					
					swal({title: "Mensaje!!!",
					  text: "El evento fue validado con exito...!",
					  type: "success",   showCancelButton: false,
					  //confirmButtonColor: "#4679B2",
					  confirmButtonText: "Aceptar",
					  cancelButtonText: "Cancelar",
					  closeOnConfirm: true,
					  closeOnCancel: true },
			
					  function(isConfirm){
							if(isConfirm){
								
								$('.modal').remove();
								$('.modal-backdrop').remove();
								$('body').removeClass( "modal-open" );
								
								//$("#myValidacionEvento").modal('hide');
								
								$state.go('eventos');
								
							}
					 	}
					);						
							 
							 
							 
					//$(swal("Mensaje!!!", "El evento fue validado con exito!", "info"));	
					//$("#myValidacionEvento").modal('hide');
					
				}else{
				
					//$(swal("Mensaje!!!", "No hubo cambios que guardar...!", "info"));
					
					
					swal({title: "Mensaje!!!",
						  text: "No hubo cambios que guardar...!",
						  type: "warning",
						  showCancelButton: false,
						  confirmButtonColor: "#4679B2",
						  confirmButtonText: "Aceptar",
						  cancelButtonText: "Cancelar",
						  closeOnConfirm: true,
						  closeOnCancel: true },
				
						  function(isConfirm){
								if(isConfirm){
									
									
									$('.modal').remove();
									$('.modal-backdrop').remove();
									$('body').removeClass( "modal-open" );
									
									//$("#myValidacionEvento").modal('hide');
									//$("#modalArchivosDigitales").modal();
									
									$state.go('eventos');
									
								}
						 	}
						);
						
				}
				
			}else{
				swal("Mensaje!!!", response.mensaje, "error");
			}
		})
			
}

















$scope.IraEditarEvento = function(idEvento,idContexto){
	window.localStorage.setItem("IDEvento", angular.toJson(idEvento));
	//window.localStorage.setItem("IDContexto", angular.toJson(idContexto));
	
	//window.localStorage.setItem("evento", angular.toJson(evento));
	$state.go('eventoEditar');

}



$scope.Volver = function(){
	//alert("1");
	$state.go('buscarTicket');
}







	


}]);



