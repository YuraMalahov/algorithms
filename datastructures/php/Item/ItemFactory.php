<?php

namespace Item;

/**
 * Class ItemFactory
 * @package Item
 */
class ItemFactory
{
    /**
     * @param string $key
     * @param $value
     * @return AbstractItem
     */
    public function create(string $key, $value): AbstractItem
    {
        return new Item($key, $value);
    }
}