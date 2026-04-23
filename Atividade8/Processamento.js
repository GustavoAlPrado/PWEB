let pessoa = [];
var mi = 0;
var mv = 0;
var mn = 999;
var qntP = 0;
var pecntB = 0;
var qntM = 0;
var qntH = 0;
var qntO = 0;
var vdd = true;
var cont = 0;
for(let i=0;i < 10; i++){
let idade = Number(prompt("Insira a idade: "));
let sexo = prompt("Insira o sexo(F/M/O):").toUpperCase();
let nota = Number(prompt("Insira a nota(1 a 4): "));


pessoa.push({idade, sexo, nota});

if(nota == 3 || nota == 4){
    cont++;
}

mi = mi + idade;

if(idade > mv){
    mv = pessoa[i].idade;
}
if(idade < mn){
    mn = pessoa[i].idade;
}

if(nota == 1){
    qntP = qntP +1;
}

if(sexo == "F"){
    qntM++;
} else if(sexo == "M"){
    qntH++;
} else if(sexo == "O"){
    qntO++;
}

}
pecntB = cont * 100 / pessoa.length;

mi = mi / pessoa.length;
alert("a média de idade foi:" + mi + "\n a pessoa mais velha tinha: " + mv + "\na pessoa mais nova tinha: " + mn +
    "\n a quantiade de pessoas que responderam pessimo:  " + qntP + "\n Percentual que respondeu bom e/ou ótimo: " + pecntB +
"\nQuantidade de homens: " + qntH + "\nQuantidade de mulheres: " + qntM + "\nQuantidade de outros: " + qntO);



