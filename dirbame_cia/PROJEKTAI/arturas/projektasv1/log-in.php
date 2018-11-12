<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <title>TRAVELSHARE</title>
  <!-- reikalinga kad prisitaikantis dizainas veiktu tvarkingai -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="lib/boostarp4/css/bootstrap.min.css">
  <link rel="stylesheet" href="css/normalize.css">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"></script>
  <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet">
  <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
  <link rel="stylesheet" href="css/log-in.css">
  <title></title>
</head>

<body>
  <div class="wrapper">
    <div class="header  ">
      <div class="toggle-btn">
        <span class="one"></span>
        <span class="two"></span>
      </div>

      <div class="menu">
        <div class="data">
          <ul>
            <li></li>
            <li><a class="men" href="index.php">Home</a></li>
            <li><a class="men" href="log-in.php">Post</a></li>
            <li><a class="men" href="explore.php">Explore</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="wrapper2 ">
      <form class="login border"  action="login.php" method="post" >
        <input name="username" class="username  " type="text" placeholder="Enter username or email" name="uname" required>
        <input name="loginpassword" class="logpsw " type="password" placeholder="Enter password" name="psw" required>
        <button name="loginbutton" class="loginbtn " type="submit">Login</button>
      </form>
    </div>
    <div class="footer ">
    </div>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <script type="text/javascript" src="main.js"> </script>
</body>

</html>
