console.log("hello Poland");
// variable is a memory location where we can store the data temporarily.
// to declare a variable : var keyword (keywords are the reserved words)
var a = 100;
console.log(a);
// var can hold anything that
var b = 200;
// operator : arithmetic operator
var c = a + b;
console.log("result: " + c);

var x = 1700;
if (x % 4 == 0 && y % 400 == 0) {
  console.log("It is leap year");
} else {
  console.log("It is not leap year");
}
//logical operators
// and operators
// or operators
// not operators

var y = -200;
if (y > 100 || y % 4 == 0) {
  console.log("success");
} else {
  console.log("failure");
}
var year = 2000;
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log("It is leap year yesssss");
} else {
  console.log("It is not leap year nononooooo");
}

var l = 500;
var m = 200;
var n = 300;

if (l > m && l > n) {
  console.log("l is greater");
} else if (m > l && m > n) {
  console.log("m is greater");
} else if (n > l && n > m) {
  console.log("n is greater");
}

// equilateral all sides are equal
// scalene are not equals of three sides
// isosceles are two sides equal
var first = 45;
var second = 45;
var third = 5;
// first and second are equal to each && second is equal to third means third is equal to first also.
if (first == second && second == third) {
  console.log("Triangle is Equilateral");
}
// first is not equal to second && first is equal to third && second is equal to third
else if (first != second && first != third && second != third) {
  console.log("Triangle is Scalene ");
  [p];
}
// (first = second or first = third or second = third) && (first != second or first != third or second != third)
else if (
  ((first == second || first == third || second == third) && first != second) ||
  first != third ||
  second != third
) {
  console.log("Triangle is Isoscele");
}

var start = 1;
var end = 10;

while (start <= end) {
  start = start + 1;
}
console.log(start);

var result = 1;
for (var i = 1; i <= 5; i++) {
  result = result * i;
}
console.log("factorial is " + result);

var even = 1;
for (var i = 1; i <= 100; i++) {
  even = even + 1;
}
console.log(even);
//................................................................
var number = -12341;
var div = 0;
// number = Math.floor(Math.abs(number) / 10)
console.log(number);
number = Math.abs(number);
console.log("after abs" + number);
var count = 0;
while (number > 0) {
  number = Math.floor(number / 10);
  count++;
  console.log(number);
}
console.log("count number is " + count);
// sum of numbers assigned to do

// amstrong number of 153

// perfect number of 28
// Provided number is prime number or not
var number1 = 0;
if (number1 > 1) {
  // looping through 2 to number-1
  for (let i = 2; i < number1; i++) {
    if (number1 % i == 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(number1 + "is a prime number");
  } else {
    console.log(number1 + "is a not prime number");
  }
}

var number2 = -12341;
var div1 = 0;
// number = Math.floor(Math.abs(number) / 10)
console.log(number2);
number = Math.abs(number2);
console.log("after abs" + number2);
var count1 = 0;
while (number2 > 0) {
  number2 = Math.floor(number2 / 10);
  count1++;
  console.log(number2);
}
console.log("count number is " + count1);
// reversal number
// pallindrome number

a.push(12, 13, 14, 15);
// push will help us to add the value to the end of the array

a.forEach((e) => console.log(e));
//............
a.push(12, 13, 14, 15);
// push will help us to add the value to the end of the array
a.pop(); // pop remove the last element
a.forEach((e) => console.log(e));
//4. print the even numbers from the array.
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

for (let i = 0; i < a.length; i++) {
  if (a[i] % 2 === 0)
    //const element = a[i];
    console.log(a[i]);
}
//..........
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

for (let i = 0; i < a.length; i++) {
  //const element = a[i];
  console.log(a[i]);
}
a.push(12, 13, 14, 15);
// push will help us to add the value to the end of the array
a.pop(); // pop remove the last element

a.filter((e) => e % 2 == 0).forEach((e) => console.log(e));
// factorial
a.map((e) => {
  let f = 1;
  for (let i = 1; i <= e; i++) {
    f *= i;
  }
  return f;
}).forEach();
//sortings
let b = [-1, 2, -3, 40, 500, 6, 7, 8, 9, 10];
b = b.sort((b, c) => {
  if (b > b) {
    return 1;
  } else {
    return -1;
  }
});
b.forEach((e) => console.log(e));
//................
//1. add 2 numbers as an arg and display the sum of the numbers inside the function.
function test() {
  var a = 3;
  var b = 5;
  var c = a + b;
  return c;
}
let result = test();

console.log(result);

//"2. accept the number and return the factorial of a number.
function fact(number) {
  let f = 1;
  for (var i = 1; i <= number; i++) {
    f *= i; // f= f * i
  }
  return f;
}

let result1 = fact(5);

console.log(result1);
// arrays are
//let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//for (const i of a) {
//  console.log(i);
//}
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

for (let i = 0; i < a.length; i++) {
  //const element = a[i];
  console.log(a[i]);
}
a.push(12, 13, 14, 15);
// push will help us to add the value to the end of the array
a.pop(); // pop remove the last element

a.filter((e) => e % 2 == 0).forEach((e) => console.log(e));

let b = [-1, 2, -3, 40, 500, 6, 7, 8, 9, 10];
b = b.sort((b, c) => {
  if (b > b) {
    return 1;
  } else {
    return -1;
  }
});
b.forEach((e) => console.log(e));
//.................

//JSON object

let a = {
  name: "e",
  age: 33,
  address: "abc",
  phone: 1233333,
};
let b = [
  {
    name: "c",
    age: 33,
    address: "abc",
    phone: 1233333,
  },
  {
    name: "d",
    age: 33,
    address: "abc",
    phone: 1233333,
  },
  {
    name: "b",
    age: 33,
    address: "abc",
    phone: 1233333,
  },
];
b.sort((a, b) => {
  if (a.name < b.name) return 1;
  else {
    return -1;
  }
});
console.log(b, a);
//console.log(JSON.stringify(a));
//console.log(JSON.stringify(a));
const axiosEx = () => {
  axios
    .post(`http://localhost:3000/posts`, {
      id: 10,
      title: "json-server",
      author: "typicode",
    })
    .then((res) => console.log(res));
};
//..........
const axiosEx = () => {
  axios
    .put("http://localhost:3000/posts/10", {
      id: 10,
      title: "json-server rajesh",
      author: "typicode TH",
    })
    .then((res) => console.log(res.data));
};
