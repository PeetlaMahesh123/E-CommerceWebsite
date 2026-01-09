const cartItems = document.getElementById("cart-items");
const totalEl = document.getElementById("total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = 0;

cart.forEach(item => {
  total += item.price;
  cartItems.innerHTML += `
    <div class="product">
      <img src="${item.image}">
      <h3>${item.name}</h3>
      <p>₹${item.price}</p>
    </div>
  `;
});

totalEl.innerText = total;
