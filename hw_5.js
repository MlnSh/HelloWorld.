let num = 87;
function game_1() {
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
    else if (a < b) {
        return b;
    }
    else {
        return a
    }
}
console.log(smallerNumber(6, 9))
