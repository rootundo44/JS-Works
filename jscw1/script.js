// const arr = [1,3,5,78,23,12,14,46,678,70];
// const sum = arr.reduce((acc,num) => acc + num,0);
// console.log(sum);

// const fruits = ["Apple","Banana","Orange","Banana","Apple"];
// const count = fruits.reduce((acc,fruit) => {
//     acc[fruit] = (acc[fruit] || 0) + 1
//     return acc;
// },[])
// console.log(count);

// const max = arr.reduce((acc,num) =>{
//     return num>acc?num:acc
// },arr[0]);
// console.log(max);

// const arr = [1,3,5,2,7];
// const arr1 = ['Ivan','Oleg','Dima','Anna'];

// console.log(arr.sort((a,b) => a - b)); //Від найменшого до найбільшого
// console.log(arr1.sort()); //По алфавіту сортування

// const users = [
//     {
//         name: 'Ivan',
//         age: 25,
//     },
//     {
//         name: 'Vova',
//         age:13,
//     },
//     {
//         name: 'Illia',
//         age: 23,
//     },
//     {
//         name: 'Anna',
//         age: 8,
//     },
// ]
// console.log(users.sort((a,b) => a.age - b.age));

// #1

// const numbers = [5,10,15];
// const sum = numbers.reduce((acc,num) => acc + num,0);

// #2

// const numbers = [10,20,30,40];
// const average = numbers.reduce((acc,num) => (acc + num),0)/numbers.length;
// console.log(average);

// #3

// const products = [
//  { name: "Phone", price: 500 },
//  { name: "Laptop", price: 1200 },
//  { name: "Tablet", price: 800 }
// ];
// const max = products.reduce((acc,num) =>{
//     return num.price>acc?num:acc
// },products[0].price);
// console.log(max);

// #4

// const users = [
//  { name: "Anna", age: 25 },
//  { name: "Ivan", age: 30 },
//  { name: "Olya", age: 20 }
// ];
// console.log(users.sort((a,b) => a.age - b.age));

// #5

// const numbers = [12, 45, 7, 89, 23, 56, 91, 34];
// const max = numbers.reduce((acc,num) =>{
//     return num>acc?num:acc
// },0);

// console.log(max);

// #6

// const numbers = [12, 45, 7, 89, 23, 56, 91, 34];
// const average = numbers.reduce((acc,num) => (acc + num),0)/numbers.length;
// console.log(average);

// #7

// const words = ["яблуко", "груша", "яблуко", "слива", "груша", "яблуко", "вишня"];
// const count = words.reduce((acc,fruit) => {
//     acc[fruit] = (acc[fruit] || 0) + 1
//     return acc;
// },[])

// console.log(count);

// #8

// const products = [
//   { name: "Ноутбук", price: 25000 },
//   { name: "Мишка", price: 500 },
//   { name: "Клавіатура", price: 1200 },
//   { name: "Монітор", price: 7000 }
// ];

// console.log(products.sort((a,b) => a.price - b.price));

// #9

// const people = [
//   { name: "Олена", age: 25 },
//   { name: "Ігор", age: 32 },
//   { name: "Марія", age: 28 },
//   { name: "Андрій", age: 35 },
//   { name: "Світлана", age: 22 },
//   { name: "Олег", age: 38 }
// ];

// const grouped = people.reduce((acc, person) => {
//   const key = person.age < 30 ? 'до 30' : '30 і більше';

//   acc[key] = acc[key] || [];
//   acc[key].push(person);

//   return acc;
// }, {});

// console.log(grouped);


// #10

// const numbers = [15, 98, 23, 67, 45, 120, 3, 88];
// const sortedNumbers = numbers.sort((a,b) => a - b).reverse();
// console.log(sortedNumbers[0]);
// console.log(sortedNumbers[1]);
// console.log(sortedNumbers[2]);

// #11

// const students = [
//   { name: "Іван", average: 67 },
//   { name: "Марія", average: 92 },
//   { name: "Олег", average: 74 },
//   { name: "Анна", average: 85 },
//   { name: "Дмитро", average: 78 },
//   { name: "Софія", average: 88 },
//   { name: "Максим", average: 95 },
//   { name: "Олена", average: 61 },
//   { name: "Артем", average: 73 },
//   { name: "Катерина", average: 90 }
// ];

// const grouped = students.reduce((acc,people) => {
//     const key = people.average > 60 && people.average < 70 ? 'від 60 до 70' : people.average > 69 && people.average < 80 ? 'від 70 до 80' : people.average > 79 && people.average < 90 ? 'від 80 до 90' : people.average > 89 && people.average < 101 ? 'від 90 до 100' : 'error'
//     acc[key] = acc[key] || [];
//     acc[key].push(people);

//     return acc
// } ,{});

// console.log(grouped);
