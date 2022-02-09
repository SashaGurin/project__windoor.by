<?php

$recepient = "mixtie@mail.ru";
$sitename = "Акула [Вызов менеджера на замер]";
$return = 'Акула <robot@'.$_SERVER['HTTP_HOST'].'>';
$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$comment = trim($_POST["comment"]);
$message = "Имя: $name \nТелефон: $phone \nКомментарий: $comment";

$pagetitle = "Сообщение с \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");