<?php
    // Collecting form data
    $fullname = $_POST['Name'];
    $phone = $_POST['Phone'];
    $email = $_POST['Email'];
    $message = $_POST['Message'];

    // Database connection details
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "test1";

    // Create a new database connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check for a connection error
    if ($conn->connect_error) {
        die('Connection Failed: ' . $conn->connect_error);
    } 

    // Prepare the SQL statement
    $stmt = $conn->prepare('INSERT INTO registration (Name, Phone, Email, Message) VALUES (?, ?, ?, ?)');
    
    if ($stmt === false) {
        die('Prepare Failed: ' . $conn->error);
    }

    // Bind parameters (s for string, i for integer)
    $stmt->bind_param('siss', $fullname, $phone, $email, $message);

    // Execute the statement and check for errors
    if ($stmt->execute()) {
        echo 'Registration Successful!';
    } else {
        echo 'Error: ' . $stmt->error;
    }

    // Close the statement and connection
    $stmt->close();
    $conn->close();
?>
