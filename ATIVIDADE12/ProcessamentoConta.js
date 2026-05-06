class Conta {
	constructor(nome, correntista, banco, numeroConta, saldo) {
		this.nome = nome;
		this.correntista = correntista;
		this.banco = banco;
		this.numeroConta = numeroConta;
		this.saldo = saldo;
	}

	get nome() {
		return this._nome;
	}

	set nome(valor) {
		this._nome = valor;
	}

	get correntista() {
		return this._correntista;
	}

	set correntista(valor) {
		this._correntista = valor;
	}

	get banco() {
		return this._banco;
	}

	set banco(valor) {
		this._banco = valor;
	}

	get numeroConta() {
		return this._numeroConta;
	}

	set numeroConta(valor) {
		this._numeroConta = valor;
	}

	get saldo() {
		return this._saldo;
	}

	set saldo(valor) {
		this._saldo = Number(valor);
	}

	mostrarDados() {
		return (
			"Nome: " + this.nome + "\n" +
			"Correntista: " + this.correntista + "\n" +
			"Banco: " + this.banco + "\n" +
			"Número da conta: " + this.numeroConta + "\n" +
			"Saldo: R$ " + this.saldo.toFixed(2)
		);
	}
}

class Corrente extends Conta {
	constructor(nome, correntista, banco, numeroConta, saldo, saldoEspecial) {
		super(nome, correntista, banco, numeroConta, saldo);
		this.saldoEspecial = saldoEspecial;
	}

	get saldoEspecial() {
		return this._saldoEspecial;
	}

	set saldoEspecial(valor) {
		this._saldoEspecial = Number(valor);
	}

	mostrarDados() {
		return super.mostrarDados() + "\n" + "Saldo especial: R$ " + this.saldoEspecial.toFixed(2);
	}
}

class Poupanca extends Conta {
	constructor(nome, correntista, banco, numeroConta, saldo, juros, dataVencimento) {
		super(nome, correntista, banco, numeroConta, saldo);
		this.juros = juros;
		this.dataVencimento = dataVencimento;
	}

	get juros() {
		return this._juros;
	}

	set juros(valor) {
		this._juros = Number(valor);
	}

	get dataVencimento() {
		return this._dataVencimento;
	}

	set dataVencimento(valor) {
		this._dataVencimento = valor;
	}

	mostrarDados() {
		return (
			super.mostrarDados() + "\n" +
			"Juros: " + this.juros + "%\n" +
			"Data de vencimento: " + this.dataVencimento
		);
	}
}

const nome = prompt("Digite o nome:");
const correntista = prompt("Digite o correntista:");
const banco = prompt("Digite o banco:");
const numeroConta = prompt("Digite o número da conta:");
const saldo = prompt("Digite o saldo:");

const saldoEspecial = prompt("Digite o saldo especial da conta corrente:");
const corrente = new Corrente(nome, correntista, banco, numeroConta, saldo, saldoEspecial);

const juros = prompt("Digite os juros da poupança:");
const dataVencimento = prompt("Digite a data de vencimento da poupança:");
const poupanca = new Poupanca(nome, correntista, banco, numeroConta, saldo, juros, dataVencimento);

alert("Dados da conta corrente:\n\n" + corrente.mostrarDados());
alert("Dados da poupança:\n\n" + poupanca.mostrarDados());
