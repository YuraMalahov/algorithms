<?php

namespace Graph;

use Base\Stack;
use Iterator;

/**
 * Class DirectedCircle
 * @package Graph
 */
class DirectedCircle
{
    /**
     * @var boolean[]
     */
    private $marked = [];

    /**
     * @var int[]
     */
    private $edgeTo = [];

    /**
     * @var Stack
     */
    private $circle = null;

    /**
     * @var boolean[]
     */
    private $onStack = [];

    /**
     * DirectedCircle constructor.
     * @param Digraph $digraph
     */
    public function __construct(Digraph $digraph)
    {
        for ($i = 0, $count = $digraph->vertices(); $i < $count; $i++) {
            if (isset($this->marked[$i])) {
                continue;
            }
            $this->depthSearch($digraph, $i);
        }
    }

    /**
     * @return bool
     */
    public function hasCircle(): bool
    {
        return !is_null($this->circle);
    }

    /**
     * @return Iterator
     */
    public function circle(): Iterator
    {
        return $this->circle;
    }

    /**
     * @param Digraph $graph
     * @param int $vertex
     */
    private function depthSearch(Digraph $graph, int $vertex)
    {
        $this->onStack[$vertex] = true;
        $this->marked[$vertex] = true;

        foreach ($graph->adjacent($vertex) as $item) {
            if ($this->hasCircle()) {
                return;
            } else if (!isset($this->marked[$item])) {
                $this->edgeTo[$item] = $vertex;
                $this->depthSearch($graph, $item);
            } else if ($this->onStack[$item]) {
                $this->circle = new Stack();
                for ($x = $vertex; $x !== $item; $x = $this->edgeTo[$x]) {
                    $this->circle->add($x);
                }
                $this->circle->add($vertex);
                $this->circle->add($item);
            }
        }
        $this->onStack[$vertex] = false;
    }
}