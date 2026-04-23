let func1 = (n1,n2,n3) => {
    if(n1 >= n2 && n1 >= n3){
       return n1;
    }
    else if(n2 >= n1 && n2 >= n3){
        return n2;
    }
    else{
        return n3;
    }
}


var v1 = Number(prompt("Envie um numero(1/3)"));
var v2 = Number(prompt("Envie um numero(2/3)"));
var v3 = Number(prompt("Envie um numero(3/3)"));

alert("O maior numero é: " + func1(v1,v2,v3)) ;


let func2 = (n1, n2, n3) => {
    let matriz = [n1, n2, n3];

    matriz.sort((a, b) => a - b);

    return matriz;
}
var v1 = Number(prompt("Envie um numero(1/3)"));
var v2 = Number(prompt("Envie um numero(2/3)"));
var v3 = Number(prompt("Envie um numero(3/3)"));

alert("a sequencia ordenada é: " + func2(v1,v2,v3));


let func3 = (pl) => {
    let invertido = pl.split("").reverse().join("");
  
    if(pl === invertido){
        return "a plavra é um palíndromo";
    } else {
        return "a plavr não é palíndromp";
    }
}


let txt = prompt("Digite uma plavra: ").toUpperCase();

alert(func3(txt));

  //se é loco tive que ir pesquisar como fazia isso aqui, tava ficando maior que o exercicio 8
    //Aprendi .slip . reverse e o .join então ta valendo!



let func4 = (pal1, pal2) => {

    if(!pal1 || !pal2){
        return "erro";
    }

    if(pal1.includes(pal2)){
        return "é um subconjunto";
    } else {
        return "não é um subconjunto";
    }
}

let palavra1 = prompt("insira uma palvra: ").toUpperCase();
let palavra2 = prompt("insira uma palvra: ").toUpperCase();

alert(func4(palavra1, palavra2));


let func5 = (dt) => {

    let d = new Date(dt);

    let dias = [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado"
    ];

    return dias[d.getDay()];
}

let data = prompt("coloque a data(ano-mes-dia: ");

alert(func5(data));