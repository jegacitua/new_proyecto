<?php session_start();

ini_set("upload_max_filesize","300M");
ini_set("post_max_size","300M");

include('conector.php');
include('funciones.php');


$JSON       		= file_get_contents("php://input");
$request    		= json_decode($JSON);

$_GET['action']			= $request->action;


if(empty($_GET['action'])){
	$_GET['action'] = $_REQUEST['action'];
}






?>