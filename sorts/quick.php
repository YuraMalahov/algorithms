<?php

$list = [5, 4, 1, 7, 9, 2, 0, 3, 6, 8];

function quickSort(&$list) {
    $min = $list[0];
    $max = $list[0];
    $middle = null;

    foreach ($list as $element) {
        if ($element < $min) {
            $min = $element;
        }

        if ($element > $max) {
            $max = $element;
        }
    }

    $middle = floor($max / count($list));




    return [];
}

$debug = quickSort($list);

echo "<h3>iterations $debug</h3>";

echo '<pre>';
var_dump($list);
echo '</pre>';