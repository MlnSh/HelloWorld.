for (let i = 0; i < 2; i++) {
    console.log('Привет');
}
for (let a = 1; a <= 5; a++) {
    console.log(a);
}
for (let c = 7; c <= 22; c++) {
    console.log(c);
}

const obj = {
    "Коля" : '200',
    "Вася" : '300',
    "Петя" : '400'
}
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`)
}
let n = 1000;
let num = 0;
while (n >= 50) {
    n /= 2;
    num++;
}
console.log(n);
console.log(num);


let p = 5;
do {
    console.log('Сегодня пятница, ' + p +'-е число. Необходимо подготовить отчет.');
    p += 7;
} while (p <= 31);
