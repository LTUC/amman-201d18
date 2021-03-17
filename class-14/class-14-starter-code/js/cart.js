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
  const table=document.getElementById('cart')
  const row=document.getElementById('tr')
  const rowcount=trow.length;
  for (let x=rowcount-1;x>0;x--){
    table.removeChild(row[x]);
  }
  
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  const tbody = document.getElementById('cart');

  // TODO: Iterate over the items in the cart
  for (let i=0; i< cart.items.length;i++){
  // TODO: Create a TR
  let tr=document.createElement('tr');
  tr.setAttribute('id',i);
  tbody.appendChild(tr);
  // TODO: Create a TD for the delete link, quantity,  and the item
  let deleteTd=document.createElement('td');
  let a=document.createElement('a');
  a.textContent='X';
  a.href='#'
  deleteLinkEl.appendChild(a);
  tr.appendChild(deleteTd);
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  let quantityTd=document.createElement('td');
  quantityTd.textContent=cart.items[i].quantity;
  tr.appendChild(quantityTd);

  let Item=document.createElement('td');
  Item.textContent=cart.items[i].products;
  tr.appendChild(Item);


}
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  const selectedItem =event.target;
  let id=selectedItem.id;
  cart.remoceItem(id);
  // TODO: Save the cart back to local storage
  localStorage.setItem('cart',JSON.stringify(cart));
  // TODO: Re-draw the cart table
  clearCart();
  showCart() ;

}
// This will initialize the page and draw the cart on screen
renderCart()