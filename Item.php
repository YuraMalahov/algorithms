<?php

/**
 * Class Item
 */
class Item
{
    /**
     * @var mixed
     */
    private $value = null;

    /**
     * @var Item
     */
    private $next = null;

    /**
     * Item constructor.
     * @param mixed $value
     */
    public function __construct($value)
    {
        $this->value = $value;
    }

    /**
     * Get item value
     *
     * @return mixed
     */
    public function value()
    {
        return $this->value;
    }

    /**
     * Set link to next item
     *
     * @param Item $item
     */
    public function setNext(Item $item)
    {
        $this->next = $item;
    }

    /**
     * Get next item
     *
     * @return Item
     */
    public function next(): Item
    {
        return $this->next;
    }

    /**
     * Check if has link to next item
     *
     * @return bool
     */
    public function hasNext(): bool
    {
        return isset($this->next);
    }
}