const products = {
  shoes: [
    { id: 1, name: "Air Max Elite", price: 4850, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400", description: "Premium running shoes with advanced cushioning technology", materials: "Mesh upper, Rubber sole, Memory foam insole", colors: ["Black", "White", "Red"], sizes: ["7", "8", "9", "10", "11"] },
    { id: 2, name: "Street King High", price: 3200, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400", description: "Classic high-top sneakers for urban style", materials: "Canvas upper, Vulcanized rubber sole", colors: ["Black", "White", "Navy"], sizes: ["6", "7", "8", "9", "10"] },
    { id: 3, name: "Flex Runner Pro", price: 4250, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400", description: "Lightweight running shoes with responsive cushioning", materials: "Knit upper, EVA midsole, Rubber outsole", colors: ["Gray", "Blue", "Green"], sizes: ["7", "8", "9", "10", "11"] },
    { id: 4, name: "Urban Walker", price: 2850, image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400", description: "Comfortable walking shoes for daily wear", materials: "Leather upper, Cushioned footbed", colors: ["Brown", "Black", "Tan"], sizes: ["7", "8", "9", "10", "11"] },
    { id: 5, name: "Sport Elite X", price: 5500, image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400", description: "Professional sports shoes with advanced features", materials: "Synthetic upper, Air cushioning, Carbon fiber plate", colors: ["Neon", "Black", "White"], sizes: ["7", "8", "9", "10", "11"] }
  ],
  tshirts: [
    { id: 6, name: "Premium Cotton Tee", price: 850, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400", description: "100% premium cotton t-shirt for ultimate comfort", materials: "100% Premium Cotton, Pre-shrunk fabric", colors: ["White", "Black", "Gray", "Navy"], sizes: ["S", "M", "L", "XL", "XXL"] },
    { id: 7, name: "Graphic Street Tee", price: 1200, image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400", description: "Trendy graphic t-shirt with unique design", materials: "Cotton blend, Screen printed design", colors: ["White", "Black", "Red"], sizes: ["S", "M", "L", "XL"] },
    { id: 8, name: "Athletic Performance Tee", price: 950, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400", description: "Moisture-wicking athletic t-shirt", materials: "Polyester blend, Quick-dry technology", colors: ["Blue", "Black", "Gray"], sizes: ["S", "M", "L", "XL", "XXL"] },
    { id: 9, name: "Vintage Wash Tee", price: 1100, image: "https://images.unsplash.com/photo-1583743814966-8936f37f4678?w=400", description: "Vintage washed t-shirt with worn-in feel", materials: "100% Cotton, Enzyme washed", colors: ["Light Blue", "Gray", "Black"], sizes: ["S", "M", "L", "XL"] },
    { id: 10, name: "Premium Polo", price: 1450, image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400", description: "Classic polo shirt with premium finish", materials: "Pique cotton, Mother of pearl buttons", colors: ["White", "Navy", "Maroon"], sizes: ["S", "M", "L", "XL", "XXL"] }
  ],
  pants: [
    { id: 11, name: "Slim Fit Jeans", price: 1850, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400", description: "Premium slim fit denim jeans", materials: "98% Cotton, 2% Elastane, Stretch denim", colors: ["Dark Blue", "Light Blue", "Black"], sizes: ["28", "30", "32", "34", "36"] },
    { id: 12, name: "Chino Pants", price: 1650, image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400", description: "Classic chino pants for smart casual look", materials: "100% Cotton twill, Garment dyed", colors: ["Khaki", "Navy", "Olive"], sizes: ["28", "30", "32", "34", "36"] },
    { id: 13, name: "Jogger Pants", price: 1350, image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400", description: "Comfortable jogger pants for active lifestyle", materials: "French terry cotton, Elastic waistband", colors: ["Gray", "Black", "Navy"], sizes: ["S", "M", "L", "XL"] },
    { id: 14, name: "Cargo Pants", price: 1750, image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400", description: "Utility cargo pants with multiple pockets", materials: "Cotton canvas, Reinforced stitching", colors: ["Olive", "Black", "Brown"], sizes: ["28", "30", "32", "34", "36"] },
    { id: 15, name: "Dress Pants", price: 1950, image: "https://images.unsplash.com/photo-1506629905607-d405b7a30db6?w=400", description: "Formal dress pants for business occasions", materials: "Wool blend, Tailored fit", colors: ["Charcoal", "Navy", "Black"], sizes: ["28", "30", "32", "34", "36"] }
  ]
};

let cart = [];
let orders = [];
let currentProduct = null;

function initStore() {
  displayProducts('shoes', 'shoes-grid');
  displayProducts('tshirts', 'tshirts-grid');
  displayProducts('pants', 'pants-grid');
  updateCartCount();
}

function displayProducts(category, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  products[category].forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.onclick = () => showProductDetails(product);
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <div class="product-info">
        <div class="product-name">${product.name}</div>
        <div class="product-price">₱${product.price.toLocaleString()}</div>
      </div>
    `;
    container.appendChild(card);
  });
}

function showProductDetails(product) {
  currentProduct = product;
  const details = document.getElementById('product-details');
  details.innerHTML = `
    <div class="product-details">
      <img src="${product.image}" alt="${product.name}" />
      <div class="product-details-info">
        <h3>${product.name}</h3>
        <p><strong>Price:</strong> ₱${product.price.toLocaleString()}</p>
        <p><strong>Description:</strong> ${product.description}</p>
        <p><strong>Materials:</strong> ${product.materials}</p>
        <div class="color-options">
          <strong>Colors:</strong><br>
          ${product.colors.map(c => `<button class="color-btn" onclick="selectColor(this)">${c}</button>`).join('')}
        </div>
        <div class="size-options">
          <strong>Sizes:</strong><br>
          ${product.sizes.map(s => `<button class="size-btn" onclick="selectSize(this)">${s}</button>`).join('')}
        </div>
        <button class="add-to-cart-btn" onclick="addToCart()">Add to Cart</button>
      </div>
    </div>
  `;
  document.getElementById('product-modal').style.display = 'block';
}

function selectColor(btn) {
  document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
}

function selectSize(btn) {
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
}

function addToCart() {
  const color = document.querySelector('.color-btn.selected')?.textContent;
  const size = document.querySelector('.size-btn.selected')?.textContent;
  if (!color || !size) return alert('Please select color and size.');
  const item = { ...currentProduct, color, size, quantity: 1 };
  const existing = cart.find(i => i.id === item.id && i.color === color && i.size === size);
  existing ? existing.quantity++ : cart.push(item);
  updateCartCount();
  closeProductModal();
  alert('Added to cart!');
}

function updateCartCount() {
  document.querySelector('.cart-count').textContent = cart.reduce((sum, i) => sum + i.quantity, 0);
}

function toggleCart() {
  const modal = document.getElementById('cart-modal');
  modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
  displayCart();
}

function displayCart() {
  const container = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');
  container.innerHTML = '';
  let total = 0;
  cart.forEach((item, idx) => {
    total += item.price * item.quantity;
    container.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" />
        <div>
          <div>${item.name} (${item.color}, ${item.size})</div>
          <div>₱${item.price.toLocaleString()} each</div>
          <div class="quantity-controls">
            <button class="quantity-btn" onclick="updateQuantity(${idx}, -1)">-</button>
            <span>${item.quantity}</span>
            <button class="quantity-btn" onclick="updateQuantity(${idx}, 1)">+</button>
          </div>
        </div>
      </div>
    `;
  });
  totalEl.textContent = total.toLocaleString();
}

function updateQuantity(idx, change) {
  cart[idx].quantity += change;
  if (cart[idx].quantity <= 0) cart.splice(idx, 1);
  updateCartCount();
  displayCart();
}

function checkout() {
  if (!cart.length) return alert('Cart is empty.');
  closeCart();
  document.getElementById('payment-modal').style.display = 'block';
}

function closeCart() {
  document.getElementById('cart-modal').style.display = 'none';
}
function closeProductModal() {
  document.getElementById('product-modal').style.display = 'none';
}
function closePaymentModal() {
  document.getElementById('payment-modal').style.display = 'none';
}

document.getElementById('payment-form').addEventListener('submit', e => {
  e.preventDefault();
  orders.push({ id: Date.now(), items: [...cart], total: cart.reduce((t, i) => t + i.price * i.quantity, 0), date: new Date().toLocaleString(), status: 'Processing' });
  cart = [];
  updateCartCount();
  closePaymentModal();
  alert('Thanks for your order, this is only a demo store');
});

function toggleOrders() {
  const modal = document.getElementById('orders-modal');
  modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
  displayOrders();
}

function displayOrders() {
  const container = document.getElementById('orders-list');
  container.innerHTML = orders.length ? orders.map(o => `
    <div class="order-item">
      <h4>Order #${o.id}</h4>
      <p>Total: ₱${o.total.toLocaleString()} | Status: ${o.status}</p>
      <button class="cancel-btn" onclick="cancelOrder(${o.id})">Cancel Order</button>
    </div>
  `).join('') : '<p>No orders yet.</p>';
}

function cancelOrder(id) {
  const idx = orders.findIndex(o => o.id === id);
  if (idx !== -1) orders.splice(idx, 1);
  displayOrders();
}

function scrollToCategory(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

window.onload = initStore;
