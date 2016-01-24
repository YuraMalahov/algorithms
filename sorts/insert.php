<?php

$list = [5, 4, 1, 7, 9, 2, 0, 3, 6, 8];

function insertSort(&$list) {
    // debug
    $debug = 0;

    $length = count($list);

    for ($i = 0; $i < $length; $i++) {
        // debug
        $debug++;

        $current = $i;
        $next = $i + 1;

        while (array_key_exists($next, $list) && $list[$next] < $list[$current]) {
            // debug
            $debug++;

            $tmp = $list[$next];
            $list[$next] = $list[$current];
            $list[$current] = $tmp;

            $current--;
            $next--;
        }
    }

    return $debug;
}

$res = insertSort($list);

echo "<h3>iterations $res</h3>";

echo '<pre>';
var_dump($list);
echo '</pre>';