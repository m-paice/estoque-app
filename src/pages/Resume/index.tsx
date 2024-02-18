import { Button } from "../../components/Button";

import { Address } from "./Address";
import { PersonalData } from "./PersonalData";
import { Products } from "./Products";
import { Payment } from "./Payment";
import { useNavigate } from "react-router-dom";

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
export function Resume() {
  const navigate = useNavigate();

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
          marginBottom: 20,
        }}
      >
        <p style={{ fontSize: 20 }}>Resumo do pedido</p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 40,
        }}
      >
        <PersonalData />
        <Address />
        <Products products={products} />
        <Payment />

        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              marginBottom: 40,
            }}
          >
            <p
              style={{
                fontSize: 20,
              }}
            >
              Valor Total{" "}
            </p>
            <h4
              style={{
                fontSize: 30,
                color: "green",
              }}
            >
              {products
                .reduce((acc, curr) => acc + curr.price * curr.amount, 0)
                .toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
            </h4>
          </div>

          <Button onClick={() => navigate("/finished")}>Fazer pedido</Button>
        </div>
      </div>
    </div>
  );
}
