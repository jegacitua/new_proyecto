
app.controller('controllerBuscarTicket', ['$scope', 'serviceUploadFile', '$http', '$localStorage', '$location', '$state', '$timeout',function($scope, 
									serviceUploadFile,
									$http,
									$localStorage, 
									$location,
									$state,
									$timeout){
									
										
										
//app.controller('controllerBuscarTicket', function($scope, $http, $state, $location){								


$scope.convertToInt = function(id){
    return parseInt(id, 10);
};	





$scope.Volver = function(){
	//alert("1");
	$state.go('inicio');
}


/*
$scope.filtroFileOptions = {
	displayText: "Seleccionar File"
    
    
};
*/				
						

/*
$scope.ticket = [
										  { ID_TICKET: '1', PATENTE: 'GJGS53', FECHA: '24-07-2020', HORA: '13:50' },
										  { ID_TICKET: '2', PATENTE: 'PRDF99', FECHA: '24-07-2020', HORA: '14:00' },
										  { ID_TICKET: '3', PATENTE: 'ZXIT62', FECHA: '24-07-2020', HORA: '14:10' }
										]	
*/									
										
																	
			
								
					
				
				
//$scope.cmbFiltroYears = JSON.parse(window.localStorage.getItem('yearNow'));
var f = new Date();
$scope.cmbFiltroYears = JSON.stringify(f.getFullYear());





//$scope.txtFechaEvento = JSON.stringify(f.getDate() + "-" + (f.getMonth() +1) + "-" + f.getFullYear());



/*
$('#txtFechaEvento').on('dp.change', function(e){ console.log(e.date); })
*/


$('#txtFechaEvento').on('dp.change', function(e){ 
	var idCentroOperacion = $('#cmbLugarEvento').find(":selected").val();//selected option value
	$scope.centroOperacionPorDefecto = idCentroOperacion;
	$scope.listarEventos(); 	
})


$('#cmbLugarEvento').on('change', function(e){ 
	var idCentroOperacion = $('#cmbLugarEvento').find(":selected").val();//selected option value
	$scope.centroOperacionPorDefecto = idCentroOperacion;
	$scope.listarEventos(); 	
})

$('#btnActualizar').on('click', function(e){ 
	var idCentroOperacion = $('#cmbLugarEvento').find(":selected").val();//selected option value
	$scope.centroOperacionPorDefecto = idCentroOperacion;
	$scope.listarEventos(); 	
})



      
$('body').addClass('waitMe_body');
var elem = $("<div class='waitMe_container img' ng-hide='eventos'><div class='fa-spin fa-5x'></div></div>");
$('body').prepend(elem);

setTimeout(function(){ 
	//$http.post('src/models/sql/perfilUsuario.class.php',{ accion: 'sesion_usuario' })	
	
	//$http.post('src/models/usuario.class.php',{ action: 'sesion_usuario' })	
	$http.post('src/models/login.class.php',{ accion 		: 'sesion_usuario', pagina : 'Buscar Ticket'})
																																   
	.success(function(response){	

			console.log(response);
			
			if(response.session == "0"){
				
				$state.go('login');
				
			}else{
				
				
				if(response.acceso_url == "1"){
				
					
					$scope.sesionUsuario = response.sesion_usuario;
					//alert($scope.sesionUsuario.id_perfil);
			
					if (!(localStorage.getItem("idCentroOperacion"))) {
					  //$scope.listarCentroOperacion();
					  $state.go('login');
					}else{
						$scope.CentroOperacion = localStorage.getItem("CentroOperacion");
						$scope.centroOperacionPorDefecto = localStorage.getItem("idCentroOperacion");
						
					}
					
		
					
					
					
			
					$scope.listarCentroOperacion(1, function (value, result) {
					    console.log('END execution with value =', value, 'and result =', result);
		    			$scope.listarEventos(2, function (value, result) {
		        		console.log('END execution with value =', value, 'and result =', result);
		        
		    			});
					});
						
						
						
				
					
		
			
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

		
		
		
		
		     












$scope.listarCentroOperacion = function(value, callback){
	
	//alert("listando centros de operacion....");
	
	console.log('START execution with value =', value);
	
	$http.post('src/models/ingresoVehiculo.class.php',{ action : 'listarCentroOperacion'})
	.success(function(response){
		
		console.log(response);
		
		$scope.centroOperacion = response.data.centroOperacion;
		
		//alert($scope.sesionUsuario);
		
		if($scope.centroOperacion.length == 1 && $scope.sesionUsuario.id_perfil == 2){
		
				$scope.centroOperacionPorDefecto = $scope.centroOperacion[0].ID_CENTRO_OPERACION;
				
				$('#cmbLugarEvento').attr('disabled', 'disabled');
				
				angular.element('#txtBusqueda').focus();
				
		}else{
			
			//$scope.centroOperacionPorDefecto = 0;
			angular.element('#txtBusqueda').focus();
			
		}
		//alert("termino...");
		
		if(callback){
			callback(value, value * value);	
		}
		
	})
			
	//$scope.listarEventos();
	
}	
	
	
	
	
	
	
	
	
$scope.listarEventos = function(value, callback){
	
		//alert("listando eventos...."+$scope.centroOperacionPorDefecto);
	
		console.log('START execution with value =', value);

		$("#mensaje").html("");
	
		$('body').addClass('waitMe_body');
	
		var elem = $("<div class='waitMe_container img' ng-hide='eventos'><div class='fa-spin fa-5x'></div></div>");
		$('body').prepend(elem);
		
		
		
		
		var fecha							= $('#txtFechaEvento').val();
		//var $idCentroOperacio		= $scope.cmbLugarEvento;

		//Capturando ID del select cmbLugarEvento
		
		//var CentroOperacio = $('#cmbLugarEvento').find(":selected").text();//selected option text
		//var idCentroOperacion = $('#cmbLugarEvento').find(":selected").val();//selected option value
		
		
		
		var idCentroOperacion = $scope.centroOperacionPorDefecto;
		
		
		
 	  //********************************************
 	  
 	  //alert("la fecha:....."+fecha);
		//alert("el id del centro de operacion es:....."+idCentroOperacion);
		//alert("el id del centro de operacion es:....."+$scope.centroOperacionPorDefecto);
		
		
		
		
		/*
		if(callback){
			callback(value, value * value);	
		}
		
		return false;
		*/
		
		
		//alert(fecha);
		//alert(idCentroOperacion);
		
		
		
		window.localStorage['fecha'] = JSON.stringify($scope.txtFechaEvento);
		
		//alert($scope.cmbPeriodo);
		
		setTimeout(function(){
			//$http.get('src/models/eventos.class.php?action=listarEventos')	
			$http.post('src/models/ingresoVehiculo.class.php',{ action : 'listarEventos', fecha : fecha, idCentroOperacion : idCentroOperacion})
			
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
							
							$scope.ticket = response.data.tickets;
							
							if(callback){
								callback(value, value * value);	
							}
															
						}else{
							
							$scope.ticket = "";
							
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
	
	
	if(form.validate()){
	
		
		$('body').addClass('waitMe_body');		
		var elem = $("<div class='waitMe_container img' ng-hide='eventos'><div class='fa-spin fa-5x'></div></div>");
		$('body').prepend(elem);
		
		
		var c = 0;
		var indice = 0;
		
		angular.forEach($scope.files, function () {
		  if($scope.files[c]['ID_FILE'] == $scope.cmbFiles){
		     indice = c;
		  }
		  c = c + 1;
		});
		

		          
		setTimeout(function(){ 
			$http.post('src/models/eventos.class.php',{action 										: 'ingresarEvento'
				
																								,cmbFiles										: $scope.cmbFiles
																							  ,cmbGrupoZona								: $scope.cmbGrupoZona
																							  
																							  ,nombreZona									: $("#cmbGrupoZona option:selected").text()
																							  ,nroFiles										: $scope.files[indice]['NOMBRE_FILE']

																								,txtFechaEvento 						: document.getElementById('txtFechaEvento').value
																								,txtHoraEvento 							: document.getElementById('txtHoraEvento').value
																								,txtFechaReporteEvento 			: document.getElementById('txtFechaReporteEvento').value
																								
																								,cmbLugarEvento 						: $scope.cmbLugarEvento
																								,cmbTipoEvento 							: $scope.cmbTipoEvento
																								,cmbAfectadoEvento 					: $scope.cmbAfectado
																								,cmbArtefactoEvento 				: $scope.cmbDanos
																								
																								,txtLugarEvento 						: $("#cmbLugarEvento option:selected").text()
																								,txtTipoEvento 							: $("#cmbTipoEvento option:selected").text()
																								,txtAfectadoEvento 					: $("#cmbAfectado option:selected").text()
																								,txtArtefactoEvento 				: $("#cmbDanos option:selected").text()
																								
																								,txtMonto						 				: $scope.txtMonto
																								,txtNombreReportaEvento			: $scope.txtReporta
																								,txtNarracionEvento					: $scope.txtNarracionEvento
																								})
			.success(function(response){

					console.log(response);
					//return false;
					
					
					
					if(response.data){
						
						window.localStorage.setItem("IDEvento", response.data);
						
						
						if(response.email == 1){
							swal({title: "Mensaje!!!",
								  text: "El Evento fue creado exitosamente y los correos fueron enviados a sus destinatarios informados... !!!",
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
										  	$state.go('eventoEditar');
										  	
												$('body.waitMe_body').find('.waitMe_container:not([data-waitme_id])').remove();
												$('body.waitMe_body').removeClass('waitMe_body hideMe');
										});	
									}							
								  }						 
								);
							}else{
								swal({title: "Mensaje!!!",
								  text: "El Evento fue creado exitosamente, pero los correos no pudierón ser enviados a sus destinatarios... !!!",
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
										  	$state.go('eventoEditar');
										  	
												$('body.waitMe_body').find('.waitMe_container:not([data-waitme_id])').remove();
												$('body.waitMe_body').removeClass('waitMe_body hideMe');
										});	
									}							
								  }						 
								);
							}
							
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



		
		
		


$scope.IraEditarTicket = function(idTicket){
	window.localStorage.setItem("IDTicket", angular.toJson(idTicket));
	//window.localStorage.setItem("IDContexto", angular.toJson(idContexto));
	
	//window.localStorage.setItem("evento", angular.toJson(evento));
	
	
	//alert(idTicket);
	
	$state.go('editarTicket');

}
















//});



	


}]);














































app.directive('uploaderModelFiles', ["$parse", function ($parse) {
	return {
		restrict: 'A',
		link: function (scope, iElement, iAttrs) 
		{
			iElement.on("change", function(e)
			{
				$parse(iAttrs.uploaderModelFiles).assign(scope, iElement[0].files[0]);
			});
		}
	};
}])









.service('serviceUploadFile', ["$http", "$q", function ($http, $q)
{
	this.subirArchivo = function(file, name, id_evento)
	{
		var deferred = $q.defer();
		var formData = new FormData();
		
		formData.append("file", file);
		formData.append("name", name);
		formData.append("id_evento", id_evento);
		//formData.append("id_vento_incautacion", id_vento_incautacion);
	
	
	
		
		return $http.post("src/models/eventos.class.php?action=uploadFile", formData,{ 
		
		/*
		return $http.post('src/models/eventos.class.php',{ action: 'uploadFile',
		                                                   formData: formData,
		*/
		
			headers: {
				"Content-type": undefined
			},
			transformRequest: angular.identity
		})
		
		
		
		.success(function(response){
			console.log(response);
			
			if(response.extension == 1){
							
				$(swal("Alerta!!!", "Tipo de archivo no permitido!!!", "warning"));
				return false;
			}
			
			if(response.tamanoMaximo == 1){
							
				$(swal("Alerta!!!", "El archivo a subir es muy grande, debe ser menor a 5MB!!!", "warning"));
				return false;
			}
			
			if(response.existeArchivo == 1){
							
				$(swal("Alerta!!!", "El archivo a subir ya existe para este evento!!!", "warning"));
				return false;
			}
			
			
			deferred.resolve(response);
			//alert(response.existeArchivo);
			
			
			$(swal({title:"Mensaje!!!",
							 text:"Archivo subido exitosamente...!!!",
							 type:"success",
							 showCancelButton: false,
								  //confirmButtonColor: "#DD6B55",
								  confirmButtonText: "Aceptar",
								  cancelButtonText: "Cancelar",
								  closeOnConfirm: true,
								  closeOnCancel: true },
								  
								  function(isConfirm){
									if(isConfirm){
										//$scope.listarSetGraficoIncautacion($scope.txtIDEventoIncautacionEdit);
									}							
						  		}	
							
							)
							
							
							);
			
		})
		.error(function(msg, code)
		{
			deferred.reject(msg);
		})
		return deferred.promise;
	}	
	
	
	
	
	
	

}])
