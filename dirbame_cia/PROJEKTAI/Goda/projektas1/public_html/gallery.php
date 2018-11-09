<?php

include_once "lib/php/DBConnector.php";

$conector = new DBConnector();
$conector->getConnection()->query("SET NAMES 'utf8'");
$sql = "SELECT * FROM `Projektai` 
LEFT JOIN `Nuotraukos`
ON `Projektai`.`id` = `Nuotraukos`.`Projekto_id`
WHERE `Projektai`.`Kategorija` IN ('projektai', 'Interjerai') AND `Nuotraukos`.`ArPagrindine` = 1";


$result = $conector->getConnection()->query($sql);
$masyvas = array();

while ($eilute = $result->fetch_assoc()) {
    array_push($masyvas, $eilute);
}

?>

<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
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
<header class="container-fluid">
    <nav class="row ">
        <div class="col-3 centravimas logo">
            <img src="img/logo_n.jpg" alt="logo">
        </div>
        <div class="col-9">
            <nav class="eilute menu">
                <li class=""><a href="index.html">PAGRINDINIS</a></li>
                <li class=""><a href="gallery.php">GALERIJA</a></li>
                <li class=""><a href="about-me.html">APIE MANE</a></li>
                <li class=""><a href="kontaktai.html">KONTAKTAI</a></li>
            </nav>
        </div>

    </nav>
    <div class="row">
        <div class="container">
            <nav class="eilute-gallery">
                <li class=""><a href="gallery-gyvenamieji.php">Projektai</a></li>
                <li class=""><a href="gallery-interjerai.php">Interjerai</a></li>
            </nav>
        </div>
    </div>

</header>
<!--baigiasi menu juosta -->


<!-- galerija -->
<main class="container ">
    <div class="row centravimas">
        <div class="column">
            <?php for ($i = 0; $i < count($masyvas); $i += 3) {
                $item = $masyvas[$i];
                ?>
                <div class="galerija">
                    <a onclick="window.paspaudusNuotrauka('<?php echo $item["url"]; ?>','<?php echo $item["intro"]; ?>')">
                        <img src="<?php echo $item["url"]; ?>" alt="<?php echo $item["intro"]; ?>" width="300"
                             height="auto">
                    </a>
                    <h6><?php echo $item["pavadinimas"]; ?></h6>
                    <p><?php echo $item["intro"]; ?></p>

                </div>

            <?php } ?>


        </div>

        <div class="column">
            <?php for ($i = 1; $i < count($masyvas); $i += 3) {
                $item = $masyvas[$i];
                ?>
                <div class="galerija">
                    <a onclick="window.paspaudusNuotrauka('<?php echo $item["url"]; ?>','<?php echo $item["intro"]; ?>')">
                        <img src="<?php echo $item["url"]; ?>" alt="<?php echo $item["intro"]; ?>" width="300"
                             height="auto">
                    </a>
                    <h6><?php echo $item["pavadinimas"]; ?></h6>
                    <p><?php echo $item["intro"]; ?></p>

                </div>

            <?php } ?>
        </div>

        <div class="column">
            <?php for ($i = 2; $i < count($masyvas); $i += 3) {
                $item = $masyvas[$i];
                ?>
                <div class="galerija">
                    <a onclick="window.paspaudusNuotrauka('<?php echo $item["url"]; ?>','<?php echo $item["intro"]; ?>')">
                        <!-- href="projektas.php?id=<?php echo $item["Projekto_id"]; ?>"-->
                        <img src="<?php echo $item["url"]; ?>" alt="<?php echo $item["intro"]; ?>" width="300"
                             height="auto">
                    </a>
                    <h6><?php echo $item["pavadinimas"]; ?></h6>
                    <p><?php echo $item["intro"]; ?></p>

                </div>

            <?php } ?>
        </div>
    </div>
</main>


<!-- kontaktai -->

<footer class="container-fluid ">
    <div class="row kontaktai">
        <div class="container-fluid">
            <div class="row centravimas">
                <h6> KONTAKTAI </h6>
            </div>
            <div class="row centravimas"><img src="img/phone.png" alt="telefonas">
                <p> tel: +370-600-60000</p>
            </div>

            <div class="row centravimas"><img src="img/email.png" alt="el.pastas">
                <p> das@gmail.com</p>
            </div>
        </div>
    </div>
    <div class="row apacios-eilute centravimas">

        <p> © Visos teisės saugomos, 2018 </p>
    </div>

</footer>

<script src="https://code.jquery.com/jquery-3.3.1.min.js"
        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
        crossorigin="anonymous"></script>
<!-- mano js failas visada zemiausias -->

</footer>


<!-- The Modal -->
<div id="modalPopup" class="modal">
    <span id="modalClose" class="close">&times;</span>
    <span class="modal-image-container">
        <img class="modal-content" id="modalImg">
        <div id="modalCaption"></div>
    </span>
</div>

<script type="text/javascript" src="main.js"></script>
</body>

</html>