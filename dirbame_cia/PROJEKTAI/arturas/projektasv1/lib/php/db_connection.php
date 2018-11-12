<?php

class DBConnection
{
private $host = "localhost";
private $db = "loginsystem";
private $user = "root";
private $pass = "";
private $connection;
function __construct()
{
$this->connection = new mysqli($this->host, $this->user, $this->pass, $this->db);
}
public function getConnection(){
return $this->connection;
}
}
?>
