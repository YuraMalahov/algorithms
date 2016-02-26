<?php

use Graph\FastUnion;

spl_autoload_register(function ($class) {
    $file = str_replace('\\', '/', $class);

    require "../$file.php";
});

$data = [[4, 3], [3, 8], [6, 5], [9, 4], [2, 1], [5, 0], [7, 2], [6, 1], [1, 0],
[6, 7]];
$fastUnion = new FastUnion(count($data));

foreach ($data as $points) {
    $fp = $points[0];
    $sp = $points[1];
    if ($fastUnion->connected($fp, $sp)) {
        continue;
    }
    $fastUnion->union($fp, $sp);
    echo "$fp, $sp\n";
}

echo "{$fastUnion->count()}: components";