const wordsBox = document.querySelector('.randomWord');
const lettersBox = document.querySelector('.letters');
const attempts = document.querySelector('.attempts');
const gallowSteps = document.querySelectorAll(".gallowSteps");

let count = 0; //* Счётчик попыток
let checkLength = 0; //* Проверка длины конечного слова

const wordbook = [
    "россия", "франция", "испания", "италия", "канада", "оаэ", "юар",
    "китай", "япония", "сша", "мексика", "бразилия", "аргентина", "англия",
    "германия", "латвия", "литва", "армения", "грузия"
];

let chooseWord = wordbook[Math.floor(Math.random() * wordbook.length)]; //* Рандомно выбранное слово

function generateWord() { //* Функция для генерации слова в DOM-дереве
    for (let i = 0; i < chooseWord.length; i++) {
        const div = document.createElement('div');
        div.classList.add('word');
        div.classList.add(`W`);
        wordsBox.append(div);
    };
};

generateWord();

let guessWord = document.querySelectorAll('.W'); //* Массив блоков для буква выбранного слова



lettersBox.addEventListener('click', function (e) {
    const target = e.target;
    if ((target.innerHTML).length > 1) return;

    let foundMatch = false; //* Флаг проверки совпадения

    for (let i = 0; i < chooseWord.length; i++) { //* Проверка победил ли человек

        if ((target.innerHTML).toLowerCase() == chooseWord[i].toLowerCase()) {
            guessWord[i].innerHTML = `<span>${target.innerHTML}</span>`;
            target.classList.add('disabled');
            checkLength++;
            foundMatch = true;

            if (checkLength == chooseWord.length) {
                setTimeout(() => {
                    alert("Вы победили");
                    location.reload(); //* Перезагрузка для начала новой игры
                }, 100);
            };

        };
    };

    if (!foundMatch) {
        target.classList.add('disabled');
        gallowSteps[count].hidden = !gallowSteps[count].hidden; //* Смена фотографий виселицы в случае неправильно выбранной буквы
        gallowSteps[count + 1].hidden = !gallowSteps[count + 1].hidden;

        count++; //* Пополнение счётчика попыток

        if (count == 6) { //* Обработка поражения
            setTimeout(() => {
                alert(`Вы проиграли! Загаднное слово: ${chooseWord.toUpperCase()}`);
                location.reload();
            }, 100);

        };
    };

});