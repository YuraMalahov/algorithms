<?php

namespace Base;

use Item\ItemFactory;

/**
 * Class HashTable
 * @package Base
 */
class HashTable extends AbstractBaseStructure
{
    /**
     * @var Collection[]
     */
    private $table = [];

    /**
     * @var ItemFactory
     */
    private $itemFactory;

    /**
     * @var CollectionFactory
     */
    private $collectionFactory;

    /**
     * HashTable constructor.
     */
    public function __construct()
    {
        $this->itemFactory = new ItemFactory();
        $this->collectionFactory = new CollectionFactory();
    }

    /**
     * @param string $key
     * @param $value
     */
    public function set(string $key, $value)
    {
        $index = $this->createIndex($key);

        if (!isset($this->table[$index])) {
            $this->table[$index] = $this->collectionFactory->create();
        }
        $this->table[$index]->add($key, $value);
        $this->length++;
    }

    /**
     * @param string $key
     * @return mixed
     */
    public function get(string $key)
    {
        $index = $this->getIndexByKey($key);
        if (!$index) {
            return null;
        }

        return $this->table[$index]->findByKey($key);
    }

    /**
     * @param string $key
     */
    public function removeByKey(string $key)
    {
        $index = $this->getIndexByKey($key);
        if (!$index) {
            return;
        }

        $this->table[$index]->removeByKey($key);
    }

    /**
     * @param string $key
     * @return int|null
     */
    private function getIndexByKey(string $key)
    {
        $index = $this->createIndex($key);
        if (!isset($this->table[$index])) {
            return null;
        }

        return $index;
    }

    /**
     * @param string $key
     * @return int
     */
    private function createIndex(string $key): int
    {
        return $this->itemFactory->create($key, null)->getHashCode();
    }
}

