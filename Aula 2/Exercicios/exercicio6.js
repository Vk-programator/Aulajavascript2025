var preco = Number(prompt("insira o preço do produto"));
var qtd = Number(prompt("insira a quantidade comprada"));

subtotal = qtd*preco;
desconto = subtotal*0.10;
final = subtotal-desconto;


document.write("O valor final a pagar é de : " + subtotal + "<br>");
document.write("O valor final a pagar é de : " + desconto + "<br>");
document.write("O valor final a pagar é de : " + final + "<br>");