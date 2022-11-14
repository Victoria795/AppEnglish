let indicator = document.getElementById('js_indicator'),
    clickBox = document.querySelector('.box'),
    indicatorNumber = 1; 
function disable(button){
        button.setAttribute('disabled', true);
}
function addScore(points){
        currentScore += points;
    }
function subScore(points){
        currentScore -= points;
}
function counter() { if(indicatorNumber < 20){ 
    indicatorNumber++;
    indicator.innerHTML = indicatorNumber;
    setStorage('indicator', indicatorNumber);
    };}  
function removeClass() {
        for(let b = 0;b<clickBox.children.length;b++){
        clickBox.children[b].classList.remove('btn-wrong');
        clickBox.children[b].classList.remove('btn-right');
        clickBox.children[b].removeAttribute('disabled');
    }
    };
function afterAnswerClick(){
        i = Math.floor(Math.random() * 20);
        setTimeout(counter, 1000);
        buttons.forEach(disable);
    }
    