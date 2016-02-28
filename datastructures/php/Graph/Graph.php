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
    private $vertexes;

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
     * @param int $vertexes
     */
    public function __construct(int $vertexes)
    {
        $this->vertexes = $vertexes;
        for ($i = 0; $i < $vertexes; $i++) {
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
    public function vertexes(): int
    {
        return $this->vertexes;
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
        $string = "vertexes: {$this->vertexes()}, edges: {$this->edges()} \n";
        for ($i = 0; $i < $this->vertexes(); $i++) {
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
        for ($i = 0; $i < $this->vertexes(); $i++) {
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
        return 2 * $this->edges() / $this->vertexes();
    }

    /**
     * @return int
     */
    public function numberOfSelfLoops(): int
    {
        $count = 0;
        for ($i = 0; $i < $this->vertexes(); $i++) {
            foreach ($this->adjacent($i) as $vertex) {
                if ($i === $vertex) {
                    $count++;
                }
            }
        }

        return $count / 2;
    }
}