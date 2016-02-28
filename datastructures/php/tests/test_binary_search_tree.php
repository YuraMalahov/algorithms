<?php

spl_autoload_register(function ($class) {
    $file = str_replace('\\', '/', $class);

    require "../$file.php";
});

$bst = new BinarySearchTree();

$m = new Key('m');
$bst->put($m , 99);
$a = new Key('a');
$bst->put($a, 99);
$x = new Key('x');
$bst->put($x, 88);
$c = new Key('c');
$bst->put($c, 77);
$z = new Key('z');
$bst->put($z, 66);
$j = new Key('j');
$bst->put($j, 52);

echo "length: {$bst->length()}\n";