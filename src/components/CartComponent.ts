import ICart from "../interfaces/ICart";
import { IProduct } from "../interfaces/IProduct";
import { getUserCart } from "../services/cartService";
import { getProductById } from "../services/productService";
import { cardCartProductComponent } from "./CardCartProductComponent";


const sectionCartProducts = document.getElementById("section-products-cart") as HTMLElement;

async function showCartComponent(){
    const products: IProduct[] = [];

    if(sectionCartProducts){
       try{
        const cart: ICart | undefined  = await getUserCart(2);
        if(cart){
            cart.products.map(async (productCart) => {
                const product = await getProductById(productCart.productId);
                if(product) products.push(product);
    
                sectionCartProducts.innerHTML = products.map((product) => {
                    return cardCartProductComponent(product); 
                }).join("");
            })
        }
       }catch(error){
        console.error(error);
       }
    }
    return "";
}

window.addEventListener("DOMContentLoaded",  () => {
    showCartComponent();
})