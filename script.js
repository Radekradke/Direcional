
  // ============================================
// NAVEGAÇÃO FLUTUANTE (STICKY HEADER)
// ============================================
const header = document.getElementById('mainHeader');
let lastScrollY = window.scrollY;
let ticking = false;

function updateHeader() {
    const currentScrollY = window.scrollY;
    
    // Mostrar/ocultar baseado na direção do scroll
    if (currentScrollY > lastScrollY && currentScrollY > 200) {
        // Scroll para baixo - oculta
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scroll para cima - mostra
        header.style.transform = 'translateY(0)';
    }
    
    // Adicionar classe scrolled quando não estiver no topo
    if (currentScrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScrollY = currentScrollY;
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
    }
}, { passive: true });

// Inicializar
updateHeader();

        const properties = [
            {
                id: "uniq-condominio-clube",
                name: "UNIQ Condomínio Clube",
                location: "Nova Iguaçu, Rio de Janeiro",
                price: "R$ 320.000",
                badge: "Em obras",
                badgeText: "Em obras",
                image: "img/UNIQ/Feed1.png",
                rooms: 2,
                area: 68,
                garage: 1,
                lat: -22.8455,
                lng: -43.3105
            },
            {
                id: "nova-caxias-up",
                name: "Nova Caxias UP",
                location: "Vila Ouro Preto / Duque de Caxias",
                price: "R$ 280.000",
                badge: "pronto",
                badgeText: "Pronto para Morar",
                image: "img/NovaCaxiasUP/FACHADA.jpg",
                rooms: 2,
                area: 54,
                lat: -22.7857,
                lng: -43.3056
            },
            {
                id: "nova-caxias-fun",
                name: "Nova Caxias FUN",
                location: "Duque de Caxias, RJ",
                price: "R$ 295.000",
                badge: "pronto",
                badgeText: "Pronto para Morar",
                image: "img/NovaCaxiasFUN/002_Fchd_04.jpg",
                rooms: 2,
                area: 70,
                garage: 1,
                lat: -22.7857,
                lng: -43.3056
            },
            {
                id: "conquista-parque-iguacu",
                name: "Conquista Parque Iguaçu",
                location: "Campo Grande, Rio de Janeiro",
                price: "R$ 350.000",
                badge: "em-obra",
                badgeText: "Em Obras",
                image: "img/ConquistaParqueIguaçu/FACHADA_FINAL_EMAIL.jpg",
                rooms: 3,
                area: 85,
                garage: 2,
                lat: -22.8978,
                lng: -43.5592
            },
            {
                id: "sky-mario-guimaraes",
                name: "Sky Mario Guimarães",
                location: "Tijuca, Rio de Janeiro",
                price: "R$ 450.000",
                badge: "pronto",
                badgeText: "Pronto para Morar",
                image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800",
                rooms: 3,
                area: 95,
                garage: 2,
                lat: -22.9325,
                lng: -43.2437
            },
            {
                id: "inn-barra-olimpica",
                name: "Inn Barra Olímpica",
                location: "Barra da Tijuca, Rio de Janeiro",
                price: "R$ 520.000",
                badge: "lancamento",
                badgeText: "Lançamento",
                image: "img/InnBarraOlimpico/ApartamentPonta.jpg",
                rooms: 3,
                area: 100,
                garage: 2,
                lat: -23.0076,
                lng: -43.3658
            },
            {
                id: "conquista-max-norte",
                name: "Conquista Max Norte",
                location: "Olaria, Rio de Janeiro",
                price: "R$ 310.000",
                badge: "pronto",
                badgeText: "Pronto para Morar",
                image: "img/ConquistaMaxNorte/FACHADA.jpg",
                rooms: 2,
                area: 72,
                garage: 1,
                lat: -22.8455,
                lng: -43.3105
            },
            {
                id: "soul-samba",
                name: "Soul Samba",
                location: "Madureira, Rio de Janeiro",
                price: "R$ 380.000",
                badge: "em-obra",
                badgeText: "Em Obras",
                image: "img/SoulSamba/FACHADADIURNA.jpg",
                rooms: 3,
                area: 88,
                garage: 2,
                lat: -22.8806,
                lng: -43.3497
            },
            {
                id: "residencial-laranjeiras",
                name: "Residencial Laranjeiras",
                location: "Laranjeiras, Rio de Janeiro",
                price: "R$ 420.000",
                badge: "pronto",
                badgeText: "Pronto para Morar",
                image: "",
                rooms: 3,
                area: 90,
                garage: 2,
                lat: -22.9297,
                lng: -43.1925
            },
            {
                id: "residencial-viva",
                name: "Residencial Viva",
                location: "Irajá, Rio de Janeiro",
                price: "R$ 265.000",
                badge: "lancamento",
                badgeText: "Lançamento",
                image: "",
                rooms: 2,
                area: 60,
                garage: 1,
                lat: -22.8262,
                lng: -43.3167
            }
        ];

    
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // ============================================
        // MOBILE MENU
        // ============================================
        const menuToggle = document.getElementById('menuToggle');
        const mobileNav = document.getElementById('mobileNav');
        const mobileOverlay = document.getElementById('mobileOverlay');
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

        function toggleMobileMenu() {
            menuToggle.classList.toggle('active');
            mobileNav.classList.toggle('active');
            mobileOverlay.classList.toggle('active');
            document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
        }

        menuToggle.addEventListener('click', toggleMobileMenu);
        mobileOverlay.addEventListener('click', toggleMobileMenu);
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', toggleMobileMenu);
        });

        // ============================================
        // FORM MULTI-STEP
        // ============================================
        function nextStep() {
            const step1 = document.getElementById('step1');
            const step2 = document.getElementById('step2');
            
            // Validação
            const priceSelected = document.querySelector('input[name="price"]:checked');
            const roomsSelected = document.querySelector('input[name="rooms"]:checked');
            const bairroSelected = document.getElementById('bairroSelect').value;
            
            if (!bairroSelected) {
                alert('Por favor, selecione um bairro de interesse');
                return;
            }
            
            if (!priceSelected) {
                alert('Por favor, selecione uma faixa de preço');
                return;
            }
            
            if (!roomsSelected) {
                alert('Por favor, selecione a quantidade de quartos');
                return;
            }
            
            step1.classList.remove('active');
            step2.classList.add('active');
            
            // Scroll suave para o formulário em mobile
            if (window.innerWidth < 768) {
                document.getElementById('leadForm').scrollIntoView({behavior: 'smooth'});
            }
        }

        function handleSubmit(e) {
            e.preventDefault();
            alert('Obrigado! Em breve um de nossos especialistas entrará em contato pelo WhatsApp.');
            // Aqui você integraria com seu CRM ou API
        }

        // ============================================
        // MÁSCARA WHATSAPP
        // ============================================
        const inputWhatsapp = document.getElementById('whatsapp');
        if (inputWhatsapp) {
            inputWhatsapp.addEventListener('input', function (e) {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length > 11) value = value.slice(0, 11);
                
                if (value.length > 0) value = '(' + value;
                if (value.length > 3) value = value.slice(0, 3) + ') ' + value.slice(3);
                if (value.length > 10) value = value.slice(0, 10) + '-' + value.slice(10);
                
                e.target.value = value;
            });
        }

   // ============================================
