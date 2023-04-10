
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function diameterOfBinaryTree(root: TreeNode | null): number {
  let total = 0;

  const traverse = (node: TreeNode | null): number => {
    if (!node) {
      return 0;
    }

    const l = traverse(node.left);
    const r = traverse(node.right);

    total = Math.max(l + r, total);

    return Math.max(l, r) + 1;
  }

  traverse(root);

  return total;
};
