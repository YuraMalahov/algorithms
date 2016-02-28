<?php

use Graph\DepthFirstSearch;
use Graph\Graph;

spl_autoload_register(function ($class) {
    $file = str_replace('\\', '/', $class);

    require "../$file.php";
});


$edges = [[0, 5], [4, 3], [0, 1], [9, 12], [6, 4], [5, 4], [0, 2], [11, 12],
[9, 10], [0, 6], [7, 8], [9, 11], [5, 3]];

$graph = new Graph(count($edges));
foreach ($edges as $edge) {
    $graph->addEdge($edge[0], $edge[1]);
}

echo "edges: {$graph->edges()}\n";
echo "vertexes: {$graph->vertices()}\n";
echo "max degree: {$graph->maxDegree()}\n";
echo "avg degree: {$graph->avgDegree()}\n";
echo "graph: $graph\n";

$dfs = new DepthFirstSearch($graph, 0);
echo "count: {$dfs->count()}";