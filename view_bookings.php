<?php
$servername = "localhost";
$username = "root"; 
$password = ""; 
$dbname = "tourism";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$result = $conn->query("SELECT * FROM bookings");
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>All Bookings</title>
  <style>
    body { font-family: Arial; padding: 20px; }
    table { border-collapse: collapse; width: 100%; }
    th, td { border: 1px solid #ccc; padding: 10px; text-align: left; }
    th { background: #007bff; color: white; }
  </style>
</head>
<body>
  <h1>All Bookings</h1>
  <table>
    <tr>
      <th>ID</th><th>Name</th><th>Email</th><th>Destination</th><th>Date</th>
    </tr>
    <?php while($row = $result->fetch_assoc()) { ?>
      <tr>
        <td><?= $row['id'] ?></td>
        <td><?= $row['name'] ?></td>
        <td><?= $row['email'] ?></td>
        <td><?= $row['destination'] ?></td>
        <td><?= $row['date'] ?></td>
      </tr>
    <?php } ?>
  </table>
</body>
</html>
<?php $conn->close(); ?>
