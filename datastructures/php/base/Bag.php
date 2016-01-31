<?php

/**
 * Class Bag
 */
class Bag
{
    /**
     * @var Item
     */
    private $item = null;

    /**
     * @var Item
     */
    private $current = null;

    /**
     * @var int
     */
    private $length = 0;

    /**
     * Add into bag
     *
     * @param $value
     */
    public function add($value)
    {
        $item = new Item($value);
        $this->length++;

        if (!$this->item) {
            $this->item = $item;
        } else {
            $item->setNext($this->item);
            $this->item = $item;
        }
    }

    /**
     * Bag items count
     *
     * @return int
     */
    public function length(): int
    {
        return $this->length;
    }

    /**
     * Next bag item
     *
     * @return mixed
     */
    public function next()
    {
        if (!$this->current) {
            $this->current = $this->item;
            return $this->current->value();
        }

        if (!$this->current->hasNext()) {
            return null;
        }

        $this->current = $this->current->next();

        return $this->current->value();
    }

    /**
     * Reset bag iteration
     */
    public function reset()
    {
        $this->current = null;
    }
}