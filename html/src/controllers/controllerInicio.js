//app.controller('controllerCambioClave', function($http, $scope, $state){
	
app.controller('controllerInicio', ['$scope', '$http', '$localStorage', '$location', '$state', '$filter', '$timeout', function($scope, 
									$http, 
									$localStorage, 
									$location,
									$state, 
									$filter,
									$timeout){





/*
$scope.mostrarModalAsignarFiles = function(){

	$("#myUsuarioFiles").modal();

}
*/








  
$('body').addClass('waitMe_body');
var elem = $("<div class='waitMe_container img' ng-hide='eventos'><div class='fa-spin fa-5x'></div></div>");
$('body').prepend(elem);

setTimeout(function(){ 
	//$http.post('src/models/sql/perfilUsuario.class.php',{ accion: 'sesion_usuario' })	
	
	//$http.post('src/models/usuario.class.php',{ action: 'sesion_usuario' })	
	$http.post('src/models/login.class.php',{ accion 		: 'sesion_usuario', pagina : 'Inicio'})
																																   
	.success(function(response){	

			console.log(response);
			
			if(response.session == "0"){
				
				$state.go('login');
				
			}else{
				
				
				if(response.acceso_url == "1"){
					
					$scope.usuario = response.sesion_usuario;
					
					$scope.sesionUsuario = response.sesion_usuario;
					
					
					
					if (!(localStorage.getItem("idCentroOperacion"))) {
					  $scope.listarCentroOperacion();
					}else{
						$scope.CentroOperacion = localStorage.getItem("CentroOperacion");
						
					}
					
					
					
					
					/*
					if(window.localStorage.getItem('idCentroOperacion') =! ""){
						$scope.listarCentroOperacion();
					}
					*/
					
					
					
					
					//alert($scope.usuario.id_perfil);
					
					$http.post('src/models/menu.class.php',{ action : 'listarMenuHTML'})
					
					
					.success(function(response){
						console.log(response);
						
						$("#menu").html(response);
						
					})
						
					/*
					window.localStorage.setItem("backURL", 'cambioclave');
					*/
					
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

		











$scope.listarCentroOperacion = function(){
	
	//alert("listando centros de operacion....");
	
	$http.post('src/models/ingresoVehiculo.class.php',{ action : 'listarCentroOperacion'})
	.success(function(response){
		
		console.log(response);
		
		$scope.centroOperacion = response.data.centroOperacion;
	
		if($scope.centroOperacion.length == 1 && $scope.sesionUsuario.id_perfil == 2){
		
				$scope.centroOperacionPorDefecto = $scope.centroOperacion[0].ID_CENTRO_OPERACION;
		
		}else{
			
			$scope.centroOperacionPorDefecto = 0;
			angular.element('#cmbLugarEvento').focus();
			
		}
		
		$('#myUsuarioFiles').modal({backdrop: 'static', keyboard: false})
		//alert("termino...");

	})
			
}	
			















$scope.elegirCentroOperacion = function(){	
		
	//alert("eligiendo centro de operacion...");
	
	var selectedOptionText = $('#cmbLugarEvento').find(":selected").text();//selected option text
	var selectedOptionVal = $('#cmbLugarEvento').find(":selected").val();//selected option value
	
	
	window.localStorage.setItem("idCentroOperacion", selectedOptionVal);
	window.localStorage.setItem("CentroOperacion", selectedOptionText);
	
	$scope.CentroOperacion = selectedOptionText;
	
	$("#myUsuarioFiles").modal('hide');
	
	
	

}

















	
}]);



