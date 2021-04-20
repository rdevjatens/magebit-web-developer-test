<?php
/*
 * This php script is entry file. All classes and views are rendered here
 */

include 'View.php';
include 'Controller.php';

$model = new Model();
$emails = $model->sqlAction("SELECT * FROM emails");

$searchView = new View('', 'POST', 'search');

$searchView->renderInput('text', 'search', '');
$searchView->renderInput('submit', 'submit', 'search');
$searchView->renderForm();

$sortView = new View('', 'POST', 'sort');
$sortView->renderInput('submit', 'ascDate','Sort by date ASC');
$sortView->renderInput('submit', 'dscDate','Sort by Date DSC');
$sortView->renderInput('submit', 'ascName', 'Sort by name ASC');
$sortView->renderInput('submit', 'dscName', 'Sort by name DSC');
$sortView->renderForm('submit', 'dscName', 'Sort by name DSC');

$emailHostView = new View('', 'POST', 'emailHost');

foreach ($emails as $email) {
    $emailHostView->renderInput('submit', 'emailHost', $email['host']);
}

$emailHostView->renderForm();

$controller = new Controller();
?>
<table>
    <tr>
        <th>Date</th>
        <th>Email</th>
    </tr>
        <?php
        /*
         * Depending on sorting submitted by user filter emails
         */
        isset($_POST['search']) ? $emails = $controller->sort($_POST['search'], "SELECT * FROM emails WHERE email LIKE " . "'%" . $_POST['search'] . "%'") : '';
        isset($_POST['ascDate']) ? $emails = $controller->sort($_POST['ascDate'], "SELECT * FROM emails ORDER BY date ASC") : '';
        isset($_POST['dscDate']) ? $emails = $controller->sort($_POST['dscDate'], "SELECT * FROM emails ORDER BY date DESC") : '';
        isset($_POST['ascName']) ? $emails = $controller->sort($_POST['ascName'], "SELECT * FROM emails ORDER BY email ASC") : '';
        isset($_POST['dscName']) ? $emails = $controller->sort($_POST['dscName'], "SELECT * FROM emails ORDER BY email DESC") : '';
        isset($_POST['emailHost']) ? $emails = $controller->sort($_POST['emailHost'], "SELECT * FROM emails WHERE email LIKE " . "'%" . $_POST['emailHost'] . "%'") : '';

        /*
         * Delete emails
         */
        if (isset($_POST['delete'])) {
            $controller->sort($_POST['delete'], "DELETE FROM emails WHERE email = '" . substr($_POST['delete'], strpos($_POST['delete'], ' ') + 1) . "';");
            $emails = $model->sqlAction("SELECT * FROM emails");
        }

        $sortView->renderTable($emails);
        ?>
</table>





