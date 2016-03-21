<?php

use Base\IndexMinPQ;
use Key\Key;

spl_autoload_register(function ($class) {
    $file = str_replace('\\', '/', $class);

    require "../$file.php";
});


    // insert a bunch of strings
$strings= ["it", "was", "the", "best", "of", "times", "it", "was", "the", "worst"];

$pq = new IndexMinPQ(count($strings));
for ($i = 0; $i < count($strings); $i++) {
    $pq->insert($i, new Key($strings[$i]));
}

while (!$pq->isEmpty()) {
    $i = $pq->delMin();
    echo $i . " " . $strings[$i] . "\n\r";
}