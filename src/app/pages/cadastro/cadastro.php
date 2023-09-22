<?php    
    if(isset($_POST['email'])){
        include ('conexao.php');

        $nome = $_POST['nome'];
        $email = $_POST['email'];
        $senha = password_hash($_POST['senha'], PASSWORD_DEFAULT);
        
        
        $mysqli ->query("INSERT INTO usuarios(nome, email, senha) VALUES ('$nome', '$email', '$senha')");
        if(isset($email)  && isset($senha)){
            echo "cadastro realizado";
        }else{
            echo "erro, preencha todos os campos";
        }   

    }
?>
