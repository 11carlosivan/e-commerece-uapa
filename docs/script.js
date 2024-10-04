const products = [
    { id: 1, name: "Producto 1", price: 100 },
    { id: 2, name: "Producto 2", price: 200 },
    { id: 3, name: "Producto 3", price: 300 },
];

let cartCount = 0;

function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'bg-white p-4 rounded shadow';
        productCard.innerHTML = `
            <h2 class="text-xl">${product.name}</h2>
            <p class="text-gray-700">$${product.price}</p>
            <button class="bg-blue-500 text-white px-4 py-2 rounded mt-2" onclick="addToCart(${product.id})">Agregar al carrito</button>
        `;
        productList.appendChild(productCard);
    });
}

function addToCart(productId) {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert(`Producto ${productId} agregado al carrito`);
}

document.addEventListener('DOMContentLoaded', displayProducts);
