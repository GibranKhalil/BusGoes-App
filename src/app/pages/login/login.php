<?php
/*<?php


// Obtenha os dados enviados via POST
$data = json_decode(file_get_contents("php://input"));

$username = $data->$usuario['username'];
$password = $data->$usuario['senha'];

// Verifique as credenciais no banco de dados (substitua com seu próprio código de verificação)
if ($username === 'usuario' && $password === 'senha') {
  $response = array('success' => true);
} else {
  $response = array('success' => false);
}

echo json_encode($response);
?> */
header('Content-Type: application/json');
    include('conexao.php');
    if(isset($_POST['email']) || isset($_POST['senha'])){
        if(strlen($_POST['email'] == 0)){
            echo "Preencha seu email";
        }else if(strlen($_POST['senha'] == 0)){
            echo "Preencha sua senha";
        }else{
            $email = $mysqli->real_escape_string($_POST['email']);
            $senha = $mysqli->real_escape_string($_POST['senha']);

            $sql_code = "SELECT * FROM usuarios WHERE email = '$email' LIMIT 1";
            $sql_query = $mysqli->query($sql_code) or die("Falha na execução" . $mysqli->error);
            
            $usuario  = $sql_query->fetch_assoc();

            $data = json_decode(file_get_contents("php://input"));
            

            $quantidade = $sql_query->num_rows;
        
            if(password_verify($senha, $usuario['senha'])){
                if($quantidade == 1){
                    if(!isset($_SESSION) ){
                        session_start();
                        $response = array('success' => true);
                    }
                    $_SESSION['id'] = $usuario['id'];
                    $_SESSION['nome'] = $usuario['nome'];
                    //header("Location: ./inicio/inicio.component.html");

                }
                
            }
            else{
                echo "Falha ao logar! E-mail ou senha incorretos";
                $response = array('success' => false);
            }
        }
    }
    echo json_encode($response);   
?>

