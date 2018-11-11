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



    <main class="container mazas">
        <div class="row aukstis-500">
            <div class="col-8 padding-top" >
                <h6> APIE MANE </h6>
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, rerum odit praesentium ex magnam fugit accusamus quidem quisquam aut incidunt, porro doloribus! Nihil cumque sed accusantium, facere delectus laborum. Ab. </p> <br>
                <h6> MANO DARBAI </h6>   
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, rerum odit praesentium ex magnam fugit accusamus quidem quisquam aut incidunt, porro doloribus! Nihil cumque sed accusantium, facere delectus laborum. Ab. </p> <br>
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, rerum odit praesentium ex magnam fugit accusamus quidem quisquam aut incidunt, porro doloribus! Nihil cumque sed accusantium, facere delectus laborum. Ab. </p> <br>
              
            </div>        
            <div class="col-4"> 
                <img class="apie-mane-foto" src="img/apie%20mane.jpg" alt="VD">
            </div>            
        </div>
    </main>


    <!-- kontaktai -->

    <?php include "fragments/footer-kontaktai.php"; ?>


    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
        crossorigin="anonymous"></script>
    <!-- mano js failas visada zemiausias -->
    <script type="text/javascript" src="main.js"> </script>
    </footer>
</body>

</html>