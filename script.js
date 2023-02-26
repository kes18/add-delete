var button = document.getElementById("enter");
var input  = document.getElementById("add");
var ol = document.getElementById("list");

button.addEventListener("click",function(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
     ol.appendChild(li);
    inputvalue = "";
});
var parent = document.getElementById("mass");
  var child = document.getElementById("list");
  var button = document.getElementById("del");
button.addEventListener("click",function(){
  parent.removeChild(child);
     
 });
  
