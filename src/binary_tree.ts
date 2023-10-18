class Node {
    private _value: number;
    private _left: Node;
    private _right: Node;

    constructor(value: number) {
        this._value = value;
        this._left = null;
        this._right = null;
    }

    set value(value: number) {
        this._value = value;
    }

    get value() {
        return this._value;
    }

    set left(node: Node) {
        this._left = node;
    }

    get left() {
        return this._left;
    }

    set right(node: Node) {
        this._right = node;
    }

    get right() {
        return this._right;
    }

}

class BinaryTree {
    private root: Node;

    constructor() {
        this.root = null;
    }

    add (value: number): void {
        let currentNode: Node = this.root;

        // Create the first node
        if (currentNode === null) {
            this.root = new Node(value);
            return;
        }

        while (currentNode !== null) {
            if (value <= currentNode.value) {
                if (currentNode.left === null) {
                    currentNode.left = new Node(value);
                    break;
                }
                currentNode = currentNode.left;
            } else {
                if (currentNode.right === null) {
                    currentNode.right = new Node(value);
                    break;
                }
                currentNode = currentNode.right;
            }
        }
    }

    find (value: number): boolean {
        let currentNode: Node = this.root;
        let found = false;

        while (currentNode !== null) {
            if (value === currentNode.value) {
                found = true;
                break;
            }

            if (value <= currentNode.value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }

        return found;
    }
}

const bt = new BinaryTree();

bt.add(5);
bt.add(3);
bt.add(4);
bt.add(1);
bt.add(2);

console.log(bt.find(5));
console.log(bt.find(1));
console.log(bt.find(9));
console.log(bt.find(2));
console.log(bt.find(4));

// HACK: https://github.com/Microsoft/TypeScript/issues/16143
export {};
