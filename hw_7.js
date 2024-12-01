// задание 1
let str = 'js';
console.log(str.toUpperCase());
// задание 2
function newArr(array, str) {
    const lowerCaseStr = str.toLowerCase();
    let arr = array.filter(item => item.toLowerCase().startsWith(lowerCaseStr));
    console.log(arr);
}
// задание 3
num = 32.58884;
console.log(`округленное до меньшего целого: ${Math.floor(num)}`);
console.log(`округленное до большего целого: ${Math.ceil(num)}`);
console.log(`округленное до ближайшего целого:${Math.round(num)}`);

// задание 4
let numbersList = [52, 53, 49, 77, 21, 32];
console.log(`минимальное значение: ${Math.min(...numbersList)}`);
console.log(`максимальное значение: ${Math.max(...numbersList)}`);

// задание 5
console.log(Math.floor((Math.random() * 10) + 1));

// задание 6
function fromNumberToArray(num) {
    const arrLenght = Math.floor(num / 2);
    let newArr = [];
    for (let i = 0; i < arrLenght; i++) {
        const Number = Math.round(Math.random() * num);
        newArr.push(Number);
    }
    console.log(newArr);
}

// задание 7
function twoNumbers(num1, num2) {
    let newNum = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
    console.log(newNum);
}

// задание 8
let today = new Date();
console.log(today);

// задание 9
let currentDate = new Date();
let days73 = 73 * 24 * 60 * 60 * 1000;
let futureDate = new Date(currentDate.getTime() + days73); 
console.log(futureDate);

// задание 10
function todayDate() {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг",
        "Пятница", "Суббота"];
        const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    let ourDate = new Date();
    let fullDate = "Дата: " + ourDate.getDate() + " " + months[ourDate.getMonth()] + " " + ourDate.getFullYear() + " - это " + days[ourDate.getDay()];
    let fullTime = "Время: " + ourDate.getHours() + ":" + ourDate.getMinutes() + ":" + ourDate.getSeconds();
    console.log(fullDate, fullTime);

}

/