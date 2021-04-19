<?php
/*
 * Class used for database connection
 */

class Db {
    private $servername = "localhost";
    private $username = "root";
    private $password = "";
    private $dbname = "magebit";

    public function connectToDb() {
        $conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname);

        if ($conn->connect_error) {

            die("Connection failed: " . $conn->connect_error);
        }

        return $conn;
    }
}