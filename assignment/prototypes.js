function Animal(first, last, type) {
    this.firstName = first;
    this.lastName = last;
    this.type = type;
}

// here's an example Animal:
var giantCactus = new Animal( "Giant", "Cactus", "Dog" );

// PART 1
var somethingFun = new Animal("Something", "Fun", "Cat");

// PART 2
console.log(somethingFun.firstName);
console.log(somethingFun.lastName);

// PART 3 (Hard Mode)
Animal.prototype.Meow = function() {
  console.log("Meow");
};

// PART 4 (Pro Mode)
Animal.prototype.isHappy = function(happy) {
  if (happy === true) {
    console.log("purrrrrr");
  } else {
    console.log("crabby face");
  }
};

somethingFun.Meow();
somethingFun.isHappy(false);

// DO NOT TOUCH CODE BELOW
// for purpose of the test files only
module.exports = {
  somethingFun: somethingFun
};
