import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    image: "https://source.unsplash.com/300x300/?labtop",
    name: "Notebook",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 100,
    oldPrice: null,
  },
  {
    id: 2,
    image: "https://source.unsplash.com/300x300/?smartphone",
    name: "smartphone",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 200,
    oldPrice: 300,
  },
  {
    id: 3,
    image: "https://source.unsplash.com/300x300/?tablet",
    name: "tablet",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 300,
    oldPrice: 500,
  },
];

export function Products() {
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
        <p style={{ fontSize: 20 }}>Produtos</p>
      </div>

      <div>
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/details/${product.id}`)}
            style={{
              border: "1px solid #ebf1f6",
              borderRadius: 10,
              margin: "20px 0",
            }}
          >
            <div
              style={{
                backgroundImage: `url(${product.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: 320,
                marginBottom: 10,
                backgroundColor: "#e6e6e6",
              }}
            />
            <div
              style={{
                padding: 10,
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                {product.name}
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 10,
                }}
              >
                <p>
                  {product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
                <p
                  style={{
                    color: "gray",
                    textDecoration: "line-through",
                  }}
                >
                  {product.oldPrice &&
                    product.oldPrice.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
