class Node {
    value: number;
    left: Node;
    right: Node;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    private root: Node;

    constructor() {
        this.root = null;
    }

    add (value: number): void {
        let currentNode: Node = this.root;
        if (currentNode === null) {
            this.root = new Node(value);
            return;
        }

        while (currentNode !== null) {
            if (value < currentNode.value) {
                if (currentNode.left === null) {
                    currentNode.left = new Node(value);
                    break;
                } else {
                    currentNode = currentNode.left;
                }
            } else {
                if (currentNode.right === null) {
                    currentNode.right = new Node(value);
                    break;
                } else {
                    currentNode = currentNode.right;
                }
            }
        }
    }
}

const bt = new BinaryTree();

bt.add(5);
bt.add(3);
bt.add(4);

console.log(JSON.stringify(bt, null, 2));

// HACK: https://github.com/Microsoft/TypeScript/issues/16143
export {};
