<?php

namespace Item;

/**
 * Interface CompareInterface
 * @package Item
 */
interface CompareInterface
{
    /**
     * @return mixed
     */
    function getValue();

    /**
     * @param CompareInterface $item
     * @return int
     */
    function compare(CompareInterface $item): int;
}