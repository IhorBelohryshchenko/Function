
// Функции

//  1)
//   function updateResult() {
//   const result = document.getElementById('result');
//   const num1 = document.getElementById('input1');
//   const num2 = document.getElementById('input2');

//   const n = +num1.value;
//   const m = +num2.value;
//   let x;

//   if (n < m) {
//     x = '-1';
//   }

//   if (n > m) {
//     x = '1';
//   }
  
//   if (n == m) {
//     x = '0';
//   }

//   let p = document.createElement('p');
//   p.innerText = x;
//   result.append(p);
// }

//  2)
// function updateResult() {
//     const result = document.getElementById('result');
//     const num1 = document.getElementById('input1');

//     const x = +num1.value;
//     let n = 1;
//     for (let i = 1; i <= x; i++ ) {
//       n *= i;
//       }
//       let p = document.createElement('p');
//       p.innerText = n;
//       result.append(p);  
// }

//  3)
// function updateResult() {
//       const result = document.getElementById('result');
//       const num1 = document.getElementById('input1');
//       const num2 = document.getElementById('input2');
//       const num3 = document.getElementById('input3');

//       const n = num1.value;
//       const m = num2.value;
//       const x = num3.value;
//       const z = n + m + x;
//       let p = document.createElement('p');
//       p.innerText = z;
//       result.append(p);
// }

//  4)
// function updateResult() {
//   const result = document.getElementById('result');
//   const num1 = document.getElementById('input1');
//   const num2 = document.getElementById('input2');

//   const n = +num1.value;
//   const m = +num2.value;
//   let z = n * m;
//   if (m == 0) {
//     z = n * n;
//   }
//   let p = document.createElement('p');
//   p.innerText = z;
//   result.append(p);
// }


//  5,6)
let result = document.getElementById('result');
let num1 = document.getElementById('input1');
let num2 = document.getElementById('input2');

function find(n) {

  let z = 0; 
  
  for (let i = 1; i < n; i++) {
    if (n % i == 0) {
      z += i;
    }
  }

  if (z == n) {
    return n;
  } else {
    let p = document.createElement('p');
    p.innerText = 'false';
    result.append(p);
  }
}

function updateResult(min, max) {

   min = +num1.value;
   max = +num2.value;
  
  for (let i = min; i < max; i++) {
    let z = find(i);
    if (z !== undefined) {
    let p = document.createElement('p');
    p.innerText = z;
    result.append(p);
    }
  }
}