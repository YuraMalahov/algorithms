<?php

namespace Graph;

/**
 * Class DirectEdge
 * @package Graph
 */
class DirectEdge
{
    /**
     * @var int
     */
    private $from;

    /**
     * @var int
     */
    private $to;

    /**
     * @var float
     */
    private $weight;

    /**
     * DirectEdge constructor.
     * @param int $from
     * @param int $to
     * @param float $weight
     */
    public function __construct(int $from, int $to, float $weight)
    {
        $this->from = $from;
        $this->to = $to;
        $this->weight = $weight;
    }

    /**
     * @return int
     */
    public function from(): int
    {
        return $this->from;
    }

    /**
     * @return int
     */
    public function to(): int
    {
        return $this->to;
    }

    /**
     * @return float
     */
    public function weight(): float
    {
        return $this->weight;
    }

    /**
     * @return string
     */
    public function __toString(): string
    {
        return "{$this->from} -> {$this->to}: {$this->weight}";
    }
}