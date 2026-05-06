function trocarImagem(imagem) {
	if (imagem.src.includes("janela.jpg")) {
		imagem.src = "images/Quebrada.PNG";
	} else {
		imagem.src = "images/janela.jpg";
	}
}
