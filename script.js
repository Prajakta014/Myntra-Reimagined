const products = [{
        name: "AI-Selected T-Shirt",
        img: "assets/product-images/tshirt.jpg",
    },
    {
        name: "Smart Kurta Set",
        img: "assets/product-images/kurta.jpg",
    },
    {
        name: "Trending Sneakers",
        img: "assets/product-images/sneakers.jpg",
    },
    {
        name: "Elegant Saree",
        img: "assets/product-images/saree.jpg",
    }
];

window.onload = () => {
    const container = document.getElementById("products");
    products.forEach((product) => {
        container.innerHTML += `
      <div class="product-card">
        <img src="${product.img}" alt="${product.name}" />
        <h3>${product.name}</h3>
      </div>
    `;
    });
};

function voiceSearch() {
    alert("Voice search feature will be added soon with AI!");
}