<?php

$firstChunk = [1, 4, 5, 7, 9];
$secondChunk = [0, 2, 3, 6, 8];

$tmp = 0;

foreach ($firstChunk as $fKey => $fVal) {
    $i = $tmp;

    while ( $i < count($secondChunk)) {
        if ($fVal > $secondChunk[$i]) {
            $res[] = $secondChunk[$i];
            $tmp = $i + 1;
        }

        $i++;
    }

    $res[] = $fVal;
}

//if (count($secondChunk)) {
//    $res = array_merge($res, $secondChunk);
//}

echo '<pre>';
var_dump($res);
echo '</pre>';