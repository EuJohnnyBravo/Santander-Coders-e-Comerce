import { IProduct } from "../interfaces/IProduct";
import axios from "axios";

export async function fetchProducts(): Promise<IProduct[]> {
  try {
    const response = await axios.get<IProduct[]>(
      "https://fakestoreapi.com/products"
    );
    const json: IProduct[] = response.data;
    return json;
  } catch (error) {
    throw error;
  }
}

export async function getProductById(
  productId: number
): Promise<IProduct | null> {
  try {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );
    const product: IProduct = response.data; 
    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null; 
  }
}
