<?php

use Base\Collection;

spl_autoload_register(function ($class) {
    $file = str_replace('\\', '/', $class);

    require "../$file.php";
});

$collection = new Collection();

$collection->add('aa', 1);
$collection->add('bb', 2);
$collection->add('cc', 3);

foreach ($collection as $key => $value) {
    echo "$key => $value\n";
}
echo "--------------------\n";

$collection->removeByKey('bb');

foreach ($collection as $key => $value) {
    echo "$key => $value\n";
}
echo "--------------------\n";

$collection->add('dd', 4);

foreach ($collection as $key => $value) {
    echo "$key => $value\n";
}

echo $collection->findByKey('cc') . "\n";
echo $collection->getFirst() . "\n";
echo $collection->getLast() . "\n";