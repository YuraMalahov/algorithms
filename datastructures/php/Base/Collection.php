<?php

namespace Base;

use Iterator;
use Item\ItemFactory;
use Node\NodeInterface;

/**
 * Class Collection
 * @package Base
 */
class Collection extends AbstractBaseStructure implements Iterator
{
    /**
     * @var null|NodeInterface
     */
    private $first = null;

    /**
     * @var null|NodeInterface
     */
    private $current = null;

    /**
     * @var null|NodeInterface
     */
    private $last = null;

    /**
     * @var ItemFactory
     */
    private $itemFactory;

    /**
     * @inheritdoc
     */
    public function __construct()
    {
        parent::__construct();
        $this->itemFactory = new ItemFactory();
    }

    /**
     * Add value
     *
     * @param string $key
     * @param $value
     * @return mixed
     */
    public function add(string $key, $value)
    {
        $item = $this->itemFactory->create($key, $value);
        $node = $this->nodeFactory->create($item);
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

    /**
     * Remove node by key
     *
     * @param string $key
     */
    public function removeByKey(string $key)
    {
        if (null !== $this->findByKey($key)) {
            $this->removeNode($this->current);
        }
    }

    /**
     * Find by key
     *
     * @param string $key
     * @return mixed|null
     */
    public function findByKey(string $key)
    {
        $this->rewind();
        while ($this->valid()) {
            if ($this->current->getItem()->getKey() !== $key) {
                $this->next();
                continue;
            }
            return $this->current();
        }

        return null;
    }

    /**
     * Remove node
     *
     * @param NodeInterface $node
     */
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

    /**
     * Get first
     *
     * @return mixed
     */
    public function getFirst()
    {
        if (null === $this->first) {
            return null;
        }

        return $this->first->getItem()->getValue();
    }

    /**
     * Get last
     *
     * @return mixed
     */
    public function getLast()
    {
        if (null === $this->last) {
            return null;
        }

        return $this->last->getItem()->getValue();
    }

    /**
     * Get first key
     *
     * @return null|string
     */
    public function getFirstKey()
    {
        if (null === $this->first) {
            return null;
        }

        return $this->first->getItem()->getKey();
    }

    /**
     * Get last key
     *
     * @return null|string
     */
    public function getLastKey()
    {
        if (null === $this->last) {
            return null;
        }

        return $this->last->getItem()->getKey();
    }

    /**
     * @inheritdoc
     */
    public function rewind()
    {
        $this->current = $this->first;
    }

    /**
     * @inheritdoc
     */
    public function current()
    {
        return $this->current->getItem()->getValue();
    }

    /**
     * @inheritdoc
     */
    public function key()
    {
        if (!$this->valid()) {
            return null;
        }

        return $this->current->getItem()->getKey();
    }

    /**
     * @inheritdoc
     */
    public function next()
    {
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