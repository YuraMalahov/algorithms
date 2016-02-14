<?php

namespace DataStructures;

use Iterator;

class Stack implements BaseStructureInterface, Iterator
{
    private $length = 0;

    /**
     * @var NodeInterface
     */
    private $current = null;


    public function add(NodeInterface $node)
    {
        $this->length++;

        if (!$this->current) {
            $this->current = $node;
        } else {
            $node->setRight($this->current);
            $this->current = $node;
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
        $this->length--;
        $this->current = $this->current->getRight();
    }

    public function valid()
    {
        return isset($this->current);
    }
}