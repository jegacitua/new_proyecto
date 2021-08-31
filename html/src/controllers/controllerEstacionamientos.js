app.controller('controllerEstacionamientos', ['$scope', 'serviceUploadFile', '$http', '$localStorage', '$location', '$state', '$timeout',function($scope, 
									serviceUploadFile,
									$http,
									$localStorage, 
									$location,
									$state,
									$timeout){
										
										
										
										


$scope.convertToInt = function(id){
    return parseInt(id, 10);
};	



$scope.filtroFileOptions = {
	displayText: "Seleccionar File"
    
    
};
				
						
				
/*				
$scope.lugarEvento = [
										  { id_lugar_evento: '10', nombre_lugar_evento: 'ISLA' },
										  { id_lugar_evento: '20', nombre_lugar_evento: 'TIENDA' },
										  { id_lugar_evento: '30', nombre_lugar_evento: 'OFICINA TIENDA' },
										  { id_lugar_evento: '40', nombre_lugar_evento: 'OFICINA COMBUSTIBLE' },
										  { id_lugar_evento: '50', nombre_lugar_evento: 'ESTACIONAMIENTO ISLA' },
										  { id_lugar_evento: '60', nombre_lugar_evento: 'ESTACIONAMIENTO TIENDA' }
										]
*/

										
										
$scope.lugarEvento = [
										  { id_lugar_evento: '1', nombre_lugar_evento: 'ISLA' },
										  { id_lugar_evento: '2', nombre_lugar_evento: 'TIENDA' },
										  { id_lugar_evento: '3', nombre_lugar_evento: 'OFICINAS' },
										  { id_lugar_evento: '4', nombre_lugar_evento: 'ESTACIONAMIENTO' }
										]
										
																				
										
$scope.tipoEvento = [
										  { id_tipo_evento: '1', nombre_tipo_evento: 'ROBO CON FUERZA' },
										  { id_tipo_evento: '2', nombre_tipo_evento: 'ROBO CON INTIMIDACION' },
										  { id_tipo_evento: '3', nombre_tipo_evento: 'ROBO CON VIOLENCIA' },
										  { id_tipo_evento: '4', nombre_tipo_evento: 'ROBO FRUSTRADO' },
										  { id_tipo_evento: '5', nombre_tipo_evento: 'OTRO' },
										  { id_tipo_evento: '6', nombre_tipo_evento: 'HURTO' },
										  { id_tipo_evento: '7', nombre_tipo_evento: 'ESTAFA DE COMBUSTIBLE' },
										  { id_tipo_evento: '8', nombre_tipo_evento: 'DAÑOS' }
										]											
																	
										
										
$scope.afectado = [
										  { id_afectado: '1', nombre_afectado: 'ATENDEDOR' },
										  { id_afectado: '2', nombre_afectado: 'MULTIFUNCIONAL' },
										  { id_afectado: '3', nombre_afectado: 'CLIENTE' },	
										  { id_afectado: '4', nombre_afectado: 'ATENDEDOR/CLIENTE' },
										  { id_afectado: '5', nombre_afectado: 'ATENDEDOR/MULTIFUNCIONAL' },
										  { id_afectado: '6', nombre_afectado: 'MULTIFUNCIONAL/CLIENTE' },
										  { id_afectado: '7', nombre_afectado: 'TODOS' }
										]												
										




$scope.danos_tem = [	
									{ id_danos: '1', id_lugar_evento: '1', nombre_danos: 'ATENDEDOR' },
									
									{ id_danos: '2', id_lugar_evento: '2', nombre_danos: 'CAJERO AUTOMATICO' },
									{ id_danos: '3', id_lugar_evento: '2', nombre_danos: 'GAVETAS' },
									{ id_danos: '4', id_lugar_evento: '2', nombre_danos: 'GONDOLAS' },
									
									{ id_danos: '5', id_lugar_evento: '3', nombre_danos: 'ADM. COMBUSTIBLE' },
									{ id_danos: '6', id_lugar_evento: '3', nombre_danos: 'ADM. TIENDA' },
									{ id_danos: '7', id_lugar_evento: '3', nombre_danos: 'BAÑOS' },
									{ id_danos: '8', id_lugar_evento: '3', nombre_danos: 'BOCA BUZON' },
									{ id_danos: '9', id_lugar_evento: '3', nombre_danos: 'BODEGA' },
									{ id_danos: '10', id_lugar_evento: '3', nombre_danos: 'CAJA SEGURIDAD' },
									{ id_danos: '11', id_lugar_evento: '3', nombre_danos: 'COMEDOR' },
									{ id_danos: '12', id_lugar_evento: '3', nombre_danos: 'SALA CUADRATURA' },
									
									{ id_danos: '13', id_lugar_evento: '4', nombre_danos: 'ESTACIONAMIENTO' }
								]	
								
								
/*								
$scope.danos = [	
									{ id_danos: '10', id_lugar_evento: '10', nombre_danos: 'ATENDEDOR' },
									
									{ id_danos: '20', id_lugar_evento: '20', nombre_danos: 'CAJERO AUTOMATICO' },
									{ id_danos: '30', id_lugar_evento: '20', nombre_danos: 'GAVETAS' },
									{ id_danos: '40', id_lugar_evento: '20', nombre_danos: 'GONDOLAS' },
									
									{ id_danos: '50', id_lugar_evento: '30', nombre_danos: 'ADM. COMBUSTIBLE' },
									{ id_danos: '60', id_lugar_evento: '30', nombre_danos: 'ADM. TIENDA' },
									{ id_danos: '70', id_lugar_evento: '30', nombre_danos: 'BAÑOS' },
									{ id_danos: '80', id_lugar_evento: '30', nombre_danos: 'BOCA BUZON' },
									{ id_danos: '90', id_lugar_evento: '30', nombre_danos: 'BODEGA' },
									{ id_danos: '100', id_lugar_evento: '30', nombre_danos: 'CAJA SEGURIDAD' },
									{ id_danos: '110', id_lugar_evento: '30', nombre_danos: 'COMEDOR' },
									{ id_danos: '120', id_lugar_evento: '30', nombre_danos: 'SALA CUADRATURA' },
									
									{ id_danos: '130', id_lugar_evento: '40', nombre_danos: 'ESTACIONAMIENTO' }
								]	
*/										

$scope.estado = [
										{ ID_ESTADO: '1', ITEM_ESTADO: 'INGRESADO' },
									  { ID_ESTADO: '2', ITEM_ESTADO: 'CON OBSERVACION' },
									  { ID_ESTADO: '3', ITEM_ESTADO: 'REVISADO' }
									]


								
					
				
				
//$scope.cmbFiltroYears = JSON.parse(window.localStorage.getItem('yearNow'));
var f = new Date();
$scope.cmbFiltroYears = JSON.stringify(f.getFullYear());








//AGREGA COLOR VERDE CUANDO EL OBJETO HA SIDO COMPLETADO Y ROJO CUANDO NO HA SIDO LLENADO O SELECCIONADO
/*
 $('#formEven').validate({
	rules: {         
	  cmbFiles:{
	    required: true
	  }
	},    
	highlight: function(element) {          
		$(element).closest('.form-group').removeClass('has-success').addClass('has-error');              
	},
	unhighlight: function(element) {            
		$(element).closest('.form-group').removeClass('has-error').addClass('has-success');              
	}
});
*/





//$('#formEven').validate({


/*
$scope.validarFormEvento = {
	
	rules: {

		cmbFile: {
			required: true
		}
	},
	messages: {

		cmbFile: {
			required: "El campo es requerido."
			
			
			
		}
	}
		
}
*/        
        
      
      
      
      
      
      
      
      














      
$('body').addClass('waitMe_body');
		var elem = $("<div class='waitMe_container img' ng-hide='eventos'><div class='fa-spin fa-5x'></div></div>");
		$('body').prepend(elem);
		
		setTimeout(function(){ 
			//$http.post('src/models/sql/perfilUsuario.class.php',{ accion: 'sesion_usuario' })	
			
			//$http.post('src/models/usuario.class.php',{ action: 'sesion_usuario' })	
			$http.post('src/models/login.class.php',{ accion 		: 'sesion_usuario', pagina : 'Estacionamientos'})
																																		   
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
							
							$http.post('src/models/menu.class.php',{ action : 'listarMenuHTML', pagina : 'Eventos'})
							.success(function(response){
								//console.log(response);
								
								$("#menu").html(response);
								
							})
							
							window.localStorage.setItem("backURL", 'eventos');
							
							
							if($("#accion").val() == "ListarEventos"){
								$scope.ListarEventos();
							}
							
							if($("#accion").val() == "NuevoEvento"){
								$scope.NuevoEvento();
							}
							
							if($("#accion").val() == "EditarEvento"){
								$scope.EditarEvento();
							}
						
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
$http.post('src/models/menu.class.php?action=listarMenuHTML',{pagina: 'Eventos',
																													    idUsuario: 2})
	.success(function(response){
		//console.log(response);
		$("#menu").html(response);
	}
)



$('body').addClass('waitMe_body');
var elem = $("<div class='waitMe_container img' ng-hide='eventos'><div class='fa-spin fa-5x'></div></div>");
$('body').prepend(elem);

setTimeout(function(){ 
	$http.post('src/models/usuario.class.php',{ action: 'sesion_usuario' })	
															   
	.success(function(response){	
			
		$scope.sesionUsuario = response;
			

			
			if(response.acceso == false){
				alert(response.acceso);
				$state.go('login');
			}
			
			$('body.waitMe_body').find('.waitMe_container:not([data-waitme_id])').remove();
			$('body.waitMe_body').removeClass('waitMe_body hideMe');
			
			
			/*
			if($("#accion").val() == "ListarUsuarios"){
				$scope.listarUsuario();
				return false;
			}
			*
										
	});		
},0000);
*/






























		
$scope.cargarAfectado = function(idLugar){
	
	//alert(idLugar);
	//return false;
	
	/*
	if(idGrupoZona == undefined){
		
		$scope.cmbFiles = "";
		$scope.files = [];
		return false;
	
	}
	
	$scope.cmbFiles = "";
	
	$scope.files = [];
		
	$('body').addClass('waitMe_body');
	var elem = $("<div class='waitMe_container img' ng-hide='eventos'><div class='fa-spin fa-5x'></div></div>");
	$('body').prepend(elem);
	
	setTimeout(function(){ 
		$http.post('src/models/eventos.class.php',{ action: 'cargarFiles_insertar'
																							 ,idGrupoZona: idGrupoZona})	
																   
		.success(function(response){
			
			console.log(response);
			
			if(response.contador > 0){
				
				$scope.files = response.data.files;
				
			}else{
				swal({title: "Mensaje!!!", text: "No existen Files para mostrar... !!! Revise si el usuario tiene File Asignados.", type: "info"});
			}
			
			$('body.waitMe_body').find('.waitMe_container:not([data-waitme_id])').remove();
			$('body.waitMe_body').removeClass('waitMe_body hideMe');
				
											
		});		
	},0000);
	*/
	

	
	var c = 0;
  let danos_2 = [];
	
	angular.forEach($scope.danos_tem, function (array) {

	  if(parseInt(array['id_lugar_evento']) == idLugar){
	    var data = array;
	    danos_2.push(data);
	  }
	  
	  c=c+1;
	  
	});
		
	$scope.danos = [];
	$scope.danos = danos_2.slice(0);
	
	console.log(danos_2);

}	

















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



























		
		
$scope.cargarFiles = function(idGrupoZona){
	
	if($("#accion").val() == "NuevoEvento"){
		
		//alert(idGrupoZona);
		
		if(idGrupoZona == undefined){
			
			$scope.cmbFiles = "";
			$scope.files = [];
			return false;
		
		}
		
		$scope.cmbFiles = "";
		
		$scope.files = [];
			
		$('body').addClass('waitMe_body');
		var elem = $("<div class='waitMe_container img' ng-hide='eventos'><div class='fa-spin fa-5x'></div></div>");
		$('body').prepend(elem);
		
		setTimeout(function(){ 
			$http.post('src/models/eventos.class.php',{ action: 'cargarFiles_insertar'
																								 ,idGrupoZona: idGrupoZona})	
																	   
			.success(function(response){
				
				console.log(response);
				
				if(response.contador > 0){
					
					$scope.files = response.data.files;
					
				}else{
					swal({title: "Mensaje!!!", text: "No existen Files para mostrar... !!! Revise si el usuario tiene File Asignados.", type: "info"});
				}
				
				$('body.waitMe_body').find('.waitMe_container:not([data-waitme_id])').remove();
				$('body.waitMe_body').removeClass('waitMe_body hideMe');
					
												
			});		
		},0000);
		
	}else{
		
		//alert(idGrupoZona);
		
		
		if(idGrupoZona == undefined){
			
			$scope.cmbFiles = "";
			$scope.files = [];
			return false;
		
		}
		
		$scope.files = [];
		
		$('body').addClass('waitMe_body');
		var elem = $("<div class='waitMe_container img' ng-hide='eventos'><div class='fa-spin fa-5x'></div></div>");
		$('body').prepend(elem);
		
		setTimeout(function(){ 
			$http.post('src/models/eventos.class.php',{ action: 'cargarFiles'
																								 ,idGrupoZona: idGrupoZona})	
																	   
			.success(function(response){
				
				console.log(response);
				
				if(response.contador > 0){
					
					$scope.files = response.data.files;
					
				}
				
				$('body.waitMe_body').find('.waitMe_container:not([data-waitme_id])').remove();
				$('body.waitMe_body').removeClass('waitMe_body hideMe');
					
												
			});		
		},0000);
		
		
	}

}	






$scope.cargarFiles2 = function(idGrupoZona){
	
	
	if($("#accion").val() == "NuevoEvento"){
		
		//alert(idGrupoZona);
		
		if(idGrupoZona == undefined){
			
			$scope.cmbFiles = "";
			$scope.files = [];
			return false;
		
		}
		
		$scope.files = [];
			
		$('body').addClass('waitMe_body');
		var elem = $("<div class='waitMe_container img' ng-hide='eventos'><div class='fa-spin fa-5x'></div></div>");
		$('body').prepend(elem);
		
		setTimeout(function(){ 
			$http.post('src/models/eventos.class.php',{ action: 'cargarFiles_insertar'
																								 ,idGrupoZona: idGrupoZona})	
																	   
			.success(function(response){
				
				console.log(response);
				
				if(response.contador > 0){
					
					$scope.files = response.data.files;
					
				}
				
				$('body.waitMe_body').find('.waitMe_container:not([data-waitme_id])').remove();
				$('body.waitMe_body').removeClass('waitMe_body hideMe');
					
												
			});		
		},0000);
	}else{
		//alert(idGrupoZona);
		
		if(idGrupoZona == undefined){
			
			$scope.evento.ID_FILE_TEMP = "";
			$scope.files = [];
			return false;
		
		}
		
		$scope.files = [];
		
		$scope.evento.ID_FILE_TEMP = "";
			
		$('body').addClass('waitMe_body');
		var elem = $("<div class='waitMe_container img' ng-hide='eventos'><div class='fa-spin fa-5x'></div></div>");
		$('body').prepend(elem);
		
		setTimeout(function(){ 
			$http.post('src/models/eventos.class.php',{ action: 'cargarFiles'
																								 ,idGrupoZona: idGrupoZona})	
																	   
			.success(function(response){
				
				console.log(response);
				
				if(response.contador > 0){
					
					$scope.files = response.data.files;
					
				}
				
				$('body.waitMe_body').find('.waitMe_container:not([data-waitme_id])').remove();
				$('body.waitMe_body').removeClass('waitMe_body hideMe');
					
												
			});		
		},0000);
		
		
	}

}	





	
	
	
	
$scope.validarCmbFile = function(){
	
	/*
	$('#formEven').validate({
      rules: {
        cmbFile:{
          required: true
        }
      },
      messages: {
        cmbFile: {
          required: "Este campo es requerido."
        }
      },
      highlight: function (input) {
        $(input).parents('.form-group').addClass('has-danger');
      },
      unhighlight: function (input) {
        $(input).parents('.form-group').removeClass('has-danger');
      },
      errorPlacement: function (error, element) {
        $(element).parents('.form-group').append(error);
      },
      submitHandler : function(_form){
        var form = $(_form);
        $.ajax({
          url: form.attr('action'),
          type: form.attr('method'),
          data: form.serialize(),
          dataType: 'json',
          success:function(response){
          ...
          }
        })
      }
    });
    */
    

		
		var validator = $( "#formEven" ).validate();
		validator.resetForm();

  
	
	
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
							
							
							
							
							
							
							/*
							$("#mensaje").html("");
						
							$scope.options = [
												//{ label: '5' },
											  { label: '15' },
											  { label: '30' },
											  { label: '60' }
											  //{ label: '100' }		
											]
						
							$scope.viewby = $scope.options[0];			
							
							$scope.currentPage = 1; //current page
							$scope.maxSize = 10; //pagination max size			
							$scope.itemsPerPage = $scope.viewby.label; //max rows for data table
							
							
							/* init pagination with $scope.list *
							$scope.totalItems = Math.ceil($scope.eventos.length);
							 
							$scope.setPage = function(pageNo) {
					        	$scope.currentPage = pageNo;
					    };
					    */
					    
					    
					    
					    
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
					    
					    
			
					    
					    
					    
					    
					    
					    
					    
					    
					     /*   
						   $scope.jsonToExport = [
						  	{
						    	"col1data": "1",
						      "col2data": "Fight Club",
						      "col3data": "Brad Pitt ñ Ñ á Á"
						    },
						  	{
						    	"col1data": "2",
						      "col2data": "Matrix (Series)",
						      "col3data": "Keanu Reeves"
						    },
						  	{
						    	"col1data": "3",
						      "col2data": "V for Vendetta",
						      "col3data": "Hugo Weaving"
						    }
							];
						  */
						  
						  
						  //console.log($scope.eventos);
						  
						  
							// Prepare Excel data:
							$scope.fileName = "report";
							$scope.exportData = [];
						  // Headers:
							$scope.exportData.push(["#", "FECHA", "HORA", "TIPO EVENTO", "AFECTADO", "NRO. FILE", "MONTO", "REPORTADO", "ESTADO"]);
						  // Data:
							angular.forEach($scope.eventos, function(value, key) {
						    $scope.exportData.push([value.ID_EVENTO
						                           ,value.FECHA_EVENTO
						                           ,value.HORA_EVENTO
						                           ,value.NOMBRE_TIPO_EVENTO
						                           ,value.NOMBRE_AFECTADO
						                           ,value.FILES
						                           ,value.MONTO
						                           ,value.NOMBRE_REPORTA
						                           ,value.NOMBRE_ESTADO_EVENTO
						                           ]);
							});
													
															
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
	
	
	
	
/*	
$scope.setPage = function (pageNo) {
	$scope.currentPage = pageNo;
};

$scope.pageChanged = function() {
	console.log('Page changed to: ' + $scope.currentPage);
};

$scope.setItemsPerPage = function(num) {
	$scope.itemsPerPage = num;
	$scope.currentPage = 1; //reset to first page
}	
*/





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
		
		
		/*
		alert("centro operacion: "+$scope.cmbFiles);
		alert("id zona: "+$scope.cmbGrupoZona);
		alert("nombre zona: "+$("#cmbGrupoZona option:selected").text());
		
		
		var c = 0;
		var indice = 0;
		
		angular.forEach($scope.files, function () {
			//alert($scope.files[index]['ID_FILE']+"----"+$scope.cmbFiles);
		  if($scope.files[c]['ID_FILE'] == $scope.cmbFiles){
		     indice = c;
		  }  
		  c = c + 1;
		});
		
		
		//alert("ID file: "+$scope.files[indice]['ID_FILE']);
		alert("NOMBRE file: "+$scope.files[indice]['NOMBRE_FILE']);
		
		alert("fecha evento: "+document.getElementById('txtFechaEvento').value);
		alert("hora evento: "+document.getElementById('txtHoraEvento').value);
		alert("fecha reporte: "+document.getElementById('txtFechaReporteEvento').value);
		*/
		
		
		//return false;
		
		
		
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
					
					
					
					
					
					
					/*
					if(response.tipo == 'error'){
						$(swal("Alerta!!!", "Evento NO registrado "+response.mensaje, "error"));	
						
						$('body.waitMe_body').find('.waitMe_container:not([data-waitme_id])').remove();
						$('body.waitMe_body').removeClass('waitMe_body hideMe');				
					}else{
						if(response.contador > 0){	
							/*$(swal("Mensaje!!!", "El código ingresado se encuentra registrado", "warning"));*
							
							swal({title: "Mensaje!!!",
								  text: "Evento se encuentra registrado!!!",
								  type: "success",   
								  showCancelButton: false,
								  //confirmButtonColor: "#DD6B55",
								  confirmButtonText: "Aceptar",
								  cancelButtonText: "Cancelar",
								  closeOnConfirm: true,
								  closeOnCancel: true }
								  );
								  
							$('body.waitMe_body').find('.waitMe_container:not([data-waitme_id])').remove();
							$('body.waitMe_body').removeClass('waitMe_body hideMe');
								  
						}else{						
							//$(swal("Mensaje!!!", "Evento registrado Correctamente!!!", "success"));	
							
							window.localStorage.setItem("IDEvento", response);
							
							swal({title: "Mensaje!!!",
								  text: "Evento creado exitosamente... !!!",
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
												//$("#step2").removeClass("btn btn-default btn-circle disabled");
												//$("#step2").addClass("btn btn-default btn-circle");
												
												$('body.waitMe_body').find('.waitMe_container:not([data-waitme_id])').remove();
												$('body.waitMe_body').removeClass('waitMe_body hideMe');
										});	
									}							
								  }						 
								);
								
								
							
							//$scope.evento.ID_EVENTO = response;
							//window.localStorage.setItem("IDEvento", response);
							//window.localStorage.setItem("IDContexto", angular.toJson($("#txtIDContextoEvento").val()));
							
							$state.go('eventoEditar');
							
							//$("#step-2").toggleClass("disabled");
							
							$("#step2").removeClass("btn btn-default btn-circle disabled");
							$("#step2").addClass("btn btn-default btn-circle");
							
						}
					}	
					*/
			
										
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









$scope.mostrarModalValidarEvento = function(idEvento){
	//alert("validando...: "+idEvento);
	
	$("#myValidacionEvento").modal();
	
	
	
}





$scope.mostrarModalVerObservaciones = function(idEvento){
	//alert("validando...: "+idEvento);
	
	$("#myVerObservacionesEvento").modal();
	
	
	
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
	$state.go('eventos');
}




		
		
		
		

$scope.exportDataExcel = function () {
		//var header = '<meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8">';
		
		
		
		/*
    textEncoder = new TextEncoder('windows-1252');

		var datosContentEncoded = textEncoder.encode([document.getElementById('exportable').innerHTML]);

		var blob = new Blob(datosContentEncoded, {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
    });
    saveAs(blob, "Report.xls");
    */
    
    
    /*
    var header = '<meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8">';
		var blob = new Blob([header + document.getElementById('exportable').innerHTM], {
		    type: "data:application/vnd.ms-excel;charset=UTF-8"});
		saveAs(blob, "Report.xls");
		*/
		

		
		
		
		/*
		var csvContent = document.getElementById('exportable').innerHTML,
        textEncoder = new CustomTextEncoder('windows-1252', {NONSTANDARD_allowLegacyEncoding: true}),
        fileName = 'some-data.csv';
        
    var a = document.getElementById('btnExport');
    
    a.addEventListener('click', function(e) {
        var csvContentEncoded = textEncoder.encode([csvContent]);
        var blob = new Blob([csvContentEncoded], {type: 'text/csv;charset=windows-1252;'});
        saveAs(blob, fileName);
        e.preventDefault();
    });
    */
        
        
    
    
    
    
    
    
		
    var blob = new Blob([document.getElementById('exportable').innerHTML], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
    });
    saveAs(blob, "Report.xls");
    
    
    
    


    
    
}


	







$scope.mostrarArchivosDigitales = function(){			
	//alert("abriendo modal setfotografico...");
	$("#modalArchivosDigitales").modal();
	
	$scope.txtIDArchivo_hiddden = "";
	document.getElementById('txtIDArchivo_hiddden').value = "";
	document.getElementById('archivos').value = "";
	
	$scope.listarSetGrafico($scope.evento.ID_EVENTO);
	
}









$scope.listarSetGrafico = function(id_evento){
	
	//$scope.opacidad			   = false;
	//alert($scope.$storage.evento_id);
	//alert($storage.evento_id);
	//***************

	//alert(id_evento);

		$http.post('src/models/eventos.class.php',{ action: 'listarSetGrafico',
                                                id_evento: id_evento
                                              })									
		
			.success(function(response) {
				console.log(response);
				
					
				if(response.tipo == 'error'){
					response.mensaje=response.mensaje.replace('\r\n',' ');
			
					$scope.rsJSON = response.mensaje;
									
				}else{
					
					if(response.contador>0){
						$("#cant_reg_archivo").html("<br><b>Se encontraron "+response.contador+" Registros</b>");
						$scope.setGrafico = response.data.setGrafico;
						
						/*var blob = new Blob([response], { type: octetStreamMime });
						var url = urlCreator.createObjectURL(blob);
						window.location = url;*/
						
						
						$scope.options = [
									  { label: '15' },
									  { label: '30' },
									  { label: '60' }		
									]
				
					$scope.viewby = $scope.options[0];			
					
					$scope.totalItems = $scope.setGrafico.length;
					$scope.currentPage = 1;
					$scope.itemsPerPage = $scope.viewby.label;
					$scope.maxSize = 10; //Number of pager buttons to show			
					
					var length = $scope.setGrafico.length;

					}else{
						
						$("#cant_reg_archivo").hide();
						
						$scope.setGrafico = "";
					}
					
				}
											
			});
	
}








const $archivos = document.querySelector("#archivos");

$scope.subirArchivo = function(){
	
		/*
		var name = $scope.name;
		var file = $scope.file;
		var id_evento = angular.fromJson(window.localStorage.getItem("IDEvento"));
		
		//alert(id_evento);
		
		serviceUploadFile.subirArchivo(file, name, id_evento).then(function(response){
			console.log(response);
			$scope.listarSetGrafico(id_evento);
			
		})
		*/
		
		
		
		
		var id_evento = angular.fromJson(window.localStorage.getItem("IDEvento"));
		
		let archivos = $archivos.files;
    //if (archivos.length > 0 && $scope.nombre) {
    
    if (archivos.length > 0) {

        let formdata = new FormData();

        // Agregar cada archivo al formdata
        angular.forEach(archivos, function (archivo) {
            formdata.append(archivo.name, archivo);
        });
        
        formdata.append("id_evento", id_evento);

        // Hora de enviarlo

        // Primero la configuración
        let configuracion = {
            headers: {
                "Content-Type": undefined,
            },
            transformRequest: angular.identity,
        };
        // Ahora sí
        
        /*
        $http.post("src/models/eventos.class.php",{action: "uploadFile",
                                                	 id_evento: id_evento
                                              		},formdata, configuracion)
        */                                      
        
                                              
        $http
            .post("src/models/eventos.class.php?action=uploadFile", formdata, configuracion)
          
            .then(function (response) {
                /*console.log("Después de enviar los archivos, el servidor dice:", respuesta.data);*/
                console.log("Después de enviar los archivos, el servidor dice:", response);
                $scope.listarSetGrafico(id_evento);
            })
            .catch(function (detallesDelError) {
                console.warn("Error al enviar archivos:", detallesDelError);
            })
    } else {
        alert("Seleccione alguno archivo");
    }
		
		
		
		
		
}








$scope.eliminarArchivo = function(){
	
	//alert("elimnando Grabacion...!!!");

	id_archivo = $("#txtIDArchivo_hiddden").val();

	
	if($("#txtIDArchivo_hiddden").val() == ""){	
		$(swal("Mensaje!!!", "Debe Seleccionar un Archivo...!!!", "warning"));	
	}else{
		swal({title: "Esta seguro ?",
			  text: "El archivo será Eliminado...!!!",
			  type: "warning",
			  showCancelButton: true,
			  confirmButtonColor: "#DD6B55",
			  confirmButtonText: "Si",
			   closeOnConfirm: false
			},
			  function(isConfirm){
									
				if(isConfirm){
											
					//Agregar sweetalert de procsando....
					
					
				
					$http.post('src/models/eventos.class.php?action=eliminarArchivo',{'id_archivo' : id_archivo})
					.success(function (response, status, headers, config){ 
						
						//alert(response.commit);								
						//return false;
						
						if(response.tipo == 'ok'){
							if(response.commit == '1'){
								swal({title: "Mensaje!!!",
								  text: "El archivo fue Eliminado...!!!",
								  type: "success",   showCancelButton: false,
								  confirmButtonColor: "#DD6B55",
								  confirmButtonText: "Aceptar",
								  cancelButtonText: "Cancelar",
								  closeOnConfirm: true,
								  closeOnCancel: true },
						
								  function(isConfirm){
									if(isConfirm){
										//$scope.listarUsuario();
										//$state.go('usuarios');
										$("#txtIDArchivo_hiddden").val("")
										$scope.listarSetGrafico($scope.evento.ID_EVENTO);
									}
								 });
							}else{
								swal("Mensaje!!!", "El archivo ya se encuentra Eliminado...!!!", "info"); 
							}
						}else{
							swal("Mensaje!!!", response.mensaje, "error");
						}
					})			
				}
			 }
		);
			
	}
	
	
}







$scope.seleccionarArchivo = function(id_grabacion){

	$("#chkArchivoSeleccionado-"+id_grabacion).prop("checked", true);
		
	document.getElementById('txtIDArchivo_hiddden').value = id_grabacion;
	
}










	


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
