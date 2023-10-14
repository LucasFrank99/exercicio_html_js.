function validarFormulario() {
    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    const mensagem = document.getElementById('mensagem');

    if (isNaN(campoA) || isNaN(campoB)) {
        mensagem.innerHTML = "Por favor, preencha ambos os campos.";
        mensagem.style.color = "red";
    } else if (campoB > campoA) {
        mensagem.innerHTML = "Formulário válido! B é maior que A.";
        mensagem.style.color = "green";
    } else {
        mensagem.innerHTML = "Formulário inválido. B deve ser maior que A.";
        mensagem.style.color = "red";
    }
}
