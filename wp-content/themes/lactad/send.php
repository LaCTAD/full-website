<?php
    require('assets/php/recaptcha/src/autoload.php');
    require_once('assets/php/PHPMailer/PHPMailerAutoload.php');
    require('../../../wp-config.php');

    $emails = ['lactad.bioinfo@reitoria.unicamp.br', 'bidu.pub@gmail.com', 'adm.lactad@reitoria.unicamp.br'];

	$sender_email = utf8_decode($_POST['email']);
	$sender_name = utf8_decode($_POST['name']);
	$sender = "Email enviado por $sender_name <$sender_email>";
	$message = utf8_decode($_POST['message']);
	$message .= "\n\r$sender";
    $email = new PHPMailer;
    $email->isSMTP();                                      // Set mailer to use SMTP
    $email->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
    $email->SMTPAuth = true;                               // Enable SMTP authentication
    $email->Username = 'relatorioslactad@gmail.com';                 // SMTP username
    $email->Password = 'Fe#3Bi!1Ja@2Tu&7';                           // SMTP password
    $email->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $email->Port = 587;
    $email->setFrom("lactad@reitoria.unicamp.br", "Site LaCTAD");
    $email->Subject   = utf8_decode($_POST['subject']);
	$email->Body      = $message;
    foreach ($emails as $email_address)
    {
        $email->AddAddress($email_address);
    }
    $email->AddReplyTo(utf8_decode($_POST['email']), utf8_decode($_POST['name']));
    $email->AddAttachment( $_POST['file'] );
    $email->HeaderLine("Organization" , "LaCTAD");
    $email->HeaderLine("Content-Transfer-encoding" , "8bit");
    $email->HeaderLine("X-MSmail-Priority" , "Normal");
    $email->HeaderLine("X-Mailer" , "Microsoft Office Outlook, Build 11.0.5510");
    $email->HeaderLine("X-MimeOLE" , "Produced By Microsoft MimeOLE V6.00.2800.1441");
    $email->HeaderLine("X-AntiAbuse" , "This is a solicited email for - LaCTAD");
    $email->HeaderLine("X-AntiAbuse" , "Servername - Lactads01");
    $send = $email->Send();
    $email->ClearAllRecipients();
    $email->ClearAttachments();
    // Exibe uma mensagem de resultado
    if ($send)
    {
        echo "E-mail enviado com sucesso!";
    }
    else
    {
        echo "Não foi possível enviar o e-mail.";
        echo "<b>Informações do erro:</b> " . $email->ErrorInfo;
        echo $message;
    }
