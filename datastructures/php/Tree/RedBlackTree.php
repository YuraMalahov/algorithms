<?php

namespace Tree;

/**
 * Class RedBlackTree
 * @package Tree
 */
class RedBlackTree
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
        $this->root->setColor(Node::BLACK);
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
     * @param $i
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
        if (!$this->root->getLeft()->isRed() && !$this->root->getRight()->isRed()) {
            $this->root->setColor(Node::RED);
        }

        $this->_deleteMin($this->root);

        if (!$this->root->isEmpty()) {
            $this->root->setColor(Node::BLACK);
        }
    }

    /**
     * Delete max node in current tree
     */
    public function deleteMax()
    {
        if (!$this->root->getLeft()->isRed() && !$this->root->getRight()->isRed()) {
            $this->root->setColor(Node::RED);
        }

        $this->_deleteMax($this->root);

        if (!$this->root->isEmpty()) {
            $this->root->setColor(Node::BLACK);
        }
    }

    /**
     * Delete node by key
     * @param KeyInterface $key
     */
    public function delete(KeyInterface $key)
    {
        if (!$this->root->getLeft()->isRed() && !$this->root->getRight()->isRed()) {
            $this->root->setColor(Node::RED);
        }

        $this->_delete($key);

        if (!$this->root->isEmpty()) {
            $this->root->setColor(Node::BLACK);
        }
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
            return new Node($key, $value, NODE::RED);
        }

        $cmp = $node->getKey()->compare($key);
        if ($cmp > 0) {
            $node->setLeft($this->_put($node->getLeft(), $key, $value));
        } else if ($cmp < 0) {
            $node->setRight($this->_put($node->getRight(), $key, $value));
        } else {
            $node->setValue($value);
        }

        if ($node->getRight()->isRed() && !$node->getLeft()->isRed()) {
            $node = $this->rotateLeft($node);
        }
        if ($node->getLeft()->isRed() && $node->getLeft()->getLeft()->isRed()) {
            $node = $this->rotateRight($node);
        }
        if ($node->getLeft()->isRed() && $node->getRight()->isRed()) {
            $this->flipColors($node);
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
            // set left link in previous node with null node
            return $node->getLeft();
        }
        if (!$node->getLeft()->isRed() && !$node->getLeft()->getLeft()->isRed()) {
            $node = $this->moveRedLeft($node);
        }

        $node->setLeft($this->_deleteMin($node->getLeft()));

        return $this->balance($node);
    }

    /**
     * Delete max node in sub tree. Returns node from which we start
     * @param Node $node
     * @return Node
     */
    private function _deleteMax(Node $node): Node
    {
        if ($node->getLeft()->isRed()) {
            $node = $this->rotateRight($node);
        }
        if (!$node->getRight()->getLength()) {
            // set right link in previous node with null node
            return $node->getRight();
        }
        if (!$node->getRight()->isRed() && !$node->getRight()->getLeft()->isRed()) {
            $node = $this->moveRedRight($node);
        }

        $node->setRight($this->_deleteMax($node->getRight()));

        return $this->balance($node);
    }

    /**
     * Delete node by key in sub tree. Returns node from which we start
     * @param Node $node
     * @param KeyInterface $key
     * @return Node
     */
    private function _delete(Node $node, KeyInterface $key): Node
    {
        // TODO: check
        if ($node->getKey()->compare($key) > 0) {
            if (!$node->getLeft()->isRed() && !$node->getLeft()->getLeft()->isRed()) {
                $node = $this->moveRedLeft($node);
            }
            $node->setLeft($this->_delete($node->getLeft(), $key));
        } else {
            if ($node->getLeft()->isRed()) {
                $node = $this->rotateRight($node);
            }
            if ($node->getKey()->compare($key) === 0 && !$node->getRight()->getLength()) {
                return $node->getRight();
            }
            if (!$node->getRight()->isRed() && !$node->getRight()->getLeft()->isRed()) {
                $node = $this->moveRedRight($node);
            }
            if ($node->getKey()->compare($key) === 0) {
                $minKey = $this->_min($node->getRight())->getKey();
                $node->setValue($this->_get($node->getRight(), $minKey));
                $node->setKey($minKey);
                $node->setRight($this->_deleteMin($node->getRight()));
            } else {
                $node->setRight($this->_delete($node->getRight(), $key));
            }
        }

        return $this->balance($node);
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


    private function rotateLeft(Node $node): Node
    {
        $tmp = $node->getRight();
        $node->setRight($tmp->getLeft());
        $tmp->setLeft($node);
        $tmp->setColor($node->getColor());
        $node->setColor(Node::RED);

        return $tmp;
    }

    private function rotateRight(Node $node): Node
    {
        $tmp = $node->getLeft();
        $node->setLeft($tmp->getRight());
        $tmp->setRight($node);
        $tmp->setColor($node->getColor());
        $node->setColor(Node::RED);

        return $tmp;
    }

    private function flipColors(Node $node)
    {
        $node->setColor(Node::RED);
        $node->getLeft()->setColor(Node::BLACK);
        $node->getRight()->setColor(Node::BLACK);
    }

    private function moveRedLeft(Node $node): Node
    {
        // if $node is red and bough links $node->left and $node->left->left are black
        // than paint $node->left in red or one of his child
        $this->flipColors($node);
        if ($node->getRight()->getLeft()->isRed()) {
            $node->setRight($this->rotateRight($node->getRight()));
            return $this->rotateLeft($node);
        }

        return $node;
    }

    private function moveRedRight(Node $node): Node
    {
        // if $node is red and bough links $node->right and $node->right->left are black
        // than paint $node->right in red or one of his child
        $this->flipColors($node);
        if (!$node->getLeft()->getLeft()->isRed()) {
            return $this->rotateRight($node);
        }

        return $node;
    }

    private function balance(Node $node): Node
    {
        if ($node->getRight()->isRed()) {
            return $this->rotateLeft($node);
        }

        return $node;
    }
}
