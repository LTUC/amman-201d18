/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  const table =document.getElementById('cart')
  const tr=document.getElementById('tr')
  const rowCounter=tr.length;
  for (let x = rowCounter - 1 ; x > 0 ; x--){
    table.removeChild(tr[x]);
  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // TODO: Find the table body
  const td = document.getElementById('cart')
  // TODO: Iterate over the items in the cart
  for (let i = 0 ; i < cart.items.length ; i++){
  // TODO: Create a TR
  let tr = document.createElement('tr');
  tr.setAttribute('id',i);
  td.appendChild(tr);
  // TODO: Create a TD for the delete link, quantity,  and the item
  let delTd = document.createElement('td');
  let a = document.createElement('a');
  a.textContent='X';
  a.href='#'
  deleteLinkEl.appendChild(a);
  tr.appendChild(delTd);
// /for quantity
  let delquantityTd=document.createElement('td');
  delquantityTd.textContent=cart.items[i].quantity;
  tr.appendChild(delquantityTd);

  let delItemTd=document.createElement('td');
  delItemTd.textContent=cart.items[i].products;
  tr.appendChild(delItemTd);
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
