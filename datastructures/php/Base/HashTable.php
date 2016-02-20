<?php

namespace Base;

use Iterator;
use Item\ItemFactory;

/**
 * Class HashTable
 * @package Base
 */
class HashTable extends AbstractBaseStructure implements Iterator
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

    private $currentKey;

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

    public function get(string $key)
    {
        $index = $this->getIndexByKey($key);
        if (!$index) {
            return null;
        }

        return $this->table[$index]->findByKey($key);
    }

    public function removeByKey(string $key)
    {
        $index = $this->getIndexByKey($key);
        if (!$index) {
            return null;
        }

        $this->table[$index]->removeByKey($key);
    }

    private function getIndexByKey(string $key)
    {
        $index = $this->createIndex($key);
        if (!isset($this->table[$index])) {
            return null;
        }

        return $index;
    }

    private function createIndex(string $key): int
    {
        return $this->itemFactory->create($key, null)->getHashCode();
    }


    /**
     * @inheritdoc
     */
    public function current()
    {
        // TODO: Implement current() method.
    }

    /**
     * @inheritdoc
     */
    public function next()
    {
        // TODO: Implement next() method.
    }

    /**
     * @inheritdoc
     */
    public function key()
    {
        // TODO: Implement key() method.
    }

    /**
     * @inheritdoc
     */
    public function valid()
    {
        // TODO: Implement valid() method.
    }

    /**
     * @inheritdoc
     */
    public function rewind()
    {
        // TODO: Implement rewind() method.
    }
}

