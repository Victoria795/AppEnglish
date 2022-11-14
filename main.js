nameStorage();
buttonContinue.addEventListener('click',()=>{
    switchPages(themeBlock);
    setStorage('userName', userName.value);
});
buttonStart.addEventListener('click',()=>{
   switchPages(wordsBlock);
   scoreStorage();
   //indicatorStorage();
   appelation();
   execute();
});
let i = Math.floor(Math.random() * 20);
let checkWord = document.querySelector('.box__check-word'),
    btn1 = document.querySelector('.btn1'),
    btn2 = document.querySelector('.btn2'),
    btn3 = document.querySelector('.btn3'),
    btn4 = document.querySelector('.btn4'),
    btn5 = document.querySelector('.btn5'),
    btn6 = document.querySelector('.btn6');  
function appelation () {
        checkWord.innerHTML = wordStock[i].word;
        btnsHTML(btn1, 0);
        btnsHTML(btn2, 1);
        btnsHTML(btn3, 2);
        btnsHTML(btn4, 3);
        btnsHTML(btn5, 4);
        btnsHTML(btn6, 5);
    }
clickBox.addEventListener('click', function(event) {
        if (event.target.dataset.btn != undefined){  
        execute();
        scoreCount();
        if(indicatorNumber<20){
        setTimeout(function(){
        appelation();
        removeClass();},1000);}     
  }
});
let btns = document.querySelectorAll('.btn');
let buttons = document.querySelectorAll('[data-btn]');
function execute() {
    btns.forEach(checkAnswer);
}
function checkAnswer(btn,index) { 
    btn.addEventListener('click',()=>{
        wordStock[i].answer === index ? btn.classList.add('btn-right') : btn.classList.add('btn-wrong');
})
}
let score = document.getElementById('js_score'),
    currentScore = 0;
function scoreCount() {
    let correctAnswer = event.target.closest('.btn-right');
    let wrongAnswer = event.target.closest('.btn-wrong');
    let passButton = event.target.closest('.box__pass');
    if (correctAnswer){
    addScore(15);
    afterAnswerClick();
}
   else if(wrongAnswer||passButton){
    subScore(15);
    afterAnswerClick();
   }
   score.innerHTML = currentScore;
   setStorage('score', currentScore);
};


  