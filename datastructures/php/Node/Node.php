<?php

namespace Node;

/**
 * Class Node
 * @package Node
 */
class Node implements NodeInterface
{
    /**
     * @var mixed
     */
    private $item = null;

    /**
     * @var null|NodeInterface
     */
    private $right = null;

    /**
     * @var null|NodeInterface
     */
    private $left = null;

    /**
     * Node constructor.
     * @param $item
     */
    public function __construct($item)
    {
        $this->item = $item;
    }

    /**
     * @inheritdoc
     */
    public function getItem()
    {
        return $this->item;
    }

    /**
     * @inheritdoc
     */
    public function setRight(NodeInterface $node)
    {
        $this->right = $node;
    }

    /**
     * @inheritdoc
     */
    public function getRight()
    {
        return $this->right;
    }

    /**
     * @inheritdoc
     */
    public function unsetRight()
    {
        $this->right = null;
    }

    /**
     * @inheritdoc
     */
    public function setLeft(NodeInterface $node)
    {
        $this->left = $node;
    }

    /**
     * @inheritdoc
     */
    public function getLeft()
    {
        return $this->left;
    }

    /**
     * @inheritdoc
     */
    public function unsetLeft()
    {
        $this->left = null;
    }
}
