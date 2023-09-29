<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php';

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'davihemailsender@gmail.com';
    $mail->Password = 'nvzshsnurucvwosi';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    $mail->CharSet = 'UTF-8';

    // Sender and recipient information
    $mail->setFrom($_POST['email'], $_POST['name']);
    $mail->addAddress('davihmattos01@hotmail.com'); //Quem recebe o email
    $mail->Subject = 'Novo email de trabalho de: ' . $_POST['name'];
    $emailBody = "Esse email foi enviado de: {$_POST['email']}<br><br>";
    $emailBody .= $_POST['message'];
    
    $mail->msgHTML($emailBody);
    $mail->send();

} catch (Exception $e) {
    echo 'A mensagem não foi enviada. Erro: ', $mail->ErrorInfo;
    error_log('A mensagem não foi enviada. Erro: ' . $mail->ErrorInfo);
}
?>
