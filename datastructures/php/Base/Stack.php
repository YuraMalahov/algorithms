<?php

namespace Base;

use Iterator;
use Node\NodeInterface;

/**
 * Class Stack
 * @package Base
 */
class Stack extends AbstractBaseStructure implements Iterator
{
    /**
     * @var null|NodeInterface
     */
    private $current = null;

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
        } else {
            $node->setRight($this->current);
            $this->current = $node;
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