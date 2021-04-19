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

    public function insertIntoTable($sql) {
        $this->conn->query($sql);
    }

    public function selectFromTable($sql)
    {
        return $this->conn->query($sql);
    }
}