
function Retangulo(x, y) {
	this.x = x;
	this.y = y;
}

Retangulo.prototype.area = function () {
	return this.x * this.y;
};

let x = Number(prompt("base do retângulo:"));
let y = Number(prompt("Altura do retângulo:"));
let retangulo = new Retangulo(x, y);

alert("A área do retângulo é: " + retangulo.area());
