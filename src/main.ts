const dataUrl = "https://dummyjson.com/products";
const data: Product[] | null = await fetchData();
const partialData: Product[] | null = firstFourroducts(data);
const main = document.querySelector<HTMLDivElement>("#main-container");
let slideIndex = 1;

//fetchting data from dummyjson
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

//get first four products from the returned dummyjson array
export function firstFourroducts(importedData: Product[] | null) {
  if (importedData != null) {
    return importedData.slice(0, 4);
  } else {
    return null;
  }
}

//create a html div container for each of the 4 products
function createProductElement() {
  for (let i = 0; i < 4; i++) {
    main!.innerHTML += `<div class="product--container">
        <img class="product__thumbnail" src="${
          partialData && partialData[i].thumbnail
        }" alt="${partialData && partialData[i].brand}">       
      
      <div class="padded-main">
        <div class="product__information">
        <div class="product__information__text">
          <h2>${partialData && partialData[i].title}</h2>
          <h3>${partialData && partialData[i].price}$</h3>
          <p>${partialData && partialData[i].description}</p>
        </div>
        <div class="contact-buttons">
        <button id="button-blue">Mehr Erfahren &#10095;</button>
        <button id="button-transparent">Kontakt</button>
        </div>
        </div>`
      ;
  }
}

//display products and cta buttons with the current slide index
function showSlidess(n: number) {
  let i;
  let slides: any = document.getElementsByClassName("product--container")!; //slider containes the products created by createProductElement
  let lines: any = document.querySelector(".lines")!; // contains lines.children[]
  if (partialData != null) {
    //typescript error partial data can  be null
    if (n > partialData.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = partialData.length;
    }

    for (i = 0; i < partialData.length; i++) {
      slides[i].style.display = " none";
    }

    for (i = 0; i < lines.children.length; i++) {
      lines.children[i].className = lines.children[i].className.replace(
        " span--active",
        ""
      );
    }

    slides[slideIndex - 1].style.display = " block";
    lines.children[slideIndex - 1].className += " span--active";
  }
}

createProductElement();
showSlidess(slideIndex);

//navigate slides with CTA buttons
function currentSlide(n: number) {
  showSlidess((slideIndex = n));
}

document.getElementById("span-line-1")?.addEventListener("click", () => {
  currentSlide(1);
});
document.getElementById("span-line-2")?.addEventListener("click", () => {
  currentSlide(2);
});
document.getElementById("span-line-3")?.addEventListener("click", () => {
  currentSlide(3);
});
document.getElementById("span-line-4")?.addEventListener("click", () => {
  currentSlide(4);
});

//navigate slides with arrows
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");

nextButton?.addEventListener("click", () => {
  showSlidess((slideIndex += 1));
});
prevButton?.addEventListener("click", () => {
  showSlidess((slideIndex += -1));
});

//the interface for the product
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
