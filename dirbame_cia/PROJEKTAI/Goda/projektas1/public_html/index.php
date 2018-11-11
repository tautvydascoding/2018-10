<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title></title>
    <!-- reikalinga kad prisitaikantis dizainas veiktu tvarkingai -->
    <meta name="viewport" content="width=device-width, initial-scale=1">


    <link rel="stylesheet" href="lib/bootstrap4/css/bootstrap.min.css">
    <!-- galimos klaidos -->
    <!-- blogas kelias iki failo -->
    <!-- "/" ne i ta puse -->
    <!-- neuzdarete ">" -->
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/master.css">
    <!-- !!!! VISSA MANO CSS failas pats zemiausias -->
</head>
<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">

<body>
<?php include "fragments/header.php"; ?>
<!--  -->


<!-- nuotrauka per visa ekrana -->
<main class="container-fluid mazas">
    <div class=" ">
        <img class="home-img" src="img/Front-img.jpg" alt="projektas">
        <!--<img class="home-img" src="img/home%20page1.jpg" alt="projektas">-->
    </div>
</main>


<!-- kontaktai -->
<?php include "fragments/footer-kontaktai.php"; ?>

<!---->
<!--<footer class="container-fluid">-->
<!--    <div class="row kontaktai">-->
<!--        <div class="container ">-->
<!--            <div class="row centravimas">-->
<!--                <h6> KONTAKTAI </h6>-->
<!--                <p> tel: +370-600-60000</p>-->
<!--                <p> das@gmail.com</p>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
<!--    <div class="row apacios-eilute centravimas">-->
<!---->
<!--        <p> © Visos teisės saugomos, 2018 </p>-->
<!--    </div>-->
<!---->
<!--</footer>-->

<script src="https://code.jquery.com/jquery-3.3.1.min.js"
        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
        crossorigin="anonymous"></script>
<!-- mano js failas visada zemiausias -->
<script type="text/javascript" src="main.js"></script>

</body>

</html>