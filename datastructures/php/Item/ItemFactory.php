<?php

namespace Item;

/**
 * Class ItemFactory
 * @package Item
 */
class ItemFactory
{
    /**
     * @param $value
     * @param string $key
     * @return Item
     */
    public function create(string $key, $value)
    {
        return new Item($key, $value);
    }
}