<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=\, initial-scale=1.0">
  <title>Checking Credentials</title>
</head>
<body>
    <a class="back-to-home"
    href="../index.html"
    >←Home</a
  >

  <?php
  if (!$_POST) {
    echo "<h1>Missing Form Information.</h1>";
    return;
  }

  // if form is set, let's write to file
  $filename = "registration";
  $filepath = "../database/${filename}.txt";

  // serialize each entry, and use "\n" to delineate each entry
  $data = $_POST;
  $inputEmail = $data["email"];
  $inputPassword = $data["password"];

  $records = file_get_contents($filepath);
  $records = explode("\n", $records);

  $found = false;

  foreach ($records as $r) {
    $decoded = json_decode($r, true);

    // echo $decoded["email"] . " " . $decoded["password"] . "<br>";

    if ($inputEmail == $decoded['email'] && $inputPassword == $decoded['password']) {
      $found = true;
      break;
    }
  }
  if ($found == false) { ?>
    <h1>Hmm... incorrect credentials</h1>
    <img src="../images/sus.gif" alt="sus">
    
    
    <?php }

if ($found == true) { ?>
  
  <h1 style="font-size: 3em">Log In Successful!</h1>
  <div style="font-size: 2.5em">Redirecting in <span id="countdown" style="color: skyblue; font-weight: 700;">5</span></div>
  <br>
  <a id="manual-return"
    class="back-to-home"
    href="../index.html"
    style="display: none; padding: 50px; background-color: antiquewhite; text-decoration: None; color: gray; font-size: 2em; text-align: center; border: 15px outset gray;"
    >Click here to manually go back</a
  >
  

  <script>
    // save login state
    localStorage.setItem("loggedin", "1");

    let manualReturn = document.getElementById("manual-return");
    let countdown = document.getElementById("countdown");
    let num = 4;
    setInterval(() => {
      if (num <= 0) {
        window.location.replace("../index.html");
        setInterval(() => {
          manualReturn.style.display = "block";
        }, 1000); 
        
      }
      if (num < 0) {
        return;
      };

      countdown.textContent = num;
      num -= 1;
      
    }, 800);
  </script>


  <?php } ?>

  
</body>
</html>