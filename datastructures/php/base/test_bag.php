<?php

use DataStructures\Bag;
use DataStructures\Item;
use DataStructures\Node;

spl_autoload_register(function ($class) {
    $tmp = explode('\\', $class);
    $file = $tmp[count($tmp)-1];

    require "$file.php";
});

$bag = new Bag();

$bag->add(new Node(new Item('aa', 1)));
$bag->add(new Node(new Item('bb', 2)));
$bag->add(new Node(new Item('cc', 3)));

foreach ($bag as $key => $value) {
    echo "$key => {$value->getItem()->getValue()} \n";
}

foreach ($bag as $key => $value) {
    echo "$key => {$value->getItem()->getValue()} \n";
}