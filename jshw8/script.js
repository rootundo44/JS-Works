const students = [
 { id: 1, name: "Олег", age: 19, course: 2, averageGrade: 88, city: "Львів" },
 { id: 2, name: "Марія", age: 20, course: 3, averageGrade: 95, city: "Київ" },
 { id: 3, name: "Іван", age: 18, course: 1, averageGrade: 76, city: "Харків" },
 { id: 4, name: "Софія", age: 21, course: 4, averageGrade: 91, city: "Одеса" },
 { id: 5, name: "Андрій", age: 19, course: 2, averageGrade: 84, city: "Дніпро" },
 { id: 6, name: "Катерина", age: 22, course: 4, averageGrade: 98, city: "Львів" }
];

// 1

const averageBal = students.reduce((acc,students) => acc + students.averageGrade,0) / students.length;
console.log(averageBal)

// 2

const globalAge = students.reduce((acc,students) => acc + students.age,0);
console.log(globalAge)

// 3

const city = students.reduce((acc,students) => {
    acc[students.city] = (acc[students.city] || 0) + 1;
    return acc;
},{})
console.log(city);

// 4

console.log(students.sort((a,b) => a.averageGrade - b.averageGrade));
console.log(students.sort((a,b) => b.averageGrade - a.averageGrade));

// 5

const sorted = students.sort((a,b) => a.age - b.age);
console.log(sorted);