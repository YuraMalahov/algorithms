<?php

function naturalNumbers($number)
{
    if ($number > 1) {
        naturalNumbers($number - 1);
    }

    echo "$number\n";
}

naturalNumbers(8);