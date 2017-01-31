const Stack =  function(stacker){
  this.stacker = [];
}
Stack.prototype.add = function (arg){
  this.stacker.unshift(arg);
}
Stack.prototype.remove = function(){
  return this.stacker.splice(0,1)[0];
}

a = new Stack();
a.add("plate1");
a.add("plate2");
a.add("plate3");
a.add("plate4");
a.add("plate5");
a.add("plate6");

a.remove()
a.remove()

class Queue {
  constructor(arg){
    this.queue = [];
  }

  add(arg){
    this.queue.push(arg);
  }

  remove(){
    return this.queue.pop()
  }
}

b = new Queue();
b.add("glass1");
b.add("glass2");
b.add("glass3");
b.add("glass4");
b.add("glass5");
b.add("glass6");

b.remove()
b.remove()
