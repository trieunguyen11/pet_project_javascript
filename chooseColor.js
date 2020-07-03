var start = document.getElementById('start');
var className = document.getElementsByClassName('square');
var colorExact ;
var arrSquare = document.querySelectorAll(".layout div");
function functionRGB(){
  var x = Math.floor(Math.random()*256);
  var y = Math.floor(Math.random()*256);
  var z = Math.floor(Math.random()*256);
  var rgb = 'rgb('+x+','+y+','+z+')';
  return rgb;
}

start.addEventListener("click", function(e){
  var content = functionRGB();
  colorExact = content;
  document.getElementById('color').innerHTML = 
    content;
  document.getElementById('color').style.backgroundColor = content;
   for(var i = 0; i< className.length; i++){
    if(className[i].style.display === 'none'){
      className[i].style.display = 'block';
    }
   }
  var x = Math.floor(Math.random()*5+1);
  for (var i=1; i<= 6; i++){
     var str = 'square'+i; 
    if(i === x){
document.getElementById(String(str)).style.background=content;
    } else{
document.getElementById(String(str)).style.background=functionRGB();
    }
  }
});

for(var i = 0; i< arrSquare.length; i++){
  arrSquare[i].addEventListener("click",function(e){
    
    console.log('colorExact la: ' + colorExact);
    if(String(e.target.style.backgroundColor).replace(/\s+/g, '') == String(colorExact)){
       e.target.style.display = 'block';
       for(var i = 0; i< className.length; i++){
    if(className[i].style.display === 'none'){
      className[i].style.display = 'block';
    }
      className[i].style.background= colorExact;
  }
    } else{
      e.target.style.display = 'none';
    }
  })
}

