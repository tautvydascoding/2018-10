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
<!-- menu juosta -->
<?php include "fragments/header.php"; ?>
<!--baigiasi menu juosta -->


<!-- nuotrauka per visa ekrana -->

<main class="container-fluid mazas">
    <div class="row">
        <div class="col-8">
            <div class="susisiekti-image ">
                <img class="home-img" src="img/contacts2.jpg" alt="projektas">
            </div>
        </div>

        <div class="col-4">
            <div class="susisiekti-text">
                <h5>KONTAKTAI</h5>

                <h6> Architektas V.Daugėla </h6>
                <p> +370-600-60000</p>
                <p> vitalijus.daugela@gmail.com</p>

            </div>
        </div>
    </div>


</main>


<!-- footeris -->

<?php include "fragments/footer-apatine.php"; ?>

<!--<footer class="row contacts-bottom-line centravimas">-->
<!---->
<!--    <p> © Visos teisės saugomos, 2018 </p>-->
<!--</footer>-->



<script src="https://code.jquery.com/jquery-3.3.1.min.js"
        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
        crossorigin="anonymous"></script>
<!-- mano js failas visada zemiausias -->
<script type="text/javascript" src="main.js"></script>
</footer>
</body>

</html>