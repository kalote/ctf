# SQL1

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
 * CREATE TABLE `users` (
 *  `username` varchar(64) DEFAULT NULL,
 *  `password` varchar(64) DEFAULT NULL
 * );
 * username: flag
 */

if (array_key_exists("username", $_REQUEST)) {
  $link = mysql_connect('mysql', 'simplesql', '<redacted>');
  mysql_select_db('simplesql', $link);
  $query = "SELECT * from users where username=\"".$_REQUEST["username"]."\" and password=\"".$_REQUEST["password"]."\"";
  
  if (array_key_exists("debug", $_REQUEST)) {
    echo "Executing query: $query<br>";
  }
  
  $res = mysql_query($query, $link);
  if (mysql_num_rows($res) > 0) {
    echo "Successful login! Password is '<redacted>'.<br>";
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
```
