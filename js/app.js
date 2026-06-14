/**
 * app.js
 * Lógica principal da aplicação (Renderização, Filtros, Busca, Modal)
 */

// Estado Global
window.animazState = {
    storeInfo: null,
    categories: [],
    products: [],
    filteredProducts: [],
    currentCategory: 'todos',
    searchQuery: '',
    sortCriteria: 'default'
};

document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    setupHeroCarousel();
    setupSearch();
    setupCategoriesScroll();
});

// ==========================================
// 1. Carregamento de Dados
// ==========================================
async function loadProducts() {
    try {
        const data = window.animazData;
        if (!data) throw new Error('Dados não carregados do products.js');
        
        window.animazState.storeInfo = data.store;
        window.animazState.categories = data.categories;
        window.animazState.products = data.products;
        window.animazState.filteredProducts = [...data.products];
        
        renderCategories();
        renderProducts(window.animazState.filteredProducts);
        
        // Remove loading state
        const loadingState = document.getElementById('loading-state');
        if(loadingState) loadingState.classList.add('hidden');
        
    } catch (error) {
        console.error('Erro:', error);
        document.getElementById('loading-state').innerHTML = `<p>Erro ao carregar o catálogo. Tente novamente.</p>`;
    }
}

// ==========================================
// 2. Renderização de Categorias
// ==========================================
function renderCategories() {
    const container = document.getElementById('categories');
    if (!container) return;
    
    container.innerHTML = '';
    
    window.animazState.categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `category-pill ${cat.id === window.animazState.currentCategory ? 'active' : ''}`;
        btn.dataset.id = cat.id;
        btn.innerHTML = `<span>${cat.icon}</span> ${cat.name}`;
        
        btn.addEventListener('click', () => {
            document.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            filterByCategory(cat.id);
        });
        
        container.appendChild(btn);
    });
}

// ==========================================
// 3. Renderização de Produtos
// ==========================================
function renderProducts(productsToRender) {
    const grid = document.getElementById('products-grid');
    const emptyState = document.getElementById('empty-state');
    
    if (!grid) return;
    grid.innerHTML = '';
    
    if (productsToRender.length === 0) {
        emptyState.classList.remove('hidden');
        return;
    }
    
    emptyState.classList.add('hidden');
    
    productsToRender.forEach((product, index) => {
        // Determine initial price based on sizesPricing and pre-selected size
        let initialPrice = product.price;
        let isPriceFrom = false;
        
        if (product.sizesPricing && product.sizes && product.sizes.length > 0) {
            const firstSize = product.sizes[0];
            if (product.sizesPricing[firstSize]) {
                initialPrice = product.sizesPricing[firstSize];
            }
            const prices = Object.values(product.sizesPricing);
            const hasVariation = prices.some(p => p !== prices[0]);
            if (hasVariation) {
                isPriceFrom = true;
            }
        }
        
        let priceDisplay = formatPromoPriceHTML(initialPrice, isPriceFrom);
        
        // Sizes
        let sizesHTML = '';
        if (product.sizes && product.sizes.length > 0) {
            sizesHTML = product.sizes.map((size, i) => 
                `<span class="size-pill ${i===0 ? 'selected' : ''}" onclick="selectSize(this, ${product.id}, '${size}')">${size}</span>`
            ).join('');
        }
        
        // Gallery carousel images
        const gallery = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];
        const hasMultipleImages = gallery.length > 1;
        
        let carouselHTML = '';
        gallery.forEach((imgSrc, imgIdx) => {
            carouselHTML += `<img src="${imgSrc}" alt="${product.name} - Foto ${imgIdx + 1}" loading="lazy" class="card-slide ${imgIdx === 0 ? 'active' : ''}" data-slide-index="${imgIdx}">`;
        });
        
        // Dots for carousel
        let dotsHTML = '';
        if (hasMultipleImages) {
            dotsHTML = '<div class="card-carousel-dots">';
            gallery.forEach((_, dotIdx) => {
                dotsHTML += `<span class="card-dot ${dotIdx === 0 ? 'active' : ''}" data-dot="${dotIdx}"></span>`;
            });
            dotsHTML += '</div>';
        }
        
        // Navigation arrows
        let arrowsHTML = '';
        if (hasMultipleImages) {
            arrowsHTML = `
                <button class="card-carousel-arrow card-arrow-prev" aria-label="Foto anterior">‹</button>
                <button class="card-carousel-arrow card-arrow-next" aria-label="Próxima foto">›</button>
            `;
        }
        
        // Image counter badge
        let counterHTML = '';
        if (hasMultipleImages) {
            counterHTML = `<span class="card-img-counter">1/${gallery.length}</span>`;
        }
        
        const card = document.createElement('div');
        card.className = 'product-card';
        card.dataset.id = product.id;
        card.dataset.category = product.category;
        
        // Stagger animation delay
        card.style.animationDelay = `${index * 0.05}s`;
        
        card.innerHTML = `
            <div class="product-image-wrapper" data-product-id="${product.id}" data-total="${gallery.length}">
                ${carouselHTML}
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                ${arrowsHTML}
                ${dotsHTML}
                ${counterHTML}
            </div>
            <div class="product-info">
                <span class="product-brand">${highlightText(product.brand)}</span>
                <h3 class="product-name">${highlightText(product.name)}</h3>
                <p class="product-description">${highlightText(product.description)}</p>
                
                <div class="product-sizes" id="sizes-${product.id}">
                    ${sizesHTML}
                </div>
                
                <div class="product-price ${product.price === 0 ? 'consulte' : ''}">
                    ${priceDisplay}
                </div>
                
                <div class="product-actions">
                    <div class="qty-selector">
                        <button class="qty-btn" onclick="changeCardQty(${product.id}, -1)">−</button>
                        <span class="qty-value" id="qty-${product.id}">1</span>
                        <button class="qty-btn" onclick="changeCardQty(${product.id}, 1)">+</button>
                    </div>
                    <button class="add-to-cart-btn" id="btn-add-${product.id}" onclick="addFromCard(${product.id})">
                        🛒 Adicionar
                    </button>
                </div>
            </div>
        `;
        
        grid.appendChild(card);
        
        // Setup carousel interactions for this card
        if (hasMultipleImages) {
            setupCardCarousel(card, product.id);
        }
    });
    
    setupIntersectionObserver();
}

