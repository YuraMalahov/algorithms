<?php

use DataStructures\Collection;
use DataStructures\Item;
use DataStructures\Node;

spl_autoload_register(function ($class) {
    $tmp = explode('\\', $class);
    $file = $tmp[count($tmp)-1];

    require "$file.php";
});

$collection = new Collection();

$collection->add(new Node(new Item('aa', 1)));
$collection->add(new Node(new Item('bb', 2)));
$collection->add(new Node(new Item('cc', 3)));

foreach ($collection as $key => $value) {
    echo "$key => {$value->getItem()->getValue()} \n";
}
echo "--------------------\n";

$collection->removeByKey('bb');

foreach ($collection as $key => $value) {
    echo "$key => {$value->getItem()->getValue()} \n";
}
echo "--------------------\n";

$collection->add(new Node(new Item('dd', 4)));

foreach ($collection as $key => $value) {
    echo "$key => {$value->getItem()->getValue()} \n";
}