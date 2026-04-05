const switchbutton = document.getElementById('switchbutton');
const task1 = document.getElementById('task1');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const input4 = document.getElementById('input4');
const button1 = document.getElementById('button1');
const checkpass = document.getElementById('checkpass');
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const btn = document.getElementById("btn")
const clicksText = document.getElementById("clicks")
const timeText = document.getElementById("time")
const startbtn = document.getElementById('startbtn');



switchbutton.addEventListener('click', function () {
    task1.classList.toggle('darktheme');
});

button1.addEventListener('click', function () {
    let num1 = Number(input1.value);
    let num2 = Number(input3.value);
    let znak = input2.value;
    let result;

    if (znak == "+") {
        result = num1 + num2;
        answer1.textContent = `Відповідь: ${result}`;
    }
    else if (znak == "-") {
        result = num1 - num2;
        answer1.textContent = `Відповідь: ${result}`;
    }
    else if (znak == "*") {
        result = num1 * num2;
        answer1.textContent = `Відповідь: ${result}`;
    }
    else if (znak == "/") {
        if (num2 == 0) {
            answer1.textContent = `Ділення на 0 неможливе!`;
        }
        else {
            result = num1 / num2;
            answer1.textContent = `Відповідь: ${result}`;
        }
    }
    else {
        answer1.textContent = `Error!`;
    }
});

checkpass.addEventListener('click', function () {
    let password = input4.value;
    if (password == "") {
        answer2.textContent = "Строка пароля пуста, вхід неможливий!";
    }
    else if (password.length < 3) {
        answer2.textContent = "Пароль повинен бути від 3 символів!";
    }
    else {
        answer2.textContent = "Вхід успішний!";
    }
});

let clicks = 0;
let time = 5;
let timer;

btn.addEventListener("click", function () {
    clicks++;
    clicksText.textContent = `Кліки: ${clicks}`;
})
startbtn.addEventListener('click',function(){
    clicks = 0;
    time = 5;

    clicksText.textContent = `Кліки: ${clicks}`;
    timeText.textContent = `Час: ${time} секунд`;

    clearInterval(timer);

    timer = setInterval(function () {
        time--;
        timeText.textContent = `Час: ${time} секунд`;

        if (time <= 0) {
            clearInterval(timer);
            alert(`Гру завершено! Кліків: ${clicks}`);
        }
    }, 1000);
});