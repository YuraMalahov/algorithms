<?php

namespace DataStructures;

interface ItemInterface
{
    function getKey(): string;

    function getValue();
}