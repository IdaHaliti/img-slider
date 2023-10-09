export interface Product {
  id: number,
  title: string,
  description: string,
  brand: string,
  category: string,
  discountPercentage: number,
  images: string[],
  price: string,
  rating: number,
  stock: number,
  thumbnail: string,
}

const dataUrl = "https://dummyjson.com/products"

 async function fetchData(): Promise<Product[] | null> {
    try {
        const response = await fetch(dataUrl);
        const fetchedData = await response.json()

        return fetchedData.products;
    } catch (err) {
        console.log(err);
        return null
    }

}


const data : Product[] | null =await fetchData();
console.log(data)

const main = document.querySelector<HTMLDivElement>('#main-container') 

for (let i = 0; i < 5; i++) {
    main!.innerHTML += 
    `<div class="product--container">
        <img class="product__thumbnail" src="${data && data[i].thumbnail}" alt="${data && data[i].brand}">
      </div>`
}