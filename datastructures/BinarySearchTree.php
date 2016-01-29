<?php

namespace BST;

/**
 * Interface KeyInterface
 * @package BST
 */
interface KeyInterface
{
    /**
     * @return mixed
     */
    function getKey();

    /**
     * @return int
     */
    function getVal(): int;

    /**
     * @param KeyInterface $key
     * @return int
     */
    function compare(KeyInterface $key): int;
}

/**
 * Class Key
 * @package BST
 */
class Key implements KeyInterface
{
    /**
     * @var string
     */
    private $key;

    /**
     * Key value
     * @var int
     */
    private $val;

    /**
     * Key constructor.
     * @param string|string $key
     */
    public function __construct(string $key = '')
    {
        $this->key = $key;
        // compute key value
        $this->val = array_reduce(str_split($key), function($res, $a) {
            return $res + ord($a);
        }, 0);
    }

    /**
     * Get key
     * @return string
     */
    public function getKey(): string
    {
        return $this->key;
    }

    /**
     * Get key value
     * @return int
     */
    public function getVal(): int
    {
        return $this->val;
    }


    /**
     * Compare two keys. return "0" if they are equal, "1" if current key is bigger or "-1" if current key is smaller
     * @param Key $key
     * @return int
     */
    public function compare(KeyInterface $key): int
    {
        return $this->val <=> $key->getVal();
    }
}

/**
 * Class Node
 * @package BST
 */
class Node
{
    /**
     * @var Key
     */
    private $key;

    /**
     * @var mixed
     */
    private $value;

    /**
     * Left link
     * @var null|Node
     */
    private $left = null;

    /**
     * Right link
     * @var null|Node
     */
    private $right = null;

    /**
     * Node length
     * @var int
     */
    private $length = 0;

    /**
     * Node constructor.
     * @param KeyInterface $key
     * @param mixed $value
     */
    public function __construct(KeyInterface $key, $value)
    {
        $this->key = $key;
        $this->value = $value;
        $this->length = $key->getVal() ? 1 : 0;
    }

    /**
     * Get key
     * @return KeyInterface
     */
    public function getKey(): KeyInterface
    {
        return $this->key;
    }

    /**
     * Set key
     * @param KeyInterface $key
     */
    public function setKey(KeyInterface $key)
    {
        $this->key = $key;
    }

    /**
     * Get value
     * @return mixed
     */
    public function getValue()
    {
        return $this->value;
    }

    public function setValue($value)
    {
        $this->value = $value;
    }

    /**
     * Get left link
     * @return Node
     */
    public function getLeft(): Node
    {
        if ($this->left === null) {
            $class = self::class;
            $this->left = new $class(new Key(), null);
        }

        return $this->left;
    }

    /**
     * Set left link
     * @param Node $left
     */
    public function setLeft(Node $left)
    {
        $this->left = $left;
        $this->updateLength();
    }

    /**
     * Get right link
     * @return Node
     */
    public function getRight(): Node
    {
        if ($this->right === null) {
            $class = self::class;
            $this->right = new $class(new Key(), null);
        }

        return $this->right;
    }

    /**
     * Set right link
     * @param Node $right
     */
    public function setRight(Node $right)
    {
        $this->right = $right;
        $this->updateLength();
    }

    /**
     * Get node length
     * @return int
     */
    public function getLength(): int
    {
        return $this->length;
    }

    /**
     * Update node length
     */
    private function updateLength()
    {
        $this->length = $this->getLeft()->getLength() +
            $this->getRight()->getLength() + 1;
    }
}

/**
 * Class BinarySearchTree
 * @package BST
 */
class BinarySearchTree
{
    /**
     * Root node
     * @var Node
     */
    private $root;

    /**
     * BinarySearchTree constructor.
     * @param Node $root
     */
    public function __construct(Node $root)
    {
        $this->root = $root;
    }

    /**
     * Get tree length
     * @return int
     */
    public function length()
    {
        return $this->root->getLength();
    }

