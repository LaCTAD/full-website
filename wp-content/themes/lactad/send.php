<?php
require_once('assets/php/PHPMailer/PHPMailerAutoload.php');

if($_POST['type'] == 'contact') {
    $email = new PHPMailer();
    $email->IsSendmail();
  $email->From      = $_POST['email'];
  $email->FromName  = $_POST['name'];
  $email->Subject   = $_POST['subject'];
  $email->Body      = $_POST['message'];
  $email->AddAddress( 'dsfugimoto@gmail.com' );
  $email->AddAttachment( $_POST['file'] );

  $send = $email->Send();

  $email->ClearAllRecipients();
  $email->ClearAttachments();
  // Exibe uma mensagem de resultado
  if ($send) {
    echo "E-mail enviado com sucesso!";
  } else {
    echo "Não foi possível enviar o e-mail.";
    echo "<b>Informações do erro:</b> " . $email->ErrorInfo;
  }
}

?>