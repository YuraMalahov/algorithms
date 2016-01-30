<?php

$list = [5, 4, 1, 7, 9, 2, 0, 3, 6, 8];

function insertSort(&$list) {
    $length = count($list);

    for ($i = 0; $i < $length; $i++) {
        $current = $i;
        $next = $i + 1;

        while (array_key_exists($next, $list) && $list[$next] < $list[$current]) {
            $tmp = $list[$next];
            $list[$next] = $list[$current];
            $list[$current] = $tmp;
            $current--;
            $next--;
        }
    }
}

insertSort($list);