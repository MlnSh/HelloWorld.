const num = Math.floor(Math.random() * 100) + 1;
function game_1() {
    // const num = Math.floor(Math.random() * 100) + 1;
    let userTry = Number(prompt('угадай число от 1 до 100'));
    if (userTry < num) {
        alert('не угадал, загаданное число больше');
        game_1();
    }
    else if (userTry > num) {
        alert('не угадал, загаданное число меньше');
        game_1();
    }
    else alert('поздравляю, угадал')
}


function smallerNumber(a, b) {
    if (a > b) {
        return b;
    }
    else {
        return a
    }
}
console.log(smallerNumber(6, 9))


function evenNumber(a) {
    if (a % 2 == 0) {
        console.log('число четное');
    }
    else {
        console.log('число нечетное')
    }
}

console.log(evenNumber(7))

let squareNumber = (a) => {
    let result = (a * a);
    console.log(result);
}
console.log(squareNumber(54))

let sqNum = (a) => {
    return a * a;
}

function howOld() {
    let age = prompt('введите ваш возраст');
    if (age <= 0) {
        alert('Вы ввели неправильное значение');
    }
    else if (age > 0 && age <=12) {
        alert('Привет, друг!');
    }
    else {
        alert('Добро пожаловать');
    }
}


// Задание 5
function isNan(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return('Одно или оба значения не являются числом');
    }
    else {
        return(a * b);
    }
}



function checkNum(num) {
    const num = Number(prompt('введите число'));
    if (isNaN(num)) {
        return('Переданный параметр не является числом');
    }
    else {
        return(`${num} в кубе равняется ${num * num * num}`)
    }
}


function getArea() {
    return(Math.PI * this.radius * this.radius);
}
function getPerimeter() {
    return(2 * this.radius * Math.PI);
}

const circle1 = {
    radius: 12,
    getArea,
    getPerimeter, 
};

const circle2 = {
    radius: 2,
    getArea,
    getPerimeter,
};