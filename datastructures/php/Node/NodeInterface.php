<?php

namespace Node;

/**
 * Interface NodeInterface
 * @package Node
 */
interface NodeInterface
{
    /**
     * Get item
     *
     * @return mixed
     */
    function getItem();

    /**
     * Set right link
     *
     * @param NodeInterface $node
     */
    function setRight(NodeInterface $node);

    /**
     * Get right link
     *
     * @return null|NodeInterface
     */
    function getRight();

    /**
     * Unset right link
     */
    function unsetRight();

    /**
     * Set left link
     *
     * @param NodeInterface $node
     */
    function setLeft(NodeInterface $node);

    /**
     * Get left link
     *
     * @return null|NodeInterface
     */
    function getLeft();

    /**
     * Unset left link
     */
    function unsetLeft();
}