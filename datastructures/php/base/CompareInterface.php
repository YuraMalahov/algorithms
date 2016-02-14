<?php

namespace DataStructures;

interface CompareInterface
{
    function getValue();

    function compare(CompareInterface $item): int;
}