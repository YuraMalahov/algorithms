<?php

namespace Base;

/**
 * Class CollectionFactory
 * @package Base
 */
class CollectionFactory
{
    /**
     * @return Collection
     */
    public function create(): Collection
    {
        return new Collection();
    }
}