var _a, _b, _c, _d;
const dataUrl = "https://dummyjson.com/products";
const data = await fetchData();
const partialData = firstFourroducts(data);
const main = document.querySelector("#main-container");
let slideIndex = 1;
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
export function firstFourroducts(importedData) {
    if (importedData != null) {
        return importedData.slice(0, 4);
    }
    else {
        return null;
    }
}
function createProductElement() {
    for (let i = 0; i < 4; i++) {
        main.innerHTML += `<div class="product--container">
        <img class="product__thumbnail" src="${partialData && partialData[i].thumbnail}" alt="${partialData && partialData[i].brand}">
      </div>`;
    }
}
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
createProductElement();
showSlidess(slideIndex);
function currentSlide(n) {
    showSlidess((slideIndex = n));
}
(_a = document.getElementById("span-line-1")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    currentSlide(1);
});
(_b = document.getElementById("span-line-2")) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
    currentSlide(2);
});
(_c = document.getElementById("span-line-3")) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => {
    currentSlide(3);
});
(_d = document.getElementById("span-line-4")) === null || _d === void 0 ? void 0 : _d.addEventListener('click', () => {
    currentSlide(4);
});
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
nextButton === null || nextButton === void 0 ? void 0 : nextButton.addEventListener("click", () => {
    showSlidess((slideIndex += 1));
});
prevButton === null || prevButton === void 0 ? void 0 : prevButton.addEventListener("click", () => {
    showSlidess((slideIndex += -1));
});
//# sourceMappingURL=main.js.map