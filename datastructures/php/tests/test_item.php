<?php

use DataStructures\Item;

spl_autoload_register(function ($class) {
    $tmp = explode('\\', $class);
    $file = $tmp[count($tmp)-1];

    require "$file.php";
});

$item = new Item('AA', 666);

echo (string)$item->getKey() . "\n";
echo (string)$item->getHashCode() . "\n";
echo (string)$item->getValue() . "\n";