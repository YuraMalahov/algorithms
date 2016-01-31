<?php

function numRange($start, $end)
{
    if ($start === $end) {
        echo "$start\n";
        return;
    }

    echo "$start\n";

    $start < $end ? numRange($start+1, $end) : numRange($start-1, $end);
}

numRange(2, 12);
numRange(12, 2);