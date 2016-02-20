<?php

use DataStructures\Item;
use DataStructures\Node;

spl_autoload_register(function ($class) {
    $tmp = explode('\\', $class);
    $file = $tmp[count($tmp)-1];

    require "$file.php";
});

$node = new Node(new Item('aa', 1));
$node->setRight(new Node(new Item('bb', 2)));
$node->setLeft(new Node(new Item('cc', 3)));

echo $node->getItem()->getValue() . "\n";
echo $node->getItem()->getKey() . "\n";
echo $node->getRight()->getItem()->getValue() . "\n";
echo $node->getRight()->getItem()->getKey() . "\n";
echo $node->getLeft()->getItem()->getValue() . "\n";
echo $node->getLeft()->getItem()->getKey() . "\n";