class Node {
    value: number;
    next: Node;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

class List {
    private root: Node;
    private lastNode: Node;

    constructor() {
        this.root = null;
    }

    add(value: number): void {
        const head = this.root;

        if (head === null) {
            this.root = new Node(value);
            this.lastNode = this.root;
            return;
        }

        this.lastNode.next = new Node(value);
        this.lastNode = this.lastNode.next;
    }

    remove(value: number): void {
        let head = this.root;

        if (!head) {
            console.log('List is empty');
            return;
        }

        if (head.value === value) {
            this.root = head.next;
            head = head.next;
        }

        while (head.next !== null) {
            if (head.next.value === value) {
                head.next = head.next.next;
                if (head.next === null) {
                    this.lastNode = head;
                }
            } else {
                head = head.next;
            }
        }
    }

    print(): void {
        let head = this.root;
        while (head !== null) {
            console.log(head.value);
            head = head.next;
        }
    }
}

const list = new List();

list.add(3);
list.add(4);
list.add(6);
list.add(1);
list.add(1);

list.print();

list.remove(1);
list.remove(3);

list.print();

// HACK: https://github.com/Microsoft/TypeScript/issues/16143
export {};
