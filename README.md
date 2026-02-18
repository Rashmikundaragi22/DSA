# DSA Fundamentals
// What is Time Complexity?
// Time complexity measures how efficient an algorithm is as the input size increases. It's not the same as the actual time taken to run a program.

// Time Complexity != Execution Time

// Linear vs Binary Search
// Linear Search
// Best Case: Element at 1st index → 1 operation
// Average Case: Element at n/2 index → n/2 operations
// Worst Case: Element not found → n operations
// Time Complexity: O(n)
// Requirement: Can work on unsorted arrays
// Linear Search Graph
// Binary Search
// Best Case: Middle element matched → 1 operation
// Average Case: log₂(n) operations
// Worst Case: log₂(n) operations
// Time Complexity: O(log n)
// Requirement: Only works on sorted arrays
// Binary Search Graph
// When we use Linear Search for an input size of 100, it runs 100 times, whereas Binary Search takes only 7 steps. This shows that Binary Search is more efficient. As the input size (n) increases, the way an algorithm behaves helps us understand how efficient it is. Also, the graph helps us understand that Binary Search is more efficient.

// Big O Notation
// It is nothing; just a symbol used to represent the worst-case complexity.

// Code Examples of Time Complexity
// O(1)


// // Accessing 5th index element
// int value = arr[5];
    
// The time complexity is O(1) because we directly access the 5th index without any iteration.

// O(n)


// for(int i = 0; i < n; i++) {
//     // do something
// }
    
// O(log n)


// // e.g., Binary Search
// int binarySearch(int arr[], int n, int key) {
//     int low = 0, high = n - 1;
//     while(low <= high) {
//         int mid = (low + high) / 2;
//         if(arr[mid] == key) return mid;
//         else if(arr[mid] < key) low = mid + 1;
//         else high = mid - 1;
//     }
//     return -1;
// }
    
// O(n^2) – Nested Loop


// for(int i = 0; i < n; i++) {
//     for(int j = 0; j < n; j++) {
//         // do something
//     }
// }
    
// O(n log n)


// for(int i = 0; i < n; i++) {
//     int temp = n;
//     while(temp > 1) {
//         temp = temp / 2;
//         // do something
//     }
// }
    
// O(n^3) – Triple Nested Loops


// for(int i = 0; i < n; i++) {
//     for(int j = 0; j < n; j++) {
//         for(int k = 0; k < n; k++) {
//             // do something
//         }
//     }
// }
    
// O(2^n)


// // Recursive Fibonacci
// int fib(int n) {
//     if(n <= 1) return n;
//     return fib(n-1) + fib(n-2);
// }
    
// O(n!)


// // Permutation generator
// void permute(string s, int l, int r) {
//     if(l == r) {
//         cout << s << endl;
//     } else {
//         for(int i = l; i <= r; i++) {
//             swap(s[l], s[i]);
//             permute(s, l + 1, r);
//             swap(s[l], s[i]); // backtrack
//         }
//     }
// }
    
// Time Complexity Priorities
// O(1) – Constant time
// O(log n) – e.g., Binary Search
// O(n) – e.g., Linear Search
// O(n log n) – e.g., Merge Sort
// O(n^2) – e.g., Nested Loops
// O(n^3) – e.g., Triple Nested Loops
// O(2^n) – Recursion (e.g., Fibonacci)
// O(n!) – e.g., Brute-force permutations

// What is Space Complexity?
// Space complexity refers to how much extra memory an algorithm uses.

// Examples:
// Access 5th element: O(1)
// Find max with variable: O(1)
// New array: O(n)
// 2D Matrix: O(n^2)


console.log("===== COMPLETE DSA IN JAVASCRIPT =====");


// 1️⃣ Linear Search — O(n)
console.log("\n--- Linear Search ---");

function linearSearch(arr, target){

  for(let i=0;i<arr.length;i++){

    if(arr[i]===target){

      return i;

    }

  }

  return -1;

}

console.log(linearSearch([10,20,30,40],30));


// Time Complexity: O(n)




// 2️⃣ Binary Search — O(log n)
console.log("\n--- Binary Search ---");

