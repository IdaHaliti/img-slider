const dataUrl = "https://dummyjson.com/products";
async function fetchData() {
    try {
        const response = await fetch(dataUrl);
        const fetchedData = await response.json();
        return fetchedData.products;
    }
    catch (err) {
        console.log(err);
        return null;
    }
}
const data = await fetchData();
console.log(data);
const partialData = firstFourroducts(data);
console.log(partialData);
function firstFourroducts(importedData) {
    if (importedData != null) {
        return importedData.slice(0, 4);
    }
    else {
        return null;
    }
}
let slideIndex = 1;
const main = document.querySelector("#main-container");
function createProductElement() {
    for (let i = 0; i < 4; i++) {
        main.innerHTML += `<div class="product--container">
        <img class="product__thumbnail" src="${partialData && partialData[i].thumbnail}" alt="${partialData && partialData[i].brand}">
      </div>`;
    }
}
createProductElement();
export {};
//# sourceMappingURL=main.js.map