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
function showSlidess(n) {
    let i;
    let slides = document.getElementsByClassName("product--container");
    let lines = document.querySelector(".lines");
    if (partialData != null) {
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
            lines.children[i].className = lines.children[i].className.replace(" span--active", "");
        }
        slides[slideIndex - 1].style.display = " block";
        lines.children[slideIndex - 1].className += " span--active";
    }
}
showSlidess(slideIndex);
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');
function currentSlide(n) {
    showSlidess((slideIndex = n));
}
nextButton === null || nextButton === void 0 ? void 0 : nextButton.addEventListener("click", () => {
    showSlidess((slideIndex += 1));
});
prevButton === null || prevButton === void 0 ? void 0 : prevButton.addEventListener("click", () => {
    showSlidess((slideIndex += -1));
});
export {};
//# sourceMappingURL=main.js.map