<?php

require 'Queue.php';

$queue = new Queue();

$queue->add(10);
$queue->add(11);
echo 'value: ' . $queue->next(). '<br>';
$queue->add(12);
$queue->add(13);
echo 'value: ' . $queue->next(). '<br>';
$queue->add(14);
$queue->add('ok');
echo 'value: ' . $queue->next(). '<br>';
echo 'value: ' . $queue->next(). '<br>';
echo 'value: ' . $queue->next(). '<br>';
echo 'value: ' . $queue->next(). '<br>';