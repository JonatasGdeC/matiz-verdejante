<?php
require_once 'config.php';
$senhaSec = "123";
if($_SERVER["REQUEST_METHOD"]== "POST"){
    $senhadigitada = $_POST['senha'];

    //Digitou a senha correta
    if($senhadigitada === $senhaSec){
        $sql = "SELECT * FROM mensagens_contato";
        $result = $conn->query($sql);
    }else{
        echo "<h1>Senha Incorreta!</h1>";
    }

}
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ver mensagens</title>
    <link rel="stylesheet"  href="../style/desktop/_contact.css">
</head>
<body>
        <form method="post">
            <label for="senha">Senha:</label>
            <input type="password"  name="senha" placeholder="Digite a senha" required>
            <button type="submit">Enviar</button>
        </form>
    <div class = "mensagens">
    <?php if(isset($result) && $result->num_rows >0) : ?>  <!-- verifica o resultado da senha  -->
        <h2>Mensagens</h2>
        <ul>
            <?php while($row = $result->fetch_assoc()) :?>
                <li>
                    <strong>Nome: </strong> <?php echo $row["nome"]; ?><br>
                    <strong>E-Mail: </strong> <?php echo $row["email"]; ?><br>
                    <strong>mensagem: </strong> <?php echo $row["mensagem"]; ?><br>
                    <strong>Data e Hora: </strong> <?php echo $row["data"]." às ".$row["hora"]; ?><br><br>
            </li>
            <?php endwhile; ?>
        </ul>
        <?php else: ?>
            <p>Nenhuma mensagem encontrada. </p>
        <?php endif; ?>
        </div>
</body>
</html>
