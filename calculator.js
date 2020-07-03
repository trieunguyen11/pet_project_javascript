var input = document.getElementById('input');
var numbers = document.querySelectorAll('.numbers div');
var operators = document.querySelectorAll('.operators div');
var result = document.getElementById('result');
var clear = document.getElementById('clear');
var resultDisplay = false;
for (var i = 0; i< numbers.length; i++){
 numbers[i].addEventListener("click",function(e){
 var currentString = input.innerHTML;
 var lastChar = currentString[currentString.length-1];
 if(resultDisplay === false){
 input.innerHTML += e.target.innerHTML;
 } else if(resultDisplay === true && (lastChar === "+" ||lastChar === "-" ||lastChar === "*" ||lastChar === "/")){
 resultDisplay = false;
 input.innerHTML += e.target.innerHTML;
 } else{
 resultDisplay = false;
 input.innerHTML = "";
 input.innerHTML += e.target.innerHTML;
 }
 });
}
for (var i = 0; i< operators.length; i++){
operators[i].addEventListener("click",function(e){
 var currentString = input.innerHTML;
 var lastChar = currentString[currentString.length-1];
 if(lastChar === "+" ||lastChar === "-" ||lastChar === "*" ||lastChar === "/"){
 var newString = currentString.subString(0,currentString[length-1]);
 input.innerHTML = newString;
 } else if(currentString.length == 0){
 console.log("enter a number first");
 } else{
 input.innerHTML += e.target.innerHTML;
 }
});
}
result.addEventListener("click",function(){
  var inputString = input.innerHTML;
  var number = inputString.split(/\+|\-|\×|\÷/g);
  var operator = inputString.replace(/[0-9]|\./g, "").split("");
  console.log(inputString);
  console.log(operator);
  console.log(number);
  console.log("----------------------------");
  var divide = operator.indexOf("÷");
  while(divide != -1){
    number.splice(divide, 2, number[divide]/number[divide + 1]);
    operator.splice(divide,1);
    divide = operator.indexOf("÷");
  }
  
   var multi = operator.indexOf("×");
  while(multi != -1){
    number.splice(multi, 2, number[multi]*number[multi + 1]);
    operator.splice(multi,1);
    multi = operator.indexOf("×");
  }
  
  var plus = operator.indexOf("+");
  while(plus != -1){
    number.splice(plus, 2, parseFloat(number[plus]) + parseFloat(number[plus + 1]));
    operator.splice(plus,1);
    plus = operator.indexOf("+");
  }
  
   var minus = operator.indexOf("-");
  while(minus != -1){
    number.splice(minus, 2, number[minus]-number[minus + 1]);
    operator.splice(minus,1);
    minus = operator.indexOf("-");
  }
  input.innerHTML = number[0];
  resultDisplay = true;
})
clear.addEventListener("click",function(){
  input.innerHTML = "";
})
