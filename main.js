//Переключение между страницами
let  buttonContinue = document.querySelector('.container__continue'),
     buttonStart = document.getElementById('js__button-start'),   
     themeBlock = document.getElementById('js__theme-block'),
     wordsBlock = document.getElementById('js__words-block')
let userName = document.querySelector('.container__input-name');

buttonContinue.addEventListener('click', function(){
    themeBlock.classList.remove('non-active');
    sessionStorage.setItem('userName', userName.value);
}
);
buttonStart.addEventListener('click', function(){
   wordsBlock.classList.remove('non-active');
   appelation();
   execute();
}
);
let indicator = document.getElementById('js_indicator'),
    clickBox = document.querySelector('.box');
let indicatorNumber = 1; 
let i = 0;
clickBox.addEventListener('click', function(event) {
        if (event.target.dataset.btn != undefined){ 
        i++; 
        execute();
        scoreCount();
        setTimeout(function(){appelation();
        counter();
        removeClass();},1000);   
  }
});
function execute() {
    var btns = document.querySelectorAll('.btn');
    btns.forEach(checkAnswer);
}
function checkAnswer(btn,index) { 
    btn.addEventListener('click',()=>{
       if(wordStock[i].answer === index){
        btn.classList.add('btn-right');
       }
       else{
        btn.classList.add('btn-wrong');
       } 
        sessionStorage.setItem('answer', wordStock[i].variants[index]);
    });
}
//счет
let score = document.getElementById('js_score');
let currentScore = 0; 
function scoreCount() {
    let rightAnswer = event.target.closest('.btn-right');
    let wrongAnswer = event.target.closest('.btn-wrong');
    let passButton = event.target.closest('.box__pass');
    if (rightAnswer){
    currentScore += wordStock[i].scores;

}
   else if(wrongAnswer||passButton){
    currentScore -= wordStock[i].scores;
   }
   score.innerHTML = currentScore;
};
//номер индикатора
function counter() { if(indicatorNumber < 20){ 
    indicatorNumber++;
    indicator.innerHTML = indicatorNumber;
    };}  
function removeClass() {
        for(let b = 0;b<clickBox.children.length;b++){
        clickBox.children[b].classList.remove('btn-wrong');
        clickBox.children[b].classList.remove('btn-right');
    }
    };
// связывание кнопок со словами
let checkWord = document.querySelector('.box__check-word'),
    btn1 = document.querySelector('.btn1'),
    btn2 = document.querySelector('.btn2'),
    btn3 = document.querySelector('.btn3'),
    btn4 = document.querySelector('.btn4'),
    btn5 = document.querySelector('.btn5'),
    btn6 = document.querySelector('.btn6');  
function appelation () {
        checkWord.innerHTML = wordStock[i].word;
        btn1.innerHTML = wordStock[i].variants[0];
        btn2.innerHTML = wordStock[i].variants[1];
        btn3.innerHTML = wordStock[i].variants[2];
        btn4.innerHTML = wordStock[i].variants[3];
        btn5.innerHTML = wordStock[i].variants[4];
        btn6.innerHTML = wordStock[i].variants[5];
    }