import { useNavigate } from "react-router-dom";

const categories = [
  {
    id: 0,
    image: null,
    name: "TODOS",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    products: Math.floor(Math.random() * 1000),
  },
  {
    id: 1,
    image: "https://source.unsplash.com/300x300/?labtop",
    name: "Technology",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    products: Math.floor(Math.random() * 1000),
  },
  {
    id: 2,
    image: "https://source.unsplash.com/300x300/?smartphone",
    name: "Smartphone",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    products: Math.floor(Math.random() * 1000),
  },
  {
    id: 3,
    image: "https://source.unsplash.com/300x300/?tablet",
    name: "Tablet",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    products: Math.floor(Math.random() * 1000),
  },
  {
    id: 4,
    image: "https://source.unsplash.com/300x300/?watch",
    name: "Watch",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    products: Math.floor(Math.random() * 1000),
  },
  {
    id: 5,
    image: "https://source.unsplash.com/300x300/?headphone",
    name: "Headphone",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    products: Math.floor(Math.random() * 1000),
  },
  {
    id: 6,
    image: "https://source.unsplash.com/300x300/?camera",
    name: "Camera",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    products: Math.floor(Math.random() * 1000),
  },
  {
    id: 7,
    image: "https://source.unsplash.com/300x300/?keyboard",
    name: "Keyboard",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    products: Math.floor(Math.random() * 1000),
  },
  {
    id: 8,
    image: "https://source.unsplash.com/300x300/?mouse",
    name: "Mouse",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    products: Math.floor(Math.random() * 1000),
  },
  {
    id: 9,
    image: "https://source.unsplash.com/300x300/?printer",
    name: "Printer",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    products: Math.floor(Math.random() * 1000),
  },
  {
    id: 10,
    image: "https://source.unsplash.com/300x300/?monitor",
    name: "Monitor",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    products: Math.floor(Math.random() * 1000),
  },
  {
    id: 11,
    image: "https://source.unsplash.com/300x300/?microphone",
    name: "Microphone",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    products: Math.floor(Math.random() * 1000),
  },
  {
    id: 12,
    image: "https://source.unsplash.com/300x300/?speaker",
    name: "Speaker",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    products: Math.floor(Math.random() * 1000),
  },
  {
    id: 13,
    image: "https://source.unsplash.com/300x300/?drone",
    name: "Drone",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    products: Math.floor(Math.random() * 1000),
  },
];

const promotions = [
  {
    id: 0,
    image: null,
    name: "TODOS",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    products: Math.floor(Math.random() * 1000),
  },
  {
    id: 1,
    image: "https://source.unsplash.com/300x300/?labtop",
    name: "Notebook",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    products: Math.floor(Math.random() * 1000),
    price: 100,
    oldPrice: 250,
  },
  {
    id: 2,
    image: "https://source.unsplash.com/300x300/?smartphone",
    name: "Smartphone",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    products: Math.floor(Math.random() * 1000),
    price: 100,
    oldPrice: 250,
  },
  {
    id: 3,
    image: "https://source.unsplash.com/300x300/?tablet",
    name: "Tablet",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    products: Math.floor(Math.random() * 1000),
    price: 100,
    oldPrice: 250,
  },
];

export function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        padding: 20,
      }}
    >
      <div
        style={{
          backgroundColor: "#ebf3fe",
          padding: 10,
          borderRadius: 10,
        }}
      >
        <p style={{ fontSize: 20 }}>Bem-vindo a My Store</p>
      </div>

      <div style={{ margin: "20px 0 40px" }}>
        <h2> Promoções</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 10,
            marginTop: 20,
          }}
        >
          {promotions.map((promotion) => (
            <div key={promotion.id} onClick={() => navigate("products")}>
              {promotion.image && (
                <div
                  style={{
                    backgroundImage: `url(${promotion.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: 100,
                    borderRadius: "10px 10px 0 0",
                  }}
                />
              )}
              <div
                style={{
                  display: "flex",
                  justifyContent: promotion.image ? "space-between" : "center",
                  alignItems: "center",
                  height: promotion.image ? "none" : "100%",
                }}
              >
                <h4>{promotion.name}</h4>
                <p>{promotion.image ? promotion.products : null}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ margin: "20px 0" }}>
        <h2>Categorias</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 10,
            marginTop: 20,
          }}
        >
          {categories.map((category) => (
            <div key={category.id} onClick={() => navigate("products")}>
              {category.image && (
                <div
                  style={{
                    backgroundImage: `url(${category.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: 100,
                    borderRadius: "10px 10px 0 0",
                  }}
                />
              )}
              <div
                style={{
                  display: "flex",
                  justifyContent: category.image ? "space-between" : "center",
                  alignItems: "center",
                  height: category.image ? "none" : "100%",
                }}
              >
                <h4>{category.name}</h4>
                <p>{category.image ? category.products : null}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
