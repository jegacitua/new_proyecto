<?php session_start();

ini_set("upload_max_filesize","300M");
ini_set("post_max_size","300M");

include('conector.php');
include('funciones.php');



$JSON       		= file_get_contents("php://input");
$request    		= json_decode($JSON);



/*
echo $request->action." ".$request->id_evento;;
exit;
*/


$_GET['action']			= $request->action;



if(empty($_GET['action'])){
	$_GET['action'] = $_REQUEST['action'];
}



switch($_GET['action'])  {
	
	
	
	
	case 'fecha_hora':
		$jsondata = array();
	
		$fecha = date('d/m/Y');
		$hora_actual =  date("H:i");
	
		$jsondata = array('fecha' => $fecha, 'hora_actual' =>$hora_actual);
		//echo "la fecha actual por servidor es: ".$fecha;
		echo json_encode($jsondata);
	
	break;
	
	
	
	
	
	
	case 'sesion_usuario':
		$jsondata = array();
		$_SESSION["nombre_sistema"] = "CAPTURADOR DE EVENTOS";
		
		$jsondata = array("nombre" 						=>$_SESSION['nombres']." ".$_SESSION['ap_paterno']." ".$_SESSION['ap_materno'], 
		                  "rut" 							=>$_SESSION['rut'],
						  				"perfil" 						=>$_SESSION['perfil'], 
						  				"centro_operacion" 	=>$_SESSION['nombre_centro_operacion'], 
						  				"nombre_sistema" 		=>$_SESSION['nombre_sistema'],
						  				"id_perfil"					=>$_SESSION['id_perfil']); 
		echo json_encode($jsondata);
	
	break;
	
	
	
	
	
	
	
	
	
	
	case 'listarCentroOperacion' :
	
			$JSON       = file_get_contents("php://input");
			$request    = json_decode($JSON);
		
			$i=0;
			$jsondata = array();	
	

			$request->idUsuario = $_SESSION['id_usuario'];
	
			
			$sql = "select ta_centro_operacion.id_centro_operacion,
							ta_centro_operacion.nombre_centro_operacion
							from ta_usuario_centro_operacion
							INNER JOIN ta_centro_operacion on (ta_centro_operacion.id_centro_operacion = ta_usuario_centro_operacion.centro_operacion_id_centro_operacion)
							INNER JOIN ta_usuario_perfiles on (ta_usuario_perfiles.id_usuario_perfil = ta_usuario_centro_operacion.usuario_id_usuario_perfil)
							INNER JOIN ta_usuarios on (ta_usuarios.id_usua = ta_usuario_perfiles.usuarios_id_usuario)
							WHERE ta_usuarios.id_usua = ".$request->idUsuario." and
							ta_usuario_centro_operacion.estado_usuario_centro_operacion = 1";
		
			
			//echo $sql;
			//exit;
			
			$Result = ejecutaSQL_select('capturadorenex',$sql);
			
			if($Result){
				if(mysqli_num_rows($Result)>0){
					$jsondata["tipo"] = 'ok';
					$jsondata["success"] = true;					
					$jsondata["data"]["centroOperacion"] = array();
					
					while($row = mysqli_fetch_object($Result)){
						$i=$i+1;
											
						$data = array("ID_CENTRO_OPERACION"	 			=> $row->id_centro_operacion,
													"NOMBRE_CENTRO_OPERACION"		=> strCharacterSpecial_mostrar($row->nombre_centro_operacion)
													);
									  
						$jsondata["data"]["centroOperacion"][] = $data;
						
					}
				}
				
				$jsondata["contador"] = $i;
				
			}else{
				$jsondata["tipo"] = 'ok';
				$jsondata["success"] = true;
				$jsondata["contador"] = mysqli_num_rows($Result);
			}
			
			echo json_encode($jsondata);
			exit;
		
	break;	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

		
	
    
	
	case 'listarEventos' :
	
		$JSON       = file_get_contents("php://input");
		$request    = json_decode($JSON);
				
		$fecha									= $request->fecha;
		$idCentroOperacion			= $request->idCentroOperacion;
	
	
		$i=0;
		$jsondata = array();	

		//$sql = "CALL spr_listar_eventos(2020,".$_SESSION['id_usuario_perfil'].")";
		$sql = "CALL spr_listar_ingresos('".fechaIngles($fecha)."',".$_SESSION['id_usuario_perfil'].",".$idCentroOperacion.")";
		//echo $sql;
		//exit;
		
		$Result = ejecutaSQL_select('capturadorenex',$sql);
		
		if($Result){
			if(mysqli_num_rows($Result)>0){
				$jsondata["tipo"] = 'ok';
				$jsondata["success"] = true;					
				$jsondata["data"]["eventos"] = array();
				
				while($row = mysqli_fetch_object($Result)){
					$i=$i+1;
										
					$data = array("ID_INGRESO"									=> $row->id_ingreso,
											  "FECHA_INGRESO"								=> fechaEspanol($row->fecha_ingreso),
											  "HORA_INGRESO"								=> $row->hora_ingreso,
											  "ID_CENTRO_OPERACION"					=> $row->id_centro_operacion,
											  "PATENTE_INGRESO"							=> strCharacterSpecial_mostrar($row->patente_ingreso),
											  "ESTADO_INGRESO"							=> $row->estado_ingreso
											  
								  		);
								  
					$jsondata["data"]["tickets"][] = $data;
					
				}
			}
			
			$jsondata["contador"] = $i;
			
		}else{
			$jsondata["tipo"] = 'ok';
			$jsondata["success"] = true;
			$jsondata["contador"] = mysqli_num_rows($Result);
		}
		
		echo json_encode($jsondata);
		exit;
	break;
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	case 'ingresarVehiculo' :
		
		// TOMAMOS NUESTRO JSON RECIBIDO DESDE LA PETICION DE ANGULAR JS Y LO LEEMOS
		
		$JSON       						= file_get_contents("php://input");
		$request    						= json_decode($JSON);		
			
		$jsondata = array();
		
		
		$ip = obtenerIP();
		$rut_user = $_SESSION['rut'];
		$rut = quitarVerificador($rut_user);		
		$etapa_evento_bitacora = "INGRESO VEHICULO - DATOS DEL INGRESO";
		

		$sql = "CALL spr_ingresoVehiculo_insert(".$request->cmbLugarEvento."
																					 	 ,'".fechaIngles($request->txtFechaEntrada)."'
																					   ,'".$request->txtHoraEntrada."'
																					   ,'".strtoupper($request->txtPatente)."'
																					   ,'".$rut."'
																					   ,'".$ip."'
																					   ,@id);";
		//echo $sql;
		//exit;
		
		$Result = ejecutaSQL_insert('capturadorenex',$sql);
		
		if($Result){
			
			$row = mysqli_fetch_row($Result);			
			
			$jsondata["data"] = $row[0];
			
				
		}				
		
		
		echo json_encode($jsondata);
		exit;
		
 	break;
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	case 'editarEvento' :
      
		$JSON       						= file_get_contents("php://input");
		$request    						= json_decode($JSON);
		
		//$txtIDEvento  						= $request->txtIDEvento; 
		
		$ip = obtenerIP();
		$rut_user = $_SESSION['rut'];
		$rut = quitarVerificador($rut_user);
		
		$etapa_evento_bitacora = "DATOS DEL EVENTO";
		$jsondata = array();
		
	
		
		$sql = "CALL spr_evento_update(".$request->txtIDEvento."
		
																	 ,".$request->cmbFiles."
																   ,".$request->cmbGrupoZona."
																   
																   ,'".strCharacterSpecial_enviar($request->nombreZona)."'
																   ,'".strCharacterSpecial_enviar($request->nroFiles)."'
																   
																   ,'".fechaIngles($request->txtFechaEvento)."'
																   ,'".$request->txtHoraEvento."'
																   ,'".fechaIngles($request->txtFechaReporteEvento)."'
																   
																   ,".$request->cmbLugarEvento."
																   ,".$request->cmbTipoEvento."
																   ,".$request->cmbAfectadoEvento."
																   ,".$request->cmbArtefactoEvento."
																   
																   ,".$request->txtMonto."
																   ,'".strCharacterSpecial_enviar($request->txtNombreReportaEvento)."'
																   ,'".strCharacterSpecial_enviar($request->txtNarracionEvento)."'
																   
																   ,'".$rut."'
																   ,'".$ip."');";
																	
		//echo $sql;
		//exit;		
						  
		$Result = ejecutaSQL_update('capturadorenex',$sql);
	
		
		
		if($Result > 0){
			//echo 'si hubieron cambios';
			$jsondata = array('tipo' => "ok", 'commit' => 1);							
		}else{			
			//echo 'no hubieron cambios';	
			$jsondata = array('tipo' => "ok", 'commit' => 0);
		}
		
		echo json_encode($jsondata);
		exit;
	break;	
	
	
	
	
	
	
	
	
	
	case 'eliminarEvento' :
	
		$JSON       					= file_get_contents("php://input");
		$request    					= json_decode($JSON);
		
		$id_evento  					= $request->txtIDEvento;
		
		$ip = obtenerIP();
		$rut_user = $_SESSION['rut'];
		$rut_usuario = quitarVerificador($rut_user);
		$etapa_evento_bitacora = "DATOS DEL EVENTO";
		
    $jsondata = array();
	  
	  
	  $sql = "UPDATE ta_eventos SET estado_evento = 0 WHERE id_evento=".$id_evento;

		//echo $sql;
		//exit;
		
		$Result = ejecutaSQL_update('capturadorenex',$sql);
		
		
		
		if($Result > 0){		
			$jsondata = array('tipo' => "ok", 'commit' => 1);
			echo json_encode($jsondata);
			exit;
		}else{
			$jsondata = array('tipo' => "ok", 'commit' => 0);
			echo json_encode($jsondata);
			exit;		
		}
		
    break;
	
	
	
	

		
	 
	
	case 'activarEvento' :
	
		$JSON       					= file_get_contents("php://input");
		$request    					= json_decode($JSON);
		
		$id_evento  					= $request->txtIDEvento;
		
		$ip = obtenerIP();
		$rut_user = $_SESSION['rut'];
		$rut_usuario = quitarVerificador($rut_user);
		$etapa_evento_bitacora = "DATOS DEL EVENTO";
		
    $jsondata = array();
	  

		$sql = "UPDATE ta_eventos SET estado_evento = 1 WHERE id_evento=".$id_evento;

		//echo $sql;
		//exit;
		
		$Result = ejecutaSQL_update('capturadorenex',$sql);
		
		if($Result > 0){		
			$jsondata = array('tipo' => "ok", 'commit' => 1);
			echo json_encode($jsondata);
			exit;
		}else{
			$jsondata = array('tipo' => "ok", 'commit' => 0);
			echo json_encode($jsondata);
			exit;		
		}
		
  break;
  
  
  
  
  
  
  
  
  
  
  
  case 'validarEvento' :
	
		$JSON       				= file_get_contents("php://input");
		$request    				= json_decode($JSON);
		
		/*
		$ip = obtenerIP();
		$rut_user = $_SESSION['rut'];
		$rut_usuario = quitarVerificador($rut_user);
		$etapa_evento_bitacora = "DATOS DEL EVENTO";
		*/
		
    $jsondata = array();
	  

		$sql = "UPDATE ta_eventos 
						SET estado_evento = $request->idEstado
						,observacion_evento = '".strCharacterSpecial_enviar($request->observacion)."'
						WHERE id_evento=".$request->idEvento;

		//echo $sql;
		//exit;
		
		$Result = ejecutaSQL_update('capturadorenex',$sql);
		
		if($Result > 0){		
			$jsondata = array('tipo' => "ok", 'commit' => 1);
			echo json_encode($jsondata);
			exit;
		}else{
			$jsondata = array('tipo' => "ok", 'commit' => 0);
			echo json_encode($jsondata);
			exit;		
		}
		
  break;
	
	
	
	
	
	
	
	
	
	
	case 'buscarEvento' :
	
		$JSON 		= file_get_contents("php://input");
		$request    = json_decode($JSON);
		$id_evento	= $request->IDEvento;
       
		$sql = "CALL spr_evento_consultar(".$id_evento.");";	
		//echo $sql;
		//exit;
		
		$Result = ejecutaSQL_select('capturadorenex',$sql);
		
		if($Result){				
			while($row = mysqli_fetch_array($Result)){
				
				$data = array('ID_EVENTO' 									=> $row['id_evento'],
				
											'FECHA_EVENTO' 								=> fechaEspanol($row['fecha_evento']),								
										  'HORA_EVENTO' 								=> $row['hora_evento'],
										  'FECHA_REPORTE_EVENTO' 				=> fechaEspanol($row['fecha_reporte']),
				
										  'ID_GRUPO_ZONA'								=> $row['id_zona'],
										  'ID_FILE' 										=> $row['id_centro_operacion'],
										  
										  'ID_FILE_TEMP'								=> $row['id_centro_operacion'],
										  
										  'ID_LUGAR_EVENTO'							=> $row['id_lugar_afectado'],
										  'ID_TIPO_EVENTO' 							=> $row['id_tipo_evento'],
										  
										  'ID_AFECTADO_EVENTO' 					=> $row['id_afectado'],
										  'ID_DANO_EVENTO'							=> $row['id_dano'],
										  
										  'NOMBRE_REPORTA'							=> strCharacterSpecial_mostrar($row['nombre_reporta']),
										  'NARRACION_EVENTO'						=> strCharacterSpecial_mostrar($row['narracion_evento']),
										  
										  'OBSERVACION_EVENTO'					=> strCharacterSpecial_mostrar($row['observacion_evento']),
										  
										  'ESTADO_EVENTO'								=> $row['estado_evento'],
										  
										  'NOMBRE_ESTADO_EVENTO'				=> $row['nombre_estado_evento'],
										  
										  "MONTO"												=> floatval($row[monto_evento])
										  
										  //"MONTO"												=> number_format(floatval($row[monto_evento]), 0, '', '.')
										  );
			}		   
		}	
		
		//header('Context-type: application/json');
		echo json_encode($data);
		exit;
	   
	   
  	break;
  
  
  
  

}

?>