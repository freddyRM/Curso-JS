<?php
    $conn = NULL;
        try{

            $con = new PDO("mysql:host=localhost; dbname=marvel; charset=utf8", username: 'root', password: '');

            if(isset($_GET['id'])){
                $id = $_GET['id'];
                $sql = "SELECT * FROM characters WHERE id=$id";
            }else{
                $sql = "SELECT * FROM characters";
            }

            $stm=$con->prepare(query: $sql);

            $stm->execute();

            $resultSet = $stm->fetchAll(PDO::FETCH_ASSOC);

            echo json_encode(value: $resultSet);
            
        }catch (PDOException $e){
            echo "Error ".$e->getMessage();
        }
