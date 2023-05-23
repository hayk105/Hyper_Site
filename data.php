<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "hyper_site";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

if ($_POST['type_get'] == "search" && !empty(trim($_POST['type']))) {
  $type = $_POST['type'];
  $find = $_POST['find'];
  $sql = "SELECT * FROM `data_hyper_site` WHERE type='$type' AND find='$find'";
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
      echo str_replace("]", "", $row["data"]) . ", ".$row["userName"] ."]";
    }
  } else {
    echo "0";
  }
}

$conn->close();
?>
