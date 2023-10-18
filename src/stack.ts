class Stack {
    private head: number;
    private _count: number;
    private store: number[] = [];

    constructor() {
        this.head = 0;
        this._count = 0;
    }

    get count() {
        return this._count;
    }

    push(value: number) {
        this.store[this.head] = value;
        this.head++;
        this._count++;
    }

    pop() {
        if (this.count === 0) {
            console.log('Statck is empty');
            return;
        }

        const value = this.store[this.head - 1];
        this.head--;
        this._count--;

        return value;
    }
}

function popAndPrintStack(stack: Stack) {
    while (stack.count > 0) {
        console.log(stack.pop());
    }
}

const stack = new Stack();

stack.push(5);
stack.pop();
stack.push(5);
stack.push(7);
stack.push(3);

popAndPrintStack(stack);
