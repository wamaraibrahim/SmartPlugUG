// cart.js

let cart = {};

function formatCurrency(amount) {
    const currency = (typeof APP_DATA !== "undefined" && APP_DATA.business?.currency) || "UGX";
    return `${currency} ${Math.round(amount).toLocaleString("en-UG")}`;
}

function addToCart(name, price) {

    if (orderPlaced) {
        resetOrderState();
    }

    if (!cart[name]) {

        cart[name] = {
            price: price,
            qty: 0
        };

    }

    cart[name].qty++;

    renderCart();
}

function removeFromCart(name) {

    if (orderPlaced) {
        resetOrderState();
    }

    if (cart[name]) {

        delete cart[name];

    }

    renderCart();
}

function increaseQuantity(name) {

    if (orderPlaced) {
        resetOrderState();
    }

    if (cart[name]) {

        cart[name].qty++;

    }

    renderCart();
}

function decreaseQuantity(name) {

    if (orderPlaced) {
        resetOrderState();
    }

    if (!cart[name]) return;

    cart[name].qty--;

    if (cart[name].qty <= 0) {

        delete cart[name];

    }

    renderCart();
}

function getCartTotal() {

    let total = 0;

    for (const name in cart) {

        total += cart[name].price * cart[name].qty;

    }

    return total;
}

function getCartCount() {

    let count = 0;

    for (const name in cart) {

        count += cart[name].qty;

    }

    return count;
}

function clearCart() {

    cart = {};

    renderCart();
}

let orderPlaced = false;
let whatsappOrderURL = null;

function areDeliveryDetailsComplete() {
    const name = document.getElementById("custname")?.value.trim() || "";
    const phone = document.getElementById("custphone")?.value.trim() || "";
    const location = document.getElementById("custlocation")?.value.trim() || "";

    return name !== "" && phone !== "" && location !== "";
}

function resetOrderState() {
    orderPlaced = false;
    whatsappOrderURL = null;

    const orderResult = document.getElementById("orderresult");
    if (orderResult) {
        orderResult.innerHTML = "";
    }
}

function goToCheckout() {
    const cartBox = document.getElementById("cartbox");
    const nameInput = document.getElementById("custname");

    if (!cartBox) return;

    cartBox.scrollIntoView({ behavior: "smooth", block: "start" });

    setTimeout(() => {
        if (nameInput) {
            nameInput.focus();
        }
    }, 500);
}

function updateCheckoutCta() {
    const checkoutCta = document.getElementById("checkoutCta");
    const checkoutCtaText = document.getElementById("checkoutCtaText");
    const checkoutCtaIcon = document.getElementById("checkoutCtaIcon");
    const checkoutCtaChevron = document.getElementById("checkoutCtaChevron");
    const itemCount = getCartCount();

    if (!checkoutCta || !checkoutCtaText) return;

    if (itemCount === 0) {
        checkoutCta.hidden = true;
        document.body.classList.remove("has-cart-cta");
        resetOrderState();
        return;
    }

    checkoutCta.hidden = false;
    document.body.classList.add("has-cart-cta");

    if (orderPlaced && whatsappOrderURL) {
        checkoutCtaText.textContent = "Send Order via WhatsApp";
        if (checkoutCtaIcon) checkoutCtaIcon.textContent = "💬";
        if (checkoutCtaChevron) checkoutCtaChevron.hidden = true;
        return;
    }

    if (checkoutCtaChevron) checkoutCtaChevron.hidden = false;

    if (areDeliveryDetailsComplete()) {
        checkoutCtaText.textContent = "Place Order";
        if (checkoutCtaIcon) checkoutCtaIcon.textContent = "✓";
        return;
    }

    checkoutCtaText.textContent = itemCount === 1
        ? "Proceed to Order (1 item)"
        : `Proceed to Order (${itemCount} items)`;
    if (checkoutCtaIcon) checkoutCtaIcon.textContent = "🛒";
}

function handleCheckoutCtaClick() {
    if (orderPlaced && whatsappOrderURL) {
        window.open(whatsappOrderURL, "_blank");
        clearCart();
        return;
    }

    if (areDeliveryDetailsComplete()) {
        placeOrder();
        return;
    }

    goToCheckout();
}

function renderCart() {

    const cartItems = document.getElementById("cartitems");
    const cartTotal = document.getElementById("carttotal");
    const cartCount = document.getElementById("cartcount");

    if (!cartItems || !cartTotal) return;

    cartItems.innerHTML = "";

    if (Object.keys(cart).length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Your cart is empty.
            </p>
        `;

    } else {

        for (const name in cart) {

            const item = cart[name];

            const row = document.createElement("div");

            row.className = "cart-row";

            row.innerHTML = `

                <span>${name}</span>

                <div class="qty-controls">

                    <button onclick="decreaseQuantity('${name}')">

                        -

                    </button>

                    <span>

                        ${item.qty}

                    </span>

                    <button onclick="increaseQuantity('${name}')">

                        +

                    </button>

                    <span>

                        ${formatCurrency(item.price * item.qty)}

                    </span>

                    <button onclick="removeFromCart('${name}')">

                        ✖

                    </button>

                </div>

            `;

            cartItems.appendChild(row);

        }

    }

    cartTotal.textContent = formatCurrency(getCartTotal());

    if (cartCount) {
        cartCount.textContent = getCartCount();
    }

    updateCheckoutCta();
}

function bindDeliveryFieldListeners() {
    ["custname", "custphone", "custlocation"].forEach((fieldId) => {
        const field = document.getElementById(fieldId);
        if (!field) return;

        field.addEventListener("input", () => {
            if (orderPlaced) {
                resetOrderState();
            }
            updateCheckoutCta();
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const checkoutCta = document.getElementById("checkoutCta");

    if (checkoutCta) {
        checkoutCta.addEventListener("click", handleCheckoutCtaClick);
    }

    bindDeliveryFieldListeners();
});