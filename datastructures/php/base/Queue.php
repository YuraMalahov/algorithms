<?php

namespace DataStructures;

use Iterator;

class Queue implements BaseStructureInterface, Iterator
{
    /**
     * @var int
     */
    private $length = 0;

    /**
     * @var NodeInterface
     */
    private $current = null;

    /**
     * @var NodeInterface
     */
    private $last = null;


    public function add(NodeInterface $node)
    {
        $this->length++;

        if (!$this->current) {
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

    public function rewind() {}

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
        if (!$this->valid()) {
            $this->last = null;
        }

        $this->length--;
        $this->current = $this->current->getRight();
    }

    public function valid()
    {
        return isset($this->current);
    }
}