<?php

namespace Graph;

use Base\Bag;
use Iterator;

/**
 * Class Digraph
 * @package Graph
 */
class Digraph
{
    /**
     * @var int
     */
    private $vertices;

    /**
     * @var int
     */
    private $edges;

    /**
     * @var Bag[]
     */
    private $adj;

    /**
     * Digraph constructor.
     * @param int $vertices
     */
    public function __construct(int $vertices)
    {
        for ($i = 0; $i < $vertices; $i++) {
            $this->adj[$i] = new Bag();
        }
        $this->vertices = $vertices;
        $this->edges = 0;
    }

    /**
     * @return int
     */
    public function vertices()
    {
        return $this->vertices;
    }

    /**
     * @return int
     */
    public function edges()
    {
        return $this->edges;
    }

    /**
     * @param int $from
     * @param int $to
     */
    public function addEdge(int $from, int $to)
    {
        $this->adj[$from]->add($to);
        $this->edges++;
    }

    /**
     * @return Digraph
     */
    public function reverse(): Digraph
    {
        $graph = new Digraph($this->vertices);

        foreach ($this->adj as $index => $bag) {
            foreach ($bag as $item) {
                $graph->addEdge($item, $index);
            }
        }

        return $graph;
    }

    /**
     * @param int $vertex
     * @return bool
     */
    public function vertexExist(int $vertex): bool
    {
        return isset($this->adj[$vertex]);
    }

    /**
     * Adjacent vertexes
     * @param int $vertex
     * @return Iterator
     */
    public function adjacent(int $vertex): Iterator
    {
        return $this->adj[$vertex];
    }

    /**
     * @return string
     */
    public function __toString(): string
    {
        $view = "";

        foreach ($this->adj as $index => $bag) {
            $view .= "$index: ";
            foreach ($bag as $item) {
                $view .= "$item; ";
            }
            $view .= "\n";
        }

        return $view;
    }
}