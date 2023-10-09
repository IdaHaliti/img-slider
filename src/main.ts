export interface Product {
  id: number;
  title: string;
  description: string;
  brand: string;
  category: string;
  discountPercentage: number;
  images: string[];
  price: string;
  rating: number;
  stock: number;
  thumbnail: string;
}

const dataUrl = "https://dummyjson.com/products";

async function fetchData(): Promise<Product[] | null> {
  try {
    const response = await fetch(dataUrl);
    const fetchedData = await response.json();

    return fetchedData.products;
  } catch (err) {
    console.log(err);
    return null;
  }
}

const data: Product[] | null = await fetchData();
console.log(data);
const partialData: Product[] | null = firstFourroducts(data);
console.log(partialData);

function firstFourroducts(importedData: Product[] | null) {
  if (importedData != null) {
    return importedData.slice(0, 4);
  } else {
    return null;
  }
}

let slideIndex = 1;

const main = document.querySelector<HTMLDivElement>("#main-container");

function createProductElement() {
  for (let i = 0; i < 4; i++) {
    main!.innerHTML += `<div class="product--container">
        <img class="product__thumbnail" src="${
          partialData && partialData[i].thumbnail
        }" alt="${partialData && partialData[i].brand}">
      </div>`;
  }
}

createProductElement();

function showSlidess(n: number) {
  let i;
  let slides: any = document.getElementsByClassName("product--container")!; //slider containes the products created by createProductElement
  if (partialData != null) {  //typescript error partial data can  be null
    if (n > partialData.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = partialData.length;
    }

    for (i = 0; i < partialData.length; i++) {
      slides[i].style.display = " none";
    }

    

    slides[slideIndex - 1].style.display = " block";
  }
}

showSlidess(slideIndex);

const nextButton = document.getElementById('nextButton');
const prevButton =document.getElementById('prevButton');


function currentSlide(n: number) {
  showSlidess((slideIndex = n));
}

nextButton?.addEventListener("click", () => {
  showSlidess((slideIndex += 1));
});

prevButton?.addEventListener("click", () => {
  showSlidess((slideIndex += -1));
});



