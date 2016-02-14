<?php

use DataStructures\HashTable;

spl_autoload_register(function ($class) {
    $tmp = explode('\\', $class);
    $file = $tmp[count($tmp)-1];

    require "$file.php";
});


$t = new HashTable();

$t->set('==', 1);
$t->set('z', 11);
$t->set('H2', 111);

$t->set('B', 2);
$t->set('C', 3);
$t->set('c', 103);

echo $t->get('H2');