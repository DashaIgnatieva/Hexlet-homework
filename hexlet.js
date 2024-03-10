// const playRound = () => {
//     const makeNumber = () => Math.round(Math.random() * 100);

//     const isEven = (number) => number % 2 === 0;

//     const number = makeNumber();

//     const userAnswer = prompt(`Является ли чило ${number} четным? Ответьте "да" или "нет".`);
//     const correctAnswer = isEven(number) ? 'да' : 'нет';

//     console.log(number, correctAnswer, userAnswer)

//     return userAnswer && userAnswer.toLowerCase().trim() === correctAnswer;
// };

const playRound = () => {
    const makeNumber = () => Math.round(Math.random() * 100);

    const numberOne = makeNumber();
    const numberTwo = makeNumber();

    const userAnswer = prompt(`Какова сумма числа ${numberOne} и числа ${numberTwo}?`);
    const correctAnswer = numberOne + numberTwo

    console.log(`Числа: ${numberOne}, ${numberTwo}\nПравильный ответ: ${correctAnswer}\nОтвет пользователя: ${userAnswer}`)

    return userAnswer && userAnswer.toLowerCase().trim() === correctAnswer.toString();
}

const playGame = () => {
    for (let i = 0; i < 3; i++) {
        const isCorrect = playRound();

        if (isCorrect) {
            alert('Ответ верный!');
        } else {
            alert('Ответ не верный! Вы проиграли!');
            return;
        };
    };
    alert('Вы выиграли!')
};

const button = document.querySelector('button'); //создали сам обьект кнопки
button.addEventListener('click', playGame);  // слушаем кнопку и при клике включаем игру