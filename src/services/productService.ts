import { IProduct } from "../interfaces/IProduct";

export async function fetchProducts(): Promise<IProduct[]> {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error("Falha ao fazer requisição de produtos");
    }

    const json: IProduct[] = await response.json();
    return json;
  } catch (error) {
    throw error;
  }
}
