<?php
$servername = "localhost";
$username = "root"; 
$password = ""; 
$dbname = "tourism";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$name = $_POST['name'];
$email = $_POST['email'];
$destination = $_POST['destination'];
$date = $_POST['date'];

$sql = "INSERT INTO bookings (name, email, destination, date) 
        VALUES ('$name', '$email', '$destination', '$date')";

if ($conn->query($sql) === TRUE) {
  echo "Your trip to $destination on $date has been booked successfully!";
} else {
  echo "Error: " . $conn->error;
}

$conn->close();
?>
