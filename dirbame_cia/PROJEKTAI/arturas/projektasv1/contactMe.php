<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
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
    <link rel="stylesheet" href="css/contactMe.css">
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

  <div class="wrapper">
    <div class="container border">
      <h2>Hello! Lets talk</h2>
      <form id="contact" action="" method="post">
        <fieldset>
          <input placeholder="Your name" type="text" tabindex="1" required >
        </fieldset>
        <fieldset>
          <input placeholder="Your Email Address" type="email"  required>
        </fieldset>
        <fieldset>
          <input placeholder="Your Phone Number" type="tel"  required>
        </fieldset>
        <fieldset>
          <textarea placeholder="Type your Message Here...."  required></textarea>
        </fieldset>
        <fieldset>
          <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
        </fieldset>
      </form>
    </div>
  </div>
  <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>

  <script type="text/javascript" src="main.js"> </script>
  </body>
</html>
