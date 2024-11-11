// let a = '10';
// alert(a);
// a = '20';
// alert(a);
// let year = '2007';
// alert(year);
// let name = 'Brendan Eich';
// alert(name);
// let c = 10;
// let b = 2;
// let sum = c + b;
// let dif = c - b;
// let prod = c * b;
// let quo = c / b;
// alert(`${sum}, ${dif}, ${prod}, ${quo}`);
// let st = 2 ** 5;
// alert(st);
// let q = 9;
// let w = 2;
// let rem = q % w;
// alert(rem);

// let num = 1;
// num += 5;
// num -= 3;
// num *= 7;
// num /= 3;
// num++;
// num--;
// alert(num);

// let age = prompt("Сколько вам лет?")
// alert(age);

// const user = {
//     name: 'Mark',
//     age: 21,
//     isAdmin: true
// }
// let userName = prompt("Ваше имя")
// alert('Привет' +', '+ userName)

let password = 'pass';
let userPassword = prompt('введите пароль');
if (password === userPassword) {
    alert ("Пароль введен верно")
} else {
    alert ('Пароль введен неправильно')
}

let c = -3;
if (c > 0 && c < 10) {
    console.log('Верно');
} else { console.log('Неверно')
}

let d = 6;
let e = 444;
console.log (d > 100 || e > 100 ? 'верно' : 'неверно')

let a = '2';
let b = '3';
alert(Number(a) + Number(b));

var monthNumber = prompt('введите порядковый номер месяца');

switch (monthNumber) {
    case '1':
    case '2':
    case '12':
        console.log('зима');
        break;
    case '3':
    case '4':
    case '5':
        console.log('весна');
        break;
    case '6':
    case '7':
    case '8':
        console.log('лето');
        break;
    case '9':
    case '10':
    case '11':
        console.log('осень');
        break; 
        default:
            console.log('такого месяца нет');     

} 
