<?php

use Graph\WeightedFastUnion;

spl_autoload_register(function ($class) {
    $file = str_replace('\\', '/', $class);

    require "../$file.php";
});

$data = [[4, 3], [3, 8], [6, 5], [9, 4], [2, 1], [5, 0], [7, 2], [6, 1], [1, 0],
[6, 7]];
$weightedFastUnion = new WeightedFastUnion(count($data));

foreach ($data as $points) {
    $fp = $points[0];
    $sp = $points[1];
    if ($weightedFastUnion->connected($fp, $sp)) {
        continue;
    }
    $weightedFastUnion->union($fp, $sp);
    echo "$fp, $sp\n";
}

echo "{$weightedFastUnion->count()}: components";