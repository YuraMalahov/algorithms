<?php

namespace DataStructures;

class HashTable
{
    /**
     * @var Collection[]
     */
    private $table = [];

    private $length = 0;

    public function set(string $key, $value)
    {
        // TODO: fix tide coupling "Item", "Collection", "Node"
        $item = new Item($key, $value);
        $index = $item->getHashCode();

        if (!isset($this->table[$index])) {
            $this->table[$index] = new Collection();
        }
        $this->table[$index]->add(new Node($item));
        $this->length++;
    }

    public function get(string $key)
    {
        $item = new Item($key, null);
        $index = $item->getHashCode();

        if (!isset($this->table[$index])) {
            return null;
        }

        foreach ($this->table[$index] as $node) {
            if ($node->getItem()->getKey() === $key) {
                return $node->getItem()->getValue();
            }
        }

        return null;
    }

    public function removeByKey(string $key)
    {

    }

    public function length()
    {
        return $this->length;
    }
}

