const menu = document.querySelector(".menu")
const hamburger = document.querySelector(".hamburger")
const navClose = document.querySelector(".close")
const navBar = document.querySelector(".navBar")
const navLeft = menu.getBoundingClientRect().left;

hamburger.addEventListener("click", ()=>{
    if(navLeft < 0){
        menu.classList.add("show")
        document.body.classList.add("show")
        navBar.classList.add("show")
    }
})
navClose.addEventListener("click", ()=>{
    if(navLeft <0){
        menu.classList.remove("show")
        document.body.classList.remove("show")
        navBar.classList.remove("show")
    }
})

function redirectToPage() {
    const selectElement = document.getElementById('productSelect');
    const selectedValue = selectElement.value;
    
    if (selectedValue) {
        window.location.href = selectedValue;
    } else {
        alert('Por favor selecciona una opción');
    }
}

function redirectToPage() {
    var selectBox = document.getElementById("productSelect");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    window.location.href = selectedValue;
}


// Toggle navigation menu on small screens
document.querySelector('.hamburger').addEventListener('click', function() {
    const navMenu = document.querySelector('.menu');
    navMenu.classList.toggle('active');
});



// Carrito
let cart = [];

function addToCart(productId, productName, productPrice) {
    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
    }

    updateCart();
}

function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartContent = document.querySelector('.cart-content');
    const cartTotal = document.getElementById('cart-total');

    cartCount.innerText = cart.reduce((acc, item) => acc + item.quantity, 0);

    cartContent.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const productTotal = (item.price * item.quantity).toFixed(2);
        total += parseFloat(productTotal);

        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <h4>${item.name}</h4>
            <div>
                <button onclick="changeQuantity('${item.id}', 'decrease')">-</button>
            </div>
            <p>${item.quantity}
            <div>
             <button onclick="changeQuantity('${item.id}', 'increase')">+</button>
            </div>
            = $${item.price} </p>
          
        `;
        cartContent.appendChild(cartItem);
    });

    cartTotal.innerText = `$${total.toFixed(2)}`;
}

function changeQuantity(productId, action) {
    const product = cart.find(item => item.id === productId);

    if (action === 'increase') {
        product.quantity += 1;
    } else if (action === 'decrease' && product.quantity > 1) {
        product.quantity -= 1;
    } else if (action === 'decrease' && product.quantity === 1) {
        cart = cart.filter(item => item.id !== productId);
    }

    updateCart();
}

function toggleCart() {
    const cartPanel = document.getElementById('cart-panel');
    cartPanel.classList.toggle('open');
}
