<?php

namespace Item;

/**
 * Class Item
 * @package Item
 */
class Item implements ItemInterface, HashInterface, CompareInterface
{
    /**
     *
     */
    const DIVIDER = 512;

    /**
     * @var string
     */
    private $key;

    /**
     * @var mixed
     */
    private $value;

    /**
     * @var int
     */
    private $hashCode;

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
     * @return string
     */
    public function getKey(): string
    {
        return $this->key;
    }

    /**
     * @return mixed
     */
    public function getValue()
    {
        return $this->value;
    }

    /**
     * @return int
     */
    public function getHashCode(): int
    {
        return $this->hashCode;
    }

    /**
     * @param CompareInterface $item
     * @return int
     */
    public function compare(CompareInterface $item): int
    {
        return $this->value <=> $item->getValue();
    }

    /**
     * @param string $key
     * @return int
     */
    private function createHashCode(string $key): int
    {
        return array_reduce(str_split($key), function ($prev, $current) {
            return $prev + ord($current);
        }, 0);
    }
}