<?php

class Key
{
    private $key = null;

    private $val = 0;

    public function __construct(string $key)
    {
        $this->key = $key;
        $this->val = array_reduce(str_split($key), function($res, $a) {
            return $res + ord($a);
        }, 0);
    }

    public function getKey(): string
    {
        return $this->key;
    }

    public function getVal(): int
    {
        return $this->val;
    }

    public function compare(Key $key)
    {
        return $this->val <=> $key->getVal();
    }
}

class Node
{
    private $key;

    private $value;

    private $left = null;

    private $right = null;

    private $length = 0;

    public function __construct(Key $key, $value)
    {
        $this->key = $key;
        $this->value = $value;
        $this->length = $key->getVal() ? 1 : 0;
    }

    public function getKey(): Key
    {
        return $this->key;
    }

    public function setKey(Key $key)
    {
        $this->key = $key;
    }

    public function getValue()
    {
        return $this->value;
    }

    public function setValue($value)
    {
        $this->value = $value;
    }

    public function getLeft(): Node
    {
        if ($this->left === null) {
            $class = self::class;
            $this->left = new $class(new Key(''), null);
        }

        return $this->left;
    }

    public function setLeft(Node $left)
    {
        $this->left = $left;
        $this->updateLength();
    }

    public function getRight(): Node
    {
        if ($this->right === null) {
            $class = self::class;
            $this->right = new $class(new Key(''), null);
        }

        return $this->right;
    }

    public function setRight(Node $right)
    {
        $this->right = $right;
        $this->updateLength();
    }

    public function getLength(): int
    {
        return $this->length;
    }

    private function updateLength()
    {
        $this->length = $this->getLeft()->getLength() +
            $this->getRight()->getLength() + 1;
    }
}

class BinarySearchTree
{
    private $root;

    public function __construct(Node $root)
    {
        $this->root = $root;
    }

    public function length()
    {
        return $this->root->getLength();
    }

    public static function size(Node $node)
    {
        return $node->getLength();
    }

    public function get(Key $key): Node
    {
        return $this->_get($this->root, $key);
    }

    private function _get(Node $node, Key $key)
    {
        if (!$node->getLength()) {
            return null;
        }

        $cmp = $node->getKey()->compare($key);
        if ($cmp > 0) {
            return $this->_get($node->getLeft(), $key);
        } else if ($cmp < 0) {
            return $this->_get($node->getRight(), $key);
        }

        return $node;
    }

    public function put(Key $key, $value)
    {
        $this->root = $this->_put($this->root, $key, $value);
    }

    private function _put(Node $node, Key $key, $value)
    {
        if (!$node->getLength()) {
            return new Node($key, $value);
        }

        $cmp = $node->getKey()->compare($key);
        if ($cmp > 0) {
            $node->setLeft($this->_put($node->getLeft(), $key, $value));
        } else if ($cmp < 0) {
            $node->setRight($this->_put($node->getRight(), $key, $value));
        } else {
            $node->setValue($value);
        }

        return $node;
    }

    public function min(): Node
    {
        return $this->_min($this->root);
    }

    private function _min(Node $node): Node
    {
        if (!$node->getLeft()->getLength()) {
            return $node;
        }

        return $this->_min($node->getLeft());
    }

    public function max(): Node
    {
        return $this->_max($this->root);
    }

    private function _max(Node $node): Node
    {
        if (!$node->getRight()->getLength()) {
            return $node;
        }

        return $this->_max($node->getRight());
    }

    public function floor(Key $key): Node
    {
        return $this->_floor($this->root, $key);
    }

    // TODO: check
    private function _floor(Node $node, Key $key)
    {
        if (!$node->getLength()) {
            return $node;
        }

        $cmp = $node->getKey()->compare($key);
        if ($cmp === 0) {
            return $node;
        } else if ($cmp > 0) {
            return $this->_floor($node->getLeft(), $key);
        }

        $t = $this->_floor($node->getRight(), $key);
        if ($t->getLength()) {
            return $t;
        }

        return $node;
    }

    public function ceil(Key $key): Node
    {
        return $this->_ceil($this->root, $key);
    }

    // TODO: check
    private function _ceil(Node $node, Key $key)
    {
        if (!$node->getLength()) {
            return $node;
        }

        $cmp = $node->getKey()->compare($key);
        if ($cmp === 0) {
            return $node;
        } else if ($cmp < 0) {
            return $this->_ceil($node->getRight(), $key);
        }

        $t = $this->_ceil($node->getLeft(), $key);
        if ($t->getLength()) {
            return $t;
        }

        return $node;
    }
}

$m = new Key('m');
$bst = new BinarySearchTree(new Node($m, 23));

$a = new Key('a');
$bst->put($a, 99);
$x = new Key('x');
$bst->put($x, 88);
$c = new Key('c');
$bst->put($c, 77);
$z = new Key('z');
$bst->put($z, 66);

echo "length: {$bst->length()}\n";
echo "m: {$bst->get($m)->getValue()}\n";
echo "a: {$bst->get($a)->getValue()}\n";
echo "a length: {$bst->get($a)->getLength()}\n";
echo "x: {$bst->get($x)->getValue()}\n";
echo "x length: {$bst->get($x)->getLength()}\n";
echo "c: {$bst->get($c)->getValue()}\n";
echo "z: {$bst->get($z)->getValue()}\n";
echo "min: {$bst->min()->getValue()}\n";
echo "max: {$bst->max()->getValue()}\n";

$b = new Key('b');
echo "floor: {$bst->floor($b)->getKey()->getKey()}\n";
$y = new Key('y');
echo "ceil: {$bst->floor($y)->getKey()->getKey()}\n";
