<?php

$a = [2, 5, 4, 6, 1, 7, 3, 8, 9, 0];

//$a = [0, 5, 4, 6,  1,  7, 3, 8, 9, 2];
//$a = [0, 3, 4, 6,  1,  7, 5, 8, 9, 2];

qsort($a);

foreach ($a as $val) {
    echo $val . " ";
}

function qsort(&$array) {

    $left = 0;
    $right = count($array) - 1;

    my_sort($array, $left, $right);
}

function my_sort(&$array, $left, $right) {
    $l = $left;
    $r = $right;
    $center = $array[((int)($left + $right) / 2)];

    do {
        while ($array[$r] > $center) {
            $r--;
        }

        while ($array[$l] < $center) {
            $l++;
        }

        if ($l <= $r) {
            list($array[$r], $array[$l]) = array($array[$l], $array[$r]);

            $l++;
            $r--;
        }
    } while ($l <= $r);

    if ($r > $left) {
        my_sort($array, $left, $r);
    }

    if ($l < $right) {
        my_sort($array, $l, $right);
    }
}