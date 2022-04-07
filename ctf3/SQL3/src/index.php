<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Timing is key ...</title>
</head>
<body>
  <div class="content">
<?php
/**
 * CREATE TABLE `users3` (
 *  `username` varchar(64) DEFAULT NULL,
 *  `password` varchar(64) DEFAULT NULL
 * );
 */

if (array_key_exists("username", $_REQUEST)) {
  $link = mysql_connect('mysql', 'ctfsql', 'd4dbp4ssw0rd1');
  mysql_select_db('ctfsql', $link);
  $query = "SELECT * from users3 where username=\"".$_REQUEST["username"]."\"";
  
  if (array_key_exists("debug", $_REQUEST)) {
    echo "Executing query: $query<br>";
  }
  
  $res = mysql_query($query, $link);
  if ($res) {
    if (mysql_num_rows($res) > 0) {
      // echo "this user exists.<br>";
    } else {
      // echo "this user doesn't exist.<br>";
    }
  } else {
    // echo "error in query.<br>";
  }
  mysql_close($link);
} else {
?>
    <form action="" method="post">
      Username: <input type="text" name="username" id="username">
      <input type="submit" value="Check existence">
    </form>
<?php } ?>
  </div>
</body>
</html>

