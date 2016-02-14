<?php

use DataStructures\Item;
use DataStructures\Node;
use DataStructures\Queue;

spl_autoload_register(function ($class) {
    $tmp = explode('\\', $class);
    $file = $tmp[count($tmp)-1];

    require "$file.php";
});

$queue = new Queue();

$queue->add(new Node(new Item('aa', 1)));
$queue->add(new Node(new Item('bb', 2)));
$queue->add(new Node(new Item('cc', 3)));

foreach ($queue as $key => $value) {
    echo "$key => {$value->getItem()->getValue()} \n";
}

foreach ($queue as $key => $value) {
    echo "$key => {$value->getItem()->getValue()} \n";
}