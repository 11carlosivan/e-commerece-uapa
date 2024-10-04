let products = JSON.parse(localStorage.getItem('products')) || [];
let orders = [];
let users = [];

// Función para mostrar la sección seleccionada
function showSection(section) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(s => s.classList.add('hidden'));
    document.getElementById(section).classList.remove('hidden');
}

// Función para agregar un producto
document.getElementById('product-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('product-name').value;
    const price = parseFloat(document.getElementById('product-price').value);
    const quantity = parseInt(document.getElementById('product-quantity').value);
    const description = document.getElementById('product-description').value;
    const image = document.getElementById('product-image').value;

    const product = { id: products.length + 1, name, price, quantity, description, image };
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products)); // Guardar en localStorage
    displayProducts();
    this.reset();
});

// Función para mostrar productos
function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Limpiar la lista de productos

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'bg-white p-4 rounded shadow flex justify-between items-center';
        productItem.innerHTML = `
            <div>
                <h3 class="text-lg">${product.name}</h3>
                <p>Precio: $${product.price.toFixed(2)}</p>
                <p>Cantidad: ${product.quantity}</p>
                <p>Descripción: ${product.description}</p>
                <img src="${product.image}" alt="${product.name}" class="w-16 h-16 object-cover mt-2">
            </div>
            <button class="bg-red-500 text-white px-2 py-1 rounded" onclick="removeProduct(${product.id})">Eliminar</button>
        `;
        productList.appendChild(productItem);
    });
}

// Función para eliminar un producto
function removeProduct(id) {
    products = products.filter(product => product.id !== id);
    localStorage.setItem('products', JSON.stringify(products)); // Actualizar localStorage
    displayProducts();
}

// Función para simular la gestión de pedidos
function displayOrders() {
    const orderList = document.getElementById('order-list');
    orderList.innerHTML = ''; // Limpiar la lista de pedidos

    orders.forEach(order => {
        const orderItem = document.createElement('div');
        orderItem.className = 'bg-white p-4 rounded shadow';
        orderItem.innerHTML = `
            <h3 class="text-lg">Pedido #${order.id}</h3>
            <p>Estado: ${order.status}</p>
        `;
        orderList.appendChild(orderItem);
    });
}

// Función para simular la gestión de usuarios
function displayUsers() {
    const userList = document.getElementById('user-list');
    userList.innerHTML = ''; // Limpiar la lista de usuarios

    users.forEach(user => {
        const userItem = document.createElement('div');
        userItem.className = 'bg-white p-4 rounded shadow';
        userItem.innerHTML = `
            <h3 class="text-lg">${user.name}</h3>
            <p>Correo: ${user.email}</p>
        `;
        userList.appendChild(userItem);
    });
}

// Función para cerrar sesión
function logout() {
    alert("Has cerrado sesión.");
    // Redirigir a la página de inicio de sesión o realizar otras acciones
}

// Inicializar la vista
showSection('products'); // Mostrar la sección de productos al cargar
displayProducts(); // Mostrar productos al cargar