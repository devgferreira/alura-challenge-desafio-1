function descriptografar(textoCriptografado) {
    var letras = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    var textoOriginal = textoCriptografado;
    for (var letra in letras) {
        var valor = letras[letra];
        var regex = new RegExp(letra, 'g');
        textoOriginal = textoOriginal.replace(regex, valor);
    }

    return textoOriginal;
}

function descriptografarTexto() {
    var textoCriptografado = document.getElementById('texto').value;
    var resultado = descriptografar(textoCriptografado);
    document.getElementById('foto-svg').style.display = 'none';
    document.getElementById('texto-criptograda-descriptografado').style.display = 'none';
    document.getElementById('resultado').innerText = resultado;
}
