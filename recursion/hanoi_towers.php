<?php

$tower1 = [6, 5, 4, 3, 2, 1];
$tower2 = [];
$tower3 = [];

function hanoi(int $count, array &$from, array &$to, array &$support)
{
    if ($count === 0) {
        return;
    }

    if ($count === 1) {
        array_push($to, array_pop($from));
        return;
    }

    hanoi($count - 1, $from, $support, $to);
    array_push($to, array_pop($from));
    hanoi($count - 1, $support, $to, $from);
}

hanoi(6, $tower1, $tower2, $tower3);

while (count($tower2)) {
    $item = array_pop($tower2);
    echo "$item\n";
}