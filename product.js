const product = {
    id: 1,
    name: "Camiseta",
    price: 20,
    description: "Camiseta de algodón",
    image: "camiseta.jpg",
    relatedProducts: [
        { id: 2, name: "Pantalón", price: 30, image: "pantalon.jpg" },
        { id: 3, name: "Chaqueta", price: 50, image: "chaqueta.jpg" },
        { id: 4, name: "Zapatos", price: 70, image: "zapatos.jpg" },
    ],
};

let cartCount = 0;

function displayProduct() {
    document.getElementById('product-name').innerText = product.name;
    document.getElementById('product-price').innerText = `$${product.price}`;
    document.getElementById('product-description').innerText = product.description;
    document.getElementById('product-image').src = product.image;

    displayRelatedProducts();
}

function displayRelatedProducts() {
    const relatedProductsContainer = document.getElementById('related-products');
    product.relatedProducts.forEach(related => {
        const productCard = document.createElement('div');
        productCard.className = 'bg-white p-4 rounded shadow';
        productCard.innerHTML = `
            <img src="${related.image}" alt="${related.name}" class="w-full h-32 object-cover mb-2">
            <h2 class="text-xl">${related.name}</h2>
            <p class="text-gray-700">$${related.price}</p>
            <button class="bg-blue-500 text-white px-4 py-2 rounded mt-2" onclick="addToCart(${related.id})">Agregar al carrito</button>
        `;
        relatedProductsContainer.appendChild(productCard);
    });
}

function addToCart() {
    const quantity = document.getElementById('quantity').value;
    cartCount += parseInt(quantity);
    document.getElementById('cart-count').innerText = cartCount;
    alert(`Se han agregado ${quantity} ${product.name}(s) al carrito`);
}

function zoomImage(imageSrc) {
    const productImage = document.getElementById('product-image');
    productImage.src = imageSrc; // Cambia la imagen principal al hacer clic
}

document.addEventListener('DOMContentLoaded', displayProduct);
