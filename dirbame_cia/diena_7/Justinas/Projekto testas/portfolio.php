<!-- <?php

include_once "lib/php/db_config.php";

$conector = new DBConnector();
$conector->getConnection()->query("SET NAMES 'utf8'");
$sql = "SELECT * FROM `Nuotraukos`
LEFT JOIN `Nuotraukos`
ON `Projektai`.`id` = `Nuotraukos`.`Projekto_id`
WHERE `Projektai`.`Kategorija` IN ('projektai', 'Interjerai') AND `Nuotraukos`.`ArPagrindine` = 1";


$result = $conector->getConnection()->query($sql);
$masyvas = array();

while ($eilute = $result->fetch_assoc()) {
    array_push($masyvas, $eilute);
}

?> -->

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Portfolio</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="lib/boostarp4/css/bootstrap.min.css">
  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/master.css">
  <!-- Start Bootstrap Carousel HEAD section -->
  <link rel="stylesheet" type="text/css" href="engine1/style.css">
  <script type="text/javascript" src="engine1/jquery.js"></script>
  <!-- End Bootstrap Carousel HEAD section -->
</head>

<body class="bgimg1">
  <div class="container">
    <!-- MenuBar pradzia -->
    <div class="row justify-content-end">
      <header>
        <nav>
          <ul>
            <li class="kaire"><a href="index.html" target="_blank" rel="noreferrer">
                <img class="apvalu" src="images/rzamin.jpg" alt="logo">
              </a></li>
            <li><a href="aboutme.html" target="_blank" rel="noreferrer">
                <p>Apie Mane
                </p>
              </a></li>
            <li><a href="portfolio.html" target="_blank" rel="noreferrer">
                <p>
                  Portfolio</p>
              </a></li>
            <li><a href="blog.html" target="_blank" rel="noreferrer">
                <p>
                  Blog`as</p>
              </a></li>
            <li><a href="contacts.html" target="_blank" rel="noreferrer">
                <p>
                  Susisiekite</p>
              </a></li>
          </ul>
        </nav>
      </header>
    </div>
  </div> <!-- MenuBar uzdarymas -->

  <div class="container">
    <!-- konteinerio pradzia -->
    <div class="row aukstis-300">
      <div class="col-6 centravimas">
        <div class="row">
          <a href="visualization.html" target="_blank" rel="noreferrer"><img src="images/visualisationfoto.jpg" alt=""></a>
          <h4>Darbų vizualizacijos</h4>
        </div>
      </div>
      <div class="col-6 centravimas">
        <div class="row">
          <a href="works.html" target="_blank" rel="noreferrer"><img src="images/worksfoto.jpg" alt=""></a>
          <h4>Atlikti darbai</h4>
        </div>
      </div>
    </div>
  </div> <!-- pirmo konteinerio pabaiga -->
</body>
<div class="container">
  <footer class="row justify-content-center icon-bar">
    <nav>
      <ul>
        <li><a href="https://www.youtube.com" class="fa fa-youtube"></a></li>
        <li><a href="https://www.google.com" class="fa fa-google"></a></li>
        <li><a href="https://www.instagram.com" class="fa fa-instagram"></a></li>
        <li><a href="https://www.pinterest.com" class="fa fa-pinterest"></a></li>
        <li><a href="https://www.facebook.com" class="fa fa-facebook"></a></li>
      </ul>
    </nav>
    <div class="container">
      <div class="row justify-content-center">
            <p>info@info.com</p>
      </div>
      <div class="row justify-content-center">
            <p>+370 000 00000</p>
      </div>
      <div class="row justify-content-center">
            <p>&copy 2018 by J.T.</p>
      </div>
    </div>
    <!-- mano js failas visada zemiausias -->
    <script type="text/javascript" src="main.js"> </script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
  </footer>
</div>

</html>
