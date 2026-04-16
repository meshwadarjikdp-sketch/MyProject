// PAGE SWITCHING
function showPage(pageId) {
    let pages = document.querySelectorAll('.page');

    pages.forEach(function(page) {
        page.classList.remove('active');
    });

    document.getElementById(pageId).classList.add('active');
}

// CART SYSTEM
let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    displayCart();
}

// REMOVE ITEM
function removeItem(index) {
    cart.splice(index, 1);
    displayCart();
}

function displayCart() {
    let cartDiv = document.getElementById('cart-items');
    let total = 0;

    cartDiv.innerHTML = "";

    cart.forEach((item, index) => {
        total += item.price;

        cartDiv.innerHTML += `
            <div class="cart-item">
                <div>
                    <h4>${item.name}</h4>
                    <p>₹${item.price}</p>
                </div>
                <button onclick="removeItem(${index})">Remove</button>
            </div>
        `;
    });

    document.getElementById('total').innerText = "Total: ₹" + total;
}