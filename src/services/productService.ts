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
