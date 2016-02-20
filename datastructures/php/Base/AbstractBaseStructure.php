<?php

namespace Base;

use Node\NodeFactory;

/**
 * Class AbstractBaseStructure
 * @package Base
 */
abstract class AbstractBaseStructure
{
    /**
     * @var NodeFactory
     */
    protected $nodeFactory;

    /**
     * @var int
     */
    protected $length = 0;

    /**
     * Bag constructor.
     */
    public function __construct()
    {
        $this->nodeFactory = new NodeFactory();
    }

    /**
     * Get length
     *
     * @return int
     */
    public function length(): int
    {
        return $this->length;
    }
}