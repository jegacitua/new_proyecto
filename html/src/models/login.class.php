<?php session_start();

require_once('conector.php');
require_once('funciones.php');


$JSON       		= file_get_contents("php://input");
$request    		= json_decode($JSON);






$_GET['action'] = $request->accion;






switch($_GET['action']){
	
	
	case 'consultarLogin' :
	
		
		// TOMAMOS NUESTRO JSON RECIBIDO DESDE LA PETICION DE ANGULAR JS Y LO LEEMOS
		$JSON       = file_get_contents("php://input");
		$request    = json_decode($JSON);
		
		$rut    	= quitarPuntosGuion($request->rut);
		$contrasena = $request->contrasena;
		
		
		$rut_sindv = quitarVerificador($rut);
		
		

		//$sql = "SELECT rut_usua FROM ta_usuario WHERE AES_DECRYPT(rut_usua,8090) = '".$rut."' AND AES_DECRYPT(password_usua,8090) = '".$contrasena."'";
		
		session_unset();
		
		$con = conecta();
		
		if(!$con){exit;}
		
		
		try{
		 	
			$ip = obtenerIP();
			
			//$sql = "CALL spr_login_usuario('".quitarCeroIzquierda($rut_sindv)."','".extraeVerificador($rut)."','".$contrasena."', '".$ip."', @id_usuario, @nombre_perfil, @id_tipo_perfil, @id_centro_operacion, @nombre_centro_operacion, @nombres_usua, @apPaterno_usua, @apMaterno_usua, @estado_usuario)";
			$sql = "CALL spr_login_usuario('".quitarCeroIzquierda($rut_sindv)."','".extraeVerificador($rut)."','".$contrasena."', '".$ip."', @id_usuario, @nombre_perfil, @id_usuario_perfil, @id_perfil, @nombres_usua, @apPaterno_usua, @apMaterno_usua, @estado_usuario)";
			//echo $sql;
			//exit;		
			
			$Result = mysqli_query($con,$sql);
			
			if(!$Result){
				throw new Exception("MySQL ERROR : " . mysqli_error($con));
			}
			
			/*
			$sql = "SELECT @id_usuario AS id_usuario
						  ,@nombre_perfil AS nombre_perfil
						  ,@id_tipo_perfil AS id_tipo_perfil
						  ,@id_centro_operacion AS id_centro_operacion
						  ,@nombre_centro_operacion AS nombre_centro_operacion
						  ,@nombres_usua AS nombres_usua
						  ,@apPaterno_usua AS apPaterno_usua
						  ,@apMaterno_usua AS apMaterno_usua
						  ,@estado_usuario AS estado_usuario";
			*/
						  
			$sql = "SELECT @id_usuario AS id_usuario
						  ,@nombre_perfil AS nombre_perfil
						  ,@id_usuario_perfil AS id_usuario_perfil
						  ,@id_perfil AS id_perfil
						  ,@nombres_usua AS nombres_usua
						  ,@apPaterno_usua AS apPaterno_usua
						  ,@apMaterno_usua AS apMaterno_usua
						  ,@estado_usuario AS estado_usuario";
						  
			//echo $sql;
			//exit;
						   
			$Result = mysqli_query($con,$sql);
			
			if(!$Result){
				
				throw new Exception("MySQL ERROR : ". mysqli_error($con));
				/*VALIDAR LOS ERRORES RESULTADOS NULL POR FALLAS DEL PARAMETRO DE RESPUESTA*/
				
			}else{
				
				while($row = mysqli_fetch_object($Result)){
					
					if($row->id_perfil == 1 || $row->id_perfil == 2  || $row->id_perfil == 4){
						
						$url = 1;
					
					}
					
					if($row->id_perfil == 3 || $row->id_perfil == 5){
						
						$url = 2;
					
					}
					
					$_SESSION['id_usuario'] 							= $row->id_usuario;
					$_SESSION['rut'] 											= formateaRut($rut);
					$_SESSION['perfil'] 									= strCharacterSpecial_mostrar($row->nombre_perfil);
					$_SESSION['id_usuario_perfil'] 			  = $row->id_usuario_perfil;
					$_SESSION['id_perfil'] 			  				= $row->id_perfil;
					
					/*
					$_SESSION['id_centro_operacion'] 			= $row->id_centro_operacion;
					$_SESSION['nombre_centro_operacion'] 	= $row->nombre_centro_operacion;
					*/
					
					$_SESSION['nombres'] 									= strCharacterSpecial_mostrar($row->nombres_usua);
					$_SESSION['ap_paterno'] 							= strCharacterSpecial_mostrar($row->apPaterno_usua);
					$_SESSION['ap_materno'] 							= strCharacterSpecial_mostrar($row->apMaterno_usua);
					
					$_SESSION['yearNow']									= date("Y");
					
					$_SESSION['ultimasession'] = date("Y-n-j H:i:s");
					
					$obj = array('tipo' 						=> 'ok', 
											 'mensaje' 					=> $row->estado_usuario,
											 'yearNow'					=> date('Y'),
											 'idPerfil'					=> $row->id_perfil,
											 'url'							=> $url,
											 'rut'							=> formateaRut($rut));
					
					echo json_encode($obj);
					
				}
			}
		} catch(Exception $e) {
		 	$obj = array('tipo' => 'error', 'mensaje' => utf8_encode($e->getMessage()));
			echo json_encode($obj);	
		}
			
	break;
		
		
		

	
	
	
	

	case 'cerrarSesion' :

			session_destroy();
	
	break;	
	
	
	
	
	
	
	
	
	
	
	
	
	
	case 'sesion_usuario':
		
		$jsondata = array();

		// Proceso para traer los datos del usuario que fue logeado
		
		if(isset($_SESSION['rut'])){
			
			/*
			$jsondata = array("session"		=> '1',
												"rut" 			=> $_SESSION['rut']);
			*/		
										
			$jsondata["session"] = 1;
			
			
			$_SESSION["nombre_sistema"] = "CONTROL DE ESTACIONAMIENTOS";
		
			// Proceso para traer los datos del usuario que fue logeado
			
			$jsondata["sesion_usuario"] = array("nombre" 			=> $_SESSION['nombres']." ".$_SESSION['ap_paterno']." ".$_SESSION['ap_materno'], 
									                  "rut" 							=> $_SESSION['rut'],
													  				"perfil" 						=> $_SESSION['perfil'], 
													  				"centro_operacion" 	=> $_SESSION['nombre_centro_operacion'], 
													  				"nombre_sistema" 		=> $_SESSION['nombre_sistema'],
													  				"id_usuario" 				=> $_SESSION['id_usuario'],
													  				"id_perfil" 				=> $_SESSION['id_perfil']
													  				);
						  				
			
			$JSON       = file_get_contents("php://input");
			$request    = json_decode($JSON);
									
			$con = conecta();			  				
						  				
			$sql = "SELECT count(*) as acceso_url
							FROM sys_ta_menu, ta_usuario_menu, ta_usuario_perfiles
							WHERE sys_ta_menu.nombre_menu_aux = '".$request->pagina."'
							AND sys_ta_menu.id_menu = ta_usuario_menu.menu_id_menu
							
							AND ta_usuario_perfiles.usuarios_id_usuario = ".$_SESSION['id_usuario']."
							AND ta_usuario_perfiles.perfil_id_perfil = ".$_SESSION['id_perfil']."
							
							AND ta_usuario_menu.usuario_perfiles_id_usuario_perfil = ta_usuario_perfiles.id_usuario_perfil
							
							AND ta_usuario_menu.estado_usuario_menu = 1";
						  
			//echo $sql;
			//exit;
						   
			$Result = mysqli_query($con,$sql);
			
			if($Result){

				while($row = mysqli_fetch_object($Result)){
									
					$jsondata["acceso_url"] 							= $row->acceso_url;
				
				}
			
			}
			
			//sino, calculamos el tiempo transcurrido 
	    $fechaGuardada = $_SESSION["ultimasession"]; 
	    $ahora = date("Y-n-j H:i:s"); 
	    $tiempo_transcurrido = (strtotime($ahora)-strtotime($fechaGuardada)); 
	
	    //comparamos el tiempo transcurrido 
	    if($tiempo_transcurrido >= 6000){
	     	//si pasaron 10 minutos o m�s 
	      session_destroy(); // destruyo la sesi�n 
	      
	      //header("Location: index.php"); //env�o al usuario a la pag. de autenticaci�n 
	      
	      $jsondata["session"] = 0;
	      
	      //sino, actualizo la fecha de la sesi�n 
	    }else{ 
	    	$_SESSION["ultimasession"] = $ahora; 
	    	
	    	$jsondata["transcurrido"] = $tiempo_transcurrido;
	    }
	    
	    			
		}else{
			
			/*
			$jsondata = array("session"		=> '0',
												"rut" 			=> '');
			*/
			
			$jsondata["session"] = 0;
			
		}
						  				
		echo json_encode($jsondata);
		exit;
	
	break;
		




	
	
}

?>