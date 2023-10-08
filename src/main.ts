import { Product } from "./Product";
import { fetchData } from "./fetchData";


const dataUrl = "https://dummyjson.com/products"
const data : Product[] | null = await fetchData(dataUrl);

