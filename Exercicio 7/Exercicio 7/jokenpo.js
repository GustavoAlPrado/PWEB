var Opcao = parseFloat(prompt("Insira: 1 para Pedra, 2 para Papel e 3 para Tesoura: "));
var rand = Math.floor(Math.random() * 3 + 1);

//rand = 3;

alert(rand)

if (Opcao == 1 && rand == 1) {
    alert("EMPATE ambos escolheram Pedra");
}
else {
    if (Opcao == 2 && rand == 2) {
        alert("EMPATE ambos escolheram Papel");
    }
    else {
        if (Opcao == 3 && rand == 3) {
            alert("EMPATE ambos escolheram Tesoura");
        }
        else {
            if (Opcao == 1 && rand == 2) {
                alert("Você perdeu! você escolheu Pedra e a maquina Papel!");
            }
            else {
                if (Opcao == 1 && rand == 3) {
                    alert("Você ganhou! Você escolheu Pedra e a maquina Tesoura!");
                }
                else {
                    if (Opcao == 2 && rand == 1) {
                        alert("Você ganhou! você escolheu Papel e a maquina Pedra!");
                    }
                    else {
                        if (Opcao == 2 && rand == 3) {
                            alert("Você perdeu! você escolheu Papel e a maquina tesoura!");
                        }
                        else {
                            if (Opcao == 3 && rand == 1) {
                                alert("Você perdeu! você escolheu Tesoura e a maquina Pedra!");
                            }
                            else {
                                alert("Você ganhou! você escolheu Tesoura e a maquina Papel!");
                            }
                        }

                    }
                }
            }
        }
    }
}