// ==========================================
// Card Image Carousel Logic
// ==========================================
function setupCardCarousel(card, productId) {
    const wrapper = card.querySelector('.product-image-wrapper');
    const slides = wrapper.querySelectorAll('.card-slide');
    const dots = wrapper.querySelectorAll('.card-dot');
    const counter = wrapper.querySelector('.card-img-counter');
    const prevBtn = wrapper.querySelector('.card-arrow-prev');
    const nextBtn = wrapper.querySelector('.card-arrow-next');
    const total = slides.length;
    let current = 0;
    
    function goToSlide(idx) {
        if (idx < 0) idx = total - 1;
        if (idx >= total) idx = 0;
        
        slides.forEach(s => s.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));
        
        slides[idx].classList.add('active');
        if (dots[idx]) dots[idx].classList.add('active');
        if (counter) counter.textContent = `${idx + 1}/${total}`;
        
        current = idx;
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            goToSlide(current - 1);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            goToSlide(current + 1);
        });
    }
    
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            e.stopPropagation();
            goToSlide(parseInt(dot.dataset.dot));
        });
    });
    
    // Click on image opens lightbox
    slides.forEach(slide => {
        slide.addEventListener('click', () => {
            openLightbox(productId);
        });
        slide.style.cursor = 'zoom-in';
    });
}

