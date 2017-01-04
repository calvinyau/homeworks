function madLib(verb, adjective, noun) {
  return "We shall " + verb.toUpperCase() + " the " +
      adjective.toUpperCase() + " " + noun.toUpperCase() + ".";
}

function isSubstring(searchString, subString) {
  if (searchString.indexOf(subString) == -1) {
    return false;
  }
  return true;
}

function fizzBuzz(arr) {
  var new_array = [];
  for (let a = 0; a < arr.length; a++) {
    if (arr[a] % 3 == 0) {
      if (arr[a] % 5 != 0) {
        new_array.push(arr[a]);
      }
    } else if (arr[a] % 5 == 0) {
      new_array.push(arr[a]);
    }
  }
  return new_array;
}

function isPrime(number) {
  for (let a = 2; a <= number / 2; a++) {
    if (number % a == 0) {
      return false;
    }
  }
  return true;
}

function sumOfNPrimes(n) {
  var primes = firstNPrimes(n);
  var total = 0;
  for (let a = 0; a < primes.length; a++) {
    total += primes[a];
  }
  return total;
}

function firstNPrimes(n) {
  var primes = [];
  var num = 2;
  while (primes.length < n) {
    if (isPrime(num)) {
      primes.push(num);
    }
    num += 1;
  }
  return primes
}

function allOrNothing() {
  for (var i = 1; i < arguments.length; i++) {
    if (arguments[i] % arguments[0] != 0) {
      return false;
    }
  }
  return true;
};

function titleize(names, callback) {
  var titleized = names.map(name => `Mx. ${name} Jingleheimer Schmidt`);
  callback(titleized);
};

titleize(["Mary", "Brian", "Leo"], (names) => {
  names.forEach(name => console.log(name));
});

function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function () {
  console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`);
};

Elephant.prototype.grow = function () {
  this.height += 12;
};

Elephant.prototype.addTrick = function (trick) {
  this.tricks.push(trick);
};

Elephant.prototype.play = function () {
  trick_num = Math.floor(Math.random() * (this.tricks.length));
  console.log(`${this.name} is ${this.tricks[trickIndex]}!`);
};

Elephant.paradeHelper = function (elephant) {
  console.log(`${elephant.name} is trotting by!`);
};

herd.forEach(name => Elephant.paradeHelper(name));

function dinerBreakfast() {
  let order = "scrambled eggs and bacon";
  console.log(order);

  return function (food) {
    order = `${order} and ${food} please.`;
    console.log(order);
  };
};

function dinerBreakfast() {
  let order = "scrambled eggs and bacon";
  console.log(order);

  return function (food) {
    order = `${order} and ${food} please.`;
    console.log(`I'd like ${order}`); //WHY?!?!?!?!?
  };
};

let bfastOrder = dinerBreakfast();
bfastOrder("chocolate chip pancakes");
bfastOrder("grits");
