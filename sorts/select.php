<?php

$list = [5, 4, 1, 7, 9, 2, 0, 3, 6, 8];

function selectSort(&$list) {
    // debug
    $debug = 0;

    $length = count($list);

    for ($i = 0; $i < $length; $i++) {
        $min = $list[$i];
        $index = $i;

        // debug
        $debug++;

        for ($j = $i + 1; $j < $length; $j++) {
            if ($min > $list[$j]) {
                $min = $list[$j];
                $index = $j;
            }

            // debug
            $debug++;
        }

        $tmp = $list[$i];
        $list[$i] = $min;
        $list[$index] = $tmp;
    }

    // debug
    return $debug;
}

$res = selectSort($list);

echo "<h3>iterations $res</h3>";

echo '<pre>';
var_dump($list);
echo '</pre>';