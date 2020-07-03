var s;
var m;
var h;
var dd;
var amOrPm;
function showTime(){
var date = new Date();

s = date.getSeconds() > 9? date.getSeconds(): '0'+date.getSeconds();
m = date.getMinutes() > 9? date.getMinutes(): '0'+date.getMinutes();
h = date.getHours() > 9 ? date.getHours(): '0'+date.getHours();
amOrPm = h>12 ? 'PM':'AM';
document.getElementById("myClock").innerHTML = h + " : " +m +" : "+s + " : " + amOrPm;
setTimeout(showTime,1000);
}
showTime();