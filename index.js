// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12.
<p>Изучите html код внутри div-12-wrapper.</p>
<p>1. Добавьте на кнопку nex событие click, touch так, чтобы при событии запускалась функция nextFunction и активным становилось изображение следующее за выделенным классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>2. Добавьте на кнопку prev событие click, touch так, чтобы при событии запускалась функция prevFunction и активным становилось изображение до выделенного классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>3. Учтите краевые эффекты - когда мы доходим до конца или начала, то нажатие кнопки должно приводить к перемещению рамки в начало или конец изображений.</p>
<p>4. Добавьте кнопку reset (функция resetFunction), нажатие которой сбрасывает активное изображение на нулевое. </p>
<p>5. Добавьте во все действия следующее - в изображении img-12-max заменяется src на активную. Т.е. произошло событие - заменилась главная картинка.</p>
*/

const images = document.querySelectorAll('.img-12-min');
let count = 0; // переменная, которая указывает на номер активного изображения в images
const imagesMAX = document.querySelector('.img-12-max');

const next = document.querySelectorAll('.next');
next[0].onclick = nextFunction;
next[0].ontouch = nextFunction;
const prev = document.querySelectorAll('.prev');
prev[0].onclick = prevFunction;
prev[0].ontouch = prevFunction;

const reset = document.querySelector('.reset');
reset.onclick = resetFunction;
reset.ontouch = resetFunction;



function nextFunction() {
    if (count === images.length - 1) {
        count = 0;
    } else {
        count++;
        images[count - 1].classList.remove('active-img');
    }
    if (count === 0) {
        images[images.length - 1].classList.remove('active-img');
    }
    doActiveSlide();
}

function prevFunction() {
    if (count === 0) {
        count = images.length - 1;
    } else {
        count--;
        images[count + 1].classList.remove('active-img');
    }
    if (count === images.length - 1) {
        images[0].classList.remove('active-img');
    }
    doActiveSlide();
}

function resetFunction() {
    images[count].classList.remove('active-img');
    count = 0;
    doActiveSlide();
}

function doActiveSlide() {
    let imgAttribute = images[count].getAttribute('src');
    imagesMAX.setAttribute('src', imgAttribute);
    images[count].classList.add('active-img');
}