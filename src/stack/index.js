class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

//模擬private，雖然無法完全保護，但至少外部沒辦法直接用 `.` 來存取/修改資料
let _head = Symbol('head');
let _length = Symbol('length');
class Stack {
  constructor() {
    this[_length] = 0;
    this[_head] = null;
  }
  //實作一個iterator讓後續需要迭代時不用再寫 while
  // （個人習慣：不太喜歡while）
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
      const nodesGenerator = this.iterator();
      
      //迭代最後一個值
      for (const _node of nodesGenerator) {
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
    const nodesGenerator = this.iterator();

    for (const [index, _node] of [...nodesGenerator].entries()) {
      if (index === tailIndex) break;
      prev = _node;
      current = _node.next;
    }
    //將原本最後一個node所指向的node（也就是null）給它的前一個node
    //也就代表原本第一個node沒有被任何node所連結了
    prev.next = current.next;

    this[_length]--;
    return current.item;

  }

  size() {
    return this[_length];
  }
}


export default Stack