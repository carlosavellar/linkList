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

LinkedList.prototype.addToTail = function (value) {
    let newNode = new Node(value, null, this.tail);
    if (this.tail) this.tail.next = newNode;
    else this.head = newNode;
    this.tail = newNode;
}

LinkedList.prototype.domString = function (domStr) {
    let dStr = document.getElementById(domStr);
    console.log(this.head);
    this.head ? dStr.textContent = this.head.value : null;
    console.log("next: ", this.head.next, "____");
    console.log("prev.: ", this.head.prev, "____");
}

LinkedList.prototype.search = function (searchWord) {
    let currentNode = this.head;
    while (currentNode) {
        if (currentNode.value === searchWord) return currentNode.value;
        currentNode = currentNode.next;
    }
    return null;
}

LinkedList.prototype.removeNode = function (val) {
    if (!this.head) return null;
    val = this.head.value;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    this.tail = null;
    return val;
}

let ll = new LinkedList();
ll.addToHead("Magnólia");
ll.addToHead("Layla");
ll.addToHead("Megan");
ll.domString("title");
ll.addToHead("Louise");
ll.search("Suzan");
// ll.removeNode("Layla");