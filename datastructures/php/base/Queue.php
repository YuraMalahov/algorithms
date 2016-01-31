<?php

/**
 * Class Queue
 */
class Queue
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
     * @var Item
     */
    private $last = null;

    /**
     * Add item into queue
     *
     * @param $value
     */
    public function add($value)
    {
        $item = new Item($value);
        $this->length++;

        if (!$this->current) {
            $this->current = $item;
            $this->last = $item;
        } else {
            $this->last->setNext($item);
            $this->last = $item;
        }
    }

    /**
     * Get next item from queue
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
     * Get queue length
     *
     * @return int
     */
    public function length(): int
    {
        return $this->length;
    }
}