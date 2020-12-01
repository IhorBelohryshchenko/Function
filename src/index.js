
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
// let result = document.getElementById('result');
// let num1 = document.getElementById('input1');
// let num2 = document.getElementById('input2');

// function find(n) {

//   let z = 0; 
  
//   for (let i = 1; i < n; i++) {
//     if (n % i == 0) {
//       z += i;
//     }
//   }

//   if (z == n) {
//     return n;
//   } else {
//     let p = document.createElement('p');
//     p.innerText = 'false';
//     result.append(p);
//   }
// }

// function updateResult(min, max) {

//    min = +num1.value;
//    max = +num2.value;
  
//   for (let i = min; i < max; i++) {
//     let z = find(i);
//     if (z !== undefined) {
//     let p = document.createElement('p');
//     p.innerText = z;
//     result.append(p);
//     }
//   }
// }

// const a1 = [1, 5, 8, 10, 18, 19, 27];

// const sum = (a1) => {
//   let a2 = 0;
//   for (let i = 0; i < a1.length; i +=1 ) {
//     a2 += a1[i];
//   }
//   alert(a2);
// }

// sum(a1);


// const a1 = [1, 5, 8, 55, 180, 19, 27];

// const last = (a1) => {
//     let a2 = a1[0];
//     for (let i = 1; i < a1.length; i +=1) {
//       a2 = (a2 < a1[i]) ? a1[i] : a2;
//     }
//     alert(a2);
// }
// last(a1);


// const a = [];

// const element = (a, a1) => {
//   let a2 = 'x';
//   for (let i = 0; i < a1; i +=1) {
//     a.push(a2);
//     a2 += 'x';
//   }
//   alert(a.join(' + '));
// }

// element(a, 5);

// const a = [];

// const element = (a, a1) => {
// const getelement = (a3) => {
//   let a4 = '';
//   for (let i = 0; i < a3; i +=1) {
//     a4 += a3;
//   }
//   return a4;
// }
//   for (let i = 1; i <= a1; i +=1) {
//     a.push(getelement(i));
//   }
//   alert(a);
// }
// element(a, 5);

// const a = [];

// const arrayFill = (a, v, q) => {
//   for (let i = 1; i <= q; i +=1) {
//     a.push(v);
//   }
//   alert(a);
// }
// arrayFill(a, 'x', 5);

// const a = [1, 5, 88, 55, 180, 19, 27];

// const revers = (a) => {
//   const n = [];
//     for (let i = a.length - 1; i >= 0; i -=1) {
//       n.push(a[i]);
//     }
//     alert(n)
// }
// revers(a);

// Функция добавления нового элемента в массив по указанному индексу.
// Удалить элемент по указанному индексу

// const a = [1, 5, 88, 55, 180, 19, 27];

// const insertValueAt = (a, ind) => {
//   let sl = a.slice(0, ind);
//   let arr = a.slice(ind + 1); 
//   let result = sl.concat(arr); 
//   alert(result);
// } 
// insertValueAt(a, 3);

// Функция принимает 2 массива и возвращает новый массив, в котором собраны 
// все элементы из двух массивов без повторений.

// const a = [1, 5, 88, 55, 180, 19, 27];
// const a1 = [1, 5, 88, 5, 10, 11, 27];

// const arr = (a, a1) => {
//   const a2 = [];
//   for (let i = 0; i < a1.length; i +=1) {
//     if (!a2.includes(a1[i])) {
//       a2.push(a1[i]);
//     }
//   }
//   for (let i = 0; i < a.length; i +=1) {
//     if (!a2.includes(a[i])) {
//       a2.push(a[i]);
//     }
//   }
//   a2.sort();
//   alert(a2);
// }

// arr(a, a1);


// Функция принимает 2 массива и возвращает новый массив, в котором собраны общие элементы 
// (то есть элементы, которые встречаются и в первом и во втором массивах) без повторений.

// const a = [1, 5, 88, 55, 180, 19, 27, 33];
// const a1 = [1, 5, 88, 5, 10, 11, 27];

