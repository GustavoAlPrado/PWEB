var num1 = parseFloat(prompt("Num 1: "));
var num2 = parseFloat(prompt("Num 2: "));

var aux = num1 + num2;

alert("Soma: " + aux.toFixed(2));

aux = num1 - num2;
alert("Subtracao: " + aux.toFixed(2));

aux = num1 * num2;
alert("Produto: " + aux.toFixed(2));


aux = num1 / num2;
alert("Divisao: " + aux.toFixed(2));

aux = num1 % num2;
alert("Resto: " + aux.toFixed(2));
