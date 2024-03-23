const wordsBox = document.querySelector('.randomWord');
const lettersBox = document.querySelector('.letters');
const attempts = document.querySelector('.attempts');
const gallowSteps = document.querySelectorAll(".gallowSteps");

let count = 0; //* Счётчик попыток
let checkLength = 0; //* Проверка длины конечного слова

const wordbook = [
    "лев", "тигр", "собака", "курица", "лошадь", "рыба", "медведь", "птица", "акула", "обезьяна",
    "жираф", "черепаха", "лиса", "ёж", "дельфин", "кенгуру", "кошка", "змея", "панда", "коала"
];
const chooseWord = wordbook[Math.floor(Math.random() * wordbook.length)]; //* Рандомно выбранное слово

function generateWord() { //* Функция для генерации слова в DOM-дереве
    for (let i = 0; i < chooseWord.length; i++) {
        const div = document.createElement('div');
        div.classList.add('word');
        div.classList.add(`W`);
        wordsBox.append(div);
    };
}

generateWord();

const guessWord = document.querySelectorAll('.W'); //* Массив блоков для буква выбранного слова


lettersBox.addEventListener('click', function (e) {
    const target = e.target;
    if ((target.innerHTML).length > 1) return;

    for (let i = 0; i < chooseWord.length; i++) { //* Проверка победил ли человек

        if ((target.innerHTML).toLowerCase() == chooseWord[i].toLowerCase()) {
            guessWord[i].innerHTML = `<span>${target.innerHTML}</span>`;
            checkLength++;
            if (checkLength == chooseWord.length) setTimeout(() => {
                alert("Вы победили");
                location.reload(); //* Перезагрузка для начала новой игры
            }, 10);
            return;
        };

    };

    gallowSteps[count].hidden = !gallowSteps[count].hidden; //* Смена фотографий виселицы в случае неправильно выбранной буквы
    gallowSteps[count + 1].hidden = !gallowSteps[count + 1].hidden;

    count++; //* Пополнение счётчика попыток

    if (count == 6) { //* Обработка поражения
        setTimeout(() => alert('Вы проиграли!'), 10);
        location.reload();
    };

});