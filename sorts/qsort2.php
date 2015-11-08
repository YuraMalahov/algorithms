<?php

$a = [2, 5, 4, 6, 1, 7, 3, 8, 9, 0];

//center 2
//5, 0
//$a = [2, 0, 4, 6, 1, 7, 3, 8, 9, 5];
//4, 1
//$a = [2, 0, 1, 6, 4, 7, 3, 8, 9, 5];
//2, 1
//$a = [1, 0, 2, 6, 4, 7, 3, 8, 9, 5];
//center 1
//1, 0
//$a = [0, 1, 2, 6, 4, 7, 3, 8, 9, 5];
//center 6
//7, 5
//$a = [0, 1, 2, 6, 4, 5, 3, 8, 9, 7];
//6, 3
//$a = [0, 1, 2, 3, 4, 5, 6, 8, 9, 7];
//center 3
//3, 3
//$a = [0, 1, 2, 3, 4, 5, 6, 8, 9, 7];
//center 4
//4, 4
//$a = [0, 1, 2, 3, 4, 5, 6, 8, 9, 7];
//center 8
//9, 7
//$a = [0, 1, 2, 3, 4, 5, 6, 8, 7, 9];
//8, 7
//$a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


qsort($a, 0, 9);

foreach ($a as $val) {
    echo $val . " ";
}


function qsort(&$array, $low, $high) {
    if ($high <= $low) return;

    echo "low $low, high $high</br>";

    $j = partion($array, $low, $high);
    echo "first nested low $low, high ". ($j-1) ."</br>";
    qsort($array, $low, $j-1);
    echo "second nested low " . ($j+1) .", high $high</br>";
    qsort($array, $j+1, $high);
}

function partion(&$array, $low, $high) {
    $i = $low;
    $j = $high+1;
    $center = $array[$low];

    while (true) {
        while ($array[++$i] < $center)
            if ($i == $high) break;

        while ($array[--$j] > $center)
            if ($j == $low) break;

        if ($i >= $j) break;

        list($array[$i], $array[$j]) = [$array[$j], $array[$i]];
    }

    list($array[$low], $array[$j]) = [$array[$j], $array[$low]];


    echo "return $j<br>";
    return $j;
}