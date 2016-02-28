<?php

namespace Graph;

/**
 * Class DepthFirstSearch
 * @package Graph
 */
class DepthFirstSearch
{
    /**
     * @var boolean[]
     */
    private $marked = [];

    /**
     * @var int
     */
    private $count;

    /**
     * DepthFirstSearch constructor.
     * @param Graph $graph
     * @param int $vertex
     */
    public function __construct(Graph $graph, int $vertex)
    {
        $this->depthSearch($graph, $vertex);
    }

    /**
     * @param Graph $graph
     * @param int $vertex
     */
    private function depthSearch(Graph $graph, int $vertex)
    {
        $this->marked[$vertex] = true;
        $this->count++;

        foreach ($graph->adjacent($vertex) as $adjacent) {
            if ($this->isMarked($adjacent)) {
                continue;
            }
            $this->depthSearch($graph, $adjacent);
        }
    }

    /**
     * Is vertex marked
     * @param int $vertex
     * @return bool
     */
    public function isMarked(int $vertex): bool
    {
        return isset($this->marked[$vertex]) && $this->marked[$vertex];
    }

    /**
     * Count of adjacent vertices
     * @return int
     */
    public function count()
    {
        return $this->count;
    }
}