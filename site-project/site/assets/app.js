var STORAGE_KEY = "novacart_items";
var addButtons = document.querySelectorAll(".add-btn");
var cartButton = document.getElementById("cartButton");
var closeCart = document.getElementById("closeCart");
var cartPanel = document.getElementById("cartPanel");
var cartItemsElement = document.getElementById("cartItems");
var cartCount = document.getElementById("cartCount");
var cartTotal = document.getElementById("cartTotal");
var cart = new Map();
function formatCurrency(value) {
  return "Rs. " + value.toFixed(2);
}
function saveCart() {
  var items = Array.from(cart.values());
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}
function loadCart() {
  var raw = localStorage.getItem(STORAGE_KEY);
  if (!raw)
    return;
  try {
    var items = JSON.parse(raw);
    items.forEach(function (item) {
      if (item && item.id && item.name && typeof item.price === "number" && typeof item.quantity === "number") {
        cart.set(item.id, item);
      }
    });
  } catch (_a) {
    localStorage.removeItem(STORAGE_KEY);
  }
}
function renderCart() {
  if (!cartCount || !cartTotal || !cartItemsElement)
    return;
  cartItemsElement.innerHTML = "";
  var totalItems = 0;
  var totalPrice = 0;
  cart.forEach(function (item) {
    totalItems += item.quantity;
    totalPrice += item.price * item.quantity;
    var li = document.createElement("li");
    li.className = "cart-item";
    li.innerHTML = "\n      <div>\n        <p><strong>" + item.name + "</strong></p>\n        <p>" + formatCurrency(item.price) + " x " + item.quantity + "</p>\n      </div>\n      <div class=\"cart-item-actions\">\n        <p><strong>" + formatCurrency(item.price * item.quantity) + "</strong></p>\n        <button class=\"remove-item-btn\" data-remove-id=\"" + item.id + "\" aria-label=\"Remove " + item.name + " from cart\">Remove</button>\n      </div>\n    ";
    cartItemsElement.appendChild(li);
  });
  if (totalItems === 0) {
    var emptyItem = document.createElement("li");
    emptyItem.className = "cart-empty";
    emptyItem.textContent = "Your cart is empty.";
    cartItemsElement.appendChild(emptyItem);
  }
  cartCount.textContent = String(totalItems);
  cartTotal.textContent = formatCurrency(totalPrice);
}
function addToCart(id, name, price) {
  var existing = cart.get(id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.set(id, { id: id, name: name, price: price, quantity: 1 });
  }
  saveCart();
  renderCart();
}
function removeFromCart(id) {
  if (!cart.has(id))
    return;
  cart.delete(id);
  saveCart();
  renderCart();
}
function getProductData(button) {
  var _a, _b, _c;
  var id = button.dataset.id;
  var card = button.closest(".product-card");
  var title = (_b = (_a = card === null || card === void 0 ? void 0 : card.querySelector("h3")) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.trim();
  var priceText = ((_c = card === null || card === void 0 ? void 0 : card.querySelector(".price")) === null || _c === void 0 ? void 0 : _c.textContent) || "";
  var parsedTextPrice = Number(priceText.replace(/[^\d.]/g, ""));
  var parsedDataPrice = Number(button.dataset.price);
  var price = Number.isNaN(parsedDataPrice) ? parsedTextPrice : parsedDataPrice;
  if (!id || !title || Number.isNaN(price))
    return null;
  return { id: id, name: title, price: price };
}
addButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    var product = getProductData(button);
    if (!product)
      return;
    addToCart(product.id, product.name, product.price);
  });
});
if (cartItemsElement) {
  cartItemsElement.addEventListener("click", function (event) {
    var target = event.target;
    var removeButton = target.closest(".remove-item-btn");
    var id = removeButton === null || removeButton === void 0 ? void 0 : removeButton.dataset.removeId;
    if (!id)
      return;
    removeFromCart(id);
  });
}
if (cartButton) {
  cartButton.addEventListener("click", function () {
    if (cartPanel)
      cartPanel.classList.add("open");
  });
}
if (closeCart) {
  closeCart.addEventListener("click", function () {
    if (cartPanel)
      cartPanel.classList.remove("open");
  });
}
loadCart();
renderCart();

