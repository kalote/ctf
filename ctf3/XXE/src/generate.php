<?php
function isLocalhost($whitelist = ['localhost', '127.0.0.1', '::1']) {
	return in_array($_SERVER['REMOTE_ADDR'], $whitelist);
}

if (isLocalhost()) {
	die("companyctf{th4t_w45_50m3_4w350m3_j0b_th4t_y0u_d1d_th3r3} ");
}

function parseXml($doc) {
  libxml_disable_entity_loader(false);
	$dom = new DOMDocument();
	if (!$dom->loadXML($doc, LIBXML_NOENT | LIBXML_DTDLOAD)) {
		die('error loading xml (1)');
	}

	$result = simplexml_import_dom($dom);
	if (!$result) {
		die('error loading xml (2)');
	}

	return $result;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <title>Hacker name generator</title>
  <style>
    html,
    body {
      height: 100%;
    }

    body {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-align: center;
      align-items: center;
      padding-top: 40px;
      padding-bottom: 40px;
      background-color: #f5f5f5;
    }

    .main {
      width: 100%;
      max-width: 650px;
      padding: 15px;
      margin: auto;
    }
  </style>
</head>
<body class="text-center">
	<div class="main">
		<h1 class="h3 mb-3 font-weight-normal">Hacker name :</h1>

		<!-- Super Hacked feature coming soon! -->
		<!-- To get access to the hidden feature, make sure you're accessing this page from the web server -->
<?php
if (array_key_exists("input", $_GET)) {
	$info = base64_decode($_GET["input"]);
	$mapConfig = parseXml($info);
}

if (isset($mapConfig->firstName)) {
  echo "<h2>".$mapConfig->firstName;
} else {
  echo "<h2>no firstName";
}

$names = array("Angler (4N6L3R)",
"Rider (R1D3R)",
"Rapture (R4P7UR3)",
"Bullseye (BULL53Y3)",
"Surprise (5URPR153)",
"Visage (V15463)",
"Haze (H4Z3)",
"Trixy (7R1XY)",
"Chaos (CH405)",
"Jinx (J1NX)");

$rand_key = array_rand($names);

echo " ".$names[$rand_key]." ";

if (isset($mapConfig->lastName)) {
  echo $mapConfig->lastName."</h2>";
} else {
  echo "no lastName</h2>";
}
?>
	</div>
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>
</html>
