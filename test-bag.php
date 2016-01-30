<?php

require 'Bag.php';

$bag = new Bag();

$bag->add(10);
$bag->add(11);
$bag->add(12);
$bag->add(13);
$bag->add(14);

echo 'value: ' . $bag->next(). '<br>';
echo 'value: ' . $bag->next(). '<br>';
echo 'value: ' . $bag->next(). '<br>';
echo '------------------------<br>';
$bag->reset();
echo 'value: ' . $bag->next(). '<br>';
echo 'value: ' . $bag->next(). '<br>';
echo '------------------------<br>';
$bag->add(15);
$bag->reset();
echo 'value: ' . $bag->next(). '<br>';
echo 'value: ' . $bag->next(). '<br>';
echo 'value: ' . $bag->next(). '<br>';
echo 'value: ' . $bag->next(). '<br>';
echo 'value: ' . $bag->next(). '<br>';
echo 'value: ' . $bag->next(). '<br>';
echo 'value: ' . $bag->next(). '<br>';