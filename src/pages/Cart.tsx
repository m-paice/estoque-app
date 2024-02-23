import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Colors } from "../components/Colors";
import { useCartContext } from "../context/Cart";

export function Cart() {
  const navigate = useNavigate();
  const { products, removeProduct } = useCartContext();

  return (
    <div>
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
        {products.length === 0 && (
          <p
            style={{
              textAlign: "center",
            }}
          >
            Carrinho vazio
          </p>
        )}
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
        {products.map((product, index) => (
          <div
            key={`${product.id}-${index}`}
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
                    display: product.color ? "flex" : "none",
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
                  <Colors
                    colors={[product.color]}
                    selectedColor={product.color}
                    handleSelectColor={() => {}}
                    hideSelectedColor
                  />{" "}
                </div>
                <p
                  style={{
                    display: product.size ? "flex" : "none",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  Tamanho: {product.size}
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  Qtdade: {product.amount}
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

            <Button
              variant="text"
              size="small"
              color="danger"
              onClick={() => removeProduct(index)}
            >
              Remover
            </Button>
          </div>
        ))}
        <Button onClick={() => navigate("/login")}>Finalizar compra</Button>
      </div>
    </div>
  );
}
