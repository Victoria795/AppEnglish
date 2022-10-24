//Переключение между страницами
let  buttonStart = document.querySelector('.container__start'),   
     hiddenBlock = document.querySelector('.non-active');
function switchPages () {
     hiddenBlock.classList.remove('non-active');
};
buttonStart.addEventListener('click', switchPages);
//Индикатор
let indicator = document.getElementById('js_indicator'),
    clickBox = document.querySelector('.box');
var indicatorNumber = 1;   
    clickBox.addEventListener('click', function(event) {
        if (event.target.dataset.btn != undefined){ 
           counter(); 
      }});
function counter() { if(indicatorNumber < 20){ 
    indicatorNumber++;
    indicator.innerHTML = indicatorNumber;
    };}   
//Проверяемое слово
let checkWord = document.getElementsByClassName('box__check-word');
console.log( wordStock[0].word);




