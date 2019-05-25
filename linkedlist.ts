class Node {
    value: Number;
    next: Node;

    constructor(value: Number) {
        this.value = value;
        this.next = null;
    }
}

class List {
    private root: Node;

    constructor() {
        this.root = null;
    }

    add(value: Number): void {
        let head = this.root;

        if (head === null) {
            this.root = new Node(value);
            return;
        }

        while(head.next !== null) {
            head = head.next;
        }

        head.next = new Node(value);
    }

    remove(value: Number): void {
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
            } else {
                head = head.next
            }
        }
    }

    print(): void {
        let head = this.root;
        while (head !== null) {
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
list.add(1);

list.print();

list.remove(1);
list.remove(3);

list.print();

// HACK: https://github.com/Microsoft/TypeScript/issues/16143
export {}