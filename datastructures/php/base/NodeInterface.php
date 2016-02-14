<?php

namespace DataStructures;

interface NodeInterface
{
    function getItem(): ItemInterface;

    function setRight(NodeInterface $node);

    function getRight();

    function unsetRight();

    function setLeft(NodeInterface $node);

    function getLeft();

    function unsetLeft();
}