    /**
     * Get node by key
     * @param KeyInterface $key
     * @return Node|null
     */
    public function get(KeyInterface $key)
    {
        return $this->_get($this->root, $key);
    }

    /**
     * Put node into tree
     * @param KeyInterface $key
     * @param $value
     */
    public function put(KeyInterface $key, $value)
    {
        $this->root = $this->_put($this->root, $key, $value);
    }

    /**
     * Get min node in current tree
     * @return Node
     */
    public function min(): Node
    {
        return $this->_min($this->root);
    }

    /**
     * Get max node in current tree
     * @return Node
     */
    public function max(): Node
    {
        return $this->_max($this->root);
    }

    /**
     * Get floor node by key in current tree
     * @param KeyInterface $key
     * @return Node
     */
    public function floor(KeyInterface $key): Node
    {
        return $this->_floor($this->root, $key);
    }

    /**
     * Get ceil node by key in current tree
     * @param KeyInterface $key
     * @return Node
     */
    public function ceil(KeyInterface $key): Node
    {
        return $this->_ceil($this->root, $key);
    }

    /**
     * Get node by index in current tree
     * @param int $i
     * @return Node
     */
    public function select(int $i): Node
    {
        return $this->_select($this->root, $i);
    }

    /**
     * Get index of node by key in current tree
     * @param KeyInterface $key
     * @return int
     */
    public function indexOf(KeyInterface $key): int
    {
        return $this->_indexOf($this->root, $key);
    }

    /**
     * Delete min node in current tree
     */
    public function deleteMin()
    {
        $this->root = $this->_deleteMin($this->root);
    }

    /**
     * Delete max node in current tree
     */
    public function deleteMax()
    {
        $this->root = $this->_deleteMax($this->root);
    }

    /**
     * Delete node by key
     * @param KeyInterface $key
     */
    public function delete(KeyInterface $key)
    {
        $this->root = $this->_delete($this->root, $key);
    }

    /**
     * Collect nodes into array in range
     * @param Key $lo
     * @param Key $hi
     * @return array
     */
    public function range(Key $lo, Key $hi): array
    {
        $array = [];
        $this->_range($this->root, $array, $lo, $hi);

        return $array;
    }

    /**
     * Get node in sub tree by key
     * @param Node $node
     * @param KeyInterface $key
     * @return Node|null
     */
    private function _get(Node $node, KeyInterface $key)
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

    /**
     * Put node in sub tree
     * @param Node $node
     * @param KeyInterface $key
     * @param $value
     * @return Node
     */
    private function _put(Node $node, KeyInterface $key, $value)
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

    /**
     * Get min node in sub tree
     * @param Node $node
     * @return Node
     */
    private function _min(Node $node): Node
    {
        // if it is last node in left branch
        if (!$node->getLeft()->getLength()) {
            return $node;
        }

        return $this->_min($node->getLeft());
    }

    /**
     * Get max node in sub tree
     * @param Node $node
     * @return Node
     */
    private function _max(Node $node): Node
    {
        // if it is last node in right branch
        if (!$node->getRight()->getLength()) {
            return $node;
        }

        return $this->_max($node->getRight());
    }

    /**
     * TODO: check
     * Get floor node by key in sub tree
     * @param Node $node
     * @param KeyInterface $key
     * @return Node
     */
    private function _floor(Node $node, KeyInterface $key)
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

    /**
     * TODO: check
     * Gen ceil node by key in sub tree
     * @param Node $node
     * @param KeyInterface $key
     * @return Node
     */
    private function _ceil(Node $node, KeyInterface $key)
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

