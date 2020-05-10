"usr strict";
/*
var leftBorderWidth = 1;
let second = 2;
//const pi = 3,14;

console.log(econd);*/

// var number = 5;
// var string = "Hello";
// var boolean = true;
// null;
// undefined;
// var obj = {};
// var sym = Symbol();

// // let persone = { // var obj = {};
// //     name: "Jj",
// //     age: 35,
// //     isMarriad: false
// // };
// //let famaly1 = ['jj', 'p.jpg', 'orange.bmp', 'self.png']; //var obg = [];

// console.log(famaly1[0]);

// console.log(typeof("rrr" + 2222));

// alert("Hello Vl")

// confirm("Are you here?");

//let answer = +prompt("Чи є вам 18?", "Так");
//console.log(typeof(answer));

/*let incr = 10,
    decr = 10;


console.log(incr++);
console.log(decr--);

console.log(5%2); // 8:42-6 video ... Operators*/


// if (2*3 == 6) { //23.04.2020
//     console.log("Good")
// } else {
//     console.log("Is not good")
// }

let num = 50;

if (num < 49) {
    console.log("Is not good")

} else if (num > 100) { // Вложені умови
    console.log("Багато")
} else {
    console.log("Так") // Якщо врно та умова виконалась
};


switch (num) { // заміна, та більш актуальний варіант if
    case num < 49: 
        console.log('Is not good');
        break;
    case num > 100:
        console.log("Багато");
        break;
    case num > 80:
        console.log('Все ще забагато');
        break;
    case 40: // Якщо умова виконалась добре
        console.log('Good');
        break;
    default: // Це на випадок якщо ні чого не виконається і тре щось вивести
        console.log("Щось пішло не добре");
        break;
}


// Цикли 03-05-2020

// let num = 60;
// while (num < 65) {
//   console.log(num);
//   num++;
// }
// let num = 50;
// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

for (let i = 1; i < 8; i++) {
    if(i == 6) { //перевірити чи i==6 якщо так, то зупинити цикл break (1,2,3,4,5, stop)
       continue  //break. Continue продовжить виконання циклу але пропустить 6 (1,2,3,4,5,7), умовне приривання циклу
    }
    console.log(i)
}