// Helper: Formata Preço HTML
function formatPriceHTML(price) {
    if (!price || price <= 0) return 'Consulte';
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Helper: Formata Preço Promocional (De: / Por: 10% OFF)
function formatPromoPriceHTML(price, isFrom) {
    if (!price || price <= 0) return '<div class="price-promo consulte">Consulte</div>';
    
    const originalPriceStr = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const discountedPriceStr = (price * 0.9).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    
    if (isFrom) {
        return `
            <div class="price-original">De: <span>A partir de ${originalPriceStr}</span></div>
            <div class="price-promo">Por: <span class="price-from-label" style="font-size: 13px; font-weight: 500; color: #888; display: inline; margin-right: 4px;">A partir de</span>${discountedPriceStr}</div>
        `;
    } else {
        return `
            <div class="price-original">De: <span>${originalPriceStr}</span></div>
            <div class="price-promo">Por: ${discountedPriceStr}</div>
        `;
    }
}

// Helper: Destaca texto pesquisado
function highlightText(text) {
    const query = window.animazState.searchQuery.trim();
    if (!query) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

// Helper: Selecionar tamanho no card
function selectSize(element, productId, size) {
    const container = document.getElementById(`sizes-${productId}`);
    if(!container) return;
    
    container.querySelectorAll('.size-pill').forEach(pill => pill.classList.remove('selected'));
    element.classList.add('selected');
    
    // Update price display if sizesPricing exists
    const product = window.animazState.products.find(p => p.id === productId);
    if (product) {
        const info = container.closest('.product-info');
        const priceContainer = info ? info.querySelector('.product-price') : null;
        if (priceContainer && product.price > 0) {
            let selectedPrice = product.price;
            if (product.sizesPricing && product.sizesPricing[size]) {
                selectedPrice = product.sizesPricing[size];
            }
            priceContainer.innerHTML = formatPromoPriceHTML(selectedPrice, false);
        }
    }
}

// Helper: Alterar Qtd no card
function changeCardQty(productId, delta) {
    const span = document.getElementById(`qty-${productId}`);
    let current = parseInt(span.innerText);
    let newVal = current + delta;
    if (newVal < 1) newVal = 1;
    span.innerText = newVal;
}

// Helper: Adicionar a partir do card (chama func do cart.js se existir)
function addFromCard(productId) {
    const qtySpan = document.getElementById(`qty-${productId}`);
    const qty = parseInt(qtySpan.innerText);
    
    // Find selected size
    let size = '';
    const sizesContainer = document.getElementById(`sizes-${productId}`);
    if (sizesContainer) {
        const selectedPill = sizesContainer.querySelector('.size-pill.selected');
        if (selectedPill) size = selectedPill.innerText;
    }
    
    const product = window.animazState.products.find(p => p.id === productId);
    
    if (typeof window.cartAddToCart === 'function' && product) {
        window.cartAddToCart(product, qty, size);
        
        // Feedback visual
        const btn = document.getElementById(`btn-add-${productId}`);
        const originalText = btn.innerHTML;
        btn.classList.add('added');
        btn.innerHTML = '✅ Adicionado!';
        
        setTimeout(() => {
            btn.classList.remove('added');
            btn.innerHTML = originalText;
            qtySpan.innerText = 1; // reset qty
        }, 2000);
    }
}

// ==========================================
// 4. Filtros e Ordenação
// ==========================================
function filterByCategory(categoryId) {
    window.animazState.currentCategory = categoryId;
    applyFilters();
}

function setupSearch() {
    const input = document.getElementById('search-input');
    const clearBtn = document.getElementById('search-clear');
    let timeout;
    
    if (!input) return;
    
    input.addEventListener('input', (e) => {
        clearTimeout(timeout);
        const val = e.target.value;
        
        if (val.length > 0) {
            clearBtn.classList.remove('hidden');
        } else {
            clearBtn.classList.add('hidden');
        }
        
        timeout = setTimeout(() => {
            window.animazState.searchQuery = val.toLowerCase();
            applyFilters();
        }, 300); // Debounce
    });
    
    if(clearBtn) {
        clearBtn.addEventListener('click', () => {
            input.value = '';
            clearBtn.classList.add('hidden');
            window.animazState.searchQuery = '';
            applyFilters();
            input.focus();
        });
    }
}

window.sortProducts = function(criteria) {
    window.animazState.sortCriteria = criteria;
    applyFilters();
}

function applyFilters() {
    let result = [...window.animazState.products];
    const query = window.animazState.searchQuery;
    const cat = window.animazState.currentCategory;
    const sort = window.animazState.sortCriteria;
    
    // 1. Filtrar por Categoria
    if (cat !== 'todos') {
        result = result.filter(p => p.category === cat);
    }
    
    // 2. Filtrar por Busca
    if (query) {
        result = result.filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.brand.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query)
        );
    }
    
    // 3. Ordenação
    if (sort === 'name-asc') {
        result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === 'name-desc') {
        result.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sort === 'price-asc') {
        result.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-desc') {
        result.sort((a, b) => b.price - a.price);
    }
    
    window.animazState.filteredProducts = result;
    renderProducts(result);
}

// ==========================================
// 5. Hero Banner Carousel
// ==========================================
let _bannerSlides = [];
let _bannerDots = [];
let _currentBannerSlide = 0;
let _bannerInterval = null;

function showBannerSlide(index) {
    if (_bannerSlides.length === 0) return;
    if (index < 0) index = _bannerSlides.length - 1;
    if (index >= _bannerSlides.length) index = 0;
    
    _bannerSlides.forEach(s => s.classList.remove('active'));
    _bannerDots.forEach(d => d.classList.remove('active'));
    
    _bannerSlides[index].classList.add('active');
    if (_bannerDots[index]) _bannerDots[index].classList.add('active');
    _currentBannerSlide = index;
}

window.slideBanner = function(direction) {
    showBannerSlide(_currentBannerSlide + direction);
    startBannerAutoRotate(); // reinicia o timer
};

function startBannerAutoRotate() {
    if (_bannerInterval) clearInterval(_bannerInterval);
    _bannerInterval = setInterval(() => {
        showBannerSlide(_currentBannerSlide + 1);
    }, 6000);
}

function setupHeroCarousel() {
    _bannerSlides = Array.from(document.querySelectorAll('.banner-slide'));
    _bannerDots   = Array.from(document.querySelectorAll('.dot'));
    
    if (_bannerSlides.length === 0) return;
    
    // Click nos dots
    _bannerDots.forEach(dot => {
        dot.addEventListener('click', () => {
            showBannerSlide(parseInt(dot.dataset.index));
            startBannerAutoRotate();
        });
    });
    
    // Pausa ao passar o mouse
    const wrapper = document.querySelector('.hero-carousel-wrapper');
    if (wrapper) {
        wrapper.addEventListener('mouseenter', () => {
            if (_bannerInterval) clearInterval(_bannerInterval);
        });
        wrapper.addEventListener('mouseleave', startBannerAutoRotate);
    }
    
    // Inicia rotação automática
    startBannerAutoRotate();
}

