const arr = []
const maxPrice = Math.max(...products.map(p => p.price));
const products = [
    { id: 'prod-1', name: 'Фрукти', isSale: false, isStock: true, price: 500 },
    { id: 'prod-2', name: 'Випічка', isSale: false, isStock: false, price: 750 },
    { id: 'prod-3', name: 'Вода', isSale: true, isStock: true, price: 250 },
    { id: 'prod-4', name: 'Мясо', isSale: false, isStock: false, price: 1250 },
    { id: 'prod-5', name: 'Снеки', isSale: true, isStock: true, price: 1100 },
];

console.log(products.map(word => word.name));
console.log(products.map(num=>num.price*1.15));
console.log(products.filter(el => el.price >= 1000));
console.log(products.find(el => el.id === 'prod-1'));
console.log(products.every(el => el.isStock === true));
console.log(products.some(el => el.isSale === true));
console.log(products.map(p => p.price));
console.log(products.find(p => p.price === maxPrice));
console.log(products.sort((a, b) => b.price - a.price));