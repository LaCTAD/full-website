<?php
	require('assets/php/recaptcha/src/autoload.php');
	require_once('assets/php/PHPMailer/PHPMailerAutoload.php');
	$recaptcha = new \ReCaptcha\ReCaptcha($secret);
	$resp = $recaptcha->verify($_POST['g-recaptcha-response'], $_SERVER['REMOTE_ADDR']);
	if ($resp->isSuccess()) {
    $email = new PHPMailer;
	  $email->IsSendmail();
	  $email->setFrom("lactad@unicamp.br", "Site LaCTAD");
		$email->Subject   = $_POST['subject'];
		$email->Body      = $_POST['message'];
		$email->AddAddress('dsfugimoto@gmail.com');
		$email->AddAddress('bidu.pub@gmail.com');
		$email->AddAddress('lactad.adm@reitoria.unicamp.br');
		$email->AddReplyTo($_POST['email'], $_POST['name']);
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
		}
	} else {
    $errors = $resp->getErrorCodes();
	}