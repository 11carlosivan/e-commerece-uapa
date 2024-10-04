let cart = [
    { id: 1, name: "Camiseta", price: 20, quantity: 2, image: "camiseta.jpg" },
    { id: 2, name: "Pantalón", price: 30, quantity: 1, image: "pantalon.jpg" },
    // Agrega más productos según sea necesario
];

function displayOrderSummary() {
    const orderSummary = document.getElementById('order-summary');
    orderSummary.innerHTML = ''; // Limpiar el resumen de pedido

    let total = 0;
    cart.forEach(item => {
        const itemSummary = document.createElement('div');
        itemSummary.className = 'flex justify-between items-center';
        const subtotal = item.price * item.quantity;
        total += subtotal;
        itemSummary.innerHTML = `
            <div class="flex items-center">
                <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover mr-4">
                <div>
                    <h3 class="text-lg">${item.name}</h3>
                    <p>Precio: $${item.price} x ${item.quantity}</p>
                </div>
            </div>
            <p>Subtotal: $${subtotal.toFixed(2)}</p>
        `;
        orderSummary.appendChild(itemSummary);
    });

    const totalSummary = document.createElement('div');
    totalSummary.className = 'font-bold mt-2';
    totalSummary.innerHTML = `Total: $${total.toFixed(2)}`;
    orderSummary.appendChild(totalSummary);
}

function confirmOrder() {
    const form = document.getElementById('checkout-form');
    if (form.checkValidity()) {
        openModal(); // Abrir modal de confirmación
    } else {
        alert("Por favor, complete todos los campos requeridos.");
    }
}

function openModal() {
    document.getElementById('payment-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('payment-modal').classList.add('hidden');
}

function confirmPayment() {
    alert("Pago confirmado. ¡Gracias por su compra!");
    closeModal();
    // Aquí puedes redirigir a la página de confirmación de pedido
}

document.addEventListener('DOMContentLoaded', displayOrderSummary);
