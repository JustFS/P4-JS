<?php

$errorMSG = "";

// NAME
if (empty($_POST["name"])) {
    $errorMSG = "Merci de décliner une identtié (ou au pire un pseudo) ";
} else {
    $name = $_POST["name"];
}

// EMAIL
if (empty($_POST["email"])) {
    $errorMSG .= "Laissez-moi votre mail ça sera plus pratique ! ";
} else {
    $email = $_POST["email"];
}

// MESSAGE
if (empty($_POST["message"])) {
    $errorMSG .= "Rien à dire ?";
} else {
    $message = $_POST["message"];
}


$EmailTo = "julienazbrg@gmail.com";
$Subject = "Nouveau message CV";

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Subject: ";
$Body .= $msg_subject;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);

// redirect to success page
if ($success && $errorMSG == ""){
   echo "Message envoyé !";
}else{
    if($errorMSG == ""){
        echo "Apparemment ça ne marche pas :(";
    } else {
        echo $errorMSG;
    }
}

?>