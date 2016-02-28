<?php

namespace Graph;
use Base\Stack;
use Iterator;

/**
 * Class DepthFirstPaths
 * @package Graph
 */
class DepthFirstPaths
{
    /**
     * @var boolean[]
     */
    private $marked = [];

    /**
     * @var int
     */
    private $edgeTo = [];

    /**
     * @var int
     */
    private $startVertex;

    /**
     * DepthFirstPaths constructor.
     * @param Graph $graph
     * @param int $startVertex
     */
    public function __construct(Graph $graph, int $startVertex)
    {
        $this->startVertex = $startVertex;
        $this->depthSearch($graph, $startVertex);
    }

    /**
     * @param Graph $graph
     * @param int $vertex
     */
    private function depthSearch(Graph $graph, int $vertex)
    {
        $this->marked[$vertex] = true;
        foreach ($graph->adjacent($vertex) as $adjacent) {
            if ($this->hasPathTo($adjacent)) {
                continue;
            }
            $this->edgeTo[$adjacent] = $vertex;
            $this->depthSearch($graph, $adjacent);
        }
    }

    /**
     * @param int $vertex
     * @return bool
     */
    private function hasPathTo(int $vertex): bool
    {
        return isset($this->marked[$vertex]) && $this->marked[$vertex];
    }

    /**
     * @param int $vertex
     * @return Iterator|null
     */
    public function pathTo(int $vertex)
    {
        if (!$this->hasPathTo($vertex)) {
            return null;
        }
        $path = new Stack();
        for ($x = $vertex; $x != $this->startVertex; $x = $this->edgeTo[$x]) {
            $path->add($x);
        }
        $path->add($this->startVertex);

        return $path;
    }
}