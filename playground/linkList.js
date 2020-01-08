function LinkList() {
	this.head = null;
	this.tail = null;
}

function Node(value, next, prev) {
	this.value = value;
	this.next = next;
	this.prev = prev;
}

LinkList.prototype.addToHead = function (value) {
	const newNode = new Node(value, this.head, null);
	if (this.head) this.head.prev = newNode;
	else this.tail = newNode;
	this.head = newNode;
	``
};

LinkList.prototype.addToTail = function (value) {
	const newNode = new Node(value, null, this.tail);
	if (this.tail) this.tail.next = newNode;
	else this.head = newNode;
	this.tail = newNode;
};

LinkList.prototype.searchNode = function (searchWord) {
	let currentNode = this.head;
	while (currentNode) {
		if (currentNode.value === searchWord) return currentNode.value;
		currentNode = currentNode.next;
	}
	return null;
};

LinkList.prototype.indexOf = function (value) {
	let indexes = [],
		currentIndex = 0,
		currentNode = this.head;
	while (currentNode) {
		if (currentNode.value === value) {
			indexes.push(currentIndex);
		}
		currentNode = currentNode.next;
		currentIndex++;
	}
	return indexes;
};


// console.clear();
// const ll = new LinkList();
// ll.addToHead("Home");
// ll.addToHead("Contato");
// ll.addToHead("Filha da Puta");

// const myLL = new LinkList();
// myLL.addToTail("caralho");
// myLL.addToTail("buceta");
// myLL.addToTail("bunda");

// console.log(myLL);

LinkList.prototype.removeHead = function () {
	if (!this.head) return null;
	let val = this.head.value;
	this.head = this.head.next;
	if (this.head) this.head.prev = null;
	else this.tail = null;
	return val;
};

LinkList.prototype.removeTail = function () {
	if (!this.tail) return null;
	let val = this.tail.value;
	this.tail = this.tail.next;
	if (this.tail) this.tail.prev = null;
	else this.head = null;
	return val;
};

const ll = new LinkList();
ll.addToHead("Pato");
ll.addToHead("Galinha");
ll.addToHead("Ganso");
ll.addToHead("Guepardo");
ll.addToHead("Antílope");
ll.addToHead("Chipanzé");
// ll.addToTail("Busceta");
ll.addToHead(70);
// ll.addToTail("Perna");
// ll.addToTail("Bunda");

// ll.removeHead();
// ll.removeHead();
// console.log(ll.searchNode(""));

console.log(ll.indexOf(70));
console.log("A arte cavalheresca do arqueiro zem 3");


// Linear runtime÷
const logAll = (arr) => {
	for (let i of arr) {
		console.log(i);
	}
}

const myArr = [67, 87, 44, 22, 222, 222, 555];
logAll(myArr);

// Exponential Run Time

const combine = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			console.log(arr[i] + " " + arr[j]);
		}
	}
}
const arrlett = ["a", "b", "c"];

combine(arrlett);

let num1 = 11;
console.log(Math.floor((num1 * 3) / 2, 5), "__");

function binarySearch(array, key) {
	var low = 0;
	var high = array.length - 1;
	var mid;
	var element;
	while (low <= high) {
		mid = Math.floor((low + high) / 2, 10);
		element = array[mid];
		if (element < key) {
			low = mid + 1;
		} else if (element > key) {
			high = mid - 1;
		} else {
			return mid;
		}
	}
	return -1;
}

console.log(binarySearch(myArr, 555));