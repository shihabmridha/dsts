class Node {
    value: Number;
    next: Node;

    constructor(value: Number) {
        this.value = value;
        this.next = null;
    }
}

class List {
    private head: Node;

    constructor() {
        this.head = null;
    }

    add(value: Number): void {
        let head = this.head;

        if (head === null) {
            this.head = new Node(value);
            return;
        }

        while(head.next !== null) {
            head = head.next;
        }

        head.next = new Node(value);
    }

    print(): void {
        let head = this.head;
        while (head != null) {
            console.log(head.value)
            head = head.next
        }
    }
}

const list = new List();

list.add(3);
list.add(4);
list.add(6);
list.add(1);

list.print();

// HACK: https://github.com/Microsoft/TypeScript/issues/16143
export {}