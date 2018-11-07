<?php
/**
 * Created by PhpStorm.
 * User: Finkona
 * Date: 11/7/2018
 * Time: 11:00 AM
 */

class DBConnector
{
    private $host = "localhost";
    private $db = "Daugela";
    private $user = "root";
    private $pass = "root";

    private $con;

    public  function __construct()
    {
        $this->con = new mysqli($this->host, $this->user, $this->pass, $this->db);
        $this->con->query("SET NAMES 'utf8'");
    }

    public function getConnection(){
        return $this->con;
    }
}