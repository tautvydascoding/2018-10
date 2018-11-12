<!DOCTYPE html>
<html>

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
  <link rel="stylesheet" href="css/master.css">
  <!-- !!!! VISSA MANO CSS failas pats zemiausias -->
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
            <li><a class="men" href="index.html">Home</a></li>
            <li><a class="men" href="log-in.html">Post</a></li>
            <li><a class="men" href="explore.html">Explore</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="nav">
      <!-- <iframe class="youtube border" width="50%" height="auto" src="https://www.youtube.com/embed/xJSHRnWsCsw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
      <iframe class="youtube " width="100%" height="auto" src="https://www.youtube.com/embed/NUlyJT3RxQA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
    <div class="article   ">
      <h1>01-Travel #ASIA</h1>
      <p class="border">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <h2>Memories</h2>
      <p class="border">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
    </div>
    <div class="ads ">
      <div class="box">
        <h2>Sign Up</h2>
        <!-- <form action="signup.php" method="post"> -->
        <form  action="signup.php" method="post" >
          <input type="text" name="username" placeholder="Username" required />
          <input type="password" name="password" placeholder="Password" required />
          <input type="password" name="password2" placeholder="Type password again" required />
          <input type="text" name="email" placeholder="Email" required />
          <input class="submit" type="submit" name="sign-up-button" value="SIGN UP" required />
        </form>
      </div>
    </div>
    <div class="footer  ">
      <div class="side-footer">
        <ul class="social-links">
          <li><a href="https://www.facebook.com/"><i class="fa fa-facebook"></i></a></li>
          <li><a href="https://www.twitter.com/"><i class="fa fa-twitter"></i></a></li>
          <li><a href="https://www.instagram.com/"><i class="fa fa-instagram"></i></a></li>
          <li><a href="https://www.youtube.com/"><i class="fa fa-youtube"></i></a></li>
          <li><a href="#"><i class="fa fa-user-plus registracija"></i></a></li>
          <li><a href="contactMe.php"><i class="fa fa-envelope"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
  <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>

  <script type="text/javascript" src="main.js"> </script>
</body>

</html>
