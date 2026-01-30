// Task I

let ryadok = "Vova zi lvova letaem!";
let count = 0;
for (el of ryadok) {
    if (el === " ") {
        count++;
    }
}
console.log(`Пропусків у рядку -> ${count}`);

// Task II

let arr = [1, 2, 3, 4, 5, 6];
let suma = 0;
for (el of arr) {
    suma += el;
}
suma = suma / arr.length
console.log(`Середнє арифметичне - > ${Math.round(suma)}`);

// Task IV

let arr2 = [];
let arr3 = [];
for (let i = 1; i <= 20; i++) {
    arr2.push(Math.round(Math.random() * 20));
}
for (el of arr2) {
    if (el % 2 === 0) {
        if (arr3.includes(el)) {
            continue;
        }
        else {
            arr3.push(el);
        }
    }
}

for (el of arr3) {
    console.log(el);
}

// Task V

let ryadokk = "Vova";
for (let i = ryadokk.length - 1; i >= 0; i--) {
    console.log(ryadokk[i]);

}

// Task VI

let listik = [2,6,12,7,9,3,1];
listik.sort((a, b) => a - b);
console.log(listik)

// Task VII

let strr = "Я люблю JavaScript";
let words = strr.split(" ");
let longest = "";   

for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
        longest = words[i];
    }
}

console.log(`Найдовше слово -> ${longest}`);
