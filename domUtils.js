let buttonContinue = document.querySelector('.container__continue'),
     buttonStart = document.getElementById('js__button-start'),   
     themeBlock = document.getElementById('js__theme-block'),
     wordsBlock = document.getElementById('js__words-block'),
     userName = document.querySelector('.container__input-name');
function nameStorage(){
    if(userName.value==="")userName.value = window.sessionStorage.getItem('userName');
}
function scoreStorage(){
    currentScore = Number(window.sessionStorage.getItem('score'));
    score.innerHTML = currentScore;
}
/*function indicatorStorage(){
    indicatorNumber = sessionStorage.getItem('indicator');
    indicator.innerHTML = indicatorNumber;
}*/
function switchPages(item){
    item.classList.remove('non-active');
}
function btnsHTML(button, variantNum){
    button.innerHTML = wordStock[i].variants[variantNum];
}
function setStorage(key, name){
    sessionStorage.setItem(key, name);
}
