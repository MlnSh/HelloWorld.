// игра 1
const randomNum = Math.floor(Math.random() * 100) + 1;
function game_1() {
    // const num = Math.floor(Math.random() * 100) + 1;
    let userTry = Number(prompt('угадай число от 1 до 100'));
    if (userTry < randomNum) {
        alert('не угадал, загаданное число больше');
        game_1();
    }
    else if (userTry > randomNum) {
        alert('не угадал, загаданное число меньше');
        game_1();
    }
    else alert('поздравляю, угадал')
}

// игра 2

function genRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function genTask() {
    const randomNum_1 = genRandomNum(1, 100);
    const operations = ['+', '-', '*', '/'];
    const oper = operations[genRandomNum(0, operations.length - 1)];
    const randomNum_2 = genRandomNum(1, 100);
    let userAnswer = prompt(`Решите задачу: ${randomNum_1} ${oper} ${randomNum_2}`);
    let correctAnswer;
    switch (oper) {
        case '+':
            correctAnswer = randomNum_1 + randomNum_2;
            break;
        case '-':
            correctAnswer = randomNum_1 - randomNum_2;
            break;
        case '*':
            correctAnswer = randomNum_1 * randomNum_2;
            break;
        case '/':
            correctAnswer = (randomNum_1 / randomNum_2).toFixed(1);
            break;
    }
    if (Number(userAnswer) === correctAnswer) {
        alert('Верно');
    }
    else {
        alert('Неверно')
    }
}
