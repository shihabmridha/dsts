class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class List {
    constructor() {
        this.head = null;
    }

    addNode(node) {
        if (this.head == null) {
            this.head = node
        }
    }
}

let head = new Node(5);
let second = new Node(10)
let third = new Node(7);

head.next = second;
second.next = third;

function print(list) {
    while (list != null) {
        console.log(list.value)
        list = list.next
    }
}

print(head);