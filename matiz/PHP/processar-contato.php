<?php
require_once 'config.php';
$nome = $_POST['nome'];
$email = $_POST['email'];
$mensagem = $_POST['mensagem'];
$data_atual = date('d/m/Y'); //
$hora_atual = date('H:i:s');

//Preparar comando para a tabela
$smtp = $conn->prepare("INSERT INTO mensagens_contato (nome, email, mensagem, data, hora) VALUES(?,?,?,?,?)");
$smtp->bind_param("sssss",$nome, $email, $mensagem, $data_atual, $hora_atual);

//Se executar corretamente
if($smtp->execute()){
    echo "mensagem enviada com sucesso!";
}else{
    echo "erro no envio da mensagem: ".$smtp->error;
}

$smtp->close();
$conn->close();

?>