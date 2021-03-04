class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    var node = new Node(element);
    var current;
    if (this.head == null) this.head = node;
    else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  printList() {
    var curr = this.head;
    var str = "";
    while (curr) {
      str += curr.element + "--> ";
      curr = curr.next;
    }
    console.log(str);
  }
}
function preOrder(root) {
  var linkedList = new LinkedList();
  current = root;

  function traverse(node) {
    linkedList.add(node.value);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }

  traverse(current);
  return linkedList.printList();
}
let root = {
  value: 13,
  left: {
    value: 5,
    left: {
      value: 3,
    },
    right: {
      value: 10,
      left: {
        value: 8,
      },
    },
  },
  right: {
    value: 18,
    left: {
      value: 14,
      right: {
        value: 16,
      },
    },
    right: {
      value: 26,
    },
  },
};
console.log(preOrder(root)); 