// PROPERTIES CAROUSEL - 8 DOTS
// ============================================
const carouselTrack = document.getElementById('propertiesCarousel');
const carouselDots = document.getElementById('carouselDots');
const carouselPrev = document.querySelector('.carousel-prev');
const carouselNext = document.querySelector('.carousel-next');

function renderProperties() {
    // Limpar elementos existentes
    carouselTrack.innerHTML = '';
    carouselDots.innerHTML = '';
    
    // Criar cards para cada imóvel
    properties.forEach((property, index) => {
        const card = document.createElement('div');
        card.className = 'property-card';
        card.innerHTML = `
            <div class="property-image">
                <img src="${property.image}" alt="${property.name}" loading="lazy">
                <div class="property-actions">
                    <button class="property-action" onclick="openGallery('${property.id}')" title="Ver Galeria">
                        <i class="ph ph-images"></i>
                    </button>
                    <button class="property-action" onclick="openMapModal('${property.name}', ${property.lat}, ${property.lng})" title="Ver Localização">
                        <i class="ph ph-map-pin"></i>
                    </button>
                </div>
            </div>
            <div class="property-content">
                <h3 class="property-name">${property.name}</h3>
                <p class="property-location">
                    <i class="ph ph-map-pin"></i>
                    ${property.location}
                </p>
                <div class="property-price">
                    ${property.price} <span>/ à vista</span>
                </div>
                <div class="property-details">
                    <span class="property-detail">
                        <i class="ph ph-bed"></i> ${property.rooms} Quartos
                    </span>
                    <span class="property-detail">
                        <i class="ph ph-ruler"></i> ${property.area}m²
                    </span>
                    <span class="property-detail">
                        <i class="ph ph-car"></i> ${property.garage} Vaga
                    </span>
                </div>
                <div class="property-buttons">
                    <a href="captacao.html?imovel=${property.id}" class="property-btn property-btn-primary">
                        Tenho Interesse
                    </a>
                    <button class="property-btn property-btn-secondary" onclick="openMapModal('${property.name}', ${property.lat}, ${property.lng})">
                        Ver Localização
                    </button>
                </div>
            </div>
        `;
        carouselTrack.appendChild(card);
    });
    
    // Criar dots (8 dots = 8 produtos)
    const totalDots = properties.length; // 8 dots
    
    for (let i = 0; i < totalDots; i++) {
        const dot = document.createElement('div');
        dot.className = `carousel-dot ${i === 0 ? 'active' : ''}`;
        dot.onclick = () => scrollToDot(i);
        carouselDots.appendChild(dot);
    }
    
    // Atualizar dots no scroll
    carouselTrack.addEventListener('scroll', updateDots);
}

