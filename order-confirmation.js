let cart = [
    { id: 1, name: "Camiseta", price: 20, quantity: 2, image: "camiseta.jpg" },
    { id: 2, name: "Pantalón", price: 30, quantity: 1, image: "pantalon.jpg" },
    // Agrega más productos según sea necesario
];

function displayOrderDetails() {
    const orderDetails = document.getElementById('order-details');
    orderDetails.innerHTML = ''; // Limpiar los detalles del pedido

    cart.forEach(item => {
        const itemDetail = document.createElement('div');
        itemDetail.className = 'flex justify-between items-center mb-2';
        const subtotal = item.price * item.quantity;
        itemDetail.innerHTML = `
            <div class="flex items-center">
                <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover mr-4">
                <div>
                    <h3 class="text-lg">${item.name}</h3>
                    <p>Precio: $${item.price} x ${item.quantity}</p>
                </div>
            </div>
            <p>Subtotal: $${subtotal.toFixed(2)}</p>
        `;
        orderDetails.appendChild(itemDetail);
    });

    const totalSummary = document.createElement('div');
    totalSummary.className = 'font-bold mt-2';
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalSummary.innerHTML = `Total: $${total.toFixed(2)}`;
    orderDetails.appendChild(totalSummary);
}

document.addEventListener('DOMContentLoaded', displayOrderDetails);
