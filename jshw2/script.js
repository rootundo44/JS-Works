// let age = parseFloat(prompt('Enter your age: '))
// if (age > 0 && age <= 120) {
//     if (age > 0 && age <= 18) {
//         console.log('You are a child.')
//     }
//     else {
//         console.log('You are an adult.')
//     }
// }
// else {
//     console.log('Error')
// }

// let num1 = parseFloat(prompt("Enter first number: "));
// let num2 = parseFloat(prompt("Enter second number: "));

// num1 > num2
// ?alert(`${num1} is greater than ${num2}`)
// :alert(`${num2} is greater than ${num1}`);


// let day = parseFloat(prompt("Enter day number: "));

// if(day===1){
//     alert("Monday");
// }
// else if(day===2){
//     alert("Tuesday");
// }
// else{
//     alert("Invalid number of day!")
// }

// or

// switch(day){
//     case 1:
//         alert("Monday");
//         break;
//     case 2:
//         alert("Tuesday");
//         break;
//     case 3:
//         alert("Wednesday");
//         break;
//     case 4:
//         alert("Thursday");
//         break;
//     case 5:
//         alert("Friday");
//         break;
//     case 6:
//         alert("Saturday");
//         break;
//     case 7:
//         alert("Sunday");
//         break;
//     default:
//         alert("Invalid day number!");
// }

// let res = confirm("Do u want continue?");
// if(res){
//     alert("You chose to continue.");
// }
// else{
//     alert("You chose to cancel.");
// }








// Task 1

// let num = parseFloat(prompt("Enter a number: "));
// if(num > 0){
//     alert("Число додатнє");
// }
// else if(num < 0){
//     alert("Число відємне");
// }
// else{
//     alert("Ваше число - 0")
// }

// Task 2

// let age = parseFloat(prompt("Enter your age: "));
// if(age > 0 && age <= 120){
//     alert("Ваш вік коректний");
// }
// else{
//     alert("Error");
// }

// Task 3

// let num = parseFloat(prompt("Enter a number: "));
// if(num >= 0){
//     alert(`\|${num}\| = ${num}`);
// }
// else{
//     alert(`\|${num}\| = ${num * -1}`);
// }

// Task 4

// let hours = parseFloat(prompt("Enter a hours: "));
// let minutes = parseFloat(prompt("Enter a minutes: "));
// let seconds = parseFloat(prompt("Enter a seconds: "));


// if(hours > 0 && hours < 25){
//     alert("Години введено коректно");
// }
// else{
//     alert("Години введено некоректно");
// }

// if(minutes > 0 && minutes < 61){
//     alert("Хвилини введено коректно");
// }
// else{
//     alert("Хвилини введено некоректно");
// }

// if(seconds > 0 && seconds < 61){
//     alert("Секунди введено коректно");
// }
// else{
//     alert("Секунди введено некоректно");
// }

// Task 5

// let x = parseFloat(prompt("Enter x: "));
// let y = parseFloat(prompt("Enter y: "));

// if (x === 0 && y === 0) {
//     alert("Точка знаходиться в початку координат");
// }
// else if (y === 0) {
//     alert("Точка знаходиться на осі X");
// }
// else if (x === 0) {
//    alert("Точка знаходиться на осі Y");
// }
// else if (x > 0 && y > 0) {
//     alert("I чверть");
// }
// else if (x < 0 && y > 0) {
//     alert("II чверть");
// }
// else if (x < 0 && y < 0) {
//     alert("III чверть");
// }
// else {
//     alert("IV чверть");
// }

// Switch Task I

// let month = parseFloat(prompt("Enter a month number: "));

// switch (month) {
//     case 1:
//         alert("Січень");
//         break;
//     case 2:
//         alert("Лютий");
//         break;
//     case 3:
//         alert("Березень");
//         break;
//     case 4:
//         alert("Квітень");
//         break;
//     case 5:
//         alert("Травень");
//         break;
//     case 6:
//         alert("Червень");
//         break;
//     case 7:
//         alert("Липень");
//         break;
//     case 8:
//         alert("Серпень");
//         break;
//     case 9:
//         alert("Вересень");
//         break;
//     case 10:
//         alert("Жовтень");
//         break;
//     case 11:
//         alert("Листопад");
//         break;
//     case 12:
//         alert("Грудень");
//         break;
//     default:
//         alert("Invalid month number!");
// }

// Switch Task II

// let num1 = parseFloat(prompt("Enter a number: "));
// let num2 = parseFloat(prompt("Enter a number2: "));
// let znak = prompt("Enter a znak: ");

// switch (znak) {
//     case '+':
//         alert(`${num1} + ${num2} = ${num1 + num2}`);
//         break;
//     case '-':
//         alert(`${num1} - ${num2} = ${num1 - num2}`);
//         break;
//     case '*':
//         alert(`${num1} * ${num2} = ${num1 * num2}`);
//         break;
//     case '/':
//         if (num2 == 0) {
//             alert('Ділення на 0 неможливе!');
//             break;
//         }
//         else {
//             alert(`${num1} / ${num2} = ${num1 / num2}`);
//             break;
//         }
//     default:
//         alert("Invalid znak");

// }

// Ternarnuy Task I

let num1 = parseFloat(prompt("Enter a number: "));
let num2 = parseFloat(prompt("Enter a number2: "));

num1 > num2
?alert(`${num1} більше за ${num2}`)
:alert(`${num2} більше за ${num1}`);

// Ternarnuy Task II

let num = parseFloat(prompt("Enter a number: "));

num % 5 === 0
? alert("Кратне 5" )
: alert("Не кратне 5");

// Ternarnuy Task III

let planeta = prompt("Введіть назву планети: ");

planeta == 'Земля' || planeta == 'земля'
?alert("Привіт, землянине!")
:alert("Привіт, інопланетянине!");



