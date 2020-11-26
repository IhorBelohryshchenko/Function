// 1 Task
// function updateResult() {
//   const h1 = document.getElementById('result');
//   const age = document.getElementById('input1');
//   const kek = age.value;
//   if (kek>=0 && kek<=12) {
//     lol = 'child';
//   }
//   if (kek>=12 && kek<=18) {
//     lol = 'teenager';
//   }
//   if (kek>=18 && kek<=60) {
//     lol = 'adult';
//   }
//   if (kek>=60) {
//     lol = 'pensioner';
//   }
//   h1.innerText = lol;
// }
// 2 Task
// function updateResult() {
//     const h1 = document.getElementById('result');
//     const sym = document.getElementById('input1');
//     const kek = sym.value;
//     switch (kek) {
//       case '0' :
//         lol = ')';
//         break;
//       case '1' :
//         lol = '!';
//         break;
//       case '2' :
//         lol = '@';
//         break;
//       case '3' :
//         lol = '#';
//         break;
//       case '4' :
//         lol = '$';
//         break;
//       case '5' :
//         lol = '%';
//         break;
//       case '6' :
//         lol = '^';
//         break;
//       case '7' :
//         lol = '&';
//         break;
//       case '8' :
//         lol = '*';
//         break;
//       case '9' :
//         lol = '(';
//         break;
//     }
//     h1.innerText = lol;
// }
// function updateResult() {
//   const result = document.getElementById('result');
//   const inputNum1 = document.getElementById('input1');
//   const inputNum2 = document.getElementById('input2');
//   const kek = Math.pow(inputNum1.value, inputNum2.value);
//   // let i = 0;
//   // do {
//   //   const resultText = document.createElement('li');
//   //   resultText.append(str.charAt(i));
//   //   resultList.append(resultText)
//   //   i += 1;
//   // } while (i < str.length);
//   // while (i < str.length) {
//   //   const resultText = document.createElement('li');
//   //   resultText.append(str.charAt(i));
//   //   resultList.append(resultText)
//   //   i += 1;
//   // }
//   result.innerText = kek;
// }
// function updateResult() {
//   const result = document.getElementById('result');
//   const num1 = document.getElementById('input1');
//   const num2 = document.getElementById('input2');
//   const n = num1.value;
//   const m = num2.value;
//   const p = (n < m) ? n : m;
//   for (let i = p; i > 0; i-- ) {
//     if (n % i == 0 && m % i == 0) {
//       let p = document.createElement('p');
//       p.innerText = i;
//       result.append(p);
//     }
//   }
// }
// function updateResult() {
//   const result = document.getElementById('result');
//   const num1 = document.getElementById('input1');
//   const p = num1.value;
//   const n = p * (p - 1);
//   result.innerText = n;
// }
// function updateResult() {
//   const result = document.getElementById('result');
//   const num1 = +document.getElementById('input1').value;
//   let p = num1;
//   let i = num1 - 1;
//   while (i > 0) {
//     p *= i;
//     i--;
//   }
//  result.innerText = p;
// }
// function updateResult() {
//     const result = document.getElementById('result');
//     const num1 = +document.getElementById('input1').value;
//   let isCorrect = false; 
//    do {
//      const p = +prompt('2 + 2 * 2', '0');
//      isCorrect = p == 6;
//    } while (!isCorrect)
//     result.innerText = p + ' - krasava';
// }
// function updateResult() {
//       const result = document.getElementById('result');
//       const num1 = document.getElementById('input1').value;
//       let i = +num1;
//       let n = 0;
//       while (i >= 50) {
//         i /= 2;
//         n++;
//       }
//       result.innerText = `Value = ${i}, attempts = ${n}`;
//  }  
// function updateResult() {
//         const result = document.getElementById('result');
//         const num1 = document.getElementById('input1');
//       const p = +num1.value;
//       for (let i = 1; i <= 100; i++ ) {
//         if (p % i == 0) {
//           let p = document.createElement('p');
//           p.innerText = i;
//           result.append(p);
//         }
//       }
// }
// function updateResult() {
//           const result = document.getElementById('result');
//           const num1 = document.getElementById('input1');
//           const num2 = document.getElementById('input2');
//           const min = +num1.value;
//           const max = +num2.value;
//           let count = 0;
//           for (let i = min; i <= max; i++) {
//             count++; 
//             if (count == 4) {
//               let p = document.createElement('p');
//               p.innerText = i;
//               result.append(p);
//               count = 0;
//             }
//           }
// }
// function updateResult() {
//           const result = document.getElementById('result');
//           const num1 = document.getElementById('input1');
//           const p = +num1.value;
//           for (let i = p; i--;) {
//             if (p % 1 == 0 && p % i == 0) {
//               let p = document.createElement('p');
//               p.innerText = i;
//               result.append(p);
//             }
//           }
// }
  function updateResult() {
        const result = document.getElementById('result');
        const num1 = document.getElementById('input1');
        const num2 = document.getElementById('input2');
        const min = +num1.value;
        const max = +num2.value;
        const m = min + max;
        let p = document.createElement('p');
        p.innerText = m;
        result.append(p);
}

