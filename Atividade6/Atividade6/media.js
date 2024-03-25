var nomeAluno;
var media;

nomeAluno = prompt("Insira o nome do aluno: ");
var nota1 = parseFloat(prompt("Insira a nota1:"));
var nota2 = parseFloat(prompt("Insira a nota2:"));
var nota3 = parseFloat(prompt("Insira a nota3:"));

media = (nota1 + nota2 + nota3) / 3;

alert("A média é: " + media);