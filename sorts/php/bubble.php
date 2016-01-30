<?php

$list = [5, 4, 1, 7, 9, 2, 0, 3, 6, 8];

function bubbleSort(&$list) {
    $length = count($list);
    $sorted = $length - 1;

    for ($i = 0; $i < $length; $i++) {
        for ($j = 0; $j < $length; $j++) {
            $nextIndex = $j + 1;

            if (array_key_exists($nextIndex, $list) && $list[$j] > $list[$nextIndex]) {
                $tmp = $list[$j];
                $list[$j] = $list[$nextIndex];
                $list[$nextIndex] = $tmp;

                if ($j === $sorted) {
                    $sorted--;
                    break;
                }
            }
        }
    }
}

bubbleSort($list);