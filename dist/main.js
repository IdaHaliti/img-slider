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
const main = document.querySelector('#main-container');
for (let i = 0; i < 5; i++) {
    main.innerHTML +=
        `<div class="image--container">
        <img class="image__thumbnail" src="${data && data[i].thumbnail}" alt="${data && data[i].brand}">
      </div>`;
}
export {};
//# sourceMappingURL=main.js.map