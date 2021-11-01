class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

let _head = Symbol('head');
let _length = Symbol('length');
class Stack {
  constructor() {
    this[_length] = 0;
    this[_head] = null;
  }
  *iterator() {
    let current = this[_head];
    while (current) {
      yield current;
      current = current.next;
    }
  }
  push(item) {
    const node = new Node(item);
    if (!this[_head]) {
      this[_head] = node;
    } else {
      let currentNode = this[_head];
      const nodes = this.iterator();

      for (const _node of nodes) {
        currentNode = _node;
      }

      currentNode.next = node;
    }
    this[_length]++;
  }
  pop() {
    const tailIndex = this[_length] - 1
    let current = this[_head];
    let prev = null;
    const nodes = this.iterator();

    for (const [index, _node] of [...nodes].entries()) {
      if (index === tailIndex) break;
      prev = _node;
      current = _node.next;
    }

    prev.next = current.next;

    this[_length]--;
    return current.item;

  }

  size() {
    return this[_length];
  }
}


export default Stack