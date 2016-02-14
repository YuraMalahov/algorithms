<?php

namespace DataStructures;

class Node implements NodeInterface
{
    private $item = null;

    private $right = null;

    private $left = null;

    public function __construct(ItemInterface $item)
    {
        $this->item = $item;
    }

    public function getItem(): ItemInterface
    {
        return $this->item;
    }

    public function setRight(NodeInterface $node)
    {
        $this->right = $node;
    }

    public function getRight()
    {
        return $this->right;
    }

    public function unsetRight()
    {
        $this->right = null;
    }

    public function setLeft(NodeInterface $node)
    {
        $this->left = $node;
    }

    public function getLeft()
    {
        return $this->left;
    }

    public function unsetLeft()
    {
        $this->left = null;
    }
}
