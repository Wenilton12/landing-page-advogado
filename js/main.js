// Menu Mobile Responsivo
const btn = document.getElementById('mobileMenuBtn');
const menu = document.getElementById('mobileMenu');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Carrossel com botões e auto-play
const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let autoScrollInterval;

// Calcula dinamicamente o tamanho do salto do scroll (largura do card + gap)
const getScrollAmount = () => {
    const firstChild = carousel.firstElementChild;
    const gap = 24; // Referente ao gap-6 (6 * 4px = 24px)
    return firstChild.offsetWidth + gap;
};

const scrollNext = () => {
    // Se chegou no final, volta pro início, senao vai pro proximo
    if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 10) {
        carousel.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
        carousel.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
    }
};

const scrollPrev = () => {
    // Se está no inicio, vai pro final, senao volta um
    if (carousel.scrollLeft <= 0) {
        carousel.scrollTo({ left: carousel.scrollWidth, behavior: 'smooth' });
    } else {
        carousel.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
    }
};

// Eventos de Clique nas setinhas
nextBtn.addEventListener('click', () => {
    scrollNext();
    resetAutoScroll();
});

prevBtn.addEventListener('click', () => {
    scrollPrev();
    resetAutoScroll();
});

// Auto-play do Carrossel (A cada 3 segundos)
const startAutoScroll = () => {
    autoScrollInterval = setInterval(scrollNext, 3000);
};

const resetAutoScroll = () => {
    clearInterval(autoScrollInterval);
    startAutoScroll();
};

// Pausa o carrossel se o usuário estiver com o mouse em cima ou tocando na tela
carousel.addEventListener('mouseenter', () => clearInterval(autoScrollInterval));
carousel.addEventListener('mouseleave', startAutoScroll);
carousel.addEventListener('touchstart', () => clearInterval(autoScrollInterval), { passive: true });
carousel.addEventListener('touchend', startAutoScroll);

// Inicia o carrossel automático
startAutoScroll();

// ------ Lógica para o Carrossel de Depoimentos ------
const depCarousel = document.getElementById('depoimentosCarousel');
const prevDepBtn = document.getElementById('prevDepBtn');
const nextDepBtn = document.getElementById('nextDepBtn');

const getDepScrollAmount = () => {
    const firstChild = depCarousel.firstElementChild;
    const gap = 32; // Referente ao gap-8 (8 * 4px = 32px)
    return firstChild.offsetWidth + gap;
};

const scrollDepNext = () => {
    if (depCarousel.scrollLeft + depCarousel.clientWidth >= depCarousel.scrollWidth - 10) {
        depCarousel.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
        depCarousel.scrollBy({ left: getDepScrollAmount(), behavior: 'smooth' });
    }
};

const scrollDepPrev = () => {
    if (depCarousel.scrollLeft <= 0) {
        depCarousel.scrollTo({ left: depCarousel.scrollWidth, behavior: 'smooth' });
    } else {
        depCarousel.scrollBy({ left: -getDepScrollAmount(), behavior: 'smooth' });
    }
};

nextDepBtn.addEventListener('click', () => {
    scrollDepNext();
    resetDepAutoScroll();
});

prevDepBtn.addEventListener('click', () => {
    scrollDepPrev();
    resetDepAutoScroll();
});

// Auto-play do Carrossel de Depoimentos (A cada 4 segundos)
let depAutoScrollInterval;

const startDepAutoScroll = () => {
    depAutoScrollInterval = setInterval(scrollDepNext, 4000);
};

const resetDepAutoScroll = () => {
    clearInterval(depAutoScrollInterval);
    startDepAutoScroll();
};

// Pausa o carrossel se o usuário estiver com o mouse em cima ou tocando na tela
depCarousel.addEventListener('mouseenter', () => clearInterval(depAutoScrollInterval));
depCarousel.addEventListener('mouseleave', startDepAutoScroll);
depCarousel.addEventListener('touchstart', () => clearInterval(depAutoScrollInterval), { passive: true });
depCarousel.addEventListener('touchend', startDepAutoScroll);

// Inicia o carrossel automático de depoimentos
startDepAutoScroll();