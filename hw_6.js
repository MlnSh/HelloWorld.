// задание 1
a = [1, 5, 4, 10, 0, 3]
for (let i = 0; i < a.length; i++) {
    console.log(a[i])
    if (a[i] === 10) {
        break
    }
}

// задание 2
b = [1, 5, 4, 10, 0, 3];

console.log(b.indexOf(4));

// задание 3
c = [1, 3, 5, 10, 20];
let joinedC = c.join(" ");
console.log(joinedC);

// задание 4
const d = [];
for (let i = 0; i < 3; i++) {
    const dAdded = [];
    for (let i = 0; i < 3; i++) {
        dAdded.push(1);
    }
    d.push(dAdded);
}
console.log(d);

// задание 5
let e = [1, 1, 1];
for (let i = 0; i < 3; i++) {
    e.push(2);
}
console.log(e);

// задание 6
f = [9, 8, 7, 'a', 6, 5];
fFiltered = [];
  for (let i = 0; i < f.length - 1; i++) {
    fFiltered = f.sort();
  }
  fFiltered = f.pop();

  console.log(f);

// задание 7
g = [9, 8, 7, 6, 5];
let userTry = Number(prompt('угадайте число'));
if (isIncl = g.includes(userTry) == true) {
    alert('угадал');
} else {
    alert('не угадал');
}
// задание 8
h = 'abcdef';
let hSplit = h.split('');
let hSplitReverse = hSplit.reverse();
console.log(hSplitReverse.join(''));

// задание 9
j = [[1, 2, 3],[4, 5, 6]];
console.log(j.flat());

// задание 10
// массив, придуманный мной
k = [2, 3, 5, 6, 7];
sumK = [];
for (let i = 0; i < k.length - 1; i++) {
    sumK.push(k[i] + k[i + 1]);
}

console.log(sumK);

// задание11
// массив, придуманный мной

l = [2, 3, 2, 10];
lSq = [];
for (let i = 0; i < l.length; i++) {
    lSq.push(l[i] * l[i]);
}
console.log(lSq);

// задание 12
// массив, придуманный мной
m = ['fff', 'ee', 'aaaaa'];

function strLength(m) {
    let mLength = [];
  for (let i = 0; i < m.length; i++) {
    mLength.push(m[i].length);
}
return(mLength);
}
console.log(strLength(m));

// задание 13
// массив, придуманный мной
n = [8, 13, -13, 10, 77, -8, -77];
function negative(n) {
    let result = n.filter(num => num < 0);
    return(result);
}
console.log(negative(n));

// задание 14
let arr = [];
let arrEven =[];
for (let i = 0; i < 10; i++) {
    const arrNum = Math.floor(Math.random() * 11);
    arr.push(arrNum);
}
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        arrEven.push(arr[i]);
    }
}
console.log(arr);
console.log(arrEven);

// задание 15
let arr15 = [];

for (let i = 0; i < 6; i++) {
    arr15.push(Math.floor(Math.random() * 11));
}
let arrSum = arr15.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
let result = arrSum / 6;
// также выведу в консоль результаты предыдущих действий
console.log(`Массив: ${arr15}`);
console.log(`Сумма чисел массива: ${arrSum}`);
console.log(`Среднее арифметическое: ${result}`);
