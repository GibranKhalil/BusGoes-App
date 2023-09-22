<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

    include('conexao.php');
    if(isset($_POST['email']) || isset($_POST['senha'])){
        if(strlen($_POST['email'] == 0)){
            echo json_encode(["error" => "Preencha seu email"]);
        }else if(strlen($_POST['senha'] == 0)){
            echo json_encode(["error" => "Preencha sua senha"]);
        }else{
            $email = $mysqli->real_escape_string($_POST['email']);
            $senha = $mysqli->real_escape_string($_POST['senha']);

            $sql_code = "SELECT * FROM usuarios WHERE email = '$email' LIMIT 1";
            try {
                $sql_query = $mysqli->query($sql_code);
                if (!$sql_query) {
                    throw new Exception("Falha na execução: " . $mysqli->error);
                }
            } catch (Exception $e) {
                echo json_encode(["error" => $e->getMessage()]);
                exit;
            }
            
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
                echo json_encode(["error" => "Falha ao logar! Preencha seus dados novamente"]);
                $response = array('success' => false);
            }
        }
    }
    echo json_encode($response);   
?>

