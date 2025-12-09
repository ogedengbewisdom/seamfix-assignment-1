interface ProductProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const PRODUCTS: ProductProps[] = [
  {
    id: 1,
    name: "Snowboard Jacket Winter Coats",
    description:
      "The Jackets is US standard size, Please choose size as your usual wear",
    price: 100,
    image: "assets/image1.png",
  },
  {
    id: 2,
    name: "DANVOUY Womens T Shirt Casual Cotton Short",
    description:
      "Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch.",
    price: 200,
    image: "assets/image2.png",
  },
  {
    id: 3,
    name: "Opna Women's Short Sleeve Moisture",
    description:
      "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit",
    price: 300,
    image: "assets/image3.png",
  },
  {
    id: 4,
    name: "MBJ Women's Solid Short Sleeve Boat Neck V",
    description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort",
    price: 400,
    image: "assets/image4.png",
  },
  {
    id: 5,
    name: "Rain Jacket Women Windbreaker",
    description:
      "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design.",
    price: 500,
    image: "assets/image5.png",
  },
];

const displayContainer = document.getElementById("container") as HTMLElement;

PRODUCTS.forEach((product, index) => {
  const card = document.createElement("article");
  card.classList.add("card");
  card.id = `card-${index}`;
  card.innerHTML = `
          <div class="card-image-container">
            <img src="${product.image}"
                 alt="${product.name}" 
                 class="card-image">
        </div>
        <div class="card-content">
            <h2 class="card-title">${product.name}</h2>
            <p class="card-description">${product.description}</p>
            <p class="card-price">$${product.price}</p>
        </div>
  `;

  displayContainer.appendChild(card);

  card.addEventListener("click", () => {
    alert(`${product.name} has been added to the cart`);
  });
});

const openMenuButton = document.getElementById("open-menu") as HTMLElement;
const mobileNavList = document.querySelector(
  ".mobile-nav-container"
) as HTMLElement;

openMenuButton.addEventListener("click", () => {
  mobileNavList.style.display = "block";
});

const closeMenuButton = document.getElementById("close-menu") as HTMLElement;

closeMenuButton.addEventListener("click", () => {
  mobileNavList.style.display = "none";
});
