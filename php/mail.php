<?php
//   get data
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$comment = $_POST['comment'];

$to = "mauricejahwizwid@gmail.com";
$subject = "Mail from Enyems Enterprise";
$txt = "Name =" .$name . "\r\nEmail = " .$email . "\r\nPhone Number = " . $phone ."\r\nComments = " .$comment;
$headers = "From: noreply@Eyems Enterprise.com" . "\r\n";
if($email != NULL){
    mail($to,$subject, $txt, $headers);
}

header("about.html");

?>