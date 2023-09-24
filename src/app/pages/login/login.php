<?php


    include('conexao.php');
    if(isset($_POST['Email']) || isset($_POST['Senha'])){
        if(strlen($_POST['Email'] == 0)){
            echo json_encode(["error" => "Preencha seu email"]);
        }else if(strlen($_POST['Senha'] == 0)){
            echo json_encode(["error" => "Preencha sua senha"]);
        }else{
            $email = $mysqli->real_escape_string($_POST['Email']);
            $senha = $mysqli->real_escape_string($_POST['Senha']);

            $sql_code = "SELECT * FROM usuarios WHERE Email = '$email' LIMIT 1";
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
        
            if(password_verify($senha, $usuario['Senha'])){
                if($quantidade == 1){
                    if(!isset($_SESSION) ){
                        session_start();
                        $response = array('success' => true);
                    }
                    $_SESSION['Id'] = $usuario['Id'];
                    $_SESSION['Nome'] = $usuario['Nome'];
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

