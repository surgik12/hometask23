let tryCount = 10;

let variant = 1 + Math.floor(Math.random() * 100);

let endGame = false;

function start(){
    if (endGame == true){
        return;
    }

    let number = +userNumber.value;

    if(number > 100){
        number = 100;
    }

    if (tryCount == 1){
        compNumber.innerHTML = `Игра окончена! ${variant}`;
        return;
    } else {
        userVariant.innerHTML = `${number}`;
    }

    tryCount--;
    console.log(tryCount);

    if (variant > number){
        compNumber.innerHTML = `Ваше число меньше загаданного.`;
    } else if(variant < number){
        compNumber.innerHTML = `Ваше число больше загаданного.`;
    } else if(variant = number){
        compNumber.innerHTML = `Поздравляем вы выиграли! Это было ${variant}`;
        endGame = true;
    }

    userTry.innerHTML = `${tryCount}`;
    console.log(variant, number);
}
