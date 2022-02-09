<?php

$recepient = "mixtie@mail.ru";
$sitename = "Акула [Заявка на замер]";
$return = 'Акула<robot@'.$_SERVER['HTTP_HOST'].'>';
$phone = trim($_POST["phone"]);
$message = "Телефон: $phone";

$pagetitle = "Сообщение с \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");