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

// Chama a função quando o usuário rolar a página
window.addEventListener('scroll', checkAnimation);

// Chama a função quando a página é carregada
window.addEventListener('load', checkAnimation);

document.getElementById("whatsappForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;

    // Verifica se os campos estão preenchidos
    if (nome && mensagem) {
        // Codificar a mensagem
        const mensagemCodificada = encodeURIComponent(`Olá, meu nome é ${nome}.\n${mensagem}`);

        // Criar o link correto do WhatsApp usando wa.me
        const whatsappLink = `https://wa.me/5521997327351?text=${mensagemCodificada}`;

        // Abrir o WhatsApp com a mensagem
        window.location.href = whatsappLink; // Usar location.href para não abrir nova aba
    } else {
        alert("Por favor, preencha todos os campos.");
    }
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
