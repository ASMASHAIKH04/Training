<?php

//THSE LINES ARE WRITTEN TO CONNECT THE PHP FILE TO DATABASE
$server = "localhost";  //variable : name_for_server(DEFAULT)
$user = "root";     //variable : name_for_user(DEFAULT)
$pass = "";     //variable : name_for_password()
$database = "login_register";   //variable : name_for_database

$conn = mysqli_connect($server, $user, $pass, $database);       //opens a new connection to the MySQL server.

//IF CONNECTION IS NOT ESTABLISHED THEN SHOW JAVASCRIPT ERROR IN ALERT BOX.
if (!$conn) {
    die("<script>alert('Connection Failed.')</script>");    //prints a message and exits the current script.
}