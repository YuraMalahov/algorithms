<?php

use Graph\Digraph;
use Graph\DirectDepthFirstSearch;
use Graph\DirectedCircle;

spl_autoload_register(function ($class) {
    $file = str_replace('\\', '/', $class);

    require "../$file.php";
});


$edges = [[0, 5], [4, 3], [0, 1], [9, 12], [6, 4], [5, 4], [0, 2], [11, 12],
    [9, 10], [0, 6], [7, 8], [9, 11], [5, 3], [3, 0]];

$graph = new Digraph(count($edges));
foreach ($edges as $edge) {
    $graph->addEdge($edge[0], $edge[1]);
}

echo "edges: {$graph->edges()}\n";
echo "vertexes: {$graph->vertices()}\n";
echo "graph:\n$graph";

$dfs = new DirectDepthFirstSearch($graph, 0);
echo "0 -> 7 ? {$dfs->marked(7)}\n";
echo "0 -> 6 ? {$dfs->marked(6)}\n";

$directCircle = new DirectedCircle($graph);
echo "has circle: {$directCircle->hasCircle()}\n";
foreach ($directCircle->circle() as $item) {
    echo "$item\n";
}