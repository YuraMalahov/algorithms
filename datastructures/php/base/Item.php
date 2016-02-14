<?php

namespace DataStructures;

class Item implements ItemInterface, HashInterface, CompareInterface
{
    const DIVIDER = 512;

    private $key = null;

    private $value = null;

    private $hashCode = null;

    public function __construct(string $key, $value)
    {
        $this->key = $key;
        $this->value = $value;
        $this->hashCode = $this->createHashCode($key) % self::DIVIDER;
    }

    public function getKey(): string
    {
        return $this->key;
    }

    public function getValue()
    {
        return $this->value;
    }

    public function getHashCode(): int
    {
        return $this->hashCode;
    }

    public function compare(CompareInterface $item): int
    {
        return $this->value <=> $item->getValue();
    }

    private function createHashCode(string $key): int
    {
        return array_reduce(str_split($key), function ($prev, $current) {
            return $prev + ord($current);
        }, 0);
    }
}