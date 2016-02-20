<?php

namespace Node;

/**
 * Class NodeFactory
 * @package Node
 */
class NodeFactory
{
    /**
     * @param $value
     * @return NodeInterface
     */
    public function create($value): NodeInterface
    {
        return new Node($value);
    }
}