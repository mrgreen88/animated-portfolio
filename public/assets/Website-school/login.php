<?php

    $firstName = $_POST['firstName'];
    $password = $_POST['password'];

    // conectarea la baza de date

    $con = new mysqli("localhost", "root", "", "websitemindresti");
    if($con->connect_error) {
        die("Eroare la conectare : ".$con->connect_error);
    } else {
        $stmt = $con->prepare("select * from registration where firstName = ?");
        $stmt->bind_param("s", $firstName);
        $stmt->execute();
        $stmt_result = $stmt->get_result();
        if($stmt_result->num_rows > 0) {
            $data = $stmt_result->fetch_assoc();
            if($data['password'] === $password) {
                header("Location: dashboard.html");
            } else {
                header("Location: erroare.html"); 
            }
        } else {
            echo "<h2>Numele utilizatorului sau parola este greșită</h2>";
        }
    }

?>