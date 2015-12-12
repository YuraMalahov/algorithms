<?php

$list = [5, 4, 1, 7, 9, 2, 0, 3, 6, 8];

function mergeSort($list, &$debug) {
    $length = count($list);
    $res = [];

    if ($length > 1) {
        $chunks = array_chunk($list, ceil($length / 2));
        $firstChunk = mergeSort($chunks[0], $debug);
        $secondChunk = mergeSort($chunks[1], $debug);

        $i = 0;
        $j = 0;

        while ($i < count($firstChunk)) {
            // debug
            $debug++;

            if ($firstChunk[$i] > $secondChunk[$j]) {
                $res[] = $secondChunk[$j];
                $j++;
            } else if ($firstChunk[$i] < $secondChunk[$j]) {
                $res[] = $firstChunk[$i];
                $i++;
            }

            if (!array_key_exists($i, $firstChunk)) {
                $res = array_merge($res, array_slice($secondChunk, $j, count($secondChunk)));
                break;
            }

            if (!array_key_exists($j, $secondChunk)) {
                $res = array_merge($res, array_slice($firstChunk, $i, count($firstChunk)));
                break;
            }
        }
    } else {
        return $list;
    }

    return $res;
}

$debug = 0;

$res = mergeSort($list, $debug);

echo "<h3>iterations $debug</h3>";

echo '<pre>';
var_dump($res);
echo '</pre>';