<?php

$recepient = "mixtie@mail.ru";
$sitename = "Акула [Конфигуратор стоимости]";
$return = 'Акула <robot@'.$_SERVER['HTTP_HOST'].'>';
$question1 = trim($_POST["question1"]);
$width = trim($_POST["width"]);
$height = trim($_POST["height"]);
$question3 = trim($_POST["question3"]);
$question41 = trim($_POST["question41"]);
$question42 = trim($_POST["question42"]);
$question43 = trim($_POST["question43"]);
$phone = trim($_POST["phone"]);

$message = "Куда нужны окна: $question1 \nРазмеры окна: ширина $width высота $height \nКоличество створок: $question3 \nАксессуары: $question41  $question42  $question43 \nТелефон: $phone";

$pagetitle = "Сообщение с \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");