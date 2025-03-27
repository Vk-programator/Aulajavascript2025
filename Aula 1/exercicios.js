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

function ex3()
{

   valor = document.getElementById("n1").value ;
   taxa = document.getElementById("n2").value ;
   tempo = document.getElementById("n3").value;

   let total = Number(valor) + Number(valor*(taxa**2/100)*tempo);

   document.getElementById("mensagem").innerHTML = "Valores informados" + "<br>Valor " + valor + "<br>Taxa " + taxa + "<br>Tempo " + tempo;
   document.getElementById("mensagem2").innerHTML = "O valor atualizado é " + total;
}

function ex4()
{

   base = document.getElementById("n1").value;
   altura = document.getElementById("n2").value;

   let total = Number(base) * Number(altura) /2;

   document.getElementById("mensagem").innerHTML = "Base " + base + "<br>Altura " + altura;
   document.getElementById("mensagem2").innerHTML = "A area do triangulo é " + total;
}

function ex5()
{

   lado = document.getElementById("n1").value

   let area = Number(lado*lado);

   document.getElementById("mensagem").innerHTML = "O lado do quadrado é " + lado;
   document.getElementById("mensagem2").innerHTML = "A area do quadrado " + area;

}

function ex6()
{

   qtde = document.getElementById("n1").value;
   preco = document.getElementById("n2").value;

   let total = Number(qtde*preco);
   let desconto = Number(total) * 0.10;
   let final = Number(total - desconto);

   document.getElementById("mensagem").innerHTML = "Subtotal R$" + total;
   document.getElementById("mensagem2").innerHTML = "Desconto R$" + desconto;
   document.getElementById("mensagem3").innerHTML = "Preço a pagar R$" + final;

}

function ex7()
{

   nota1 = Number (document.getElementById("n1").value);
   nota2 = Number (document.getElementById("n2").value);
   nota3 = Number (document.getElementById("n3").value)_;

   let media = (nota1 + nota2 + nota3)/ 3;

   document.getElementById("mensagem").innerHTML = "A media é " + media;

}





