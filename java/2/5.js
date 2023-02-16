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
// let n = 10;
// for (let i = 1; i <= n; i++) {
//   for (let j = 2; j <= i; j++) {
//     if (i % j === 0 && j < i) {
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
// console.log(a,b,a,b,a,b,a,b);



//6
// function pow(x,n) {
// 	if (n != 1) {
// 	  return x *= pow(x,n - 1);
// 	} else {
// 	  return x;
// 	}
// }
// console.log(pow(3, 2));
// console.log(pow(1, 100));