import axios from "axios";
import ICart from "../interfaces/ICart";
import IProductCart from "../interfaces/IProductCart";

const SESSION_USER_CART = "@USER_CART";

export async function getUserCart(userId: number) {
  try {
    const response = await axios.get(
      `https://fakestoreapi.com/carts/user/${userId}`
    );
    const cart: ICart = response.data[0];
    const productsCart = cart.products;
    sessionStorage.setItem(SESSION_USER_CART, JSON.stringify(productsCart));
  } catch (error) {
    console.error(error);
  }
}

export function getSessionUserCart(): IProductCart[] {
  const cartString = sessionStorage.getItem(SESSION_USER_CART);
  return cartString ? JSON.parse(cartString) : [];
}

function updateSessionCart(productsCart: IProductCart[]) {
  sessionStorage.setItem(SESSION_USER_CART, JSON.stringify(productsCart));
}

export function addProductToCart(product: IProductCart) {
  let productsCart = getSessionUserCart();

  if (!productsCart) {
    productsCart = [];
  }
  let filter = [];
  if (productsCart.length > 0) {
    filter = productsCart.filter((productCart) => {
      return productCart && productCart.productId === product.productId;
    });
  }
  if (filter.length > 0) {
    return;
  }

  productsCart.push(product);
  updateSessionCart(productsCart);
}

export function removeProductCart(productId: number) {
  let productsCart = getSessionUserCart();
  productsCart = productsCart.filter(
    (productCart) => productCart.productId !== productId
  );
  updateSessionCart(productsCart);
}

export function productInCart(productId: number) {
  let productsCart = getSessionUserCart();
  if (productsCart.length === 0) {
    return false;
  }
  let productInCart = productsCart.filter(
    (productCart) => productCart.productId === productId
  );
  return productInCart.length > 0 ? true : false;
}

export function quantityProductInCart(productId: number): Number {
  let productsCart = getSessionUserCart();
  let productInCart = productsCart.filter(
    (productCart) => productCart.productId === productId
  );
  if (productInCart.length > 0) {
    return productInCart[0].quantity;
  }
  return 0;
}

export function clearCart() {
  updateSessionCart([]);
}
