"use strict";
class listNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkedList {
  constructor(head = null) {
    this.head = head;
  }
  //Add Item add the end of the list

  append(value) {
    let newNode = new listNode(value);
    if (!this.head) {
      this.head = newNode;
      return this.head;
    }
    let tail = this.head;
    while (tail.next !== null) {
      tail = tail.next;
    }
    tail.next = newNode;
    return this.head;
  }
  //Add Item add the beginning of the list
  prepend(value) {
    let newNode = new listNode(value);
    newNode.next = this.head;
    this.head = newNode;
    return this.head;
  }
  //returns the size of the list
  size() {
    let counter = 0;
    let tail = this.head;
    while (tail) {
      counter++;
      tail = tail.next;
    }
    return counter;
  }
  //returns first Node in the list
  getHead() {
    return this.head;
  }
  //return last node in the list
  tail() {
    let tail = this.head;
    while (tail.next !== null) {
      tail = tail.next;
    }
    return tail;
  }
  //returns a node at a given index
  at(index) {
    let counter = 1;
    let tail = this.head;
    while (tail) {
      if (index === counter) {
        return tail;
      }
      counter++;
      tail = tail.next;
    }
    return "Nothing found to match your index";
  }
  //removes the last element of the list
  pop() {
    if (!this.head) {
      return null;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let prev = this.head;
    let tail = this.head.next;
    while (tail.next !== null) {
      prev = tail;
      tail = tail.next;
    }
    prev.next = null;
    return this.head;
  }
  contains(value) {
    if (!this.head) return;
    let isInList = false;
    let tail = this.head;
    while (tail) {
      if (tail.value === value) {
        isInList = true;
      }
      tail = tail.next;
    }
    return isInList;
  }
  //returns the index of a given value or null
  find(value) {
    if (!this.head) return;
    let counter = 0;
    let tail = this.head;
    let index = 0;
    while (tail) {
      if (tail.value === value) {
        index = counter + 1;
      }
      tail = tail.next;
      counter++;
    }
    if (index) {
      return index;
    } else {
      return null;
    }
  }
  //Returns a string with all nodes and their values
  toString() {
    if (!this.head) return;
    let tail = this.head;
    let text = "";
    while (tail) {
      text += "(" + String(tail.value) + ") -> ";
      tail = tail.next;
    }
    return text + " null";
  }
  insertAt(data, index) {
    if (!this.head) {
      this.head = new listNode(data);
      return;
    }
    const prevNode = this.at(index - 1);
    let newNode = new listNode(data);
    newNode.next = prevNode.next;
    prevNode.next = newNode;

    return this.head;
  }
  removeAt(index) {
    if (!this.head) {
      this.head = new listNode(data);
      return;
    }
    const prevNode = this.at(index - 1);
    if (!prevNode || !prevNode.next) return;
    prevNode.next = prevNode.next.next;
    return this.head;
  }
}

/*
let list = new linkedList();
list.append(4);
list.append(5);
list.append(6);
list.prepend(3);
console.log(list.head);
console.log(list.size());
list.append(7);
list.prepend(2);
list.prepend(1);
list.insertAt(20, 5);
console.log(list.toString());
list.removeAt(5);
console.log(list.toString());
*/
