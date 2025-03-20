var valor = Number(prompt("insira o valor da prestação em atraso"));
var taxa = Number(prompt("insira o valor da taxa"));
var tempo = Number(prompt("insira o tempo de atraso"));

var total = valor +  (valor*(taxa**2/100)*tempo);
document.write("Valor da parcela = " + total );
