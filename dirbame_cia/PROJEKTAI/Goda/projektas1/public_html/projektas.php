<?php

include_once "lib/php/DBConnector.php";

if (isset($_REQUEST["id"])) {
    $id = $_REQUEST["id"];


    $connector = new DBConnector();
    $sqlPhoto = "SELECT `id`, `Aprasymas`, `url` FROM  `Nuotraukos` WHERE  `Projekto_id` = ? ;";
    $sqlProject = "SELECT `id`, `data`,`intro`,`aprasymas`,`pavadinimas`,`Kategorija` FROM  `Projektai` WHERE  `id` = ? ;";

    $stmt = $connector->getConnection()->prepare($sqlPhoto);
    $stmt->bind_param("i", $id);
    $stmt->execute();

    $photoId;
    $photoAprasymas;
    $photoUrl;

    $stmt->bind_result($photoId, $photoAprasymas, $photoUrl);

    $masyvas = array();

    while ($stmt->fetch()) {
        array_push($masyvas, array("photoId" => $photoId, "photoIntro" => $photoAprasymas, "url" => $photoUrl));
    }


    $connector = new DBConnector();
    $stmt = $connector->getConnection()->prepare($sqlProject);
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $stmt->bind_result($projektoId, $data, $intro, $aprasymas, $pavadinimas, $Kategorija);
    $stmt->fetch();


} else {
    die("Nenurodytas ID");
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

    <div class="row antraste">
        <h6><?php echo $pavadinimas; ?></h6>
        <p><?php echo $intro; ?></p>
    </div>

    <div class="row centravimas projektas">
        <div class="column col">
            <?php for ($i = 0; $i < count($masyvas); $i += 3) {
                $item = $masyvas[$i];
                ?>
                <div class="galerija">
                    <a onclick="window.paspaudusNuotrauka('<?php echo $item["url"]; ?>','<?php echo $item["photoIntro"]; ?>')">
                        <!--                    <a href="projektas.php?id=-->
<!--                        --><?php //echo $item["Projekto_id"]; ?><!--">-->
                        <img src="<?php echo $item["url"]; ?>" alt="<?php echo $item["intro"]; ?>" width="300"
                             height="auto">
                    </a>
<!--                    --><?php //echo $item["photoId"]; ?>
                    <p><?php echo $item["photoIntro"]; ?></p>
                </div>

            <?php } ?>


        </div>

        <div class="column col">
            <?php for ($i = 1; $i < count($masyvas); $i += 3) {
                $item = $masyvas[$i];
                ?>
                <div class="galerija">
                    <a onclick="window.paspaudusNuotrauka('<?php echo $item["url"]; ?>','<?php echo $item["photoIntro"]; ?>')">
<!--                        --><?php //echo $item["Projekto_id"]; ?>
                        <img src="<?php echo $item["url"]; ?>" alt="<?php echo $item["intro"]; ?>" width="300"
                             height="auto">
                    </a>
<!--                    --><?php //echo $item["photoId"]; ?>
                    <p><?php echo $item["photoIntro"]; ?></p>

                </div>

            <?php } ?>
        </div>

        <div class="column col">
            <?php for ($i = 2; $i < count($masyvas); $i += 3) {
                $item = $masyvas[$i];
                ?>
                <div class="galerija">
                    <a onclick="window.paspaudusNuotrauka('<?php echo $item["url"]; ?>','<?php echo $item["photoIntro"]; ?>')">
                        <img src="<?php echo $item["url"]; ?>" alt="<?php echo $item["intro"]; ?>" width="300"
                             height="auto">
                    </a>
<!--                    --><?php //echo $item["photoId"]; ?>
                    <p><?php echo $item["photoIntro"]; ?></p>

                </div>

            <?php } ?>
        </div>
    </div>

    <div class="row antraste">
        <div class="col">
            <p>
                <?php echo $aprasymas; ?>
            </p>
        </div>
    </div>
</main>


<!-- kontaktai -->

<?php include "fragments/footer-kontaktai.php"; ?>



<script src="https://code.jquery.com/jquery-3.3.1.min.js"
        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
        crossorigin="anonymous"></script>

<!-- The Modal -->
<div id="modalPopup" class="modal">
    <span id="modalClose" class="close">&times;</span>
    <span class="modal-image-container">
        <img class="modal-content" id="modalImg">
        <div id="modalCaption"></div>
    </span>
</div>

<!-- mano js failas visada zemiausias -->
<script type="text/javascript" src="main.js"></script>


</body>

</html>