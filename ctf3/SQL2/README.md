# BlinSQL ...

## Local install

- run mysql
- run apache server
- put `src/index.html` files in /var/www/html/ folder
- inject `sql/init.sql` in the db

## Docker install

```bash
docker-compose up -d
```

## Hint

```php
<?php
/**
 * CREATE TABLE `users1` (
 *  `username` varchar(64) DEFAULT NULL,
 *  `password` varchar(64) DEFAULT NULL
 * );
 * 
 * (Note: password is base64)
 * INSERT INTO `users` VALUES ('flag1', 'findme');
 */

if (array_key_exists("username", $_REQUEST)) {
  $link = mysql_connect('localhost', 'blind', '<redacted>');
  mysql_select_db('blind', $link);
  $query = "SELECT * from users1 where username=\"".$_REQUEST["username"]."\"";
  if (array_key_exists("debug", $_GET)) {
    echo "Executing query: $query<br>";
  }

  $res = mysql_query($query, $link);
  if ($res) {
    if (mysql_num_rows($res) > 0) {
      echo "this user exists.<br>";
    } else {
      echo "this user doesn't exist.<br>";
    }
  } else {
    echo "error in query.<br>";
  }
  mysql_close($link);
} else {
?>
    <form action="index.php" method="post">
      Username: <input type="text" name="username" id="username">
      <input type="submit" value="Check existence">
    </form>
<?php } ?>
```
