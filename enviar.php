<?php
date_default_timezone_set('Lisboa/London');

require_once('src/PHPMailer.php');
require_once('src/SMTP.php');
require_once('src/Exception.php');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


if((isset($_POST['email']) && !empty(trim($_POST['email']))) && (isset($_POST['mensagem']) && !empty(trim($_POST['mensagem'])))) {

	$nome = !empty($_POST['nome']) ? $_POST['nome'] : 'Não indicado';
	$email = $_POST['email'];
	$assunto = !empty($_POST['assunto']) ? utf8_decode($_POST['assunto']) : 'Não indicado';
	$mensagem = $_POST['mensagem'];
	$data = date('d/m/Y H:i:s');

	$mail = new PHPMailer();
	$mail->isSMTP();
	$mail->Host = 'smtp.gmail.com';
	$mail->SMTPAuth = true;
	$mail->Username = 'beagnoca@gmail.com';
	$mail->Password = 'X^Bx2wNvP<;?Ye]D';
	$mail->Port = 587;
 
	$mail->setFrom('beagnoca@gmail.com');
	$mail->addAddress('deosantos@yahoo.com');

	$mail->isHTML(true);
	$mail->Subject = $assunto;
	$mail->Body = "Nome: {$nome}<br>
				   Email: {$email}<br>
				   Mensagem: {$mensagem}<br>
				   Data/hora: {$data}";

	if($mail->send()) {
		echo 'Mensagem enviada com sucesso.';
	} else {
		echo 'Mensagem não enviada.';
	}
} else {
	echo 'Não enviado: informar o email e a mensagem.';
}
