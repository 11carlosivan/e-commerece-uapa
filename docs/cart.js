let cart = JSON.parse(localStorage.getItem('cart')) || [];
        
// Función para agregar un producto al carrito
function addToCart(product) {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1; // Incrementar cantidad si ya existe
    } else {
        cart.push({ ...product, quantity: 1 }); // Agregar nuevo producto
    }
    localStorage.setItem('cart', JSON.stringify(cart)); // Guardar carrito en localStorage
    displayCartItems();
}

// Función para mostrar los productos en el carrito
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Limpiar la lista de productos

    cart.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.className = 'bg-white p-4 rounded shadow flex justify-between items-center';
        itemCard.innerHTML = `
            <div class="flex items-center">
                <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover mr-4">
                <div>
                    <h3 class="text-lg">${item.name}</h3>
                    <p>Precio: $${item.price}</p>
                    <p>Cantidad: ${item.quantity}</p>
                </div>
            </div>
            <button class="bg-red-500 text-white px-2 py-1 rounded" onclick="removeFromCart(${item.id})">Eliminar</button>
        `;
        cartItemsContainer.appendChild(itemCard);
    });

    updateSummary();
    updateCartCount(); // Actualiza el contador del carrito
}

// Función para eliminar un producto del carrito
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart)); // Actualizar localStorage
    displayCartItems();
}

function updateSummary() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = 5; // Costo de envío fijo
    const total = subtotal + shipping;

    document.getElementById('subtotal').innerText = subtotal.toFixed(2);
    document.getElementById('total').innerText = total.toFixed(2);
}

function proceedToCheckout() {
    alert("Procediendo al pago...");
    // Aquí puedes redirigir a la página de pago o realizar otras acciones
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').innerText = cartCount;
}

// Inicializar la visualización del carrito
document.addEventListener('DOMContentLoaded', () => {
    displayCartItems();
    updateCartCount(); // Actualiza el contador del carrito al cargar
});
