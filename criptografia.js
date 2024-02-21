function criptografar(texto) {
    var mapa = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    var textoCriptografado = '';
    for (var i = 0; i < texto.length; i++) {
        var letra = texto[i];
        if (mapa[letra]) {
            textoCriptografado += mapa[letra];
        } else {
            textoCriptografado += letra;
        }
    }

    return textoCriptografado;
}

function criptografarTexto() {
    var texto = document.getElementById('texto').value;
    var resultado = criptografar(texto);
    document.getElementById('foto-svg').style.display = 'none';
    document.getElementById('texto-criptograda-descriptografado').style.display = 'none';
    document.getElementById('resultado').innerText = resultado;

}