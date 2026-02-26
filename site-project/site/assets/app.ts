interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const STORAGE_KEY = "novacart_items";

const addButtons = document.querySelectorAll<HTMLButtonElement>(".add-btn");
const cartButton = document.getElementById("cartButton") as HTMLButtonElement | null;
const closeCart = document.getElementById("closeCart") as HTMLButtonElement | null;
const cartPanel = document.getElementById("cartPanel") as HTMLElement | null;
const cartItemsElement = document.getElementById("cartItems") as HTMLUListElement | null;
const cartCount = document.getElementById("cartCount") as HTMLElement | null;
const cartTotal = document.getElementById("cartTotal") as HTMLElement | null;

const cart: Map<string, CartItem> = new Map();

function formatCurrency(value: number): string {
  return `Rs. ${value.toFixed(2)}`;
}

function saveCart(): void {
  const items = Array.from(cart.values());
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function loadCart(): void {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return;
  }

  try {
    const items = JSON.parse(raw) as CartItem[];
    for (const item of items) {
      if (item?.id && item?.name && typeof item.price === "number" && typeof item.quantity === "number") {
        cart.set(item.id, item);
      }
    }
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function renderCart(): void {
  if (!cartCount || !cartTotal || !cartItemsElement) {
    return;
  }

  cartItemsElement.innerHTML = "";

  let totalItems = 0;
  let totalPrice = 0;

  for (const item of cart.values()) {
    totalItems += item.quantity;
    totalPrice += item.price * item.quantity;

    const li = document.createElement("li");
    li.className = "cart-item";
    li.innerHTML = `
      <div>
        <p><strong>${item.name}</strong></p>
        <p>${formatCurrency(item.price)} x ${item.quantity}</p>
      </div>
      <div class="cart-item-actions">
        <p><strong>${formatCurrency(item.price * item.quantity)}</strong></p>
        <button class="remove-item-btn" data-remove-id="${item.id}" aria-label="Remove ${item.name} from cart">Remove</button>
      </div>
    `;
    cartItemsElement.appendChild(li);
  }

  if (totalItems === 0) {
    const emptyItem = document.createElement("li");
    emptyItem.className = "cart-empty";
    emptyItem.textContent = "Your cart is empty.";
    cartItemsElement.appendChild(emptyItem);
  }

  cartCount.textContent = totalItems.toString();
  cartTotal.textContent = formatCurrency(totalPrice);
}

function addToCart(id: string, name: string, price: number): void {
  const existing = cart.get(id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.set(id, { id, name, price, quantity: 1 });
  }

  saveCart();
  renderCart();
}

function removeFromCart(id: string): void {
  if (!cart.has(id)) {
    return;
  }

  cart.delete(id);
  saveCart();
  renderCart();
}

function getProductData(button: HTMLButtonElement): { id: string; name: string; price: number } | null {
  const id = button.dataset.id;
  const card = button.closest(".product-card");
  const title = card?.querySelector("h3")?.textContent?.trim();
  const priceText = card?.querySelector(".price")?.textContent ?? "";
  const parsedTextPrice = Number(priceText.replace(/[^\d.]/g, ""));
  const parsedDataPrice = Number(button.dataset.price);
  const price = Number.isNaN(parsedDataPrice) ? parsedTextPrice : parsedDataPrice;

  if (!id || !title || Number.isNaN(price)) {
    return null;
  }

  return { id, name: title, price };
}

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const product = getProductData(button);
    if (!product) {
      return;
    }

    addToCart(product.id, product.name, product.price);
  });
});

cartItemsElement?.addEventListener("click", (event) => {
  const target = event.target as HTMLElement;
  const removeButton = target.closest<HTMLButtonElement>(".remove-item-btn");
  const id = removeButton?.dataset.removeId;

  if (!id) {
    return;
  }

  removeFromCart(id);
});

cartButton?.addEventListener("click", () => {
  cartPanel?.classList.add("open");
});

closeCart?.addEventListener("click", () => {
  cartPanel?.classList.remove("open");
});

loadCart();
renderCart();

