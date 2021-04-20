<?php
/*
 * Class for rendering data to user screen
 */

class View {
    private $action;
    private $method;
    private $name;
    private $inputArray;

    public function __construct($action, $method, $name) {
        $this->action = $action;
        $this->method = $method;
        $this->name = $name;
        $this->inputArray = array();
    }

    public function renderForm() {
        echo "<form action='$this->action' method='$this->method' name='$this->name'>";

        foreach (array_unique($this->inputArray) as $input) {
            echo $input;
        }

        echo "</form>";
    }

    public function renderInput($type, $inputName, $inputValue) {
        $input = "<input type='$type' name='$inputName' value='$inputValue' />";
        $this->inputArray[count($this->inputArray)] = $input;
    }

    public function renderTable($emails) {
        foreach ($emails as $email) {
            $fullEmail = $email['email'];
            $date = $email['date'];

            echo "<tr>";
            echo "<form action='' method='POST' name='delete'>";
            echo "<th>$date</th>";
            echo "<th>$fullEmail</th>";
            echo "<input type='hidden'/>";
            echo "<th><input type='submit' name='delete' value='Delete $fullEmail'/>";
            echo "</form>";
            echo "</tr>";
        }
    }
}