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
let f = (n / 2);
while (f >= 50) {
    n / 2;
console.log(f)
}