import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Colors } from "../components/Colors";

const products = [
  {
    id: 1,
    image: "https://source.unsplash.com/300x300/?labtop",
    name: "Notebook de Notebook",
    price: 2500,
    amount: 2,
  },
  {
    id: 2,
    image: "https://source.unsplash.com/300x300/?smartphone",
    name: "Smartphone",
    price: 1500,
    amount: 1,
  },
  {
    id: 3,
    image: "https://source.unsplash.com/300x300/?tablet",
    name: "Tablet",
    price: 800,
    amount: 3,
  },
];

export function Cart() {
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
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: 20 }}>Carrinho</p>
        <h4>
          {products
            .reduce((acc, curr) => acc + curr.price * curr.amount, 0)
            .toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
        </h4>
      </div>
      <div
        style={{
          margin: "10px 0",
        }}
      >
        <Button onClick={() => navigate("/")} variant="text">
          Continuar comprando
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: 10,
          border: "1px solid #ebf3fe",
          borderRadius: 5,
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              borderBottom: "1px solid #ebf3fe",
              marginBottom: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 10,

                paddingBottom: 10,
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: 10,
                }}
              >
                <div
                  style={{
                    backgroundImage: `url(${product.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: 100,
                    height: 100,
                    borderRadius: 5,
                    minWidth: 100,
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 5,
                  }}
                >
                  <p
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                    }}
                  >
                    {product.name}
                  </p>
                  <p>
                    {product.price.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                </div>
              </div>

              <div
                style={{
                  minWidth: 85,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: 10,
                  }}
                >
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    Cor:
                  </p>
                  <Colors colors={["red"]} />{" "}
                </div>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  Tamanho: P
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  Qtdade: 2
                </p>
                <p
                  style={{
                    marginTop: 10,
                    fontWeight: "bold",
                  }}
                >
                  {(product.price * product.amount).toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>
            </div>

            <Button variant="text" size="small" color="danger">
              Remover
            </Button>
          </div>
        ))}
        <Button>Finalizar compra</Button>
      </div>
    </div>
  );
}
