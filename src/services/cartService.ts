import axios from "axios";
import ICart from "../interfaces/ICart";

export async function getUserCart(userId: number) {
    try {
        const response = await axios.get(`https://fakestoreapi.com/carts/user/${userId}`);
        const cart: ICart = response.data[0];
        return cart;
    }catch(error){
        console.error(error);
    }
}





