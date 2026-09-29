const formulario = document.querySelector("#agendamento form");
const campoTelefone = document.querySelector("#telefone");


// MÁSCARA DO TELEFONE

campoTelefone.addEventListener("input", function () {

    let numeros = campoTelefone.value.replace(/\D/g, "");

    if (numeros.length > 11) {
        numeros = numeros.slice(0, 11);
    }

    if (numeros.length > 2 && numeros.length <= 10) {
        numeros = numeros.replace(
            /^(\d{2})(\d+)/,
            "($1) $2"
        );
    }

    if (numeros.length === 11) {
        numeros = numeros.replace(
            /^(\d{2})(\d{5})(\d+)/,
            "($1) $2-$3"
        );
    }

    campoTelefone.value = numeros;

});


// ENVIO DO FORMULÁRIO

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const nome = document.querySelector("#nome").value;
    const telefone = document.querySelector("#telefone").value;
    const servico = document.querySelector("#servico").value;
    const data = document.querySelector("#data").value;
    const horario = document.querySelector("#horario").value;


    // REMOVE FORMATAÇÃO DO TELEFONE

    const telefoneNumeros = telefone.replace(/\D/g, "");


    // VALIDA TELEFONE

    if (telefoneNumeros.length < 10 || telefoneNumeros.length > 11) {

        alert("Digite um telefone válido.");

        return;
    }


    // MONTA A MENSAGEM

    const mensagem =
        "Olá! Gostaria de agendar um horário.\n\n" +
        "Nome: " + nome + "\n" +
        "Telefone: " + telefone + "\n" +
        "Serviço: " + servico + "\n" +
        "Data: " + data + "\n" +
        "Horário: " + horario;


    // NÚMERO DO WHATSAPP

    const numeroWhatsApp = "5551999999999";


    // CONVERTE A MENSAGEM PARA URL

    const mensagemCodificada = encodeURIComponent(mensagem);


    // CRIA O LINK DO WHATSAPP

    const urlWhatsApp =
        "https://wa.me/" +
        numeroWhatsApp +
        "?text=" +
        mensagemCodificada;


    // ABRE O WHATSAPP

    window.open(urlWhatsApp, "_blank");

});