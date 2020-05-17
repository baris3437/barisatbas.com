<?php

$data = json_decode(file_get_contents('php://input'), true);

$from = $data["from"];
$name = $data["name"];
$message = $data["message"];
$email = $data["email"];
$subject = $data["subject"];

if(empty($from) || empty($name) || empty($message) || empty($email) || empty($subject)){
   header('HTTP/1.1 500 Internal Server Error');
}


$to      = 'barisatbas@gmail.com';
$subject = 'barisatbas.com - ' . $subject;
$headers = 'From: '. $from . "\r\n" .
    'Reply-To: barisatbas@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

if(!mail($to, $subject, $message, $headers)){
    header('HTTP/1.1 500 Internal Server Error');
}