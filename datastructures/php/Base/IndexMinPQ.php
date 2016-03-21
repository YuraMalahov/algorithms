<?php

namespace Base;

use Key\Key;

/**
 * Class IndexMinPQ
 * @package Base
 */
class IndexMinPQ
{
    /**
     * @var int
     */
    private $maxElements;

    /**
     * @var int
     */
    private $count;

    /**
     * Prioritised queue
     * @var array
     */
    private $pq = [];

    /**
     * Prioritised queue reverse
     * @var array
     */
    private $qp = [];

    /**
     * @var Key[]
     */
    private $keys = [];

    /**
     * IndexMinPQ constructor.
     * @param int $maxElements
     * @throws \Exception
     */
    public function __construct(int $maxElements) {
        if ($maxElements < 0) {
            throw new \Exception('Number of elements can not be negative');
        }

        $this->maxElements = $maxElements;

        for ($i = 0; $i <= $maxElements; $i++) {
            $this->qp[$i] = -1;
            $this->pq[$i] = -1;
        }
    }

    /**
     * @return bool
     */
    public function isEmpty(): bool
    {
        return $this->count === 0;
    }

    /**
     * @param int $i
     * @return bool
     * @throws \Exception
     */
    public function contains(int $i): bool
    {
        if ($i < 0 || $i >= $this->maxElements) {
            throw new \Exception('Index out of bound');
        }

        return $this->qp[$i] !== -1;
    }

    /**
     * @return int
     */
    public function size(): int
    {
        return $this->count;
    }

    /**
     * @param int $i
     * @param Key $key
     * @throws \Exception
     */
    public function insert(int $i, Key $key)
    {
        if ($i < 0 || $i >= $this->maxElements) {
            throw new \Exception('Index out of bound');
        }

        if ($this->contains($i)) {
            throw new \Exception("index is already in the priority queue");
        }

        $this->count++;
        $this->qp[$i] = $this->count;
        $this->pq[$this->count] = $i;
        $this->keys[$i] = $key;
        $this->swim($this->count);
    }

    /**
     * @return int
     * @throws \Exception
     */
    public function minIndex(): int
    {
        if ($this->count == 0) {
            throw new \Exception("Priority queue underflow");
        }

        return $this->pq[1];
    }

    /**
     * @return Key
     * @throws \Exception
     */
    public function minKey(): Key
    {
        if ($this->count == 0) {
            throw new \Exception("Priority queue underflow");
        }

        return $this->keys[$this->pq[1]];
    }

    /**
     * @return int
     * @throws \Exception
     */
    public function delMin(): int
    {
        if ($this->count === 0) {
            throw new \Exception("Priority queue underflow");
        }

        $min = $this->pq[1];
        $this->exchange(1, $this->count--);
        $this->sink(1);
        if ($min !== $this->pq[$this->count+1]) {
            throw new \Exception("Different values");
        }

        $this->qp[$min] = -1;
        $this->keys[$min] = null;
        $this->pq[$this->count+1] = -1;

        return $min;
    }

    /**
     * @param int $i
     * @return Key
     * @throws \Exception
     */
    public function keyOf(int $i): Key
    {
        if ($i < 0 || $i >= $this->maxElements) {
            throw new \Exception('Index out of bound');
        }
        if (!$this->contains($i)) {
            throw new \Exception("index is not in the priority queue");
        }

        return $this->keys[$i];
    }

    /**
     * @param int $i
     * @param Key $key
     * @throws \Exception
     */
    public function changeKey(int $i, Key $key)
    {
        if ($i < 0 || $i >= $this->maxElements) {
            throw new \Exception('Index out of bound');
        }
        if (!$this->contains($i)) {
            throw new \Exception("index is not in the priority queue");
        }

        $this->keys[$i] = $key;
        $this->swim($this->qp[$i]);
        $this->sink($this->qp[$i]);
    }

    /**
     * @param int $i
     * @param Key $key
     * @throws \Exception
     */
    public function change(int $i, Key $key)
    {
        $this->changeKey($i, $key);
    }

    /**
     * @param int $i
     * @param Key $key
     * @throws \Exception
     */
    public function decreaseKey(int $i, Key $key)
    {
        if ($i < 0 || $i >= $this->maxElements) {
            throw new \Exception('Index out of bound');
        }
        if (!$this->contains($i)) {
            throw new \Exception("index is not in the priority queue");
        }
        if ($this->keys[$i]->compare($key) <= 0) {
            throw new \Exception("Calling decreaseKey() with given argument
            would not strictly decrease the key");
        }

        $this->keys[$i] = $key;
        $this->swim($this->qp[$i]);
    }

    /**
     * @param int $i
     * @param Key $key
     * @throws \Exception
     */
    public function increaseKey(int $i, Key $key)
    {
        if ($i < 0 || $i >= $this->maxElements) {
            throw new \Exception('Index out of bound');
        }
        if (!$this->contains($i)) {
            throw new \Exception("index is not in the priority queue");
        }
        if ($this->keys[$i]->compare($key) >= 0) {
            throw new \Exception("Calling increaseKey() with given argument
            would not strictly increase the key");
        }

        $this->keys[$i] = $key;
        $this->sink($this->qp[$i]);
    }

    /**
     * @param int $i
     * @throws \Exception
     */
    public function delete(int $i)
    {
        if ($i < 0 || $i >= $this->maxElements) {
            throw new \Exception('Index out of bound');
        }
        if (!$this->contains($i)) {
            throw new \Exception("index is not in the priority queue");
        }

        $index = $this->qp[$i];
        $this->exchange($index, $this->count--);
        $this->swim($index);
        $this->sink($index);
        $this->keys[$i] = null;
        $this->qp[$i] = -1;
    }

    /**
     * @param int $i
     * @param int $j
     * @return bool
     */
    private function greater(int $i, int $j): bool
    {
        $first = $this->keys[$this->pq[$i]];
        $second = $this->keys[$this->pq[$j]];

        return $first->compare($second) > 0;
    }

    /**
     * @param int $i
     * @param int $j
     */
    private function exchange(int $i, int $j)
    {
        $swap = $this->pq[$i];
        $this->pq[$i] = $this->pq[$j];
        $this->pq[$j] = $swap;
        $this->qp[$this->pq[$i]] = $i;
        $this->qp[$this->pq[$j]] = $j;
    }

    /**
     * @param int $k
     */
    private function swim(int $k)
    {
        while ($k > 1 && $this->greater(round($k/2), $k)) {
            $this->exchange($k, round($k/2));
            $k = round($k/2);
        }
    }

    /**
     * @param int $k
     */
    private function sink(int $k)
    {
        while (2*$k <= $this->count) {
            $j = 2*$k;
            if ($j < $this->count && $this->greater($j, $j+1)) {
                $j++;
            }
            if (!$this->greater($k, $j)) {
                break;
            }
            $this->exchange($k, $j);
            $k = $j;
        }
    }
}
