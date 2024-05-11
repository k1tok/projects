const start = document.querySelector('.start');
const reset = document.querySelector('.reset');
const stop = document.querySelector('.stop');
const text = document.querySelector('.text');

const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const textWatch = document.querySelector('.textWatch');
const timeList = document.querySelector('.timeList');

let timerId;

function go(s, m, h) { // seconds minutes hours
    timerId = setInterval(function () {
        if (s == 60) { // если секунды = 60
            s = 0;
            m++; // обновить минуты
        }
        if (m == 60) { // если минуты = 60
            m = 0;
            h++; // обновить часы
        }
        if (h == 24) { // если часы = 24
            s = 0;
            m = 0;
            h = 0;
        }
        // интерфейс
        s < 10 ? seconds.innerHTML = `0${s}` : seconds.innerHTML = s;
        m < 10 ? minutes.innerHTML = `0${m}` : minutes.innerHTML = m;
        h < 10 ? hours.innerHTML = `0${h}` : hours.innerHTML = h;
        s++;
        document.title = `${hours.innerHTML} : ${minutes.innerHTML} : ${seconds.innerHTML}`;
    }, 1000);
}

function end() {
    clearInterval(timerId);
    seconds.innerHTML = '00';
    minutes.innerHTML = '00';
    hours.innerHTML = '00';
    document.title = `${hours.innerHTML} : ${minutes.innerHTML} : ${seconds.innerHTML}`;
}
function timeout() {
    if (start.hasAttribute('active')) { // если секундомер активен
        clearInterval(timerId);
        start.removeAttribute('active');
        setTimeout(() => start.setAttribute('pause', '')); // необходимо для макро активации, после микропроцессов
    }
    if (start.hasAttribute('pause')) { // если стоит на паузе
        go(+seconds.innerHTML, +minutes.innerHTML, +hours.innerHTML);
        start.setAttribute('active', '');
        start.removeAttribute('pause', '');
    }
}

function writeTime() {
    if (textWatch.hidden) {
        textWatch.hidden = false;
    }
    const li = document.createElement('li');
    li.innerHTML = `${hours.innerHTML} : ${minutes.innerHTML} : ${seconds.innerHTML} `;
    li.classList.add('record')
    timeList.append(li);
}

start.addEventListener('click', () => {
    go(0, 0, 0); // начало работы секундомера
    start.setAttribute('disabled', '');
    start.setAttribute('active', '');
});

reset.addEventListener('click', () => {
    end(); // конец работы секундомера 
    start.removeAttribute('disabled'); // вернуть активную кнопку начала работы
    start.hasAttribute('pause') ? start.removeAttribute('pause') : null; // убрать аттрибут паузы

    textWatch.hidden = true;
    document.querySelectorAll('.record').forEach(e => e.remove());
});

stop.addEventListener('click', () => {
    timeout(); // пауза секундомера
});

text.addEventListener('click', () => {
    writeTime();
})

document.onkeydown = function (event) {
    if(event.code == 'Space'){
        
    }
}