// Implement a Ruby like Hash in Javascript. You will be able to use Object as a base to get most of the behaviour.
//
// Name the class Hash.
// Its constructor will take an object as argument.
// It should add support for the following ruby Hash methods as prototype methods:
// .empty (name it .isEmpty in Javascript)
// .merge (merges both hashes into a new hash and returns it)
// .hasKey (checks if key is in hash)
// .invert (returns a new Hash with keys & their values and vice versa)
// .inspect(display the hash ruby style as a string)
// .keys (returns all hash keys in an array)
// .values (returns all hash values in an array)
// All methods that return a hash must return a new Hash object.

class Hash {
  constructor(object){
    this.startingObject = object;
  }
  keys(){
    return Object.keys(this.startingObject);
  }
  values(){
    return Object.values(this.startingObject);
  }
  isEmpty(){
    return this.keys().length === 0;
  }
// let merged = hash.merge(new Hash({bob: 'yo', jane: 'ya'}));
  merge(objToMerge){
    return new Hash(Object.assign({},this.startingObject,objToMerge.startingObject));
  }

  hasKey(key){
    if (this.startingObject.hasOwnProperty(key)){
      return true;
    }
    return false;
  }

  invert(){
    var currObject = this.startingObject;
    var invertObject = {};
    var keys = this.keys();
    for (var key of keys) {
      invertObject[currObject[key]] = key;
    }
    return new Hash(invertObject);
  }

  inspect(){
    var values = this.values();
    var keys = this.keys();
    var inspect =[];
    for (var key of keys) {
        if (key === keys[0]) {
          inspect.push(`{'${key}' => ${values[0]}`);
          values = values.slice(1);

        } else if (key === keys[keys.length-1]) {
          inspect.push(`'${key}' => ${values[0]}}`);
          values = values.slice(1);

        } else {
          inspect.push(`'${key}' => ${values[0]}`);
          values = values.slice(1);
        }
    }
    return inspect.join(",");
  }
}

let emptyHash = new Hash({});
let hash = new Hash({a: 1, b: 2, c: 3});

console.log(emptyHash.isEmpty()); // returns false
// console.log(emptyHash.isEmpty()); // returns true
//
// let merged = hash.merge(new Hash({bob: 'yo', jane: 'ya'}));
// console.log(merged.startingObject)
// // returns Hash {a: 1, b: 2, c: 3, bob: 'yo', jane: 'ya'}
// // should not mutate original hash
//
// //merged !== hash // should be true
//
// console.log(hash.hasKey('a')); // returns true
// console.log(hash.hasKey('bob')); // returns false
// console.log(merged.hasKey('bob')); // returns true
//
// // Values will have to made into strings
// console.log(hash.invert()); // returns Hash {'1':'a', '2':'b', '3':'c'}
//
// console.log(hash.inspect()); // returns "{'a' => 1, 'b' => 2, 'c' => 3}"
//
// console.log(hash.keys()); // returns ['a', 'b', 'c']
// console.log(hash.values()); // returns [1, 2, 3]
