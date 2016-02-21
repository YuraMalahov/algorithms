<?php

use Base\HashTable;

spl_autoload_register(function ($class) {
    $file = str_replace('\\', '/', $class);

    require "../$file.php";
});


$hashTable = new HashTable();

$hashTable->set('==', 1);
$hashTable->set('z', 11);
$hashTable->set('H2', 111);

$hashTable->set('B', 2);
$hashTable->set('C', 3);
$hashTable->set('c', 103);

echo $hashTable->get('C') . "\n";
