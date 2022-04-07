<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simple SQL</title>
</head>
<body>
  <div class="content">
<?php
/**
 * CREATE TABLE `users1` (
 *  `username` varchar(64) DEFAULT NULL,
 *  `password` varchar(64) DEFAULT NULL
 * );
 */

if (array_key_exists("username", $_REQUEST)) {
  $link = mysql_connect('mysql', 'ctfsql', 'd4dbp4ssw0rd1');
  mysql_select_db('ctfsql', $link);
  $query = "SELECT * from users1 where username=\"".$_REQUEST["username"]."\" and password=\"".$_REQUEST["password"]."\"";
  
  if (array_key_exists("debug", $_REQUEST)) {
    echo "Executing query: $query<br>";
  }
  
  $res = mysql_query($query, $link);
  if (mysql_num_rows($res) > 0) {
    echo "Successful login! Password is 'axactf{th4t_w45_s0m3_v2ry_b4s1c_stuff}'.<br>";
  } else {
    echo "Access denied!<br>";
  }
  mysql_close($link);
}
?>

    <form action="index.php" method="post">
      Username: <input type="text" name="username" id="username">
      password: <input type="password" name="password" id="password">
      <input type="submit" value="Login">
    </form>
  </div>
</body>
</html>