function scrollToDot(dotIndex) {
    const cardWidth = 340 + 24; // Largura do card + gap
    const scrollAmount = dotIndex * cardWidth;
    carouselTrack.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

function updateDots() {
    const scrollLeft = carouselTrack.scrollLeft;
    const cardWidth = 340 + 24;
    const totalCards = properties.length;
    const totalDots = totalCards;
    
    // Calcular qual dot está ativo baseado no scroll
    const scrollPercent = scrollLeft / ((totalCards - 1) * cardWidth);
    const activeDot = Math.min(
        Math.round(scrollPercent * (totalDots - 1)),
        totalDots - 1
    );
    
    document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === activeDot);
    });
}

// Carousel navigation
carouselPrev.addEventListener('click', () => {
    carouselTrack.scrollBy({ left: -364, behavior: 'smooth' });
});

carouselNext.addEventListener('click', () => {
    carouselTrack.scrollBy({ left: 364, behavior: 'smooth' });
});

// Drag to scroll on desktop
let isDown = false;
let startX;
let scrollLeft;

carouselTrack.addEventListener('mousedown', (e) => {
    isDown = true;
    carouselTrack.style.cursor = 'grabbing';
    startX = e.pageX - carouselTrack.offsetLeft;
    scrollLeft = carouselTrack.scrollLeft;
});

carouselTrack.addEventListener('mouseleave', () => {
    isDown = false;
    carouselTrack.style.cursor = 'grab';
});

carouselTrack.addEventListener('mouseup', () => {
    isDown = false;
    carouselTrack.style.cursor = 'grab';
});

carouselTrack.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carouselTrack.offsetLeft;
    const walk = (x - startX) * 2;
    carouselTrack.scrollLeft = scrollLeft - walk;
});
        // ============================================
        // MAP MODAL
        // ============================================
        const mapModal = document.getElementById('mapModal');
        const mapContainer = document.getElementById('mapContainer');
        const mapModalTitle = document.getElementById('mapModalTitle');

        function openMapModal(title, lat, lng) {
            mapModalTitle.textContent = title;
            mapContainer.innerHTML = `
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.5!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${encodeURIComponent(title)}!5e0!3m2!1spt-BR!2sbr!4v1600000000000!5m2!1spt-BR!2sbr" 
                    width="100%" 
                    height="400" 
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy">
                </iframe>
            `;
            mapModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeMapModal() {
            mapModal.classList.remove('active');
            document.body.style.overflow = '';
        }

        // Close modal on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeMapModal();
        });

        // ============================================
        // COUNTDOWN TIMER
        // ============================================
        function updateCountdown() {
            // Set deadline to 3 days from now
            const deadline = new Date();
            deadline.setDate(deadline.getDate() + 3);
            
            const now = new Date();
            const diff = deadline - now;
            
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            
            const daysEl = document.getElementById('days');
            const hoursEl = document.getElementById('hours');
            const minutesEl = document.getElementById('minutes');
            const secondsEl = document.getElementById('seconds');
        
        if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();

    // ============================================
    // SCROLL TO FORM
    // ============================================
    function scrollToForm() {
        document.getElementById('leadForm').scrollIntoView({behavior: 'smooth'});
    }

    // ============================================
    // SMOOTH SCROLL FOR NAV LINKS
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ============================================
    // LAZY LOADING IMAGES
    // ============================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ============================================
    // INIT
    // ============================================
    document.addEventListener('DOMContentLoaded', () => {
        renderProperties();
        
        // Verificar se Phosphor Icons carregou
        if (typeof ph !== 'undefined') {
            console.log('Phosphor Icons carregado com sucesso');
        }
    })

    // ============================================
// GALLERY MODAL
// ============================================
let currentGalleryIndex = 0;
let galleryImages = [];

// Dados de galeria por imóvel (adicione mais imagens conforme necessário)
const galleryData = {
    "uniq-condominio-clube": {
        title: "UNIQ Condomínio Clube",
        location: "Nova Iguaçu, Rio de Janeiro",
        images: [
            "img/UNIQ/Feed1.png","img/UNIQ/Feed2.png","img/UNIQ/Feed3.png"
        ]
    },
    "nova-caxias-up": {
        title: "Nova Caxias UP",
        location: "Duque de Caxias, RJ",
        images: [
        "img/NovaCaxiasUP/FACHADA.jpg",
        "img/NovaCaxiasUP/GUARITA.jpg",
        "img/NovaCaxiasUP/CHURRASQUEIRA.jpg",
        "img/NovaCaxiasUP/IMAGEMAREADOLAZER.jpg"
    ]
    },
     "nova-caxias-fun": {
        title: "Nova Caxias UP",
        location: "Duque de Caxias, RJ",
        images: [
            "img/NovaCaxiasFUN/001_Grta_08.jpg","img/NovaCaxiasFUN/002_Fchd_04.jpg","img/NovaCaxiasFUN/Piscinacomdeckmolhado.jpg","img/NovaCaxiasFUN/VarandadaChurrasqueira.jpg"
        ]
    },
 "Soul-Samba": {
        title: "Soul Samba",
        location: "Duque de Caxias, RJ",
        images: [
            "img/SoulSamba/FACHADADIURNA.jpg","img/SoulSamba/APARTAMENTO.jpg","img/SoulSamba/CHURRASQUEIRA.jpg","img/SoulSamba/GUARITA.jpg","img/SoulSamba/piscina.jpg"
        ]
    },
 "Conquista-Max-Norte": {
        title: "Conquista Max Norte",
        location: "Duque de Caxias, RJ",
        images: [
            "img/ConquistaMaxNorte/GUARITADIURNA.jpg","img/ConquistaMaxNorte/3.jpg","img/ConquistaMaxNorte/5.jpg"]
    },
 "nova-caxias-up": {
        title: "Nova Caxias UP",
        location: "Duque de Caxias, RJ",
        images: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200",
            "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1200",
            "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200",
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200"
        ]
    },
 "nova-caxias-up": {
        title: "Nova Caxias UP",
        location: "Duque de Caxias, RJ",
        images: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200",
            "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1200",
            "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200",
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200"
        ]
    },
 "": {
        title: "Nova Caxias UP",
        location: "Duque de Caxias, RJ",
        images: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200",
            "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1200",
            "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200",
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200"
        ]
    },



};

