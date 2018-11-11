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
<?php include "fragments/header-category.php"; ?>
<!--baigiasi menu juosta -->


<!-- galerija -->
<main class="container didelis">
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

<?php include "fragments/footer-kontaktai.php"; ?>

<script src="https://code.jquery.com/jquery-3.3.1.min.js"
        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
        crossorigin="anonymous"></script>
<!-- mano js failas visada zemiausias -->




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