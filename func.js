var global = 0;
var x = 0;
function add(){
  document.getElementById("cont").innerHTML++;
  global = document.getElementById("cont").innerHTML;
}
function minus(){
  if(document.getElementById("cont").innerHTML <= 0){
    return;
  }
  document.getElementById("cont").innerHTML--;
  global = document.getElementById("cont").innerHTML;
}

function reset(){
    document.getElementById("cont").innerHTML = 0;
    global = 0;
    x = 0;
    document.getElementById("result").innerHTML = x;
    document.getElementById("mod").innerHTML = "Add to Cart";
}

function apply(){
    x = global;
    document.getElementById("result").innerHTML = x;
    if(x > 0){
        document.getElementById("mod").innerHTML = "Checkout now";
    } else {
        document.getElementById("mod").innerHTML = "Add to Cart";
    }
}