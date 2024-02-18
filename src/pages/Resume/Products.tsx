import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";
import { Colors } from "../../components/Colors";

interface Props {
  products: {
    id: number;
    image: string;
    name: string;
    price: number;
    amount: number;
  }[];
}

export function Products({ products }: Props) {
  const navigate = useNavigate();

  return (
    <div>
      <h4>Produtos</h4>

      <div>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              display: "flex",
              gap: 10,
              marginBottom: 10,
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: 50,
                height: 50,
                objectFit: "cover",
                borderRadius: 10,
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div>
                <p>
                  {product.amount}x {product.name}
                </p>
                <p>
                  {product.price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>
              <div>
                <Colors colors={["blue"]} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button variant="text" onClick={() => navigate("/cart")}>
        ir para o carrinho
      </Button>
    </div>
  );
}
