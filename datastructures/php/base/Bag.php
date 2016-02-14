<?php

namespace DataStructures;

use Iterator;

/**
 * Class Bag
 * @package DataStructures
 */
class Bag implements BaseStructureInterface, Iterator
{
    /**
     * @var NodeInterface
     */
    private $first = null;

    /**
     * @var NodeInterface
     */
    private $current = null;

    /**
     * @var NodeInterface
     */
    private $last = null;

    private $length = 0;

    public function add(NodeInterface $node)
    {
        $this->length++;

        if (!$this->first) {
            $this->first = $node;
            $this->current = $node;
            $this->last = $node;
        } else {
            $this->last->setRight($node);
            $this->last = $node;
        }
    }

    public function length(): int
    {
        return $this->length;
    }

    public function rewind()
    {
        $this->current = $this->first;
    }

    public function current()
    {
        return $this->current;
    }

    public function key()
    {
        if (!$this->valid()) {
            return null;
        }

        return $this->current->getItem()->getKey();
    }

    public function next()
    {
        $this->current = $this->current->getRight();
    }

    public function valid()
    {
        return isset($this->current);
    }
}