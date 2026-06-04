/**
 * cart.js
 * Gerenciamento do Carrinho de Compras
 */

// Estado do Carrinho
window.animazCart = [];

document.addEventListener('DOMContentLoaded', () => {
    loadCart();
});

// ==========================================
// 1. Core Functions
// ==========================================
function loadCart() {
    const saved = localStorage.getItem('animaz_cart');
    if (saved) {
        try {
            window.animazCart = JSON.parse(saved);
        } catch (e) {
            console.error('Erro ao fazer parse do carrinho salvo:', e);
            window.animazCart = [];
        }
    }
    updateCartBadge();
    renderCart();
}

function saveCart() {
    localStorage.setItem('animaz_cart', JSON.stringify(window.animazCart));
    updateCartBadge();
    renderCart();
}

window.cartAddToCart = function(product, qty, size) {
    // Check if same item + size already in cart
    const existingIndex = window.animazCart.findIndex(item => 
        item.id === product.id && item.size === size
    );
    
    // Resolve correct price based on size if sizesPricing exists
    let price = product.price;
    if (product.sizesPricing && size && product.sizesPricing[size]) {
        price = product.sizesPricing[size];
    }
    
    if (existingIndex > -1) {
        window.animazCart[existingIndex].qty += qty;
    } else {
        window.animazCart.push({
            id: product.id,
            name: product.name,
            price: price,
            image: product.image,
            qty: qty,
            size: size
        });
    }
    
    saveCart();
    
    // Animate badge
    const badge = document.getElementById('cart-badge');
    if(badge) {
        badge.classList.remove('pulse');
        void badge.offsetWidth; // trigger reflow
        badge.classList.add('pulse');
    }
    
    showToast(`${qty}x ${product.name} adicionado ao carrinho!`);
}

window.removeFromCart = function(index) {
    if (index > -1 && index < window.animazCart.length) {
        window.animazCart.splice(index, 1);
        saveCart();
    }
}

window.updateCartQty = function(index, delta) {
    if (index > -1 && index < window.animazCart.length) {
        let newQty = window.animazCart[index].qty + delta;
        if (newQty < 1) newQty = 1;
        window.animazCart[index].qty = newQty;
        saveCart();
    }
}

window.clearCart = function() {
    if(confirm('Tem certeza que deseja limpar o carrinho?')) {
        window.animazCart = [];
        saveCart();
        closeCart();
        showToast('Carrinho limpo.');
    }
}

// ==========================================
// 2. Calculations
// ==========================================
function getCartCount() {
    return window.animazCart.reduce((total, item) => total + item.qty, 0);
}

function getCartTotal() {
    return window.animazCart.reduce((total, item) => {
        // Only sum items with price > 0
        if (item.price > 0) {
            return total + (item.price * item.qty);
        }
        return total;
    }, 0);
}

function updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    if (badge) {
        const count = getCartCount();
        badge.innerText = count;
        if(count > 0) {
            badge.style.display = 'flex';
        } else {
            badge.style.display = 'none';
        }
    }
}

// ==========================================
// 3. UI Render
// ==========================================
function renderCart() {
    const container = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    
    if (!container || !totalEl) return;
    
    container.innerHTML = '';
    
    if (window.animazCart.length === 0) {
        container.innerHTML = `
            <div class="cart-empty">
                <span>🐾</span>
                <h3>Seu carrinho está vazio</h3>
                <p>Navegue pelos produtos e adicione itens aqui.</p>
            </div>
        `;
        totalEl.innerText = 'R$ 0,00';
        
        // Disable export buttons if empty
        document.querySelectorAll('.btn-export').forEach(btn => btn.disabled = true);
        return;
    }
    
    // Enable export buttons
    document.querySelectorAll('.btn-export').forEach(btn => btn.disabled = false);
    
    window.animazCart.forEach((item, index) => {
        const subtotal = item.price > 0 ? (item.price * item.qty) : 0;
        const priceDisplay = item.price > 0 ? 
            item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : 
            'Consulte';
        
        const subtotalDisplay = subtotal > 0 ? 
            subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : 
            '';
            
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-info">
                <div>
                    <h4 class="cart-item-title">${item.name}</h4>
                    <p class="cart-item-meta">${item.size ? `Tamanho: ${item.size}` : ''}</p>
                </div>
                <div class="cart-item-controls">
                    <div class="qty-selector">
                        <button class="qty-btn" onclick="updateCartQty(${index}, -1)">−</button>
                        <span class="qty-value">${item.qty}</span>
                        <button class="qty-btn" onclick="updateCartQty(${index}, 1)">+</button>
                    </div>
                    <div class="cart-item-price ${item.price === 0 ? 'consulte' : ''}">
                        ${item.price > 0 ? subtotalDisplay : 'Consulte'}
                    </div>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${index})" title="Remover item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                </svg>
            </button>
        `;
        container.appendChild(div);
    });
    
    const total = getCartTotal();
    totalEl.innerText = total > 0 ? 
        total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : 
        'Consulte os preços';
}

// ==========================================
// 4. Drawer Toggle
// ==========================================
window.toggleCart = function() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    
    if (drawer.classList.contains('active')) {
        closeCart();
    } else {
        openCart();
    }
}

window.openCart = function() {
    document.getElementById('cart-drawer').classList.add('active');
    document.getElementById('cart-overlay').classList.add('active');
    document.body.style.overflow = 'hidden'; // prevent bg scroll
}

window.closeCart = function() {
    document.getElementById('cart-drawer').classList.remove('active');
    document.getElementById('cart-overlay').classList.remove('active');
    document.body.style.overflow = '';
}

// ==========================================
// 5. Toast System
// ==========================================
window.showToast = function(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-lime)" stroke-width="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        ${message}
    `;
    
    container.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 10);
    
    // Remove after 3s
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
