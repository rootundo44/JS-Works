// Task I

function numbers(x,y){
    if(x > y){
        alert(1)
    }
    else if(y > x){
        alert(-1)
    }
    else{
        alert(0)
    }
}
numbers(1,2)
numbers(2,1)
numbers(2,2)

// Task II

function factorial(x){
    if(x < 0){
        return undefined;
    }
    else if(x === 0 || x === 1){
        return 1;
    }
    else{
        return x * factorial(x - 1);
    }
}
alert(factorial(5))

// Task III

let string = "";
function peretvorennya(x,y,z){
    string = "";
    string = string + x;
    string = string + y;
    string = string + z;
}
peretvorennya(1,2,3);
alert(string);
peretvorennya(4,5,6);
alert(string);

// Task IV

function plosha(a,b){
    if(a > 0 && b > 0){
        return a * b;
    }
    else if(a > 0){
        return a*a;
    }
    else if(b > 0){
        return b*b;
    }
    else{
        return "Error";
    }
}
plosha(6,7);
plosha(-2,4);

// Task V

function goodNumber(x) {
    if (x <= 1) {
        return false;
    }
    let suma = 0;

    for (let i = 1; i <= x / 2; i++) {
        if (x % i === 0) {
            suma += i;
        }
    }

    return suma === x;
}

console.log(goodNumber(6));
console.log(goodNumber(12));

// Task VI

function goodNumber(x) {
    if (x <= 1) {
        return false;
    }
    let suma = 0;

    for (let i = 1; i <= x / 2; i++) {
        if (x % i === 0) {
            suma += i;
        }
    }

    return suma === x;
}

function diapazon(min,max){
    for(let i = min; i <= max;i++){
        if(goodNumber(i)){
            console.log(i);
        }
    }
}

diapazon(1,100);

// Task VII

function time(h, m, s) {
    if (h === undefined) {
        h = "00";
    }
    else if (h < 10) {
        h = "0" + h;
    }
    if (m === undefined) {
        m = "00";
    }
    else if (m < 10) {
        m = "0" + m;
    }
    if (s === undefined) {
        s = "00";
    }
    else if (s < 10) {
        s = "0" + s;
    }
    alert(`${h}:${m}:${s}`);
}
time();
time(10,10,10);
time(5,5,5);