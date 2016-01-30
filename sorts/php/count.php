<?php

$list = [5, 4, 1, 7, 9, 2, 0, 3, 6, 8];

function countSort(&$list) {
    $hash = [];
    $res = [];

    foreach ($list as $key => $val) {
        $hash[$val][] = $val;
    }

    for ($i = 0; $i < count($list); $i++) {
        if (count($hash[$i]) > 1) {
            foreach ($hash[$i] as $element) {
                $res[] = $element;
            }
        } else {
            $res[] = $hash[$i][0];
        }
    }

    $list = $res;
}

countSort($list);