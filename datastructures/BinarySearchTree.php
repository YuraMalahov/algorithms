<?php

class Node
{
    private $key;

    private $value;

    private $left;

    private $right;

    private $length;

    public function __construct($key, $value, int $length)
    {
        $this->key = $key;
        $this->value = $value;
        $this->length = $length;
        $this->left = null;
        $this->right = null;
    }

    public function getKey()
    {
        return $this->key;
    }

    public function setKey($key)
    {
        $this->key = $key;
    }

    public function getValue()
    {
        return $this->value;
    }

    public function setValue($value)
    {
        $this->value = $value;
    }

    public function getLeft()
    {
        return $this->left;
    }

    public function setLeft(Node $left)
    {
        $this->left = $left;
    }

    public function getRight()
    {
        return $this->right;
    }

    public function setRight(Node $right)
    {
        $this->right = $right;
    }

    public function getLength(): int
    {
        return $this->length;
    }

    public function setLength(int $length)
    {
        $this->length = $length;
    }
}

class BinarySearchTree
{
    private $root;

    public function __construct(Node $root)
    {
        $this->root = $root;
    }

    public function length()
    {
        return $this->root->getLength();
    }

    public static function size(Node $node)
    {
        return $node->getLength();
    }

    public function get($key)
    {
        return $this->_get($this->root, $key);
    }

    private function _get($node, $key)
    {
        if (!$node) {
            return null;
        }

        if ($node->getKey() > $key) {
            return $this->_get($node->getLeft(), $key);
        } else if ($node->getKey() < $key) {
            return $this->_get($node->getRight(), $key);
        }

        return $node->getValue();
    }

    public function put($key, $value)
    {
        $this->root = $this->_put($this->root, $key, $value);
    }

    private function _put($node, $key, $value)
    {
        if (!$node) {
            return new Node($key, $value, 1);
        }

        if ($node->getKey() > $key) {
            $node->setLeft($this->_put($node->getLeft(), $key, $value));
        } else if ($node->getKey() < $key) {
            $node->setRight($this->_put($node->getRight(), $key, $value));
        } else {
            $node->setValue($value);
        }

        $leftSize = $node->getLeft() ? $node->getLeft()->getLength() : 0;
        $rightSize = $node->getRight() ? $node->getRight()->getLength() : 0;
        $node->setLength($leftSize + $rightSize + 1);

        return $node;
    }
}

$bst = new BinarySearchTree(new Node(23, 'm', 1));

echo $bst->length() . "\n";
echo $bst->get(23) . "\n";

$bst->put(99, 'a');

echo $bst->length() . "\n";
echo $bst->get(99) . "\n";
