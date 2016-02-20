<?php


function isPowerOf2(int $number): bool
{
    if ($number === 2) {
        return true;
    }

    if ($number < 2 || ($number % 2 > 0)) {
        return false;
    }

    return isPowerOf2($number / 2);
}


echo isPowerOf2(32);