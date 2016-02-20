<?php

use Base\Stack;

spl_autoload_register(function ($class) {
    $file = str_replace('\\', '/', $class);

    require "../$file.php";
});

$stack = new Stack();

$stack->add(1);
$stack->add(2);
$stack->add(3);

foreach ($stack as $key => $value) {
    echo "$key => $value\n";
}

$stack->add(7);
$stack->add(8);
$stack->add(9);

foreach ($stack as $key => $value) {
    echo "$key => $value\n";
}