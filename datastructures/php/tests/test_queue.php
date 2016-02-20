<?php

use Base\Queue;

spl_autoload_register(function ($class) {
    $file = str_replace('\\', '/', $class);

    require "../$file.php";
});

$queue = new Queue();

$queue->add(1);
$queue->add(2);
$queue->add(3);

foreach ($queue as $key => $value) {
    echo "$key => $value\n";
}

foreach ($queue as $key => $value) {
    echo "$key => $value\n";
}