 let n1, n2, resultado;

 //Exercicio 1

 function ex1(numero)
 {
 
    let quadrado = Number(numero) **2;
    let cub = Number(numero) **3;
 
    document.getElementById("mensagem1").innerHTML ="O numero digitado foi " + numero + "<br>O quadrado do numero é " + quadrado +  "<br> O cubo do numero é " + cub;
 }

 function processar1()
{
numero1 = document.getElementById("n1").value;

ex1(numero1);
}

//Exercicio 2

function ex2(graus)
{

let celsius = Number((graus) - 32) * 5/9;
document.getElementById("mensagem2").innerHTML = "A temperetura em fahrenheint foi " + graus + "<br>A temperatura em celsius é " + celsius;

}

function processar2()
{

   graus1 = document.getElementById("n1").value;

   ex2(graus1);

}




