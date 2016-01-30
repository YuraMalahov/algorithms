<?php

$list = [5, 4, 1, 7, 9, 2, 0, 3, 6, 8];

function selectSort(&$list) {
    $length = count($list);

    for ($i = 0; $i < $length; $i++) {
        $min = $list[$i];
        $index = $i;

        for ($j = $i + 1; $j < $length; $j++) {
            if ($min > $list[$j]) {
                $min = $list[$j];
                $index = $j;
            }
        }

        $tmp = $list[$i];
        $list[$i] = $min;
        $list[$index] = $tmp;
    }
}

selectSort($list);