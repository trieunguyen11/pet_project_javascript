var index;
var strUnderlined =[];
var answer;
var turnNumber = 10;
function myButtons(){
  for(var i = 0; i < 26; i++){
  element = document.createElement("button");
  element.disabled = false;
  element.innerHTML = String.fromCharCode(i + 65);
  element.style.margin = "5px";
  var btnDiv = document.getElementById("btn");
  check();
  btnDiv.appendChild(element);
}
             }
function check(){
  element.onclick= function(){
    var checkTurn;
    var guess = this.innerHTML.toLowerCase();
    console.log("guess laf: " + guess);
    this.onclick= null;
    for(var i = 0; i< answer.length; i++){
      if(guess === answer[i]){
        strUnderlined[i] = guess;
        this.disabled = true;       document.getElementById("crossword").innerHTML = strUnderlined.join(' ');
        checkTurn = true;
      } 
    }
    if (!checkTurn){
      turnNumber--;
    }
    ftTurnNumber();
  }
}
var arrQuestion = ["capital in vietnam is: ","capital in thailand is: "];
var arrAnswer = ['hanoi','bangkok'];
var arrSuggestions = ["in north of viet nam","in north of thai land"];

function clickPlay(){
  strUnderlined = [];
  var random = Math.random();
  if(random >= 0.5){
    index = 1;
  } else{
    index = 0;
  }
  document.getElementById("categori").innerHTML = arrQuestion[index];
  for(var i = 0; i< arrAnswer[index].length;i++ ){
    strUnderlined.push('_ ');
  }
  answer = arrAnswer[index].split('');
  
 document.getElementById("crossword").innerHTML = strUnderlined.join(' ');
 var list = document.getElementById("btn");
  while(list.hasChildNodes()){
    list.removeChild(list.firstChild);
  }
  turnNumber = 10;
  ftTurnNumber();
  myButtons();
}

function clickHint(){
  document.getElementById("lives").innerHTML = arrSuggestions[index];
}

function ftTurnNumber(){
  if(strUnderlined.length > 0){
    var index = 0;
    for(var i = 0; i < strUnderlined.length; i++){
      if(strUnderlined[i] == "_ "){
        index ++;
      }
    }
    if(index = 0){
      document.getElementById("turn").innerHTML = "YOU ARE CHAMPION";
    }
  }
    if(turnNumber > 0){
document.getElementById("turn").innerHTML = "Ban co " + turnNumber + " luot choi";}else if (turnNumber == 0){
  document.getElementById("turn").innerHTML = "GAME OVER";
}};


