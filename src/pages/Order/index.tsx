import { Button } from "../../components/Button";

import { Address } from "./Address";
import { PersonalData } from "./PersonalData";
import { Products } from "./Products";
import { Payment } from "./Payment";

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
export function Order() {
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
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              gap: 10,
            }}
          >
            <p
              style={{
                fontSize: 20,
              }}
            >
              Valor Total:{" "}
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
        </div>
        <div>
          <p
            style={{
              textAlign: "center",
              fontSize: 20,
            }}
          >
            Aguardando confirmação.
          </p>
        </div>
        <Products products={products} />
        <PersonalData />
        <Address />

        <Payment />

        <Button variant="text" color="danger">
          Cancelar pedido
        </Button>
      </div>
    </div>
  );
}