import express from 'express';
import Stack from './Stack.js';
import Queue from './Queue.js';

const stack = new Stack();
const queue = new Queue();

//-------------------------------QUEUE----------------------------------
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);

// queue.print();
// console.log(queue.dequeue()); // Output: 10
// console.log(queue.peek()); // Output: 20
// queue.print();

//-------------------------------STACK----------------------------------
// Push elements onto the stack
// stack.push(10);
// stack.push(20);
// stack.push(30);

// // Print the stack
// stack.print(); // Output: 10,20,30

// // Peek at the top element
// console.log('Top element:', stack.peek()); // Output: Top element: 30

// // Pop an element from the stack
// console.log('Popped element:', stack.pop()); // Output: Popped element: 30

// // Print the stack after popping
// stack.print(); // Output: 10,20

//-------------------------------SERVER--------------------------------
// const app = express();
// const port = 3000;

// // Routes
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// // Error handling (optional)
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });