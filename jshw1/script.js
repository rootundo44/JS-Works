// #1

// const name=prompt('Введіть своє ім\'я: ');
// alert(`Привіт, '${name}`);

// #2

// const nowYear = 2026;
// const birthYear = parseFloat(prompt('Введіть свій рік народження: '));
// const age = (nowYear-birthYear);
// alert(`Вам ${age} років!`);

// #3

// const storona = prompt('Введи сторону квадрата: ');
// const perimetr = (storona * 4);
// alert(`Периметр квадрата: ${perimetr}`);

// #4

// const radius = prompt('Введіть радіус кола: ');
// const PI = 3.14;
// const plosha = PI * radius * radius;
// alert(`Площа кола: ${plosha} cm`);

// #5

// const road = prompt('Яка відстань між містами: ');
// const hours = prompt('За скільки годин ви хочете дістатись міста: ');
// const speed = (road/hours);
// alert(`Вам потрібно їхати зі швидкістю: ${speed}`);

// #6

// const usdtoeuro = 0.92;
// const dollars = prompt('Введіть суму в доларах: ');
// const euros = dollars * usdtoeuro;
// alert(`${dollars} USD = ${euros} EUR`);

// #7

// const usb = prompt('Введіть обсяг флешки в ГБ: ');
// const file = 0.82;
// const items = (Math.round(usb / file));
// alert(`На флешці може поміститись ${items} файлів`)

// #8

// const balance = prompt('Введіть ваш баланс: ');
// const chocolate = prompt('Введіть ціну шоколадки: ');
// let count = parseInt(balance / chocolate);
// let zdacha = balance - count * chocolate;
// alert(`Можна купити шоколадок: ${count}\nВаша здача: ${+zdacha}`);

// #9

// const num = prompt("Введіть тризначне число: ");
// let a = num % 10;
// let b = parseInt((num % 100) / 10);
// let c = parseInt(num / 100);
// const revers = a * 100 + b * 10 + c;
// alert(`Перевернуте число: ${revers}`);

// #10

// const num = Number(prompt("Введіть ціле число:"));

// (num % 2 === 0 && alert("Парне"))
// (num % 2 !== 0 && alert("Непарне"))
