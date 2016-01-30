<?php

namespace Tree;

/**
 * Interface KeyInterface
 * @package Tree
 */
interface KeyInterface
{
    function getKey();

    function getVal(): int;

    function compare(KeyInterface $key): int;
}