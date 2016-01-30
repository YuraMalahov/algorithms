<?php

$list = [5, 4, 1, 7, 9, 2, 0, 3, 6, 8];

function countSort(&$list) {
    $hash = [];
    $res = [];

    // debug
    $debug = 0;

    foreach ($list as $key => $val) {
        $hash[$val][] = $val;

        // debug
        $debug++;
    }

    for ($i = 0; $i < count($list); $i++) {
        // debug
        $debug++;
        if (count($hash[$i]) > 1) {
            foreach ($hash[$i] as $element) {
                // debug
                $debug++;
                $res[] = $element;
            }
        } else {
            $res[] = $hash[$i][0];
        }
    }

    $list = $res;

    return $debug;
}

$debug = countSort($list);

echo "<h3>iterations $debug</h3>";

echo '<pre>';
var_dump($list);
echo '</pre>';