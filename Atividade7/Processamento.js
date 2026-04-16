var op = prompt("Ensira Pedra, Papel ou Tesoura: ").toUpperCase();

var num = Math.random();
var bot = "";

if(num < 0.33){
    bot = "PEDRA";
}
else if(num >= 0.33 && num < 0.66){
    bot = "PAPEL";
}
else if(num >= 0.66){
    bot = "TESOURA";
}

if(op == "PEDRA"){
    if(bot == "PEDRA"){
        alert("EMPATE");
    }
    else if(bot == "PAPEL"){
        alert("DERROTA");
    }
    else if(bot == "TESOURA"){
        alert("VITORIA");
    }
}
else if(op == "PAPEL"){
    if(bot == "PEDRA"){
        alert("VITORIA");
    }
    else if(bot == "PAPEL"){
        alert("EMPATE");
    }
    else if(bot == "TESOURA"){
        alert("DERROTA");
    }
}
else if(op == "TESOURA"){
    if(bot == "PEDRA"){
        alert("DERROTA");
    }
    else if(bot == "PAPEL"){
        alert("VITORIA");
    }
    else if(bot == "TESOURA"){
        alert("EMPATE");
    }
}

