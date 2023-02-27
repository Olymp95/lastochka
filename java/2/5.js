// var name = 'admin', text;

// if (name == 'admin') {
//   text = 'Hi admin';
// } else if (name == 'manager') {
//   text = 'Hello man';
// } else if (name == '') {
//   text = 'No login';
// } else {
//   text = '';
// }

// var name = '', text;

// (name == 'admin') ?
// text = 'Hi admin' :
// (name == 'managermanagermanagermanagermanager') ?
// text = 'HelloHelloHelloHelloHello HelloHelloHelloHelloHelloHello' :
// (name == '') ?
// text = 'No login' :
// text = '';

// alert(text);


//1
// let a;
// do {
//     a = prompt('Ведіть число більше 100');
//     console.log(a)
//     if (a === null) {
//         alert('Відміна');
//         break;
//     }
// }while (+a < 100);

//2
// let n = 20;
// for (let i = 1; i <= n; i++) {
//   for (let j = 2; j <= i; j++) {
//     if ((i % j === 0) && (j < i)) {
//       break;
//     } else if (j === i) {
//       console.log(i);
//     }
//   }
// }



//3
// for (let i = 1; i < 100; i++) {
//     if (i % 3 === 0) {
//         console.log('fizz');
//     } else if (i % 5 === 0 && i % 3 !== 0) {
//         console.log('buzz');
//     }else console.log(i);
// }


//4
// for (let i = 1; i < 100; i++) {
//     if (i % 5 === 0 && i % 3 === 0) {
//         console.log('fizzBuzz')
//     } else if (i % 3 === 0) {
//         console.log('fizz');
//     } else if (i % 5 === 0 && i % 3 !== 0) {
//         console.log('buzz');
//     } else { console.log(i) };
// }


//5
// let a = '# # # # \n', b = ' # # # #\n';
// console.log(a, b, a, b, a, b, a, b);




//6
// function pow(x, n) {
//     // if(n > 1){
//     //     return x * pow(x, n-1);
//     // } else {
//     //     return x;
//     // }
//     let result;
//     const wewe = 'vasya';
    
//     for (; n > 1; n--){
//        result *= x;
//     }

//     return result;
// }
// console.log(pow(3, 3));
// console.log(pow(1, 100));

//1
// function fib(x) {
//     let result;
//     let sum1, sum2;
//     if (x <= 1) {
//         result = x;
//     } else {
//         sum1 = fib(x - 1);
//         sum2 = fib(x - 2);
//         result = sum1 + sum2;
//     }
   
//     return result;
// }

// function fib(x) {
//     let fibSec = [1, 1, 2];
//     let result = 0;
//     if (x <= 3) {
//         return fibSec[x - 1];
//     } else {
//         for (let i = 3; i < x; i++){
//             fibSec.push(fibSec[i - 1] + fibSec[i - 2]);
//         }
//     }
//     return fibSec;
// }


// // console.log(fib(7));
// // console.log(fib(7));
// console.log(fib(77));
//2
// function checkSpam(str) {
//   let lowerStr = str.toLowerCase();
//   return lowerStr.includes('sex') || lowerStr.includes('spam');
// }
// console.log(checkSpam('get new Sex videos'));
// console.log(checkSpam('[SPAM] How to earn fast money?'));
// console.log(checkSpam('New PSD template'));

//3
// function trimString(string) {
//   if (string.length <= 20) {
//     return string;
//   } else {
//     return string.substring(0, 17) + "...";
//   }
// }
// console.log(trimString("Ехал Грека через реку видит грека в реке рак сунул грека руку в реку рак за руку греку цап"));


//5.1
// var tasksCompleted = {
//   'Anna': 29,
//   'Serg': 35,
//   'Elena': 1,
//   'Anton': 99
// };

// let obj = tasksCompleted;
// let maxKey = "";
// let maxValue = -Infinity;

// for (let key in obj) {
//   if (obj[key] > maxValue) {
//     maxValue = obj[key];
//     maxKey = key;
//   }
// }
// console.log(maxKey);


//5.2
// function multiplyNumeric(obj) {
//   const newObj = {};
//   for (let key in obj) {
//     if (typeof obj[key] === "number") {
//       newObj[key] = obj[key] * 2;
//     } else {
//       newObj[key] = obj[key];
//     }
//   }
//   return newObj;
// }
// var image = {
//     width: 100,
//     height: 400,
//     title: 'Cool image'
// };
// console.log(multiplyNumeric(image));

// //5.3
// const values = [];
// let sum = 0;
// let value;

// while (true) {
//   value = prompt("Введіть число:", "");
  
//   if (value === null || value === "" || isNaN(value)) {
//     break;
//   }
  
//   value = Number(value);
  
//   if (!isNaN(value)) {
//     values.push(value);
//     sum += value;
//   }
// }

// alert(`Сума значень: ${sum}` + '\n' + `Память масива: `+[values]);


// function sum() {
//     let result = 0;
//     for (let i = 0; i < arguments.length; i++)
//     {
//         result += arguments[i];
//         console.log(sum());
//     }
//     return result;
// }
// console.log(sum(1,2,3,4))
