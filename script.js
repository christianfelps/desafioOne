function limparConteudoDireita() {
    textoTela('#mensagem', '')
    document.querySelector('.imagen').style.display = 'none';
}

function textoTela(tag, texto) {
    let tagui = document.querySelector(tag)
    if (tagui) {
        tagui.innerHTML = texto
    } else {
        console.error('elemento nao encontrado')
    }


}

function criptografar(campo) {

    return campo.replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat')


}

function descriptografar(campo) {

    return campo.replace(/enter/g, 'e')
        .replace(/ai/g, 'a')
        .replace(/ufat/g, 'u')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o');



}

function processarCriptografia() {

    let campo = document.querySelector('.conteudo__digite').value;
    campo = campo.toLowerCase();
    if (campo.trim() === '') {
        console.log('Campo esta vazio')
    } else {
        limparConteudoDireita()
        let texto = criptografar(campo)
        textoTela('#mensagem', `<p>${texto}</p>`);
        let mensagem = document.querySelector('#mensagem');
        if (mensagem) {
            mensagem.style.display = 'flex';
            mensagem.style.flexDirection = 'column';
            mensagem.style.alignItems = 'center';
            mensagem.style.justifyContent = 'center';
        }
    }

}

function processDescriptografar() {
    let campo = document.querySelector('.conteudo__digite').value;

    if (campo.trim() === '') {
        console.log('Campo esta vazio')
    } else {
        limparConteudoDireita()
        let textoCriptografado = descriptografar(campo)
        let mensagem = textoTela('#mensagem', `<p>${textoCriptografado}</p>`);
        mensagem.style.display = 'flex';
        mensagem.style.flexDirection = 'column'
        mensagem.style.alignItems = 'center'
        mensagem.style.justifyContent = 'center'
    }

}