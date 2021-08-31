<?php session_start();

header("Content-Type: text/html;charset=utf-8");

ini_set("upload_max_filesize","300M");
ini_set("post_max_size","300M");

require_once('conector.php');
require_once('funciones.php');




//$_GET['action']="listarMenuHTML";



$JSON       		= file_get_contents("php://input");
$request    		= json_decode($JSON);


$_GET['action'] = $request->action;






switch($_GET['action'])  {





case 'listarMenuHTML' :
	
		$i=0;
		//$jsondata = array();
		$JSON       						= file_get_contents("php://input");
		$request    						= json_decode($JSON);
		

		
		$request->idUsuario = $_SESSION['id_usuario'];
		

		$sql1 = "SELECT
								sys_ta_menu.id_menu,
								sys_ta_menu.nombre_menu,
								sys_ta_menu.background_menu,
								sys_ta_menu.url_menu
							FROM
								sys_ta_menu 
								INNER JOIN ta_usuario_menu on (sys_ta_menu.id_menu = ta_usuario_menu.menu_id_menu AND 
																							 ta_usuario_menu.estado_usuario_menu = 1)
								INNER JOIN ta_usuario_perfiles on (ta_usuario_perfiles.id_usuario_perfil = ta_usuario_menu.usuario_perfiles_id_usuario_perfil AND
																									ta_usuario_perfiles.estado_usuario_perfil = 1)
								INNER JOIN ta_usuarios on (ta_usuarios.id_usua = ta_usuario_perfiles.usuarios_id_usuario)
							WHERE ta_usuarios.id_usua = ".$request->idUsuario." AND
							sys_ta_menu.id_menu_depende = 0 AND
							sys_ta_menu.id_menu <> 1
							ORDER BY sys_ta_menu.orden_menu ASC";
		//echo $sql1;
		//exit; 

		$Result = ejecutaSQL_select('capturadorenex',$sql1);
		
   
		if($Result){
			if(mysqli_num_rows($Result)>0){
				while($row = mysqli_fetch_object($Result)){					
					//$menu = $row->id_menu;
					
					$menu .= "<div class='panel panel-success' ng-repeat='menu in menus' style='border-color: #cfcfd0; text-align:center'>";
					
					$menu .= "<a href='".strCharacterSpecial($row->url_menu)."' style='text-decoration:none'><div class='panel-heading' style='".strCharacterSpecial($row->background_menu)."; color:#ffffff'><b>".strCharacterSpecial($row->nombre_menu)."</b></div></a>";
					
					$menu .= "</div>";
						
				}
			}
		}
    
		echo $menu;
		exit;

	break;
	
	
}
?>