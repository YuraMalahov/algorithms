<?php

namespace DataStructures;

interface BaseStructureInterface
{
    function add(NodeInterface $node);

    function length(): int;

    function current();

    function next();
}