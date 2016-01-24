<?php

$list = [5, 4, 1, 7, 9, 2, 0, 3, 6, 8];

function bubbleSort(&$list) {
    // debug
    $debug = 0;

    $length = count($list);
    $sorted = $length - 1;

    for ($i = 0; $i < $length; $i++) {
        // debug
        $debug++;

        for ($j = 0; $j < $length; $j++) {
            // debug
            $debug++;

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

    // debug
    return $debug;
}

$res = bubbleSort($list);

echo "<h3>iterations $res</h3>";

echo '<pre>';
var_dump($list);
echo '</pre>';