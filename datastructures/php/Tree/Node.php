<?php

namespace Tree;

use Key\KeyInterface;
use Key\Key;

/**
 * Class Node
 * @package Tree
 */
class Node
{
    /**
     * Red link
     */
    const RED = true;

    /**
     * Black link
     */
    const BLACK = false;

    /**
     * @var Key
     */
    private $key;

    /**
     * @var mixed
     */
    private $value;

    /**
     * Left link
     * @var null|Node
     */
    private $left = null;

    /**
     * Right link
     * @var null|Node
     */
    private $right = null;

    /**
     * Node length
     * @var int
     */
    private $length = 0;

    /**
     * Node color
     * @var bool
     */
    private $color = false;

    /**
     * Node constructor.
     * @param KeyInterface $key
     * @param mixed $value
     * @param $color
     */
    public function __construct(KeyInterface $key, $value, bool $color = false)
    {
        $this->key = $key;
        $this->value = $value;
        $this->length = $key->getVal() ? 1 : 0;
        $this->color = $color;
    }

    /**
     * Get key
     * @return KeyInterface
     */
    public function getKey(): KeyInterface
    {
        return $this->key;
    }

    /**
     * Set key
     * @param KeyInterface $key
     */
    public function setKey(KeyInterface $key)
    {
        $this->key = $key;
    }

    /**
     * Get value
     * @return mixed
     */
    public function getValue()
    {
        return $this->value;
    }

    public function setValue($value)
    {
        $this->value = $value;
    }

    /**
     * Get left link
     * @return Node
     */
    public function getLeft(): Node
    {
        if ($this->left === null) {
            $class = self::class;
            $this->left = new $class(new Key(), null);
        }

        return $this->left;
    }

    /**
     * Set left link
     * @param Node $left
     */
    public function setLeft(Node $left)
    {
        $this->left = $left;
        $this->updateLength();
    }

    /**
     * Get right link
     * @return Node
     */
    public function getRight(): Node
    {
        if ($this->right === null) {
            $class = self::class;
            $this->right = new $class(new Key(), null);
        }

        return $this->right;
    }

    /**
     * Set right link
     * @param Node $right
     */
    public function setRight(Node $right)
    {
        $this->right = $right;
        $this->updateLength();
    }

    /**
     * Get node length
     */
    public function getLength(): int
    {
        return $this->length;
    }

    /**
     * Check if node is red
     */
    public function isRed(): bool
    {
        return $this->color === self::RED;
    }

    /**
     * Check if node
     */
    public function isEmpty(): bool
    {
        return !$this->getLeft()->getLength() && !$this->getRight()->getLength();
    }

    public function getColor(): bool
    {
        return $this->color;
    }

    /**
     * @param $color
     */
    public function setColor(bool $color)
    {
        $this->color = $color;
    }

    /**
     * Update node length
     */
    private function updateLength()
    {
        $this->length = $this->getLeft()->getLength() + $this->getRight()->getLength() + 1;
    }
}

