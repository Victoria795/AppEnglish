nameStorage();
buttonContinue.addEventListener('click',buttonContinueSwitch);
buttonStart.addEventListener('click',()=>{
   wordsBlock.classList.remove('non-active');
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
        btn1.innerHTML = wordStock[i].variants[0];
        btn2.innerHTML = wordStock[i].variants[1];
        btn3.innerHTML = wordStock[i].variants[2];
        btn4.innerHTML = wordStock[i].variants[3];
        btn5.innerHTML = wordStock[i].variants[4];
        btn6.innerHTML = wordStock[i].variants[5];
    }
clickBox.addEventListener('click', function(event) {
        if (event.target.dataset.btn != undefined){  
        execute();
        scoreCount();
        if(indicatorNumber<20){setTimeout(function(){appelation();
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
       if(wordStock[i].answer === index){
        btn.classList.add('btn-right');
       }
       else{
        btn.classList.add('btn-wrong');
       } 
    });
}
let score = document.getElementById('js_score'),
    currentScore = 0;
function scoreCount() {
    let correctAnswer = event.target.closest('.btn-right');
    let wrongAnswer = event.target.closest('.btn-wrong');
    let passButton = event.target.closest('.box__pass');
    if (correctAnswer){
    addScore(15);
    i = Math.floor(Math.random() * 20);
    setTimeout(counter, 1000);
    buttons.forEach(disable);
}
   else if(wrongAnswer||passButton){
    subScore(15);
    i = Math.floor(Math.random() * 20);
    setTimeout(counter, 1000);
    buttons.forEach(disable);
   }
   score.innerHTML = currentScore;
   sessionStorage.setItem('score', currentScore);
};

  