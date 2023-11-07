<?php

$server = 'localhost';
$usuario = 'root';
$senha = '';
$banco = 'contato_formulario';

//conexao com nosso banco de dados
$conn = new mysqli($server, $usuario, $senha,$banco);

///verifica conexao
if($conn->connect_error){
    die("falha ao se conectar no banco de dados ".$conn->connect_error);
    
}

?>