    /**
     * Get node by index in sub tree
     * @param Node $node
     * @param int $i
     * @return Node
     */
    private function _select(Node $node, int $i): Node
    {
        if (!$node->getLength()) {
            return $node;
        }

        // if $i is smaller than count of nodes in left branch we go left otherwise we go right
        $leftBranchLength = $node->getLeft()->getLength();
        if ($leftBranchLength > $i) {
            return $this->_select($node->getLeft(), $i);
        } else if ($leftBranchLength < $i) {
            // subtract from index left branch length and current node "-1"
            return $this->_select($node->getRight(), $i - $leftBranchLength - 1);
        }

        return $node;
    }

    /**
     * Get node index by key in sub tree
     * @param Node $node
     * @param KeyInterface $key
     * @return int
     */
    private function _indexOf(Node $node, KeyInterface $key): int
    {
        if (!$node->getLength()) {
            return -1;
        }

        // if key is smaller than key of current node we go left otherwise we go right
        $cmp = $node->getKey()->compare($key);
        if ($cmp > 0) {
            return $this->_indexOf($node->getLeft(), $key);
        } else if ($cmp < 0) {
            $next = $this->_indexOf($node->getRight(), $key);
            if (-1 === $next) {
                return -1;
            }

            // add current node "+1", add left branch length and add return of recursive call
            return 1 + $node->getLeft()->getLength() + $next;
        }

        // subtract from node length "-1" to indexing from "0" and right branch length
        return $node->getLength() - 1 - $node->getRight()->getLength();
    }

    /**
     * Delete min node in sub tree. Returns node from which we start
     * @param Node $node
     * @return Node
     */
    private function _deleteMin(Node $node): Node
    {
        if (!$node->getLeft()->getLength()) {
            // set left link in previous node with right link of min node
            return $node->getRight();
        }

        $node->setLeft($this->_deleteMin($node->getLeft()));
        return $node;
    }

    /**
     * Delete max node in sub tree. Returns node from which we start
     * @param Node $node
     * @return Node
     */
    private function _deleteMax(Node $node): Node
    {
        if (!$node->getRight()->getLength()) {
            // set right link in previous node with left link of max node
            return $node->getLeft();
        }

        $node->setRight($this->_deleteMax($node->getRight()));
        return $node;
    }

    /**
     * Delete node by key in sub tree. Returns node from which we start
     * @param Node $node
     * @param KeyInterface $key
     * @return Node
     */
    private function _delete(Node $node, KeyInterface $key): Node
    {
        if (!$node->getLength()) {
            return new Node(new Key(''), null);
        }

        $cmp = $node->getKey()->compare($key);
        if ($cmp > 0) {
            $node->setLeft($this->_delete($node->getLeft(), $key));
        } else if ($cmp < 0) {
            $node->setRight($this->_delete($node->getRight(), $key));
        } else {
            if (!$node->getRight()->getLength()) {
                // if node have empty right link replace it with his left link
                return $node->getLeft();
            }

            if (!$node->getLeft()->getLength()) {
                // if node have empty left link replace it with his right link
                return $node->getRight();
            }

            // save link
            $tmp = $node;
            // get min node in right branch
            $node = $this->_min($tmp->getRight());
            // delete min node in tree and set right link in min node with right branch of deleted node
            $node->setRight($this->_deleteMin($tmp->getRight()));
            // set left link in min node with left branch of deleted node
            $node->setLeft($tmp->getLeft());
        }

        return $node;
    }

    /**
     * @param Node $node
     * @param array $array
     * @param Key $lo
     * @param Key $hi
     */
    private function _range(Node $node, array &$array, Key $lo, Key $hi)
    {
        if (!$node->getLength()) {
            return;
        }

        $cmpLo = $node->getKey()->compare($lo);
        $cmpHi = $node->getKey()->compare($hi);
        if ($cmpLo > 0) {
            $this->_range($node->getLeft(), $array, $lo, $hi);
        }
        if ($cmpLo >= 0 && $cmpHi <= 0) {
            $array[] = $node;
        }
        if ($cmpHi < 0) {
            $this->_range($node->getRight(), $array, $lo, $hi);
        }
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
$j = new Key('j');
$bst->put($j, 52);

echo "length: {$bst->length()}\n";
