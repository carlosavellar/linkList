function LinkList() {
	this.head = null;
	this.tail = null;
}

function Node(value, next, prev) {
	this.value = value;
	this.next = next;
	this.prev = prev;
}

LinkList.prototype.addToHead = function(value) {
	let newNode = new Node(value, this.head, null);
	if (this.head) this.head.prev = newNode;
	else this.tail = newNode;
	this.head = newNode;
};

LinkList.prototype.addToHead = function(value) {
	let newNode = new Node(value, null, this.tail);
	if (this.tail) this.tail.next = newNode;
	else this.head = newNode;
	this.tail = newNode;
};

LinkList.prototype.searchNode = function(searchWord) {
	let currentNode = this.head;
	while (currentNode) {
		if (currentNode.value === searchWord) return currentNode.value;
		currentNode = currentNode.next;
	}
	return null;
};

const llTail = new LinkList();

llTail.addToHead("Se acostumar");
llTail.addToHead("Maradona");
llTail.addToHead("Tudo é acao e reacao");
llTail.addToHead(10);

console.log(llTail.searchNode("Maradona"));
