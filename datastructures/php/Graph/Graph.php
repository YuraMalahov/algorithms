<?php

namespace Graph;

use Base\Bag;
use Iterator;

/**
 * Class Graph
 * @package Graph
 */
class Graph
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
     * Graph constructor.
     * @param int $vertices
     */
    public function __construct(int $vertices)
    {
        $this->vertices = $vertices;
        for ($i = 0; $i < $vertices; $i++) {
            $this->adj[$i] = new Bag();
        }
    }

    /**
     * Add edge
     * @param int $firstVertex
     * @param int $secondVertex
     */
    public function addEdge(int $firstVertex, int $secondVertex)
    {
        $this->adj[$firstVertex]->add($secondVertex);
        $this->adj[$secondVertex]->add($firstVertex);
        $this->edges++;
    }

    /**
     * Count of vertexes
     * @return int
     */
    public function vertices(): int
    {
        return $this->vertices;
    }

    /**
     * Count of edges
     * @return int
     */
    public function edges(): int
    {
        return $this->edges;
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
    public function __toString()
    {
        $string = "vertexes: {$this->vertices()}, edges: {$this->edges()} \n";
        for ($i = 0; $i < $this->vertices(); $i++) {
            $string .= "$i: ";
            foreach ($this->adjacent($i) as $adjVertex) {
                $string .= "$adjVertex, ";
            }
            $string .="\n";
        }

        return $string;
    }

    /**
     * @param int $vertex
     * @return int
     */
    public function degree(int $vertex): int
    {
        $degree = 0;
        foreach ($this->adjacent($vertex) as $adjVertex) {
            $degree++;
        }

        return $degree;
    }

    /**
     * @return int
     */
    public function maxDegree(): int
    {
        $max = 0;
        for ($i = 0; $i < $this->vertices(); $i++) {
            $degree = $this->degree($i);
            if ($max < $degree) {
                $max = $degree;
            }
        }

        return $max;
    }

    /**
     * @return int
     */
    public function avgDegree(): int
    {
        return (int) 2 * $this->edges() / $this->vertices();
    }

    /**
     * @return int
     */
    public function numberOfSelfLoops(): int
    {
        $count = 0;
        for ($i = 0; $i < $this->vertices(); $i++) {
            foreach ($this->adjacent($i) as $vertex) {
                if ($i === $vertex) {
                    $count++;
                }
            }
        }

        return $count / 2;
    }
}