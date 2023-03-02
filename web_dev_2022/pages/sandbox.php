<?php

$filepath = "../database/signup.txt";
$data = file_get_contents($filepath);

$data_arr = explode("\n", $data);
foreach ($data_arr as $jsonObj) {
  json_decode($jsonObj);
  $decoded = json_decode($jsonObj, true);
  // echo $decoded["name"];
  var_dump($decoded);
}

echo "ended properly";

?>
