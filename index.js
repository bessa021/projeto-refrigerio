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
    const mensagemCodificada = encodeURIComponent(`Nome: ${nome}.\n\n${mensagem}`);

    // Criar o link correto do WhatsApp
    const whatsappLink = `https://api.whatsapp.com/send?phone=+5521997327351&text=${mensagemCodificada}`;

    // Abrir o WhatsApp com a mensagem
    window.open(whatsappLink, "_blank");
});

function checkAnimation() {
    const elements = document.querySelectorAll('.animate');

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3; // Quando o elemento estiver 30% visível na tela

        if (elementPosition < screenPosition) {
            element.classList.add('visible'); // A classe para a animação
        }
    });
}

document.getElementById("dropdownButton").addEventListener("click", function() {
    document.getElementById("dropdownMenu").classList.toggle("hidden");
});

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

const menuHamburguer = document.querySelector('.menu-hamburguer');
const menu = document.querySelector('.navbar .menu');

menuHamburguer.addEventListener('click', () => {
    menu.classList.toggle('active');
});

