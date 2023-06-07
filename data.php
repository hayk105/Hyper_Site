<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "hyper_site";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

if ($_POST['type_get'] == "search") {
  $sql = $_POST['text_php'];
  $result = $conn->query($sql);



  if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
      echo str_replace("]", "", $row["data"]) . "]";
    }
  }
}

$conn->close();
?>