// ==========================================
// 6. Intersection Observer (Animação Scroll)
// ==========================================
function setupIntersectionObserver() {
    const cards = document.querySelectorAll('.product-card');
    
    if (!('IntersectionObserver' in window)) {
        cards.forEach(c => c.classList.add('animate-in'));
        return;
    }
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    cards.forEach(card => observer.observe(card));
}

// ==========================================
// 6b. Ocultar Barra de Categorias no Scroll
// ==========================================
function setupCategoriesScroll() {
    const categoriesBar = document.querySelector('.categories-bar');
    if (!categoriesBar) return;
    
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Se rolar para baixo e passar de 150px, oculta a barra
        if (scrollTop > lastScrollTop && scrollTop > 150) {
            categoriesBar.classList.add('hidden-scroll');
        } else if (scrollTop < lastScrollTop) {
            // Se rolar para cima, mostra a barra
            categoriesBar.classList.remove('hidden-scroll');
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, { passive: true });
}

// ==========================================
// 7. Lightbox / Modal de Galeria
// ==========================================
let currentLightboxImages = [];
let currentLightboxIndex = 0;

window.openLightbox = function(productId) {
    const product = window.animazState.products.find(p => p.id === productId);
    if (!product) return;
    
    currentLightboxImages = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];
    currentLightboxIndex = 0;
    
    const lightbox = document.getElementById('lightbox');
    
    updateLightboxView();
    
    // Render thumbnails if more than 1
    const thumbsContainer = document.getElementById('lightbox-thumbnails');
    thumbsContainer.innerHTML = '';
    if (currentLightboxImages.length > 1) {
        currentLightboxImages.forEach((imgSrc, idx) => {
            const thumb = document.createElement('img');
            thumb.src = imgSrc;
            thumb.className = `lightbox-thumb ${idx === 0 ? 'active' : ''}`;
            thumb.onclick = () => {
                currentLightboxIndex = idx;
                updateLightboxView();
            };
            thumbsContainer.appendChild(thumb);
        });
    }
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevents scrolling
}

window.closeLightbox = function() {
    const lightbox = document.getElementById('lightbox');
    if(lightbox) lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

window.navigateLightbox = function(direction) {
    currentLightboxIndex += direction;
    if (currentLightboxIndex < 0) {
        currentLightboxIndex = currentLightboxImages.length - 1;
    } else if (currentLightboxIndex >= currentLightboxImages.length) {
        currentLightboxIndex = 0;
    }
    updateLightboxView();
}

function updateLightboxView() {
    if(currentLightboxImages.length === 0) return;
    
    const imgElement = document.getElementById('lightbox-image');
    if(imgElement) {
        imgElement.src = currentLightboxImages[currentLightboxIndex];
    }
    
    // Update active thumb
    const thumbs = document.querySelectorAll('.lightbox-thumb');
    thumbs.forEach((t, idx) => {
        if(idx === currentLightboxIndex) t.classList.add('active');
        else t.classList.remove('active');
    });
}

window.toggleRegulations = function() {
    const btn = document.querySelector('.regulation-toggle-btn');
    const content = document.getElementById('regulation-content');
    if (!content || !btn) return;
    
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', !isExpanded);
    content.classList.toggle('active');
};

// ==========================================
// 8. Efeito de Zoom / Lupa no Lightbox
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const imgElement = document.getElementById('lightbox-image');
    if (imgElement) {
        // Efeito de lupa seguindo o mouse
        imgElement.addEventListener('mousemove', function(e) {
            if (!imgElement.classList.contains('zoomed')) return;
            const rect = e.target.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            imgElement.style.transformOrigin = `${x}% ${y}%`;
        });
        
        // Alternar zoom com o clique
        imgElement.addEventListener('click', function(e) {
            e.stopPropagation(); // Evitar fechar o lightbox
            if (imgElement.classList.contains('zoomed')) {
                imgElement.classList.remove('zoomed');
                imgElement.style.transformOrigin = 'center center';
            } else {
                imgElement.classList.add('zoomed');
                // Centralizar o zoom no ponto clicado
                const rect = e.target.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                imgElement.style.transformOrigin = `${x}% ${y}%`;
            }
        });
        
        // Tirar o zoom ao sair com o mouse para evitar tela presa
        imgElement.addEventListener('mouseleave', function() {
            imgElement.classList.remove('zoomed');
            imgElement.style.transformOrigin = 'center center';
        });
    }
});
