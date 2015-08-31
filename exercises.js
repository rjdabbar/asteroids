var sum = function () {
  var args = Array.prototype.slice.call(arguments);
  return args.reduce(function(a,b) {
    return a + b;
  });
};

// console.log(sum(1,5,12,7));

Function.prototype.myBind = function(context) {
  var args = Array.prototype.slice.call(arguments, 1);
  var fn = this;

  return function() {
    var newArgs = Array.prototype.slice.call(arguments).concat(args)
    return fn.apply(context, newArgs);
  };
};

function Cat(name) {
  this.name = name;
};

Cat.prototype.says = function (sound) {
  // console.log(arguments);
  console.log(this.name + " says " + sound + "!");
}

// markov = new Cat("Markov");
// breakfast = new Cat("Breakfast");
//
// markov.says("meow");
//
// markov.says.myBind(breakfast, "meow")();
//
// markov.says.myBind(breakfast)("meow");
//
// var notMarkovSays = markov.says.myBind(breakfast);
// notMarkovSays("meow");

var curriedSum = function(numArgs) {
  var numbers = [];

  function _curriedSum (num) {
    numbers.push(num)
    if (numbers.length === numArgs) {
      return numbers.reduce(function(a,b) { return a + b; });
    } else {
      return _curriedSum;
    };
  };
  return _curriedSum;
};

var sum = curriedSum(4);
// console.log(sum(1)(2)(3)(4)); //=> 10
// console.log(sum(5)(30)(20)(1)); // => 56


Function.prototype.curry = function(numArgs) {
  var args = [];
  var fn = this;

  function _curry(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return fn.apply(null, args);
    } else {
      return _curry;
    };
  };
  return _curry;
};

var sum = function () {
  var args = Array.prototype.slice.call(arguments);
  return args.reduce(function(a,b) {
    return a + b;
  });
};

var curriedSum = sum.curry(3);
// console.log(curriedSum);
console.log(curriedSum(2)(3)(4));



Function.prototype.inherits = function(parentClass) {
  function Surrogate() {};
  Surrogate.prototype = parentClass.prototype;
  this.prototype = new Surrogate();
}

function MovingObject () {};

function Ship () {};
Ship.inherits(MovingObject);

function Asteroid () {};
Asteroid.inherits(MovingObject);

Asteroid.prototype.move = function () {
  return "moving";
}
