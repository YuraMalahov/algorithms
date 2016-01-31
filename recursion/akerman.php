<?php

function akk(int $m, int $n): int
{
    if (!$m && $n) {
        return $n+1;
    } else if ($m && !$n) {
        return akk($m-1, 1);
    }

    return akk($m-1, akk($m, $n-1));
}

echo akk(1, 1);