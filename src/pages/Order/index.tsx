import { Button } from "../../components/Button";

import { Address } from "./Address";
import { PersonalData } from "./PersonalData";
import { Products } from "./Products";
import { Payment } from "./Payment";

import { useNavigate, useParams } from "react-router-dom";
import { useRequestFindOne } from "../../hooks/useRequestFindOne";
import { useEffect } from "react";
import { Order as IOrder } from "../../context/Orders";

const statusMethods: { [key: string]: string[] } = {
  ["awaiting"]: ["Aguardando confirmação", "orange"],
  ["on-the-way"]: ["A caminho", "green"],
  ["delivered"]: ["Entregue", "blue"],
  ["canceled"]: ["Cancelado", "red"],
};

export function Order() {
  const { id } = useParams();

  const navigate = useNavigate();

  const { execute, response: order } = useRequestFindOne<IOrder>({
    path: "/orders",
    id: id!,
  });

  useEffect(() => {
    execute();
  }, []);

  if (!order) {
    return <p>Pedido não encontrado</p>;
  }

  const { products, user, paymentMethod, status } = order;

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
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontSize: 20,
              }}
            >
              Valor Total
            </p>
            <h4
              style={{
                fontSize: 30,
                color: "green",
              }}
            >
              {products
                .reduce(
                  (acc, curr) => acc + Number(curr.OrderProducts.subtotal),
                  0
                )
                .toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
            </h4>
          </div>
        </div>
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
          <p
            style={{
              textAlign: "center",
              fontSize: 20,
              width: "100%",
              color: statusMethods[status][1],
              fontWeight: "bold",
            }}
          >
            {statusMethods[status][0]}
          </p>
        </div>
        <Products products={products} />
        <PersonalData user={user} />
        <Address address={user.addresses[0]} />
        <Payment payment={paymentMethod} />

        <Button variant="text" color="danger">
          Cancelar pedido
        </Button>

        <Button onClick={() => navigate("/")}>Voltar para inicio</Button>
      </div>
    </div>
  );
}
