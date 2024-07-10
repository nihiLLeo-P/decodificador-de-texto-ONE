document.getElementById('inputTexto').addEventListener('input', function() {
    this.value = this.value.toLowerCase().replace(/[^a-z\s]/g, ''); 
    this.removeEventListener('input', arguments.callee);
});

function criptografarTexto() {
    let inputTexto = document.getElementById('inputTexto').value; 
    
    if (!/^[a-z\s]*$/.test(inputTexto)) {
        alert("Use apenas letras minúsculas sem acento.");
        return;
    }

    let textoCriptografado = criptografar(inputTexto);
    let elementoReceberTexto = document.querySelector('.receberTexto');
    elementoReceberTexto.innerText = textoCriptografado;
}

function descriptografarTexto() {
    let inputTexto = document.getElementById('inputTexto').value;

    if (!/^[a-z\s]*$/.test(inputTexto)) {
        alert("Por favor, use apenas letras minúsculas sem acentos e sem caracteres especiais.");
        return;
    }

    let textoDescriptografado = descriptografar(inputTexto);
    let elementoReceberTexto = document.querySelector('.receberTexto');
    elementoReceberTexto.innerText = textoDescriptografado;
}

function copiarTexto() {
    let textoCopiar = document.querySelector('.receberTexto').innerText;
    
    let inputTemporario = document.createElement("input");
    inputTemporario.setAttribute("type", "text");
    inputTemporario.setAttribute("value", textoCopiar);
    document.body.appendChild(inputTemporario);
    
    inputTemporario.select();
    inputTemporario.setSelectionRange(0, 99999);
    
    document.execCommand('copy');
    
    document.body.removeChild(inputTemporario);
    
    alert("Texto copiado!");
}

function criptografar(texto) {
    let regras = [
        { letra: 'e', substituto: 'enter' },
        { letra: 'i', substituto: 'imes' },
        { letra: 'a', substituto: 'ai' },
        { letra: 'o', substituto: 'ober' },
        { letra: 'u', substituto: 'ufat' }
    ];
    
    regras.forEach(regra => {
        texto = texto.replaceAll(regra.letra, regra.substituto);
    });
    
    return texto;
}

function descriptografar(texto) {
    let regras = [
        { substituto: 'enter', letra: 'e' },
        { substituto: 'imes', letra: 'i' },
        { substituto: 'ai', letra: 'a' },
        { substituto: 'ober', letra: 'o' },
        { substituto: 'ufat', letra: 'u' }
    ];
    
    regras.forEach(regra => {
        texto = texto.replaceAll(regra.substituto, regra.letra);
    });
    
    return texto;
}
