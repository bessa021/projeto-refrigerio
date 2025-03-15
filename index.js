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

// Detecta se o dispositivo é móvel
const isMobile = window.innerWidth <= 768; // Ajuste conforme necessário para o seu design

if (!isMobile) {
    // Seleciona os elementos necessários
    const scrollbarHandle = document.querySelector('.scrollbar-handle');
    const scrollbarContainer = document.querySelector('.scrollbar-container');

    // Detecta se o dispositivo é móvel
    const isMobile = window.innerWidth <= 768; // Ajuste conforme necessário para o seu design

    // Se não for um dispositivo móvel, ativa a barra de rolagem personalizada
    if (!isMobile) {
        // Ajusta a posição da bolinha de rolagem com base na rolagem da página
        window.addEventListener('scroll', () => {
            const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            scrollbarHandle.style.top = `${scrollPercent}%`;
        });

        // Variáveis para controle de arrasto
        let isDragging = false;
        let startY, startScrollTop;

        // Inicia o arrasto da bolinha
        scrollbarHandle.addEventListener('mousedown', (e) => {
            e.preventDefault();  // Previne que o texto da página seja selecionado durante o arrasto
            isDragging = true;
            startY = e.clientY;
            startScrollTop = window.scrollY;

            // Adiciona os ouvintes para mover a página e parar o arrasto
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        });

        // Função para mover a página conforme o arrasto da bolinha
        function onMouseMove(e) {
            if (isDragging) {
                const diffY = e.clientY - startY;
                const scrollPercent = (diffY / window.innerHeight) * 100; // Calcula a porcentagem de rolagem com base na altura da janela
                const newScrollTop = startScrollTop + (scrollPercent / 100) * (document.documentElement.scrollHeight - window.innerHeight);
                window.scrollTo(0, newScrollTop);  // Move a página para a nova posição
            }
        }

        // Para o arrasto ao soltar o mouse
        function onMouseUp() {
            isDragging = false;
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }
    } else {
        // No caso de dispositivos móveis, não mostramos a barra de rolagem personalizada
        document.querySelector('.scrollbar-container').style.display = 'none';
    }
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

