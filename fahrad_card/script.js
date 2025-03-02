//localStorage.clear()

let product = {
  title: "Fahrrad",
  img: "ссылка на картинку",
  count: 10,
  favorite: false,
};

const titleElem = document.getElementById("product-title");
const countElem = document.getElementById("count");
const favoriteBtn = document.getElementById("favorite-btn");
const decrementBtn = document.getElementById("decrement");
const incrementBtn = document.getElementById("increment");

if (localStorage.getItem("product")) {
 product = JSON.parse(localStorage.getItem("product"));
}

function showProduct() {
 countElem.textContent = product.count;
 favoriteBtn.classList.toggle("active", product.favorite);
 titleElem.textContent = product.title;
}
showProduct();

function saveProduct() {
localStorage.setItem("product", JSON.stringify(product));
}

incrementBtn.addEventListener("click", () => {
product.count++;
showProduct();
saveProduct();
});

decrementBtn.addEventListener("click", () => {
if (product.count > 0) {
product.count--;
showProduct();
saveProduct();
}
});

favoriteBtn.addEventListener("click", () => {
product.favorite = !product.favorite;
showProduct();
saveProduct();
});
