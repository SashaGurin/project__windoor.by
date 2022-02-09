<?php

$recepient = "mixtie@mail.ru";
$sitename = "Акула [Бесплатная консультация]";
$return = 'Акула <robot@'.$_SERVER['HTTP_HOST'].'>';
$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = "Имя: $name \nТелефон: $phone";

$pagetitle = "Сообщение с \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");