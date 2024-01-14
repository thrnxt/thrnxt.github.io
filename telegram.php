<?php

/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$token = "6824105990:AAHmXL1LDd6AlB-9cEl4JRq2lv77zij87QU";
$chat_id = "-4160499175";
$arr = array(
    'Имя пользователя: ' => $name,
    'Телефон: ' => $phone,
);

foreach ($arr as $key => $value) {
    $txt .= "<b>" . $key . "</b> " . $value . "%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

if ($sendToTelegram) {
    header('Location: index2.html');
} else {
    echo "Error";
}
