<?php

namespace Test;

use Key\KeyInterface;
use Key\Key;
use Tree\Node;
use Tree\RedBlackTree;

spl_autoload_register(function($class) {
    $tmp = explode('\\', $class);
    include $tmp[count($tmp)-1]  . '.php';
});

$m = new Key('m');
$a = new Key('a');
$rbt = new RedBlackTree(new Node($m, 23));
$rbt->put($a, 55);

echo "ok\n";
echo $rbt->get($a)->getKey()->getKey();