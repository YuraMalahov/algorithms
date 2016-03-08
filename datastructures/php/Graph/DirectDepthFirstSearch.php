<?php

namespace Graph;

/**
 * Class DirectDepthFirstSearch
 * @package Graph
 */
class DirectDepthFirstSearch
{
    /**
     * @var int[]
     */
    private $marked = [];

    /**
     * DirectDepthFirstSearch constructor.
     * @param Digraph $graph
     * @param int $vertex
     */
    public function __construct(Digraph $graph, int $vertex)
    {
        $this->depthSearch($graph, $vertex);
    }

    /**
     * @param Digraph $graph
     * @param int $vertex
     */
    private function depthSearch(Digraph $graph, int $vertex)
    {
        $this->marked[$vertex] = true;

        foreach ($graph->adjacent($vertex) as $item) {
            if ($this->marked($item)) {
                continue;
            }
            $this->depthSearch($graph, $item);
        }
    }

    /**
     * @param int $vertex
     * @return bool
     */
    public function marked(int $vertex): bool
    {
        return isset($this->marked[$vertex]) && $this->marked[$vertex] === true;
    }
}