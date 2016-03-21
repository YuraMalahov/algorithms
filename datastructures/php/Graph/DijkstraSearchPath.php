<?php

namespace Graph;

/**
 * Class SearchPath
 * @package Graph
 */
class SearchPath
{
    public function __construct(EdgeWeightedDigraph $graph, int $vertex)
    {

    }

    public function distTo(int $vertex): float
    {
        return $this->distTo[$vertex];
    }

    public function hasPathTo(int $vertex): bool
    {
        return $this->distTo[$vertex] < INF;
    }

    public function pathTo(int $vertex): DirectEdge {}

    private function relax(DirectEdge $edge)
    {
        $from = $edge->from();
        $to = $edge->to();

        if ($this->distTo[$from] > $this->distTo[$to] + $edge->weight()) {
            $this->distTo[$from] = $this->distTo[$to] + $edge->weight();
            $this->edgeTo[$from] = $edge;
        }
    }
}