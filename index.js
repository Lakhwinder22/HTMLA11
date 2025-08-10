// function  with parameter

function func(name, email) {
  console.log(name, email);
}

func("kapil", "kapil123@gmail.com");

// for of loop

let arr = [4, 5, 8, 7, 1, 8, 6, 2];
let odd = 0;
let even = 0;

for (let i of arr) {
  if (i % 2 == 0) {
    even++;
  } else {
    odd++;
  }
}

console.log(odd);
console.log(even);

// let arr1 = [2, 5, 2, 5, 5, 5, 2, 2, 5, 2];

// nested loop

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

for (let i = 1; i <= 5; i++) {
  let a = "";
  for (let j = 1; j <= i; j++) {
    a += j + " ";
  }
  console.log(a);
}
