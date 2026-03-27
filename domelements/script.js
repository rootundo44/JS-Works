const sizebtn = document.getElementById('sizebtn');
const clearbtn = document.getElementById('clearbtn');
const randombtn = document.getElementById('randomclr');
const newsbtn = document.getElementById('newsbtn');
const box = document.getElementById('box');
const fotka = document.getElementById('fotka');
const forma = document.getElementById('forma');
const info = document.getElementById('info');
const info1 = document.getElementById('info1');
const info2 = document.getElementById('info2');

sizebtn.addEventListener('click', function () {
    const sizes = [
        100,
        200,
        300,
        400
    ];
    const random = sizes[Math.floor(Math.random() * sizes.length)];
    fotka.style.width = random + 'px';
    fotka.style.height = random + 'px';
});

clearbtn.addEventListener('click', function () {
    box.innerHTML = "";
});

randombtn.addEventListener('click', function () {
    const colors = [
        'brown', 'blueviolet', 'white', 'aqua'
    ];
    const colors2 = [
        'yellow', 'green', 'blue', 'red'
    ];
    const random1 = colors[Math.floor(Math.random() * colors.length)];
    const random2 = colors2[Math.floor(Math.random() * colors2.length)];
    box.style.color = random1;
    box.style.background = random2;
});

newsbtn.addEventListener('click', function () {
    forma.classList.remove('none');
    info.classList.remove('none');
    info1.classList.remove('none');
    info2.classList.remove('none');
    info.classList.add('flex');
    info1.classList.add('flex');
    info2.classList.add('flex');

});

info.addEventListener('click', function () {
    info.classList.remove('flex');
    info.classList.add('none');
});
info1.addEventListener('click', function () {
    info1.classList.remove('flex');
    info1.classList.add('none');
});
info2.addEventListener('click', function () {
    info2.classList.remove('flex');
    info2.classList.add('none');
});

const ul = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
li1.textContent = 'HTML';
li2.textContent = 'JavaScript';
li3.textContent = 'Python';
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
box.appendChild(ul);