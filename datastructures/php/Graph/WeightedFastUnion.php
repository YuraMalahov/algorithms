<?php

namespace Graph;

/**
 * Class WeightedFastUnion
 * @package Graph
 */
class WeightedFastUnion
{
    /**
     * @var int[]
     */
    private $id = [];

    /**
     * @var int[]
     */
    private $weight = [];

    /**
     * @var int
     */
    private $count = 0;

    /**
     * UnionSearch constructor.
     * @param int $count
     */
    public function __construct(int $count)
    {
        for ($i = 0; $i < $count; $i++) {
            $this->id[$i] = $i;
            $this->weight[$i] = 1;
        }

        $this->count = $count;
    }

    /**
     * @param int $firstPoint
     * @param int $secondPoint
     */
    public function union(int $firstPoint, int $secondPoint)
    {
        $fp = $this->find($firstPoint);
        $sp = $this->find($secondPoint);
        if ($fp === -1 || $sp === -1 || $fp === $sp) {
            return;
        }

        if ($this->weight[$fp] < $this->weight[$sp]) {
            $this->id[$fp] = $sp;
            $this->weight[$sp] += $this->weight[$fp];
        } else {
            $this->weight[$fp] += $this->weight[$sp];
            $this->id[$sp] = $fp;
        }

        $this->count--;
    }

    /**
     * @param int $point
     * @return int
     */
    public function find(int $point): int
    {
        if (!isset($this->id[$point])) {
            return -1;
        }
        while ($point !== $this->id[$point]) {
            $point = $this->id[$point];
        }

        return $point;
    }

    /**
     * @param int $firstPoint
     * @param int $secondPoint
     * @return bool
     */
    public function connected(int $firstPoint, int $secondPoint): bool
    {
        $fp = $this->find($firstPoint);
        $sp = $this->find($secondPoint);

        return $fp !== -1 && $sp !== -1 && $fp === $sp;
    }

    /**
     * @return int
     */
    public function count(): int
    {
        return $this->count;
    }
}