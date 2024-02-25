import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Address } from "./Address";
import { PersonalData } from "./PersonalData";
import { Products } from "./Products";
import { Payment } from "./Payment";
import { Button } from "../../components/Button";
import { useCartContext } from "../../context/Cart";
import { useOrderContext } from "../../context/Orders";
import { useUserContext } from "../../context/Auth";

export function Resume() {
  const navigate = useNavigate();
  const { clearCart, products } = useCartContext();
  const { handleAddOrder } = useOrderContext();
  const { user } = useUserContext();

  const [payment, setPayment] = useState("credit-card");

  const handleFinishOrder = () => {
    handleAddOrder({
      createdAt: new Date(),
      id: Math.random().toString(36).substr(2, 9),
      payment,
      products,
      status: "awaiting",
      total: products.reduce((acc, curr) => acc + curr.price * curr.amount, 0),
      user,
    });

    navigate("/finished");
    clearCart();
  };

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
        <Payment payment={payment} changePayment={setPayment} />

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

          <Button onClick={handleFinishOrder}>Fazer pedido</Button>
        </div>
      </div>
    </div>
  );
}
