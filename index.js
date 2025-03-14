function checkAnimation() {
    const elements = document.querySelectorAll('.animate');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3; // Quando o elemento estiver 30% visível na tela

        if (elementPosition < screenPosition) {
            element.classList.add('animate');
        }
    });
}

// Chama a função quando o usuário rolar a página
window.addEventListener('scroll', checkAnimation);

// Chama a função quando a página é carregada
window.addEventListener('load', checkAnimation);

document.getElementById("whatsappForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;

    // Codificar a mensagem
    const mensagemCodificada = encodeURIComponent(`Olá, meu nome é ${nome}.\n${mensagem}`);

    // Criar o link correto do WhatsApp
    const whatsappLink = `https://api.whatsapp.com/send?phone=+5521997327351&text=${mensagemCodificada}`;

    // Abrir o WhatsApp com a mensagem
    window.open(whatsappLink, "_blank");
});
