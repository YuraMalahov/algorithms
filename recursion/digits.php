<?php

function digitsSum(int $number): int
{
    if ($number < 10) {
        return $number;
    }

    $slice = floor($number / 10);
    $digit = $number - $slice * 10;

    return $digit + digitsSum($slice);
}

echo digitsSum(12345) . "\n";


function digitsLTR(int $number)
{
    if ($number < 10) {
        return $number;
    }

    $slice = floor($number / 10);
    $digit = $number - $slice * 10;

    return digitsLTR($slice) . ", " . $digit;
}

echo digitsLTR(12345);