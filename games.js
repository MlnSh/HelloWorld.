// игра 1

function game_1() {
    const randomNum = Math.floor(Math.random() * 100) + 1;
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

// игра "переверни текст"
function mirrorText() {
    let UserText = prompt('Введите текст');
    let mirrorUserText = UserText.toLowerCase().split('').reverse().join('');
    alert(`Ваше слово наоборот: ${mirrorUserText}`);
}

// игра викторина
function game_quiz() {
    let correctAnswer = [];
    const quiz = [
        {
            question: "Какого цвета небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2 // номер правильного ответа
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];
    
    for ( let i = 0; i < quiz.length; i++) {
        let userAnswer = Number(prompt(`${quiz[i].question}\n${quiz[i].options.join('\n')}`));
        if (quiz[i].correctAnswer === userAnswer) {
            correctAnswer.push(1);
        } else { continue
        } 
    }
    alert(`Вы правильно ответили на ${correctAnswer.length} из ${quiz.length} вопросов!`);
}

// игра камень, ножницы, бумага
function rockPaperScissors() {
    let UserChoice = prompt('выберите и введите "камень", "ножницы" или "бумага"');
    let compChoiceIndex = () => Math.floor(Math.random() * 3);
    const variableChoices = ["камень", "ножницы", "бумага"];
    let compChoice = variableChoices[compChoiceIndex()];
    if (UserChoice === compChoice) {
        alert(`Вы выбрали ${UserChoice}, компьютер выбрал ${compChoice}, у вас ничья`)
    } else if (
        (UserChoice === "камень" && compChoice === "ножницы") ||
        (UserChoice === "бумага" && compChoice === "камень") ||
        (UserChoice === "ножницы" && compChoice === "бумага")
    ) {
            alert(`Вы выбрали ${UserChoice}, компьютер выбрал ${compChoice}, вы победили`);
        } else {
            alert(`Вы выбрали ${UserChoice}, компьютер выбрал ${compChoice}, победил компьютер`);
        };
    
}
// игра рандомный цвет
document.addEventListener('DOMContentLoaded', function() {
    generateRandomColor();
});
function generateRandomColor() {
    const backgrounds = document.querySelectorAll('.section-1, .section-2'); 
    const changeColorButton = document.querySelector('.colorChangeButton');
    changeColorButton.addEventListener('click', function() {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        backgrounds.forEach(function(background) {
            background.style.backgroundColor = randomColor;
        });
    });
}
