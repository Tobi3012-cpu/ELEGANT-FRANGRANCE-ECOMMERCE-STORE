// shared.js – perfume data, cart, modal, utilities

const perfumeData = [
  { id: 'p1', name: 'Velvet Peony', price: 89.00, notes: 'Peony · Rose · Musk', desc: 'A lush floral bouquet with soft musk.', fullDesc: 'Top: Pink Peony, Heart: Damask Rose, Base: White Musk. Long-lasting eau de parfum.', image: 'https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=400', imgId: '1' },
  { id: 'p2', name: 'Santal Bloom', price: 105.00, notes: 'Sandalwood · Jasmine · Vanilla', desc: 'Creamy sandalwood wrapped in jasmine.', image: 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=400', imgId: '2' },
  { id: 'p3', name: 'Rose Thé', price: 78.00, notes: 'Tea Rose · Bergamot · Cedar', desc: 'Fresh, delicate, like a garden after rain.', image: 'https://images.pexels.com/photos/1830450/pexels-photo-1830450.jpeg?auto=compress&cs=tinysrgb&w=400', imgId: '3' },
  { id: 'p4', name: 'Ambre Nude', price: 112.00, notes: 'Amber · Tonka · Pink Pepper', desc: 'Warm, sensual, slightly spicy.', image: 'https://images.pexels.com/photos/2649629/pexels-photo-2649629.jpeg?auto=compress&cs=tinysrgb&w=400', imgId: '4' },
  { id: 'p5', name: 'Fleur d\'Oranger', price: 94.00, notes: 'Orange Blossom · Petitgrain · Honey', desc: 'Sunny and uplifting.', image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400', imgId: '5' },
  { id: 'p6', name: 'Vanille Bois', price: 99.00, notes: 'Vanilla · Cedarwood · Benzoin', desc: 'Cozy, addictive gourmand.', image: 'https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=400', imgId: '6' }
];

let cart = JSON.parse(localStorage.getItem('petalCart')) || [];

function updateCartCount() {
  const count = cart.reduce((sum, i) => sum + i.quantity, 0);
  const el = document.getElementById('cartCount');
  if (el) el.textContent = count;
  localStorage.setItem('petalCart', JSON.stringify(cart));
}

function addToCart(product, qty = 1) {
  const existing = cart.find(item => item.id === product.id);
  if (existing) existing.quantity += qty;
  else cart.push({ ...product, quantity: qty });
  updateCartCount();
}

function renderProductGrid(containerId, products) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = products.map((p, idx) => {
    return `<div class="product-card" data-product-id="${p.id}" style="animation-delay: ${idx*0.06}s;">
      <img src="${p.image}" alt="${p.name}">
      <div class="product-name">${p.name}</div>
      <div class="product-desc">${p.notes}</div>
      <div class="product-price">$${p.price}</div>
      <div class="product-actions">
        <button class="buy-btn" data-action="buy">BUY</button>
        <span style="font-size:0.8rem;">details</span>
      </div>
    </div>`;
  }).join('');
  attachProductListeners();
}

let currentModalProduct = null;
const modal = document.getElementById('productModal');

function openModal(product) {
  currentModalProduct = product;
  document.getElementById('modalImg').src = product.image;
  document.getElementById('modalName').textContent = product.name;
  document.getElementById('modalNotes').textContent = product.notes;
  document.getElementById('modalDesc').textContent = product.desc;
  document.getElementById('modalPrice').textContent = `$${product.price}`;
  const detailLink = document.getElementById('modalDetailLink');
  if (detailLink) detailLink.href = `product.html?id=${product.id}`;
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeModal() { modal.style.display = 'none'; document.body.style.overflow = ''; }

function attachProductListeners() {
  document.querySelectorAll('.product-card').forEach(card => {
    const pid = card.dataset.productId;
    const product = perfumeData.find(p => p.id === pid);
    if (!product) return;
    card.addEventListener('click', (e) => { if (!e.target.closest('.buy-btn')) openModal(product); });
    const buyBtn = card.querySelector('.buy-btn');
    if (buyBtn) buyBtn.addEventListener('click', (e) => { e.stopPropagation(); addToCart(product); window.location.href = 'checkout.html'; });
  });
}

function updateCheckoutDisplay(container) {
  if (!container) return;
  if (cart.length === 0) { container.innerHTML = '<p>Your cart is empty.</p>'; return; }
  let html = cart.map(item => `<div style="display:flex; justify-content:space-between;"><span>${item.name} x${item.quantity}</span><span>$${(item.price*item.quantity).toFixed(2)}</span></div>`).join('');
  const total = cart.reduce((s, i) => s + i.price*i.quantity, 0).toFixed(2);
  html += `<div style="border-top:2px solid var(--brown); margin-top:16px; padding-top:12px; font-weight:700; display:flex; justify-content:space-between;"><span>TOTAL</span><span>$${total}</span></div>`;
  container.innerHTML = html;
}

window.updateCheckoutDisplay = updateCheckoutDisplay;
window.renderProductGrid = renderProductGrid;
window.perfumeData = perfumeData;
window.addToCart = addToCart;
window.updateCartCount = updateCartCount;

document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  const closeBtn = document.getElementById('closeModalBtn');
  if (closeBtn) closeBtn.onclick = closeModal;
  window.onclick = (e) => { if (e.target === modal) closeModal(); };
  document.getElementById('modalBuyBtn')?.addEventListener('click', () => {
    if (currentModalProduct) { addToCart(currentModalProduct); window.location.href = 'checkout.html'; closeModal(); }
  });
  document.getElementById('modalAddCartBtn')?.addEventListener('click', () => {
    if (currentModalProduct) { addToCart(currentModalProduct); updateCartCount(); closeModal(); }
  });
  document.getElementById('cartWidget')?.addEventListener('click', (e) => { e.preventDefault(); window.location.href = 'checkout.html'; });
});