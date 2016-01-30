<?php

$a = [2, 5, 4, 6, 1, 7, 3, 8, 9, 0];

qsort($a, 0, 9);

function qsort(&$array, $low, $high) {
    if ($high <= $low) {
        return;
    }

    $j = partion($array, $low, $high);
    qsort($array, $low, $j-1);
    qsort($array, $j+1, $high);
}

function partion(&$array, $low, $high) {
    $i = $low;
    $j = $high+1;
    $center = $array[$low];

    while (true) {
        while ($array[++$i] < $center) {
            if ($i == $high) break;
        }
        while ($array[--$j] > $center) {
            if ($j == $low) break;
        }
        if ($i >= $j) {
            break;
        }
        list($array[$i], $array[$j]) = [$array[$j], $array[$i]];
    }
    list($array[$low], $array[$j]) = [$array[$j], $array[$low]];

    return $j;
}