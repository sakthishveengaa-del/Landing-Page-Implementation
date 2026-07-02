// State Management
let allProducts = [];
let filteredProducts = [];
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const statusMessage = document.getElementById('statusMessage');
const searchInput = document.getElementById('searchInput');
const categoryFilters = document.getElementById('categoryFilters');
const sortSelect = document.getElementById('sortSelect');

// Cart DOM Elements
const cartToggle = document.getElementById('cartToggle');
const cartCount = document.getElementById('cartCount');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCartBtn = document.getElementById('closeCart');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotalValue = document.getElementById('cartTotalValue');
const toast = document.getElementById('toast');

// Modal DOM Elements
const productModal = document.getElementById('productModal');
const closeModalBtn = document.getElementById('closeModal');
const modalBody = document.getElementById('modalBody');

// Initialize the application
async function init() {
    updateCartCount();
    renderCart();
    await fetchProducts();
}

// Fetch products from API
async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products/');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Add mock products for new categories requested
        const mockProducts = [
            // Mobile Phones (4 items)
            {
                id: 101,
                title: "iPhone 14 Pro Max 256GB Deep Purple",
                price: 1099.99,
                description: "The ultimate iPhone with a massive 6.7-inch Super Retina XDR display, Dynamic Island, and Pro camera system.",
                category: "mobile phones",
                image: "https://images.unsplash.com/photo-1678652197831-2d180705cd2c?auto=format&fit=crop&q=80&w=400",
                rating: { rate: 4.8, count: 1240 }
            },
            {
                id: 102,
                title: "Samsung Galaxy S23 Ultra 5G",
                price: 1199.99,
                description: "Epic camera, epic performance. Includes built-in S Pen for productivity and creativity on the go.",
                category: "mobile phones",
                image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=400",
                rating: { rate: 4.7, count: 856 }
            },
            {
                id: 105,
                title: "Google Pixel 8 Pro",
                price: 999.00,
                description: "Google's best pro camera yet. Built with Google AI for smarter photos, clearer calls, and a more helpful experience.",
                category: "mobile phones",
                image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=400",
                rating: { rate: 4.6, count: 532 }
            },
            {
                id: 106,
                title: "OnePlus 12 5G",
                price: 799.99,
                description: "Ultra-flagship performance featuring the Snapdragon 8 Gen 3, Hasselblad Camera for Mobile, and lightning-fast charging.",
                category: "mobile phones",
                image: "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?auto=format&fit=crop&q=80&w=400",
                rating: { rate: 4.5, count: 320 }
            },
            // Kid's Toys (4 items)
            {
                id: 103,
                title: "LEGO City Police Station Building Set",
                price: 69.99,
                description: "Build a 3-level police station with a patrol car, helicopter, and garbage truck. Perfect for creative roleplay.",
                category: "kid's toys",
                image: "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?auto=format&fit=crop&q=80&w=400",
                rating: { rate: 4.9, count: 432 }
            },
            {
                id: 104,
                title: "Nerf N-Strike Elite Motorized Blaster",
                price: 24.99,
                description: "Fire up to 90 feet with this motorized blaster. Includes 12 Elite darts for rapid-fire blasting action.",
                category: "kid's toys",
                image: "https://images.unsplash.com/photo-1555448248-2571daf6344b?auto=format&fit=crop&q=80&w=400",
                rating: { rate: 4.5, count: 890 }
            },
            {
                id: 107,
                title: "Hot Wheels 10-Car Pack",
                price: 14.99,
                description: "Features 10 die-cast vehicles with exclusive decorations. The perfect starter set or addition to any Hot Wheels collection.",
                category: "kid's toys",
                image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&q=80&w=400",
                rating: { rate: 4.8, count: 2150 }
            },
            {
                id: 108,
                title: "Barbie Dreamhouse Playset",
                price: 199.99,
                description: "The ultimate Barbie Dreamhouse with 3 stories, 8 rooms, an elevator, pool with slide, and 70+ accessories.",
                category: "kid's toys",
                image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=400",
                rating: { rate: 4.7, count: 1105 }
            }
        ];

        allProducts = [...data, ...mockProducts];
        filteredProducts = [...allProducts];
        
        // Extract unique categories and render filters
        const categories = [...new Set(allProducts.map(item => item.category))];
        renderCategoryFilters(categories);
        
        // Display products
        statusMessage.classList.add('hidden');
        productsGrid.classList.remove('hidden');
        displayProducts(filteredProducts);
        
    } catch (error) {
        console.error('Error fetching products:', error);
        statusMessage.innerHTML = `
            <i class="fa-solid fa-triangle-exclamation" style="font-size: 3rem; color: #ef4444; margin-bottom: 1rem;"></i>
            <p>Failed to load data. Please try again later.</p>
            <button class="btn btn-primary" style="margin-top: 1rem;" onclick="location.reload()">Retry</button>
        `;
    }
}

// Utility: Truncate text
function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
}

