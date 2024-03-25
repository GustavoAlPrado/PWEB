var num1 = parseFloat(prompt("Digite o primeiro numero: "));
var num2 = parseFloat(prompt("Digite o segundo numero: "));

var op;

op = num1+ num2;
alert("A Soma deles é: " + op);

op = num1 - num2;
alert("A Subtração no primeiro pelo segundo é: " + op);

op = num1 * num2;
alert("O produto é: " + op);

if(num2 != 0){
op = num1 / num2;
alert("a divisão do primeiro pelo segundo é:" + op);
}
else{
    alert("Divisão por 0 não é suportada.")
}
if(num2 != 0){
    op = num1 % num2;
    alert("O resto da  divisão do primeiro pelo segundo é:" + op);
    }
    else{
        alert("Divisão por 0 não é suportada.")
    }