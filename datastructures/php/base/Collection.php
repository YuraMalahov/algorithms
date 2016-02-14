<?php

namespace DataStructures;

use Iterator;

class Collection implements BaseStructureInterface, Iterator
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
            $node->setLeft($this->last);
            $this->last = $node;
        }
    }

    public function removeByKey(string $key)
    {
        $this->rewind();
        while ($this->valid()) {
            if ($this->current->getItem()->getKey() !== $key) {
                $this->next();
                continue;
            }
            $this->removeNode($this->current);
        }
    }

    private function removeNode(NodeInterface $node)
    {
        if ($this->length === 0) {
            return;
        }

        if (!$node->getLeft() && !$node->getRight()) {
            $this->current = $this->first = $this->last = null;
        } else if (!$node->getLeft()) {
            $this->first = $node->getRight();
            $this->first->unsetLeft();
            $this->current = $node->getRight();
        } else if (!$node->getRight()) {
            $this->last = $node->getLeft();
            $this->last->unsetRight();
            $this->current = null;
        } else {
            $node->getLeft()->setRight($node->getRight());
            $node->getRight()->setLeft($node->getLeft());
            $this->current = $node->getRight();
        }

        $node = null;
        $this->length--;
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