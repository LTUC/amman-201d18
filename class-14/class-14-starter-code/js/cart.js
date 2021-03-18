/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
let table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
    loadCart();
    clearCart();
    showCart();
}
let results = document.getElementById('results');
// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
    results.innerHTML = ' ';
}


// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
    // TODO: Find the table body
    for (let i in cart.items) {
        console.log(cart.items[i].product);
        // TODO: Iterate over the items in the cart
        // TODO: Create a TR
        // TODO: Create a TD for the delete link, quantity,  and the item
        // TODO: Add the TR to the TBODY and each of the TD's to the TR
        let tdQuantity = document.createElement('td');
        let tdProduct = document.createElement('td');
        let tdX = document.createElement('td');
        tdX.id = i;
        tdX.addEventListener('click', removeItemFromCart);
        results.appendChild(tdX);
        results.appendChild(tdQuantity);
        results.appendChild(tdProduct);
        tdProduct.textContent = cart.items[i].product;
        tdQuantity.textContent = cart.items[i].quantity;
        tdX.textContent = 'x';
    }
}

function removeItemFromCart(event) {
    // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
    // TODO: Save the cart back to local storage
    // TODO: Re-draw the cart table
    console.log(event);
    cart.removeItem(Number(event.target.id));
    cart.saveToLocalStorage();
    event.stopPropagation();
    clearCart()
    showCart();
    window.location.reload();
    return

}

// This will initialize the page and draw the cart on screen
renderCart();
