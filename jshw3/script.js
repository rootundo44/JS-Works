// task 1

// let age = parseFloat(prompt('Enter your age: '));

// if(age >= 0 && age < 12){
//     alert('Дитина');
// }
// else if(age >= 12 && age < 18){
//     alert('Підліток');
// }
// else if(age >= 18 && age < 60){
//     alert('Дорослий');
// }
// else if(age >= 60){
//     alert('Пенсіонер');
// }
// else{
//     alert('Invalid age');
// }

// task 2

// let num = parseFloat(prompt('Enter number (1-9): '));

// switch (num) {
//     case 0:
//         alert(')');
//         break;
//     case 1:
//         alert('!');
//         break;
//     case 2:
//         alert('@');
//         break;
//     case 3:
//         alert('#');
//         break;
//     case 4:
//         alert('$');
//         break;
//     case 5:
//         alert('%');
//         break;
//     case 6:
//         alert('^');
//         break;
//     case 7:
//         alert('&');
//         break;
//     case 8:
//         alert('*');
//         break;
//     case 9:
//         alert('(');
//         break;
//     default:
//         alert('Invalid number!');
// }

// task 3

// let num = prompt('Enter a number (***): ');
// if(num.length === 3){
//     if(num[0] === num[1] || num[0] === num[2] || num[1] === num[2]){
//         alert('В числі є однакові числа!');
//     }
//     else{
//         alert('В числі немає однакових чисел!');
//     }
// }
// else{
//     alert('Error number!!!');
// }

// task 4

// let year = parseFloat(prompt("Введіть рік: "));
// if(year % 400 === 0 || year % 4 === 0 && year % 100 !== 0){
//     alert("Рік високосний");
// }
// else{
//     alert("Рік не високосний");
// }

// task 5

// let num = prompt('Введіть пятизначне число: ');

// if (num.length === 5) {
//     if (num[0] === num[4] && num[1] === num[3]) {
//         alert('Паліндром!');
//     }
//     else {
//         alert('Не паліндром!');
//     }
// }
// else {
//     alert('Це не пятизначне число!');
// }

// task 6

// let USD = parseFloat(prompt('Введіть кількість USD: '));
// let valuta = prompt('Введіть валюту в яку хочете конвертувати USD (EUR, UAH, AZN): ');

// let EUR = 0.86;
// let UAH = 43.5;
// let AZN = 1.7;

// switch(valuta){
//     case 'EUR':
//         alert(`Ви конвертували - > ${USD} USD в -> ${USD * EUR} EUR`);
//         break;
//     case 'UAH':
//         alert(`Ви конвертували - > ${USD} USD в -> ${USD * UAH} UAH`);
//         break;
//     case 'AZN':
//         alert(`Ви конвертували - > ${USD} USD в -> ${USD * AZN} AZN`);
//         break;
//     default:
//         alert('Невірна валюта!');
// }

// task 7

// let suma = parseFloat(prompt('Введіть суму покупки: '));

// if (suma > 0) {
//     if (suma >= 200 && suma <= 300) {
//         alert(`У вас знижка 3%! До сплати -> ${suma * 0.97}`);
//     }
//     else if (suma > 300 && suma <= 500) {
//         alert(`У вас знижка 5%! До сплати -> ${suma * 0.95}`);
//     }
//     else if (suma > 500) {
//         alert(`У вас знижка 7%! До сплати -> ${suma * 0.93}`);
//     }
//     else {
//         alert(`Знижки не буде! Сума до сплати -> ${suma}`);
//     }
// }
// else {
//     alert('Error!');
// }

// task 8
// let kolo = parseFloat(prompt('Введіть довжину кола: '));
// let perimetr = parseFloat(prompt('Введіть периметр квадрату: '));

// let diametr = kolo / Math.PI;
// let storona = perimetr / 4;

// if (kolo <= 0 || perimetr <= 0) {
//     alert("Error!");
// }
// else {
//     if (diametr <= storona) {
//         alert('Коло влізає в квадрат!');
//     }
//     else {
//         alert('Коло не поміщається!');
//     }
// }
