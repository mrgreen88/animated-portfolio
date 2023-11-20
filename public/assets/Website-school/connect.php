<?php

    $firstName = $_POST['firstName'];
    $password = $_POST['password'];
    $email = $_POST['email'];

    // conectarea bazei de date

    $conn = new mysqli('localhost','root','','websitemindresti');
    if($conn->connect_error){
        die('Conexiune întreruptă  :   '.$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into registration(firstName, password, email) values(?, ?, ?)");
        $stmt->bind_param("sss",$firstName, $password, $email);
        $stmt->execute();
        echo "Înregistrare cu succes...";
        $stmt->close();
        $conn->close();
    }

?>