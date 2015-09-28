<?php
	require_once('assets/php/PHPMailer/PHPMailerAutoload.php');

    $email = new PHPMailer;
    $email->IsSendmail();
    $email->setFrom($_POST['email'], $_POST['name']);
	$email->Subject   = $_POST['subject'];
	$email->Body      = "olar";
	$email->AddAddress( 'dsfugimoto@gmail.com');
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
	echo "<table>";
 


    foreach ($_POST as $key => $value) {
        echo "<tr>";
        echo "<td>";
        echo $key;
        echo "</td>";
        echo "<td>";
        echo $value;
        echo "</td>";
        echo "</tr>";
    }



echo "</table>";