function openGallery(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    if (!property) return;
    
    // Usar imagens do property ou do galleryData
    const galleryInfo = galleryData[propertyId];
    galleryImages = galleryInfo ? galleryInfo.images : [
        property.image,
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200"
    ];
    
    currentGalleryIndex = 0;
    
    // Preencher título e localização
    document.getElementById('galleryTitle').textContent = galleryInfo ? galleryInfo.title : property.name;
    document.getElementById('galleryLocation').innerHTML = `<i class="ph ph-map-pin"></i> ${property.location}`;
    
    // Preencher imagens
    const track = document.getElementById('galleryTrack');
    const dots = document.getElementById('galleryDots');
    const thumbs = document.getElementById('galleryThumbnails');
    
    track.innerHTML = '';
    dots.innerHTML = '';
    thumbs.innerHTML = '';
    
    galleryImages.forEach((img, index) => {
        // Slide
        const slide = document.createElement('div');
        slide.className = 'gallery-image';
        slide.innerHTML = `<img src="${img}" alt="Imagem ${index + 1}">`;
        track.appendChild(slide);
        
        // Dot
        const dot = document.createElement('div');
        dot.className = `gallery-dot ${index === 0 ? 'active' : ''}`;
        dot.onclick = () => goToGalleryImage(index);
        dots.appendChild(dot);
        
        // Thumbnail
        const thumb = document.createElement('div');
        thumb.className = `gallery-thumb ${index === 0 ? 'active' : ''}`;
        thumb.onclick = () => goToGalleryImage(index);
        thumb.innerHTML = `<img src="${img}" alt="Thumbnail ${index + 1}">`;
        thumbs.appendChild(thumb);
    });
    
    // Mostrar modal
    document.getElementById('galleryModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeGalleryModal() {
    document.getElementById('galleryModal').classList.remove('active');
    document.body.style.overflow = '';
}

function goToGalleryImage(index) {
    currentGalleryIndex = index;
    const track = document.getElementById('galleryTrack');
    track.style.transform = `translateX(-${index * 100}%)`;
    
    // Atualizar dots
    document.querySelectorAll('.gallery-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
    
    // Atualizar thumbnails
    document.querySelectorAll('.gallery-thumb').forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

function prevGalleryImage() {
    const newIndex = currentGalleryIndex > 0 ? currentGalleryIndex - 1 : galleryImages.length - 1;
    goToGalleryImage(newIndex);
}

function nextGalleryImage() {
    const newIndex = currentGalleryIndex < galleryImages.length - 1 ? currentGalleryIndex + 1 : 0;
    goToGalleryImage(newIndex);
}

// Fechar com ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeGalleryModal();
    if (e.key === 'ArrowLeft') prevGalleryImage();
    if (e.key === 'ArrowRight') nextGalleryImage();
});