// задание 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 console.log(people.sort((a, b) => a.age - b.age)) 

// задание 2
function isPositive(item) {
    if (item >= 0) {
        return item;
    }
    }
    function isMale(el) {
        if (el.gender === 'male') {
            return el;
        }
    }
    function filter(arr, ruleFunction) {
        const result = [];

        for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i])) {
            result.push(ruleFunction(arr[i]))
        }
    }
    return result
}
    console.log(filter([3, -4, 1, 9], isPositive));
    
    const people_2 = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
    
    console.log(filter(people_2, isMale));
    
// задание 3

let myDate = new Date();
let timerId = setInterval(() => console.log(myDate), 3000);
setTimeout(() => {clearInterval(timerId); console.log('30 секунд прошло'); }, 1000 * 30);

// задание 4

function delayForSecond(callback) {
    setTimeout(function() {
        callback();
    }, 1000);
    
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})

// задание 5

// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log('Привет, ${name}!');
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => sayHi('Глеб'))