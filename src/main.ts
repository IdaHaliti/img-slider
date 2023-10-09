const dataUrl = "https://dummyjson.com/products";
const data: Product[] | null = await fetchData();
const partialData: Product[] | null = firstFourroducts(data);
const main = document.querySelector<HTMLDivElement>("#main-container");
let slideIndex = 1;

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

export function firstFourroducts(importedData: Product[] | null) {
  if (importedData != null) {
    return importedData.slice(0, 4);
  } else {
    return null;
  }
}

function createProductElement() {
  for (let i = 0; i < 4; i++) {
    main!.innerHTML += `<div class="product--container">
        <img class="product__thumbnail" src="${
          partialData && partialData[i].thumbnail
        }" alt="${partialData && partialData[i].brand}">
      </div>`;
  }
}

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

function currentSlide(n: number) {
  showSlidess((slideIndex = n));
}

document.getElementById("span-line-1")?.addEventListener('click', ()=> {
  currentSlide(1)
})
document.getElementById("span-line-2")?.addEventListener('click', ()=> {
  currentSlide(2)
})
document.getElementById("span-line-3")?.addEventListener('click', ()=> {
  currentSlide(3)
})
document.getElementById("span-line-4")?.addEventListener('click', ()=> {
  currentSlide(4)
})
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");

nextButton?.addEventListener("click", () => {
  showSlidess((slideIndex += 1));
});
prevButton?.addEventListener("click", () => {
  showSlidess((slideIndex += -1));
});

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