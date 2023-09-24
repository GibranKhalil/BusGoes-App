<?php

header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type");
header("Content-Type: application/json; charset=UTF8");
header('Access-Control-Allow-Credentials: true')

$host = 'localhost';
$usuario = 'root';
$senha = '';
$database = 'conecta';


$mysqli = new mysqli($host, $usuario, $senha, $database);

if($mysqli->error){
    die("Falha ao conectar com o banco de dados". $mysqli->error);
}


?>