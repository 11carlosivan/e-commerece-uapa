let products = JSON.parse(localStorage.getItem('products')) || [];
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Limpiar la lista de productos

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'bg-white p-4 rounded shadow';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="w-full h-32 object-cover mb-2">
            <h2 class="text-xl">${product.name}</h2>
            <p class="text-gray-700">$${product.price}</p>
            <p class="text-gray-600">${product.description}</p>
            <label for="quantity-${product.id}" class="mr-2">Cantidad:</label>
            <input type="number" id="quantity-${product.id}" value="1" min="1" class="border p-1 w-16">
            <button class="bg-blue-500 text-white px-4 py-2 rounded mt-2" onclick="addToCart(${product.id})">Agregar al carrito</button>
        `;
        productList.appendChild(productCard);
    });
}

function addToCart(productId) {
    const quantity = parseInt(document.getElementById(`quantity-${productId}`).value);
    const product = products.find(p => p.id === productId);

    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
        existingProduct.quantity += quantity; // Incrementar cantidad si ya existe
    } else {
        cart.push({ ...product, quantity }); // Agregar nuevo producto al carrito
    }

    localStorage.setItem('cart', JSON.stringify(cart)); // Guardar carrito en localStorage
    alert(`Se han agregado ${quantity} ${product.name}(s) al carrito`);
    updateCartCount(); // Actualiza el contador del carrito
    updatePurchaseSummary(); // Actualiza el resumen de compra
}

// Inicializar la visualización de productos
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    updateCartCount(); // Actualiza el contador del carrito al cargar
    updatePurchaseSummary(); // Actualiza el resumen de compra al cargar
});