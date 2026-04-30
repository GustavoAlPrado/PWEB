var Funcionario1 = new Object();

Funcionario1.matricula = "111";
Funcionario1.nome = "Funcionario01";
Funcionario1.funcao = "Funcao01";

alert(`Nome = ${Funcionario1.nome}  Matricula = ${Funcionario1.matricula} Função =${Funcionario1.funcao}`);


class Funcionario2 {
            constructor() {
                this._matricula;
                this._nome;
                this._funcao;
            }
            setNome(value) {
                this._nome = value;
            };
            getNome() {
                return this._nome;
            };
            setMatricula(value) {
                this._matricula = value;
            };
            getMatricula() {
                return this._matricula;
            };
            setFuncao(value) {
                this._funcao = value;
            };
            getFuncao() {
                return this._funcao;
            };
        }



var objFuncionario1 = new Funcionario2();
objFuncionario1.setNome("Funcionario02");
objFuncionario1.setMatricula('222');
objFuncionario1.setFuncao("Função02");

alert(`nome=${objFuncionario1.getNome()} Matricula=${objFuncionario1.getMatricula()} Função=${objFuncionario1.getFuncao()} `);


var Funcionario1 = {
            matricula: "333",
            nome: "Funcionario3",
            funcao: "Função03"
        };

        alert(" Nome=" + Funcionario1.nome + " Matricula=" + Funcionario1.matricula + " Função=" + Funcionario1.funcao);
