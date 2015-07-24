<?php
require_once('assets/php/PHPMailer/class.phpmailer.php');

if($_POST['type'] == 'contact') {
  $email = new PHPMailer();
  $email->From      = $_POST['email'];
  $email->FromName  = $_POST['name'];
  $email->Subject   = $_POST['subject'];
  $email->Body      = $_POST['message'];
  $email->AddAddress( 'dsfugimoto@gmail.com' );
  $email->AddAttachment( $_POST['file'] );

  return $email->Send();
}

?>