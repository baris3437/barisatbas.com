<?php

$data = json_decode(file_get_contents('php://input'), true);

$from = $data["from"];
$name = $data["name"];
$message = $data["message"];
$email = $data["email"];
$subject = $data["subject"];

$to      = 'barisatbas@gmail.com';
$subject = 'barisatbas.com - ' . $subject;
$headers = 'From: '. $from . "\r\n" .
    'Reply-To: barisatbas@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);