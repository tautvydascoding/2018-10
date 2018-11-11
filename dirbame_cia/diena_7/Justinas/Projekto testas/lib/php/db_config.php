<?php
class DBConnector
{
    private $host = "localhost";
    private $db = "renideja";
    private $user = "root";
    private $pass = "";

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

?>
