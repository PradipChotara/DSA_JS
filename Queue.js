// queue.mjs

class Queue {
    constructor() {
      this.items = [];
      this.front = 0;
      this.rear = 0;
    }
  
    // Public methods
    enqueue(element) {
      this.items.push(element);
      this.rear++;
    }
  
    dequeue() {
      if (this.isEmpty()) {
        throw new Error('Queue is empty');
      }
      const element = this.items[this.front];
      this.front++;
      return element;
    }
  
    peek() {
      if (this.isEmpty()) {
        throw new Error('Queue is empty');
      }
      return this.items[this.front];
    }
  
    isEmpty() {
      return this.front === this.rear;
    }
  
    print() {
      // Improved print function to handle empty queue
      if (this.isEmpty()) {
        console.log('Queue is empty');
        return;
      }
  
      let output = '[';
      for (let i = this.front; i < this.rear; i++) {
        output += this.items[i];
        if (i < this.rear - 1) {
          output += ', ';
        }
      }
      output += ']';
      console.log(output);
    }
  }
  
  export default Queue;
  