function restar(n1,n2,n3,n4){
	n1=document.getElementById("n1").value;
	n2=document.getElementById("n2").value;
	n3=document.getElementById("n3").value;
	n4=document.getElementById("n4").value;

	var resta=n1-n2-n3-n4;
	alert(resta);
}

function suma(n1,n2,n3,n4){
	n1=document.getElementById("n1").value;
	n2=document.getElementById("n2").value;
	n3=document.getElementById("n3").value;
	n4=document.getElementById("n4").value;

	var suma=0;
	suma=parseInt(n1)+parseInt(n2)+parseInt(n3)+parseInt(n4);

	alert(suma);
}
function multiplos() {
  var n = document.getElementById("n").value;
  var resultados = [];
    if(n <= 100){
      for (var i = n; i > 0; i--) {
          if(n % i == 0){
          resultados.push(i);
            }
      }
  } else {
    alert("Verifique el número");
  }
  document.getElementById("resultado").innerHTML ="<h3>"+resultados+"  </h3>";
}

function digitos(){
var number = document.getElementById("numero").value;
 document.getElementById("digitos").innerHTML =(number.toString().split('').reduce(function(r, n) { return r + ", " + n }));
}

function tercera(a) {

}
tercera(2);
function cuarta(a) {
	document.write("<h2>Cuarta Funcion</h2>");
	var cifras = a.toString().length;

	document.write('<p id="est">'+"<br> numero   "+ a + "<br>")
	document.write('<p id="est">'+"numero de cifras :" + cifras);
}
primera(55);