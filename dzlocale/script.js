const input1 = document.getElementById('input1');
const textarea = document.getElementById('textarea');
const el1 = document.getElementById('el1');
const el2 = document.getElementById('el2');
const el3 = document.getElementById('el3');
const el4 = document.getElementById('el4');
const el5 = document.getElementById('el5');



let info = "";
input1.addEventListener('input', (event) => {
    info = event.target.value;
    localStorage.setItem('info', info);
});

input1.value = localStorage.getItem('info');



let id;

el1.addEventListener('click', function () {
    id = 1;
    localStorage.setItem('id', id);
    show(id);
})
el2.addEventListener('click', function () {
    id = 2;
    localStorage.setItem('id', id);
    show(id);
})
el3.addEventListener('click', function () {
    id = 3;
    localStorage.setItem('id', id);
    show(id);
})
el4.addEventListener('click', function () {
    id = 4;
    localStorage.setItem('id', id);
    show(id);
})
el5.addEventListener('click', function () {
    id = 5;
    localStorage.setItem('id', id);
    show(id);
})

id = Number(localStorage.getItem('id'));
show(id);
function show(id) {
    switch (id) {
        case 1:
            textarea.textContent = `Останній переглянутий: Ноутбук`;
            break;
        case 2:
            textarea.textContent = `Останній переглянутий: Планшет`;
            break;
        case 3:
            textarea.textContent = `Останній переглянутий: Смартфон`;
            break;
        case 4:
            textarea.textContent = `Останній переглянутий: Приставка`;
            break;
        case 5:
            textarea.textContent = `Останній переглянутий: Годинник`;
            break;
        default:
            textarea.textContent = `Останній переглянутий: None`;
    }
}



const time = document.getElementById("time");
const start = document.getElementById("start");

let duration = 60;
let interval;

start.addEventListener("click", function () {
    let startTime = Date.now();
    localStorage.setItem("startTime", startTime);

    startTimer();
});

function startTimer() {
    clearInterval(interval);

    interval = setInterval(function () {
        let startTime = localStorage.getItem("startTime");
        let passed = Math.floor((Date.now() - startTime) / 1000);
        let left = duration - passed;

        if (left <= 0) {
            time.textContent = "Час вийшов";
            clearInterval(interval);
            localStorage.removeItem("startTime");
        } else {
            time.textContent = `Залишилось: ${left} сек`;
        }
    }, 1000);
}

if (localStorage.getItem("startTime")) {
    startTimer();
}

const search = document.getElementById('search');
const searchbtn = document.getElementById('searchbtn');
const historyList = document.getElementById('historyList');

let history = JSON.parse(localStorage.getItem("history")) || [];

render();

searchbtn.addEventListener('click', function () {
    let value = search.value;

    history.push(value);

    if (history.length > 5) {
        history.shift();
    }
    localStorage.setItem("history", JSON.stringify(history));

    render();

    search.value = "";
});

function render() {
    historyList.innerHTML = "";

    for (let i = 0; i < history.length; i++) {
        let li = document.createElement("li");
        li.textContent = history[i];
        historyList.appendChild(li);
    }
}