// Display products
function displayProducts(products) {
    productsGrid.innerHTML = '';
    
    if (products.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);">
                <i class="fa-solid fa-box-open" style="font-size: 3rem; margin-bottom: 1rem; color: var(--border-color);"></i>
                <p>No products found matching your criteria.</p>
            </div>
        `;
        return;
    }

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        const title = truncateText(product.title, 50);
        const description = truncateText(product.description, 60);
        
        card.innerHTML = `
            <div class="card-img-container">
                <span class="category-badge">${product.category}</span>
                <img src="${product.image}" alt="${product.title}" class="card-img" loading="lazy">
            </div>
            <div class="card-content">
                <h3 class="card-title" title="${product.title}">${title}</h3>
                <p class="card-desc">${description}</p>
                <div class="card-footer">
                    <span class="card-price">$${product.price.toFixed(2)}</span>
                    <div class="rating" style="color: #fbbf24; font-size: 0.85rem;">
                        <i class="fa-solid fa-star"></i> ${product.rating.rate} <span style="color: var(--text-muted);">(${product.rating.count})</span>
                    </div>
                </div>
                <div class="card-actions">
                    <button class="btn btn-outline" onclick="openModal(${product.id})">
                        <i class="fa-regular fa-eye"></i> View
                    </button>
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">
                        <i class="fa-solid fa-cart-plus"></i> Add to Cart
                    </button>
                </div>
            </div>
        `;
        
        productsGrid.appendChild(card);
    });
}

// Render Category Filters
function renderCategoryFilters(categories) {
    // Keep 'All' button, add others
    categories.forEach(category => {
        const btn = document.createElement('button');
        btn.className = 'category-btn';
        btn.dataset.category = category;
        btn.textContent = category;
        categoryFilters.appendChild(btn);
    });

    // Add event listeners to category buttons
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Update active state
            categoryBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            applyFiltersAndSort();
        });
    });
}

// Apply Search, Category Filter, and Sorting
function applyFiltersAndSort() {
    const searchTerm = searchInput.value.toLowerCase();
    const activeCategoryBtn = document.querySelector('.category-btn.active');
    const category = activeCategoryBtn ? activeCategoryBtn.dataset.category : 'all';
    const sortValue = sortSelect.value;
    
    // 1. Filter
    filteredProducts = allProducts.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(searchTerm);
        const matchesCategory = category === 'all' || product.category === category;
        return matchesSearch && matchesCategory;
    });
    
    // 2. Sort
    if (sortValue === 'low-high') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'high-low') {
        filteredProducts.sort((a, b) => b.price - a.price);
    } else {
        // default: sort by id
        filteredProducts.sort((a, b) => a.id - b.id);
    }
    
    displayProducts(filteredProducts);
}

// Event Listeners for Filters
searchInput.addEventListener('input', applyFiltersAndSort);
sortSelect.addEventListener('change', applyFiltersAndSort);

// --- Modal Functionality ---

function openModal(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;
    
    modalBody.innerHTML = `
        <div class="modal-product">
            <div class="modal-img-container">
                <img src="${product.image}" alt="${product.title}" class="modal-img">
            </div>
            <div class="modal-info">
                <span class="modal-category">${product.category}</span>
                <h2 class="modal-title">${product.title}</h2>
                <div class="modal-rating">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    <span>${product.rating.rate} Rating (${product.rating.count} Reviews)</span>
                </div>
                <div class="modal-price">$${product.price.toFixed(2)}</div>
                <p class="modal-desc">${product.description}</p>
                <button class="btn btn-primary" onclick="addToCart(${product.id})" style="padding: 1rem; font-size: 1.1rem;">
                    <i class="fa-solid fa-cart-plus"></i> Add to Cart
                </button>
            </div>
        </div>
    `;
    
    productModal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeModal() {
    productModal.classList.remove('show');
    document.body.style.overflow = '';
}

closeModalBtn.addEventListener('click', closeModal);
productModal.addEventListener('click', (e) => {
    if (e.target === productModal) closeModal();
});

// --- Cart Functionality ---

function addToCart(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    saveCart();
    updateCartCount();
    renderCart();
    showToast(`Added ${truncateText(product.title, 20)} to cart!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    renderCart();
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = count;
    
    if (count > 0) {
        cartCount.style.transform = 'scale(1.2)';
        setTimeout(() => {
            cartCount.style.transform = 'scale(1)';
        }, 200);
    }
}

function renderCart() {
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fa-solid fa-basket-shopping"></i>
                <p>Your cart is empty</p>
            </div>
        `;
        cartTotalValue.textContent = '0.00';
        return;
    }
    
    let total = 0;
    
    cart.forEach(item => {
        total += item.price * item.quantity;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="cart-item-img">
            <div class="cart-item-details">
                <div class="cart-item-title">${item.title}</div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.5rem;">
                    <div class="cart-item-price">$${item.price.toFixed(2)} x ${item.quantity}</div>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">
                        <i class="fa-solid fa-trash"></i> Remove
                    </button>
                </div>
            </div>
        `;
        
        cartItemsContainer.appendChild(cartItem);
    });
    
    cartTotalValue.textContent = total.toFixed(2);
}

// Cart UI Toggle
function toggleCart() {
    cartSidebar.classList.toggle('open');
    cartOverlay.classList.toggle('show');
    if (cartSidebar.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

cartToggle.addEventListener('click', toggleCart);
closeCartBtn.addEventListener('click', toggleCart);
cartOverlay.addEventListener('click', toggleCart);

// --- Toast Notification ---
function showToast(message) {
    toast.innerHTML = `<i class="fa-solid fa-check-circle" style="color: #4ade80;"></i> ${message}`;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Start App
init();
