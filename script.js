function insert(num) {
   var numero = document.getElementById("result").innerHTML;
       document.getElementById("result").innerHTML=numero + num;

}

function clean() {
    document.getElementById("result").innerHTML="";
}

function back() {
    var apagar = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML= apagar.substring(0, apagar.length -1);
}

function resultadoFinal() {
    var resultado = document.getElementById("result").innerHTML;
    if(resultado) {
        document.getElementById("result").innerHTML = eval(resultado); 
    }else{
        document.getElementById("result").innerHTML = "error..."
    }
}

