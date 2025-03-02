function getProductByID(id, callback) {
  fetch(`https://dummyjson.com/products/${id}`)
      .then(response => {return response.json();
})
      .then(data => callback(data))
      .catch(error => alert(error.message));
}

const button = document.getElementById("fetchButton");
const input = document.getElementById("productId");
const productCard = document.getElementById("productCard");

button.addEventListener('click', () => {
  const id = input.value;
  getProductByID(id, product => {
      productCard.innerHTML = `
          <img src="${product.thumbnail}" alt="${product.title}">
          <h3>${product.title}</h3>
          <p>${product.description}</p>
          <p>Цена: $${product.price}</p>
          <p class="rating">Рейтинг AVG: ${product.rating}</p>
      `;
  });
});