function binarySearch(arr,target){

  let low=0;
  let high=arr.length-1;

  while(low<=high){

    let mid=Math.floor((low+high)/2);

    if(arr[mid]===target)
      return mid;

    else if(arr[mid]<target)
      low=mid+1;

    else
      high=mid-1;

  }

  return -1;

}

console.log(binarySearch([10,20,30,40,50],40));


// Time Complexity: O(log n)



// 3️⃣ Bubble Sort — O(n²)
console.log("\n--- Bubble Sort ---");

function bubbleSort(arr){

  for(let i=0;i<arr.length;i++){

    for(let j=0;j<arr.length-i-1;j++){

      if(arr[j]>arr[j+1]){

        [arr[j],arr[j+1]]=[arr[j+1],arr[j]];

      }

    }

  }

  return arr;

}

console.log(bubbleSort([5,3,8,1]));


// Time Complexity: O(n²)




// 4️⃣ Stack — O(1)

// LIFO

console.log("\n--- Stack ---");

class Stack{

  constructor(){

    this.items=[];

  }

  push(element){

    this.items.push(element);

  }

  pop(){

    return this.items.pop();

  }

  peek(){

    return this.items[this.items.length-1];

  }

}

const stack=new Stack();

stack.push(10);
stack.push(20);

console.log(stack.pop());


// Time Complexity:

// Push: O(1)

// Pop: O(1)



// 5️⃣ Queue — O(1)

// FIFO

console.log("\n--- Queue ---");

class Queue{

  constructor(){

    this.items=[];

  }

  enqueue(element){

    this.items.push(element);

  }

  dequeue(){

    return this.items.shift();

  }

}

const queue=new Queue();

queue.enqueue(10);
queue.enqueue(20);

console.log(queue.dequeue());





// 6️⃣ Linked List — O(n)
console.log("\n--- Linked List ---");

class Node{

  constructor(data){

    this.data=data;
    this.next=null;

  }

}

class LinkedList{

  constructor(){

    this.head=null;

  }

  insert(data){

    let newNode=new Node(data);

    if(!this.head){

      this.head=newNode;

      return;

    }

    let temp=this.head;

    while(temp.next){

      temp=temp.next;

    }

    temp.next=newNode;

  }

  print(){

    let temp=this.head;

    while(temp){

      console.log(temp.data);

      temp=temp.next;

    }

  }

}

const list=new LinkedList();

list.insert(10);
list.insert(20);

list.print();



// 7️⃣ Binary Tree
console.log("\n--- Binary Tree ---");

class TreeNode{

  constructor(data){

    this.data=data;
    this.left=null;
    this.right=null;

  }

}

let root=new TreeNode(10);

root.left=new TreeNode(20);

root.right=new TreeNode(30);

console.log(root);




// Tree Traversal — O(n)
function inorder(root){

  if(root){

    inorder(root.left);

    console.log(root.data);

    inorder(root.right);

  }

}

inorder(root);



// 8️⃣ Graph
console.log("\n--- Graph ---");

class Graph{

  constructor(){

    this.list={};

  }

  addVertex(vertex){

    this.list[vertex]=[];

  }

  addEdge(v1,v2){

    this.list[v1].push(v2);

    this.list[v2].push(v1);

  }

}

const graph=new Graph();

graph.addVertex("A");

graph.addVertex("B");

graph.addEdge("A","B");

console.log(graph);



// 9️⃣ DFS — Depth First Search
function dfs(graph,node,visited={}){

  if(visited[node])
    return;

  console.log(node);

  visited[node]=true;

  for(let neighbour of graph.list[node]){

    dfs(graph,neighbour,visited);

  }

}

dfs(graph,"A");



// 🔟 BFS — Breadth First Search
function bfs(graph,start){

  let queue=[start];

  let visited={};

  visited[start]=true;

  while(queue.length){

    let node=queue.shift();

    console.log(node);

    for(let neighbour of graph.list[node]){

      if(!visited[neighbour]){

        visited[neighbour]=true;

        queue.push(neighbour);

      }

    }

  }

}

bfs(graph,"A");




// Algorithm	      Time
// Linear Search	  O(n)
// Binary Search	  O(log n)
// Bubble Sort	      O(n²)
// Stack	          O(1)
// Queue	          O(1)
// Linked List       O(n)
// Tree Traversal	  O(n)
// DFS	              O(n)
// BFS	              O(n)