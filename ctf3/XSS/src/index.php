<!DOCTYPE html>
<html>
<head>
	<title>XSS Challenge</title>
<style type="text/css">
	body{
		background-repeat: none;
		background-color: #f0f0f0;
	}
</style>
</head>
<body>
	<center>
    <font size="150%" face="Cursive" color="black">XSS Challenge</font>
  </center>
<center>
<div id="help"></div>
<form action="" method="GET">
  <input type="text" name="solo" placeholder="XSS1"><br>
  <input type="submit" name="XSS" value="Submit">
</form>
</center>
</body>
<?php
error_reporting(0);
if(isset($_GET["XSS"])){

	function escape($param){
		$param = str_replace("/", "", $param);
		$param = str_replace("svg", "", $param);
		$param = str_replace("img", "", $param);
		$param = str_replace("IMG", "", $param);
		$param = str_replace("SCRIPT", "", $param);
		$param = str_replace(">", "", $param);
		$param = str_replace("'", "", $param);
		$param = str_replace("sCrIpT", "", $param);
		$param = str_replace("ScRiPt", "", $param);
		$param = str_replace("foo", "", $param);
		$param = str_replace("jpg", "", $param);
		$param = str_replace("png", "", $param);
		$param = str_replace("div", "", $param);
		$param = str_replace("onload", "", $param);
		$param = str_replace("ONLOAD", "", $param);
		$param = str_replace("onerror", "", $param);
		$param = str_replace("ONERROR", "", $param);
		return $param;
	}
	
	$solo = escape($_GET["solo"]);
}
else echo("<center><h3><font color=\"black\">[!] Enter your query.</font></h3></center>");
?>

<?php
  if($solo == "") {
    echo "<center><h3><font color=\"red\">[-] Nice try XD</font></h3></center>";       
  } else { 
    echo "<br>$solo</center><b>" ;   
  }
?>
</html>
