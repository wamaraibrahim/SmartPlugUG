// order.js

const WHATSAPP_NUMBER = "256755033154"; // Change to your WhatsApp number (without +)

function placeOrder() {

    const customerName = document.getElementById("custname").value.trim();
    const customerPhone = document.getElementById("custphone").value.trim();
    const customerLocation = document.getElementById("custlocation").value.trim();

    const orderResult = document.getElementById("orderresult");

    if (Object.keys(cart).length === 0) {

        orderResult.innerHTML =
            `<p class="error-text">Your cart is empty.</p>`;

        return;
    }

    if (
        customerName === "" ||
        customerPhone === "" ||
        customerLocation === ""
    ) {

        orderResult.innerHTML =
            `<p class="error-text">
                Please enter your name, phone number and location.
            </p>`;

        return;
    }

    let message = `* MY ORDER*%0A%0A`;

    message += `Customer: ${customerName}%0A`;
    message += `Phone: ${customerPhone}%0A`;
    message += `Location: ${customerLocation}%0A%0A`;

    let total = 0;

    for (const itemName in cart) {

        const item = cart[itemName];

        const subtotal = item.price * item.qty;

        total += subtotal;

        message += `${itemName}%0A`;
        message += `Quantity : ${item.qty}%0A`;
        message += `Price : ${formatCurrency(item.price)}%0A`;
        message += `Subtotal : ${formatCurrency(subtotal)}%0A%0A`;
    }

    message += `------------------------%0A`;
    message += `TOTAL : ${formatCurrency(total)}%0A`;

    whatsappOrderURL =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    orderPlaced = true;

    orderResult.innerHTML = `

        <div class="success-box">

            <p>

                ✅ Order Created Successfully

            </p>

        </div>

    `;

    updateCheckoutCta();
}
