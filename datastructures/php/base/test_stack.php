<?php

use DataStructures\Item;
use DataStructures\Node;
use DataStructures\Stack;

spl_autoload_register(function ($class) {
    $tmp = explode('\\', $class);
    $file = $tmp[count($tmp)-1];

    require "$file.php";
});

$stack = new Stack();

$stack->add(new Node(new Item('aa', 1)));
$stack->add(new Node(new Item('bb', 2)));
$stack->add(new Node(new Item('cc', 3)));

foreach ($stack as $key => $value) {
    echo "$key => {$value->getItem()->getValue()} \n";
}

foreach ($stack as $key => $value) {
    echo "$key => {$value->getItem()->getValue()} \n";
}