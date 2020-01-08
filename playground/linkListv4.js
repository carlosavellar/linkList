function LinkedList() {
    this.head = null;
    this.tail = null;
}

function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

LinkedList.prototype.addToHead = function (value) {
    let newNode = new Node(value, this.head, null);
    if (this.head) this.head.prev = newNode;
    else this.tail = newNode;
    this.head = newNode;
}

LinkedList.prototype.removeHead = function () {
    if (!this.head) return null;
    let val = this.head.value;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    else this.tail = null;
    return val;
}

LinkedList.prototype.search = function (searchWord) {
    let currentNode = this.head;
    while (currentNode) {
        if (currentNode.value === searchWord) return currentNode.value.toUpperCase();
        currentNode = currentNode.next;
    }
}

LinkedList.prototype.indexOf = function (item) {
    let indexes = [],
        count = 0,
        currentNode = this.head;
    while (currentNode) {
        if (currentNode.value === item) indexes.push(count);
        currentNode = currentNode.next;
        count++;
    }
    return indexes;
}

let ll = new LinkedList();
ll.addToHead("Jaspion");
ll.addToHead("Spectroman");
ll.addToHead("Ganesha");

// ll.removeHead("Jaspion");

console.log(ll.search("Spectroman"));



// function LinkedList() {
//     this.head = null;
//     this.tail = null;
// }

// function Node(value, next, prev) {
//     this.value = value;
//     this.next = next;
//     this.prev = prev;
// }

// LinkedList.prototype.addToHead = function (value) {
//     let newNode = new Node(value, this.head, null);
//     if (this.head) this.head.prev = newNode;
//     else this.tail = newNode;
//     this.head = newNode;
// }

// LinkedList.prototype.addToTail = function (value) {
//     let newNode = new Node(value, null, this.tail);
//     if (this.tail) this.tail.next = newNode;
//     else this.head = newNode;
//     this.head = newNode;
// }

// LinkedList.prototype.search = function (searchWord) {
//     let currentNode = this.head;
//     while (currentNode) {
//         if (currentNode.value === searchWord) return currentNode.value;
//         currentNode = currentNode.next;
//     }
//     return null;
// };

// LinkedList.prototype.removeHead = function () {
//     if (this.head) null;
//     let val = this.head.value;
//     this.head = this.head.prev;
//     if (this.head) this.head.next = null;
//     else this.head = null;
//     return val;
// }

// LinkedList.prototype.indexOf = function (indexVal) {
//     let indexes = [],
//         count = 0,
//         currentNode = this.head;
//     while (currentNode) {
//         if (currentNode.value === indexVal) indexes.push(count);
//         currentNode = currentNode.next;
//         count++;
//     }
//     return indexes;
// }

// let ll = new LinkedList();
// ll.addToHead("Débora");
// ll.addToHead("Diego");
// ll.addToHead("Deise");
// ll.addToHead("Poltergeist");
// ll.addToHead("Salvatore");

// // ll.removeHead("Diego");
// console.log(ll.indexOf("Deise"));