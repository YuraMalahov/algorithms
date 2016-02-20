<?php

use Base\HashTable;

spl_autoload_register(function ($class) {
    $file = str_replace('\\', '/', $class);

    require "../$file.php";
});


$t = new HashTable();

$t->set('==', 1);
$t->set('z', 11);
$t->set('H2', 111);

$t->set('B', 2);
$t->set('C', 3);
$t->set('c', 103);

echo $t->get('C');