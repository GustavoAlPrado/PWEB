function PessoaIMC(altura, peso) {
            this.altura = altura;
            this.peso = peso;
            this.IMC = function(){
                let IMC = (this.peso / (this.altura * this.altura));
                if(IMC < 18.5){
                    alert(`IMC é de ${IMC.toFixed(2)} Classificação "Magreza" Obesidade(grau) 0`);
                }
                else if(IMC >= 18.5 && IMC <25){
                    alert(`IMC é de ${IMC.toFixed(2)} Classificação "Normal" Obesidade(grau) 0`);
                }
                else if(IMC >= 25 && IMC <30){
                    alert(`IMC é de ${IMC.toFixed(2)} Classificação "sobrepeso" Obesidade(grau) 1`);
                }
                else if(IMC >= 30 && IMC <40){
                    alert(`IMC é de ${IMC.toFixed(2)} Classificação "Obesidade" Obesidade(grau) 2`);
                }
                else{
                    alert(`IMC é de ${IMC.toFixed(2)} Classificação "Obesidade grave" Obesidade(grau) 3`);
                }
            }
        }


        var altura = parseFloat(prompt("Insira sua altura: "));
        var peso = parseFloat(prompt("Insira seu peso"));

        var Pessoa = new PessoaIMC(altura, peso)
        Pessoa.IMC();

