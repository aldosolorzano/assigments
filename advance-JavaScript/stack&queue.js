// A stack is Last-In First-Out (LIFO) system.
const Stack =  function(stacker){
  this.stacker = [];
}
Stack.prototype.add = function (arg){
  this.stacker.push(arg);
}
Stack.prototype.remove = function(){
  return this.stacker.pop(); // remove the last element
}


// A queue is First-In First-Out (FIFO) system.
class Queue {
  constructor(arg){
    this.queue = [];
  }

  add(arg){
    this.queue.push(arg);
  }

  remove(){
    return this.queue.shift(); // remove the first element
  }
}

a = new Stack();
a.add("plate1");
a.add("plate2");
a.add("plate3");
a.add("plate4");
a.add("plate5");
a.add("plate6");

console.log(1, a.stacker);
a.remove();
a.remove();
console.log(2, a.stacker);

b = new Queue();
b.add("glass1");
b.add("glass2");
b.add("glass3");
b.add("glass4");
b.add("glass5");
b.add("glass6");

console.log(3, b.queue);
b.remove()
b.remove()
console.log(4, b.queue);


