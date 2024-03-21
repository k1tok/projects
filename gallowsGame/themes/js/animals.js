const wordsBox = document.querySelector('.randomWord');
const lettersBox = document.querySelector('.letters');
const attempts = document.querySelector('.attempts');
const gallowSteps = document.querySelectorAll(".gallowSteps");
let count = 0;
let checkLength = 0;

const word = ['л', 'е', 'в'];


for (let i = 0; i < word.length; i++) {
    const div = document.createElement('div');
    div.classList.add('word');
    div.classList.add(`W`);
    wordsBox.append(div);
}
const guessWord = document.querySelectorAll('.W');


lettersBox.addEventListener('click', function (e) {
    const target = e.target;
    if ((target.innerHTML).length > 1) return;



    for (let i = 0; i < word.length; i++) {

        if ((target.innerHTML).toLowerCase() == word[i].toLowerCase()) {
            guessWord[i].innerHTML = `<span>${target.innerHTML}</span>`;
            checkLength++;
            if(checkLength == word.length) setTimeout(() => {
                alert("Вы победили");
                location.reload();
            }, 10);
            return;
        }

    };



    gallowSteps[count].hidden = !gallowSteps[count].hidden;
    gallowSteps[count + 1].hidden = !gallowSteps[count + 1].hidden;

    count++;
    attempts.innerHTML = count;

    if (count == 6) {
        setTimeout(() => alert('Вы проиграли!'), 10);
        location.reload();
    }

});