// const arr = (a, a1) => {
//   const a2 = [];
//   const a3 = a.length > a1.length ? a : a1;
//   const a4 = a.length > a1.length ? a1 : a; 
//   for (let i = 0; i < a4.length; i +=1) {
//     if (a3.includes(a4[i]) && !a2.includes(a4[i])){
//       a2.push(a4[i]);
//     }
//   }
//   alert(a2);
// }
// arr(a, a1);

// Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из 
// первого массива, которых нет во втором массиве.

// const a = [1, 5, 88, 55, 180, 19, 27, 33];
// const a1 = [1, 5, 88, 5, 10, 11, 27];

// const arr = (a, a1) => {
//   const a2 = [];
//   for (let i = 0; i < a.length; i += 1) {
//     if (!a1.includes(a[i]) && !a2.includes(a[i])) {
//       a2.push(a[i]);
//     }
//   }
//   alert(a2);
// }
// arr(a1, a);

// Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. 
// Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

// const a = [[1, 2, [3, 4, 5]], [4, 5], [6]];

// const calcSum = (a) => {
//   let sum = 0;
//   if (Array.isArray(a)) {
//     for (let i = 0; i < a.length; i += 1) {
//       sum += calcSum(a[i]);
//     }
//   }
//   else {
//     sum += a;
//   }
//  return sum;
// }
// alert(calcSum(a));

// const a1 = [1, 5, 88, 15, 10, 11, 27];
// a1.splice(2, 2, 9);
// alert(a1);

// const cars = [
//   { name: 'Audi', price: 30000 },
//   { name: 'Ford', price: 20000 },
//   { name: 'Chery', price: 3000 },
//   { name: 'Mazda', price: 10000 },
//   { name: 'Subaru', price: 13000 },
//   { name: 'Toyota', price: 23000 },
// ];  

// const carnames = cars.sort((a, b) => {
//   return a.price - b.price;
// })
// console.log(carnames);


// Домашнее задание - массивы

// const shopping = [
//     {product: 'Milk', quantity: 1, bought: true},
//     {product: 'Bread', quantity: 1, bought: false},
//     {product: 'Sugar', quantity: 2, bought: true},
//     {product: 'Cucumbers', quantity: 3, bought: false},
//     {product: 'Tomatoes', quantity: 4, bought: true},
// ]

// const prod = shopping.sort((a, b) => {
//     if (a.bought < b.bought) {
//         return 1;
//     } else {
//         return -1;
//     }
//     })
//     console.log(prod);

// const prod1 = (obj) => {
//     for (let i = 0; i < shopping.length; i += 1) {
//         if (obj.product == shopping[i].product) {
//             shopping[i].quantity += 1;
//             return;
//         }
//     }     
//         shopping.push(obj);
// }
// prod1({product: 'Chocolate', quantity: 1, bought: true});
// console.log(shopping);

// const prod2 = (string) => {
//     for (let i = 0; i < shopping.length; i += 1) {
//         if (string == shopping[i].product) {
//             shopping[i].bought = true;
//             return;
//         }
//     } 
//     console.log('no product');
// }
// prod2('Kek');
// console.log(shopping);


const shopping = [
    {product: 'Milk', quantity: 1, price: 13 },
    {product: 'Bread', quantity: 1, price: 20 },
    {product: 'Sugar', quantity: 2, price: 34 },
    {product: 'Cucumbers', quantity: 3, price: 15 },
    {product: 'Tomatoes', quantity: 4, price: 25 },
]   

console.log(shopping);

const calcsum = (shopping) => {
    let sum = 0;
    for (let i = 0; i < shopping.length; i += 1) {
        sum += shopping[i].price;
    }
    console.log(sum);
}
calcsum(shopping);

const maxPrice = shopping.sort((a, b) => {
    if (a.price < b.price) {
        return 1;
    } else {
        return -1;
    }
})
console.log(maxPrice[0]);


const averageCheck = (shopping) => {
    for (let i = 0; i < shopping.length; i += 1) {
        let sum = 0;
        if (shopping[i].quantity > 1) {
            sum += shopping[i].price / shopping[i].quantity;
        } else {
            sum = shopping[i].price;
        } console.log(`${shopping[i].product} = ${sum}`);
    }
}
averageCheck(shopping);