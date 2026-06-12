for (let i = 1; i <= 5; i++) {
  str = "";
  for (let j = 1; j <= i; j++) {
    if (j % 2 == 0) {
      str += 10 - i + " ";
    } else {
      str += i + " ";
    }
  }

  for (let j = 1; j <= 10 - i * 2; j++) {
    str += "  ";
  }

  for (let j = 1; j <= i; j++) {
    if (j % 2 == 0) {
      str += i + " ";
    } else {
      str += 10 - i + " ";
    }
  }

  console.log(str);
}

for (let i = 4; i >= 1; i--) {
  str = "";
  for (let j = 1; j <= i; j++) {
    if (j % 2 != 0) {
      str += 10 - i + " ";
    } else {
      str += i + " ";
    }
  }

  for (let j = 1; j <= 10 - i * 2; j++) {
    str += "  ";
  }

  for (let j = 1; j <= i; j++) {
    if (j % 2 != 0) {
      str += i + " ";
    } else {
      str += 10 - i + " ";
    }
  }
  console.log(str);
}

function addd(x, y) {
  return x + y;
}

console.log(addd(10, 20));
console.log(addd(20, 20));
console.log(addd(40, 8));
console.log(addd(89, 5));

function greet() {
  console.log("welcome to desktop");
}
greet();

function greet(name) {
  return "hello " + name;
}
function user(a) {
  console.log(a);
}
user(greet("Rohan"));

const numbers = [1, 2, 3, 4, 5];
const t = function (num) {
  return num * 3;
};

const triplet = numbers.map(function (num) {
  return num * 3;
});
const tripletdemo = numbers.map(t);
console.log(tripletdemo);
console.log(triplet);
