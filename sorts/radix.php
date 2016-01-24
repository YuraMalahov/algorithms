<?php

$list = [5, 4, 1, 7, 9, 2, 0, 3, 6, 8];

function radixSort(&$list) {
    $hash = [];
    $res = [];

    for ($i = 0; $i <= 9; $i++) {
        $hash[$i] = [];
    }

    $i = 0;
    $j = 0;
    $max = 9;

    while ($i < $max) {
        while ($j < count($list)) {

        }
    }



    return $debug;
}

$debug = countSort($list);

echo "<h3>iterations $debug</h3>";

echo '<pre>';
var_dump($list);
echo '</pre>';