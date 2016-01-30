<?php

declare(strict_types=1);

require 'Item.php';

/**
 * Class Stack
 */
class Stack
{
    /**
     * @var int
     */
    private $length = 0;

    /**
     * @var Item
     */
    private $current = null;

    /**
     * Add item into stack
     *
     * @param $value
     */
    public function add($value)
    {
        $item = new Item($value);
        $this->length++;

        if (!$this->current) {
            $this->current = $item;
        } else {
            $item->setNext($this->current);
            $this->current = $item;
        }
    }

    /**
     * Get next item from stack
     *
     * @return mixed|null
     */
    public function next()
    {
        if (!$this->current) {
            return null;
        }

        $this->length--;
        $current = $this->current;

        if (!$this->current->hasNext()) {
            $this->current = null;
        } else {
            $this->current = $this->current->next();
        }

        return $current->value();
    }

    /**
     * Get stack length
     *
     * @return int
     */
    public function length(): int
    {
        return $this->length;
    }
}