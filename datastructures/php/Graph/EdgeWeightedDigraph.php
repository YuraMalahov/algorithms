<?php

namespace Graph;

use Base\Bag;

/**
 * Class EdgeWeightedDigraph
 * @package Graph
 */
class EdgeWeightedDigraph implements \Iterator
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
    private $adj = [];

    /**
     * @var int
     */
    private $currentIndex;

    /**
     * EdgeWeightedDigraph constructor.
     * @param int $vertices
     */
    public function __construct(int $vertices)
    {
        $this->vertices = $vertices;
        $this->edges = 0;

        for ($i = 0; $i < $vertices; $i++) {
            $this->adj[$i] = new Bag();
        }

        $this->current = $this->adj[0];
        $this->currentIndex = 0;
    }

    /**
     * @return int
     */
    public function getVertices(): int
    {
        return $this->vertices;
    }

    /**
     * @return int
     */
    public function getEdges(): int
    {
        return $this->edges;
    }

    /**
     * @param DirectEdge $edge
     */
    public function addEdge(DirectEdge $edge)
    {
        $this->adj[$edge->from()]->add($edge);
        $this->edges++;
    }

    /**
     * Return the current element
     * @link http://php.net/manual/en/iterator.current.php
     * @return mixed Can return any type.
     * @since 5.0.0
     */
    public function current()
    {
        $this->adj[$this->currentIndex]->current();
    }

    /**
     * Move forward to next element
     * @link http://php.net/manual/en/iterator.next.php
     * @return void Any returned value is ignored.
     * @since 5.0.0
     */
    public function next()
    {
        $this->adj[$this->currentIndex]->next();
        if (!$this->valid() && $this->currentIndex <= $this->vertices) {
            $this->currentIndex++;
        }
    }

    /**
     * Return the key of the current element
     * @link http://php.net/manual/en/iterator.key.php
     * @return mixed scalar on success, or null on failure.
     * @since 5.0.0
     */
    public function key()
    {
        if ($this->valid()) {
            return  $this->currentIndex . ':' . $this->adj[$this->currentIndex]->key();
        }

        return null;
    }

    /**
     * Checks if current position is valid
     * @link http://php.net/manual/en/iterator.valid.php
     * @return boolean The return value will be casted to boolean and then evaluated.
     * Returns true on success or false on failure.
     * @since 5.0.0
     */
    public function valid()
    {
        return $this->adj[$this->currentIndex]->valid();
    }

    /**
     * Rewind the Iterator to the first element
     * @link http://php.net/manual/en/iterator.rewind.php
     * @return void Any returned value is ignored.
     * @since 5.0.0
     */
    public function rewind()
    {
        $this->currentIndex = 0;
    }
}