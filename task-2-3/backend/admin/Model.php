<?php
/*
 * Class used for gathering data from database
 */
include 'Db.php';

class Model extends Db{
    public $conn;

    public function __construct() {
        $this->conn = $this->connectToDb();
    }

    public function sqlAction ($sql) {
        return $this->conn->query($sql);
    }
}