<?php

function strCharacterSpecial($cadena){
	if($cadena <> ""){
		//$cadena = utf8_encode($cadena); 		
	}
	
	return $cadena;
}





function strCharacterSpecial_mostrar($cadena){
	if($cadena <> ""){
		$cadena = strtoupper($cadena);
		$cadena = utf8_encode($cadena); 
	}
	
	return $cadena;
}





function strCharacterSpecial_mostrar2($cadena){
	if($cadena <> ""){
		$cadena = strtoupper($cadena);
		$cadena = utf8_decode($cadena); 
	}
	
	return $cadena;
}



function strCharacterSpecial_mostrar3($cadena){
	if($cadena <> ""){
		$cadena = utf8_encode($cadena); 
	}
	
	return $cadena;
}



function strCharacterSpecial_enviar($cadena){
	if($cadena <> ""){
		$cadena = str_replace("'","",$cadena);
		
		/**** ACTIVAR O DESACTIVAR SEGUN CONFIGURACION DEL SERVIDOR EN WINDOWS ACTIVAR EN LINUX DESACTIVAR		****/
		
		//$cadena = mb_strtoupper($cadena);
		$cadena = utf8_decode($cadena); 
	}
	
	return $cadena;
}



function strCharacterSpecial_enviar2($cadena){
	if($cadena <> ""){
		$cadena = str_replace("'","",$cadena);
		
		/**** ACTIVAR O DESACTIVAR SEGUN CONFIGURACION DEL SERVIDOR EN WINDOWS ACTIVAR EN LINUX DESACTIVAR		****/
		
		//$cadena = mb_strtoupper($cadena);
		$cadena = utf8_encode($cadena); 
	}
	
	return $cadena;
}











function validar_dv($rut){
    /* Bonus: remuevo los ceros del comienzo. */
    /*
	while($rut[0] == "0") {
        $rut = substr($rut, 1);
    }
	*/
	
    $factor = 2;
    $suma = 0;
    for($i = strlen($rut) - 1; $i >= 0; $i--) {
        $suma += $factor * $rut[$i];
        $factor = $factor % 7 == 0 ? 2 : $factor + 1;
    }
    $dv = 11 - $suma % 11;
    /* Por alguna razón me daba que 11 % 11 = 11. Esto lo resuelve. */
    $dv = $dv == 11 ? 0 : ($dv == 10 ? "K" : $dv);
    //return $rut . "-" . $dv;
	
	//return $rut.$dv;
	return $dv;  	
}



function validar_rut($rut){
    /* Bonus: remuevo los ceros del comienzo. */
    /*
	while($rut[0] == "0") {
        $rut = substr($rut, 1);
    }
	*/
	
    $factor = 2;
    $suma = 0;
    for($i = strlen($rut) - 1; $i >= 0; $i--) {
        $suma += $factor * $rut[$i];
        $factor = $factor % 7 == 0 ? 2 : $factor + 1;
    }
    $dv = 11 - $suma % 11;
    /* Por alguna razón me daba que 11 % 11 = 11. Esto lo resuelve. */
    $dv = $dv == 11 ? 0 : ($dv == 10 ? "K" : $dv);
    //return $rut . "-" . $dv;
	
	return $rut.$dv;
	//return array($rut.$dv, $rut."-".$dv);  
	
}




function quitarVerificador($rut){
	//$rut = ltrim($rut, '0');	
	$rut = str_replace(".","",$rut);
	$rut = str_replace("-","",$rut);
	$rut = substr($rut, 0, -1);	
	return $rut;
}

function extraeVerificador($rut){
	$dv = substr($rut, -1, 1);	
	return $dv;
}

function formateaRut($rut){		
	$totalCaracteresRut = strlen($rut);
			
	if($totalCaracteresRut == 9){
		$parte1 = substr($rut,0,2);
		$parte2 = substr($rut,2,3);
		$parte3 = substr($rut,5,3);
		$guion = substr($rut,8,1);
		$rut=$parte1.".".$parte2.".".$parte3."-".$guion;
	}
	
	if($totalCaracteresRut == 8){
		$parte1 = substr($rut,0,1);
		$parte2 = substr($rut,1,3);
		$parte3 = substr($rut,4,3);
		$guion = substr($rut,7,1);
		$rut=$parte1.".".$parte2.".".$parte3."-".$guion;
	}
	
	return $rut;
}

function quitarCeroIzquierda($parametro){		
	$sincero = ltrim($parametro, '0');
	return $sincero;
}

function quitarPuntosGuion($rut){
	//$rut = ltrim($rut, '0');	
	$rut = str_replace(".","",$rut);
	$rut = str_replace("-","",$rut);
	return $rut;
}












function fechaIngles($fecha){		
	$dia = substr($fecha, 0, 2);
	$mes   = substr($fecha, 3, 2);
	$ano = substr($fecha, -4);
	// fechal final realizada el cambio de formato a las fechas europeas
	//$fecha = $dia . '-' . $mes . '-' . $ano; 
	$fecha = $ano . '-' . $mes . '-' . $dia; 
	return $fecha;
}

function fechaEspanol($fecha){		
	$fecha=date("d-m-Y",strtotime($fecha)); 
	return $fecha;
}















function obtenerIP() {
	
	if (!empty($_SERVER['HTTP_CLIENT_IP']))
		return $_SERVER['HTTP_CLIENT_IP'];
	   
	if (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))
		return $_SERVER['HTTP_X_FORWARDED_FOR'];
   
	return $_SERVER['REMOTE_ADDR'];
}





function calculaEdad($fechanacimiento){
    list($ano,$mes,$dia) = explode("-",$fechanacimiento);
    $ano_diferencia  = date("Y") - $ano;
    $mes_diferencia = date("m") - $mes;
    $dia_diferencia   = date("d") - $dia;
    if ($dia_diferencia < 0 || $mes_diferencia < 0)
        $ano_diferencia--;
    return $ano_diferencia;
}






?>


