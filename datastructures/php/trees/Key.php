<?php

namespace Tree;

/**
 * Class Key
 * @package Tree
 */
class Key implements KeyInterface
{
    /**
     * @var string
     */
    private $key;

    /**
     * Key value
     * @var int
     */
    private $val;

    public function __construct(string $key = '')
    {
        $this->key = $key;
        // compute key value
        $this->val = array_reduce(str_split($key), function($res, $a) {
            return $res + ord($a);
        }, 0);
    }

    /**
     * Get key
     */
    public function getKey(): string
    {
        return $this->key;
    }

    /**
     * Get key value
     */
    public function getVal(): int
    {
        return $this->val;
    }

    public function compare(KeyInterface $key): int
    {
        return $this->val <=> $key->getVal();
    }
}