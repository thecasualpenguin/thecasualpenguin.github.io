<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../stylesheets/modernform.css">
  <link rel="stylesheet" href="../stylesheets/login.css">
  <script src="../js/login.js" defer></script>
  <script src="../js/validateRegister.js" defer></script>

  <title>Sign Up</title>
</head>

<body>


  <div class="blocker"></div>

  <!-- sign up modal -->
  <div id="modal2" class="modernmodal">
    <!-- <div class="decorImg"> -->

    <div class="modernTextContainer-1">
      <div class="modernTextContent">
        <h2>Register Now!</h2>
        <p>
          Register now to unlock exclusive VIP content, only for members.
        </p>
        <form id='signup-form' action="./confirmation.php" method="post">
          <!-- would've been easier just to use build in form controls, but I'm a masochist. -->
          <input id="emailInputRegister" name="email" type="text" placeholder="yourEmail@jhu.edu" />
          <input id="passwordInputRegister" name="password" type="password" placeholder="password1" />
          <!-- add fake indicator button -->
          <input type="text" name="registration" value="submit" hidden>
          <button id="subscribe" type="submit" value="submit">
            <div id="subscribe-text">Register</div>
          </button>
        </form>
        <div id="privacy">
          <div style="color: #999999">† password needs at least 8 characters</div>
          <br>
          <a style="color: #999999" href="https://policies.google.com/privacy?hl=en-US">User Privacy Policy</a>
        </div>
        
      </div>
    </div>

    <div class="modernTextContainer-2">
      <div class="modernTextContent">
        <h2>Already Member?</h2>
        <p>
          Sign in with your registered credentials to access to VIP content. 
        </p>
        <form id='login-form' action="validation.php" method="post">
          <!-- would've been easier just to use build in form controls, but I'm a masochist. -->
          <input id="emailInput" name="email" type="email" placeholder="Email" required/>
          <input id="passwordInput" name="password" type="password" placeholder="Password" required/>
          <!-- add fake indicator button -->
          <input type="text" name="login" value="submit" hidden>
          <button id="loginBtn" type="submit" value="submit">
            <div id="subscribe-text">Log In</div>
          </button>
        </form>

      </div>
    </div>
    
  </div>






</body>

</html>