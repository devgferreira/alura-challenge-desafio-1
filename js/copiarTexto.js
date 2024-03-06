function copiarTexto() {
    var texto = document.getElementById("resultado").innerText;
    var textoCopiado = document.createElement('textarea');
    textoCopiado.value = texto;
    document.body.appendChild(textoCopiado);
    textoCopiado.select();
    document.execCommand('copy');
    document.body.removeChild(textoCopiado);
  }