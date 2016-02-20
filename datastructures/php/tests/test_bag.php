<?php

use Base\Bag;

spl_autoload_register(function ($class) {
    $file = str_replace('\\', '/', $class);

    require "../$file.php";
});

$bag = new Bag();

$bag->add(1);
$bag->add(2);
$bag->add(3);

foreach ($bag as $key => $value) {
    echo "$key => $value\n";
}

foreach ($bag as $key => $value) {
    echo "$key => $value\n";
}