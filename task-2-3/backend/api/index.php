<?php
/*
 * This php script is for catching POST requests sent from frontend and adding received email to the database
 */

include($_SERVER['DOCUMENT_ROOT'].'/magebit-web-developer-test/task-2-3/backend/admin/Model.php');
$db = new Model();

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$host = substr($_POST['email'], strpos($_POST['email'], '@') + 1);
$email = $_POST['email'];

isset($_POST['email']) ? $sql = "INSERT INTO emails (email, host, date) VALUES ('" . $email . "','" . $host . "', CURDATE())" : $sql = '';
$db->sqlAction($sql);
