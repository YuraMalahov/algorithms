<?php

require 'Stack.php';

$stack = new Stack();

$stack->add(10);
$stack->add(11);
echo 'value: ' . $stack->next(). '<br>';
$stack->add(12);
$stack->add(13);
echo 'value: ' . $stack->next(). '<br>';
$stack->add(14);
$stack->add('ok');
echo 'value: ' . $stack->next(). '<br>';
echo 'value: ' . $stack->next(). '<br>';
echo 'value: ' . $stack->next(). '<br>';
echo 'value: ' . $stack->next(). '<br>';