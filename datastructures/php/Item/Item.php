<?php

namespace Item;

/**
 * Class Item
 * @package Item
 */
class Item extends AbstractItem
{
    /**
     *
     */
    const DIVIDER = 512;

    /**
     * Item constructor.
     * @param string $key
     * @param $value
     */
    public function __construct(string $key, $value)
    {
        $this->key = $key;
        $this->value = $value;
        $this->hashCode = $this->createHashCode($key) % self::DIVIDER;
    }

    /**
     * @inheritdoc
     */
    protected function createHashCode(string $key): int
    {
        return array_reduce(str_split($key), function ($prev, $current) {
            return $prev + ord($current);
        }, 0);
    }
}