<?php

session_start();


//define("host_local","172.27.0.2");
define("host_local","db");

define("user_local","root");
define("pass_local","secret");

define("bd_local","db_controlestacionamiento");




function conecta(){
	
	$jsondata = array();
	
	$conexion = mysqli_connect(host_local, user_local, pass_local, bd_local);
	
	if(mysqli_connect_errno()){
		try{
			throw new Exception("MySQL ERROR : ".mysqli_connect_error()." Servidor IP: ".host_local." ", mysqli_connect_errno());
		}catch(Exception $e){
			$jsondata = array('tipo' => 'error', 'mensaje' => utf8_encode($e->getMessage() . 'Error Nro:' . utf8_encode($e->getCode())));
			echo json_encode($jsondata);
			exit;
		}
	}else{
		return $conexion;
	}	
}






function ejecutaSQL_select($con, $sql){
	
	if(!isset($_SESSION['id_usuario'])){ 	
		echo "<script>window.location='http://190.47.116.145/estacionamientos'</script>";	
		exit;
	}

	if($con == 'capturadorenex'){$coneccion=conecta();}

	$jsondata = array();
	
	try{
		
		$Result = mysqli_query($coneccion,$sql);
		if($Result){
			return($Result);
		}else{
			throw new Exception("MySQL ERROR : " . mysqli_error($coneccion));
		}
		
		//mysqli_free_result($Result);
		//mysqli_close($con);
		
	}catch(Exception $e){
	 	$jsondata = array('tipo' => 'error', 'sql' => $sql, 'mensaje' => utf8_encode($e->getMessage()));
		echo json_encode($jsondata);
		exit;
	}		
	
}



function ejecutaSQL_insert($con, $sql){

	if($con == 'capturadorenex'){$coneccion=conecta();}
	
	$jsondata = array();
	
	try{

		$Result = mysqli_query($coneccion,$sql);
		if($Result){
			if(mysqli_affected_rows($coneccion)==1){
				
				 $sql = "SELECT @id";
				 $Result = mysqli_query($coneccion,$sql);				 				 
				 
				 return($Result);
			}else{
				return(0);
			}			
		}else{
			throw new Exception("MySQL ERROR : " . mysqli_error($coneccion));
		}
		
		//mysqli_free_result($Result);
		//mysqli_close($con);
		
	}catch(Exception $e){
	 	$jsondata = array('tipo' => 'error', 'sql' => $sql, 'mensaje' => utf8_encode($e->getMessage()));
		echo json_encode($jsondata);
		exit;
	}		
	
}











function ejecutaSQL_insert2($con, $sql){

	if($con == 'capturadorenex'){$coneccion=conecta();}

	$jsondata = array();
	
	try{

		$Result = mysqli_query($coneccion,$sql);
		if($Result){
			if(mysqli_affected_rows($coneccion)==1){
				
				 $last_id = mysqli_insert_id($coneccion);
				 $Result = $last_id;
				 
				 return($Result);
			}else{
				return(0);
			}			
		}else{
			throw new Exception("MySQL ERROR : " . mysqli_error($coneccion));
		}
		
		//mysqli_free_result($Result);
		//mysqli_close($con);
		
	}catch(Exception $e){
	 	$jsondata = array('tipo' => 'error', 'sql' => $sql, 'mensaje' => utf8_encode($e->getMessage()));
		echo json_encode($jsondata);
		exit;
	}		
	
}




function ejecutaSQL_update($con, $sql){

	if($con == 'capturadorenex'){$coneccion=conecta();}
	
	$jsondata = array();
	
	try{

		$Result = mysqli_query($coneccion,$sql);
		if($Result){
			if(mysqli_affected_rows($coneccion)==1){
				return(1);
			}else{
				return(0);
			}			
		}else{
			throw new Exception("MySQL ERROR : " . mysqli_error($coneccion));
		}
		
		//mysqli_free_result($Result);
		//mysqli_close($con);
		
	}catch(Exception $e){
	 	$jsondata = array('tipo' => 'error', 'sql' => $sql, 'mensaje' => utf8_encode($e->getMessage()));
		echo json_encode($jsondata);
		exit;
	}		
	
}









function ejecutaSQL_bitacora($con, $sql, $ip, $rut_usuario, $etapa_evento_bitacora, $procedimiento){

	if($con == 'capturadorenex'){$coneccion=conecta();}

	$jsondata = array();
	
	try{

		$sqlBitacora = "INSERT INTO ta_bitacora(rut_usuario_bitacora
												,date_time_bitacora
												,evento_etapa_bitacora
												,descripcion_bitacora
												,sql_bitacora
												,ips_acceso_bitacora
												,marca_bitacora
												,estado_bitacora
												,id_centro_operacion)
						VALUES ('".$rut_usuario."'
								,NOW()
								,'".$etapa_evento_bitacora."'
								,'".$procedimiento."'
								,\"$sql\"
								,'".$ip."'
								,NULL
								,1
								,".$_SESSION['id_centro_operacion'].")";
		
		
		$Result = mysqli_query($coneccion,$sqlBitacora);
		if($Result){
			if(mysqli_affected_rows($coneccion)==1){
				return(1);
			}else{
				return(0);
			}			
		}else{
			throw new Exception("MySQL ERROR : " . mysqli_error($coneccion));
		}
		
		//mysqli_free_result($Result);
		//mysqli_close($con);
		
	}catch(Exception $e){
	 	$jsondata = array('tipo' => 'error', 'sql' => $sql, 'mensaje' => utf8_encode($e->getMessage()));
		echo json_encode($jsondata);
		exit;
	}		
	
}








?>
