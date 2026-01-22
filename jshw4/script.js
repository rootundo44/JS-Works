// 1

// let diapazonvid = parseFloat(prompt("Enter diapazonvid: "));
// let diapazondo = parseFloat(prompt("Enter diapazondo: "));
// let res = 0;
// for(let i = diapazonvid; i <= diapazondo; i++){
//     res += i;
// }
// console.log(res);

// 2

// Не знаю як робити

// 3

// let num = parseFloat(prompt("Введіть число: "));
// console.log(`Дільники числа -> ${num}:`)
// for (let i = 1; i <= num; i++){
//     if(num % i === 0){
//         console.log(i);
//     }
// }

// 4

// let num = prompt("Введіть число: ");
// console.log(`Кількість цифр у числі -> ${num.length}`);

// 5

// let dodatne = 0;
// let videmne = 0;
// let zero = 0;
// let parne = 0;
// let neparne = 0;

// for(let i = 1; i <= 10; i++){
//     let num = parseFloat(prompt("Введіть число: "));
//     if(num > 0){
//         dodatne++;
//     }
//     else if(num < 0){
//         videmne++;
//     }
//     else{
//         zero++;
//     }

//     if(num % 2 === 0){
//         parne++;
//     }
//     else{
//         neparne++;
//     }
// }

// console.log(`Статистика: \nДодатних чисел -> ${dodatne} \nВідємних чисел -> ${videmne} \nНулів -> ${zero} \nПарних чисел -> ${parne} \nНепарних чисел -> ${neparne}`);

// 6

// let ymova = true;

// while (ymova === true) {
//     let num1 = parseFloat(prompt("Введіть число1: "));
//     let num2 = parseFloat(prompt("Введіть число2: "));
//     let znak = prompt("Enter znak (+,-,*,/): ");
//     switch (znak) {
//         case "+":
//             alert(`${num1} + ${num2} = ${num1 + num2}`);
//             break;
//         case "-":
//             alert(`${num1} - ${num2} = ${num1 - num2}`);
//             break;
//         case "*":
//             alert(`${num1} * ${num2} = ${num1 * num2}`);
//             break;
//         case "/":
//             alert(`${num1} / ${num2} = ${num1 / num2}`);
//             break;
//         default:
//             alert("ERROR ZNAK!!!");
//     }
//     let answer = prompt("Ви хочете розвязати ще один приклад? (так/ні)");
//     if (answer.toLowerCase() === "так") {
//         ymova = true;
//     }
//     else {
//         ymova = false;
//     }
// }

// 9

// for (let i = 2; i <= 9; i++){
//     for (let j = 1; j <= 10; j++){
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }