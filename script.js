// fetch('https://dummyjson.com/products/1')
// .then(res => res.json())
// .then(json => console.log(json))

const products = [
  (id1 = {
    title: "iPhone 9",
    description: "Super Retina HD display with OLED technology",
    price: 549,
    category: "smartphones",
    img: "https://dummyjson.com/image/i/products/2/3.jpg",
  }),
  (id2 = {
    title: "iPhone X",
    description: "Royal Mirage Sport",
    price: 980,
    category: "smartphones",
    img: "https://dummyjson.com/image/i/products/2/2.jpg",
  }),
  (id3 = {
    title: "iPhone X",
    description: "Royal Mirage Sport",
    price: 1200,
    category: "smartphones",
    img: "https://dummyjson.com/image/i/products/2/2.jpg",
  }),
  (id4 = {
    title: "iPhone X",
    description: "Super Retina HD display with OLED technology",
    price: 400,
    category: "smartphones",
    img: "https://dummyjson.com/image/i/products/2/2.jpg",
  }),
  (id5 = {
    title: "iPhone 9",
    description: "Super Retina HD display with OLED technology",
    price: 349,
    category: "smartphones",
    img: "https://dummyjson.com/image/i/products/2/3.jpg",
  }),
  (id6 = {
    title: "iPhone 9",
    description: "Super Retina HD display with OLED technology",
    price: 849,
    category: "smartphones",
    img: "https://dummyjson.com/image/i/products/2/3.jpg",
  }),
  (id7 = {
    title: "iPhone 9",
    description: "Super Retina HD display with OLED technology",
    price: 759,
    category: "smartphones",
    img: "https://dummyjson.com/image/i/products/2/3.jpg",
  }),
  (id8 = {
    title: "iPhone 9",
    description: "Super Retina HD display with OLED technology",
    price: 1200,
    category: "smartphones",
    img: "https://dummyjson.com/image/i/products/2/3.jpg",
  }),
];

function data() {
  products.map((values) => {
    const allProducts = `<div class="card">
    <h1 class="title"> ${values.title}</h1>
    <img src=${values.img} alt="" class="images" />
    <p class="description">${values.description}</p>
    <p class="category">${values.category}</p>
    <p class="price">${values.price} £</p>
  </div>`;
    document.querySelector("#cards").innerHTML += allProducts;
  });
}
data();
