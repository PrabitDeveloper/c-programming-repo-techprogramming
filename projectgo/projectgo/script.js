var cart = [];
var total = 0;

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCart();
}

function updateCart() {
    var cartItems = document.getElementById('cart-items');
    var cartTotal = document.getElementById('cart-total');
    
    // Clear existing cart items
    cartItems.innerHTML = '';

    // Add new cart items
    cart.forEach(function(item) {
        var li = document.createElement('li');
        li.textContent = item.name + ' - $' + item.price.toFixed(2);
        cartItems.appendChild(li);
    });

    // Calculate total price
    total = cart.reduce(function(sum, item) {
        return sum + item.price;
    }, 0);

    cartTotal.textContent = total.toFixed(2);
}
function searchProducts() {
    var searchTerm = document.getElementById('searchInput').value.toLowerCase();

    var products = document.querySelectorAll('.product');

    products.forEach(function(product) {
        var productName = product.dataset.name.toLowerCase();

        if (productName === searchTerm) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}


function searchProducts() {
    var searchTerm = document.getElementById('searchInput').value.toLowerCase();

    var products = document.querySelectorAll('.product');

    products.forEach(function(product) {
        var productName = product.dataset.name.toLowerCase();

        if (productName.includes(searchTerm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
