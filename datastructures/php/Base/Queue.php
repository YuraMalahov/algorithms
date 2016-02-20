<?php

namespace Base;

use Iterator;
use Node\NodeInterface;

/**
 * Class Queue
 * @package Base
 */
class Queue extends AbstractBaseStructure implements Iterator
{
    /**
     * @var null|NodeInterface
     */
    private $current = null;

    /**
     * @var null|NodeInterface
     */
    private $last = null;

    /**
     * Add value
     *
     * @param $value
     * @return mixed
     */
    public function add($value)
    {
        $node = $this->nodeFactory->create($value);
        $this->length++;

        if (!$this->current) {
            $this->current = $node;
            $this->last = $node;
        } else {
            $this->last->setRight($node);
            $this->last = $node;
        }
    }

    /**
     * @inheritdoc
     */
    public function rewind() {}

    /**
     * @inheritdoc
     */
    public function current()
    {
        return $this->current->getItem();
    }

    /**
     * @inheritdoc
     */
    public function key()
    {
        if (!$this->valid()) {
            return null;
        }

        return $this->current->getItem();
    }

    /**
     * @inheritdoc
     */
    public function next()
    {
        if (!$this->valid()) {
            $this->last = null;
        }

        $this->length--;
        $this->current = $this->current->getRight();
    }

    /**
     * @inheritdoc
     */
    public function valid()
    {
        return isset($this->current);
    }
}