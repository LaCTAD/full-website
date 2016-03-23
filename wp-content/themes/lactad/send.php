<?php
    require('assets/php/recaptcha/src/autoload.php');
    require_once('assets/php/PHPMailer/PHPMailerAutoload.php');
    require('../../../wp-config.php');

    $emails = CONTACT_EMAILS;
    $emails = explode(', ', $emails);

//	$recaptcha = new \ReCaptcha\ReCaptcha('6LcZfQcTAAAAADvQsJYFsGvgRdX68KOIIWN9D4NO');
//	$resp = $recaptcha->verify($_POST['g-recaptcha-response'], $_SERVER['REMOTE_ADDR']);
    if (1 == 1)
    {
	    $email = new PHPMailer;
        $email->IsSendmail();
        $email->setFrom("lactad@reitoria.unicamp.br", "Site LaCTAD");
        $email->Subject   = utf8_decode($_POST['subject']);
        $email->Body      = utf8_decode($_POST['message']);
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
		}
    }
    else
    {
        $errors = $resp->getErrorCodes();
    }
