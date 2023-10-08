import { Product } from "./Product";

export async function fetchData(url: string): Promise<Product[] | null> {
    try {
        const response = await fetch(url);
        const fetchedData = await response.json()

        return fetchedData.products;
    } catch (err) {
        console.log(err);
        return null
    }

}