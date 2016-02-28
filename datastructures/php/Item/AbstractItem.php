<?php

namespace Item;

/**
 * Class AbstractItem
 * @package Item
 */
abstract class AbstractItem implements
    ItemInterface,
    HashInterface,
    CompareInterface
{
    /**
     * @var string
     */
    protected $key;

    /**
     * @var mixed
     */
    protected $value;

    /**
     * @var int
     */
    protected $hashCode;

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
    protected abstract function createHashCode(string $key): int;
}