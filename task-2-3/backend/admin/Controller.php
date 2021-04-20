<?php
/*
 * Class which is used for manipulating user input
 */

include 'Model.php';

class Controller extends Model {

    public function sort($postObject, $sql) {
        if (isset($postObject) && $postObject != '') {
            return $this->sqlAction($sql);
        }
    }
}