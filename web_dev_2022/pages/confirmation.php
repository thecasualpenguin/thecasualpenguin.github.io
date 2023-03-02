<?php
if (!$_POST) {
  echo "<h1>Missing Form Information.</h1>";
  return;
}


// if form is set, let's write to file
$filename = array_key_last($_POST);
$filepath = "../database/${filename}.txt";

// serialize each entry, and use "\n" to delineate each entry
$data = $_POST;
array_pop($data);
$txt = json_encode($data) . "\n";
file_put_contents($filepath, $txt, FILE_APPEND);

?>



<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../stylesheets/confirmation.css">
  <title>We have received your <?php echo array_key_last($_POST); ?>!</title>
</head>

<body>
  <a class="back-to-home" href="../index.html">←Home</a>

  <h1>We have received your <?php echo array_key_last($_POST); ?>!</h1>
  <h3>Preview of your submission shown below</h3>
  <div id="container">

    <?php
    foreach ($_POST as $key => $val) {
      if (strcasecmp($val, "submit") == 0)
        continue;
      echo "
        <div class=\"flex-item\">
          <em>${key}:</em>
          <p>${val}</p>  
        </div>
      ";
    }
    ?>

  </div>

  <script>

  </script>

</body>

</html>