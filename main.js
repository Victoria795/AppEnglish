let  buttonStart = document.getElementsByClassName('container__start'),   
     hiddenBlock = document.getElementsByClassName('non-active');
function switchPages () {
     hiddenBlock[0].classList.remove('non-active');
};
buttonStart[0].addEventListener('click', switchPages);

let indicator = document.getElementById('js_indicator');
let wordButton = document.querySelectorAll('.btn');
let indicatorNumber = 2;
function counter() { if(indicatorNumber < 21){ 
    indicator.innerHTML = indicatorNumber;
    indicatorNumber++;}
};

for (let i = 0; i < wordButton.length; i++){
wordButton[i].addEventListener('click', counter);};

let wordStock = [{word: 'Occasionally', answer: 4, variants: ['Часто', 'Случайно', 'Импульсивно', 'Одинаково', 'Иногда', 'Ежедневно']}, 
                 {word: 'Dedication', answer: 3, variants: ['Узнавание', 'Посвящение', 'Одобрение', 'Отстаивание', 'Святость', 'Оторванность']},
                {word: 'Regard', answer: 2, variants: ['Выход', 'Восхищение', 'Уважение', 'Охрана', 'Талант', 'Смущение']}, 
                {word: 'Admire', answer: 1, variants: ['Узнавать', 'Восхищаться', 'Означать', 'Выскакивать', 'Поклоняться', 'Оттачивать']}, 
                {word: 'Inspiration', answer: 5, variants: ['Дыхание', 'Утомление', 'Превращение', 'Отопление', 'Ознакомление', 'Вдохновение']}, 
                {word: 'Frequently', answer: 0, variants: ['Часто', 'Сознательно', 'Редко', 'Фрикативно', 'Осмотрительно', 'Ежедневно']},
                {word: 'Rivalry', answer: 3, variants: ['Ярость', 'Ожесточение', 'Очищение', 'Соперничество', 'Отчуждение', 'Дуэль']}, 
                {word: 'Impartial', answer: 4, variants: ['Честолюбивый', 'Частичный', 'Разделяющий', 'Уходящий', 'Беспристрастный', 'Относительный']},
                {word: 'Imagination', answer: 0, variants: ['Воображение', 'Мечтания', 'Оскорбление', 'Восхищение', 'Колдовство', 'Утопия']}, 
                {word: 'Emphasize', answer: 5, variants: ['Симпатизировать', 'Отвечать', 'Олицетворять', 'Переходить', 'Превращаться', 'Подчеркивать']},
                {word: 'Agility', answer: 2, variants: ['Твердость', 'Агитация', 'Быстрота', 'Гибкость', 'Отвращение', 'Крайность']}, 
                {word: 'Sincere', answer: 1, variants: ['Часовой', 'Искренний', 'Симпатичный', 'Выборочный', 'Радостный', 'Умоляющий']},
                {word: 'Determine', answer: 3, variants: ['Объединять', 'Прицеливаться', 'Узнавать', 'Определять', 'Оставлять', 'Распределять']}, 
                {word: 'Appreciate', answer: 4, variants: ['Обманывать', 'Присыпать', 'Верить', 'Обменивать', 'Ценить', 'Уважать']},
                {word: 'Relatively', answer: 0, variants: ['Относительно', 'Случайно', 'Импульсивно', 'Одинаково', 'Смешно', 'Невыносимо']}, 
                {word: 'Fringe', answer: 1, variants: ['Обман', 'Предел', 'Холодильник', 'Начало', 'Мороз', 'Перспектива']},
                {word: 'Drastic', answer: 2, variants: ['Засушливый', 'Случайный', 'Решительный', 'Уходящий', 'Пустынный', 'Трескающийся']}, 
                {word: 'Conscious', answer: 5, variants: ['Мудрый', 'Честолюбивый', 'Заносчивый', 'Гордый', 'Амбициозный', 'Сознательный']},
                {word: 'Heritage', answer: 4, variants: ['Надпись', 'Клетка', 'Забор', 'Законность', 'Наследство', 'Платина']}, 
                {word: 'Carve', answer: 0, variants: ['Вырезать', 'Расти', 'Полировать', 'Забирать', 'Переходить', 'Вызывать']}];
let checkWord = document.getElementsByClassName('box__check-word');
console.log( wordStock[1].word);




