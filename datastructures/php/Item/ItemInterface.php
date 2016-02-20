<?php

namespace Item;

/**
 * Interface ItemInterface
 * @package Item
 */
interface ItemInterface
{
    /**
     * @return string
     */
    function getKey(): string;

    /**
     * @return mixed
     */
    function getValue();
}