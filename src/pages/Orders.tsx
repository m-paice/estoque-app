import { useNavigate } from "react-router-dom";

import { Button } from "../components/Button";
import { useOrderContext } from "../context/Orders";

const status: { [key: string]: string[] } = {
  ["awaiting"]: ["Aguardando confirmação", "orange"],
  ["on-the-way"]: ["A caminho", "green"],
  ["delivered"]: ["Entregue", "blue"],
  ["canceled"]: ["Cancelado", "red"],
};

export function Orders() {
  const navigate = useNavigate();
  const { orders } = useOrderContext();

  return (
    <div>
      <div
        style={{
          backgroundColor: "#ebf3fe",
          padding: 10,
          borderRadius: 10,
          marginBottom: 20,
        }}
      >
        <p style={{ fontSize: 20 }}>Pedidos</p>
      </div>

      {orders.length === 0 && <p>Nenhum pedido encontrado</p>}

      <div>
        {orders.map((order) => (
          <div
            key={order.id}
            style={{
              border: "1px solid #ebf1f6",
              borderRadius: 10,
              padding: 10,
              marginBottom: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <p style={{ fontSize: 20 }}>Pedido {order.id}</p>
              <p style={{ fontSize: 20 }}>R$ {order.total}</p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p>
                Data: {order.createdAt.toLocaleDateString()} às{" "}
                {order.createdAt.toLocaleTimeString()}
              </p>
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
                  color: status[order.status][1],
                  fontWeight: "bold",
                }}
              >
                {status[order.status][0]}
              </p>
            </div>
            <Button
              variant="text"
              onClick={() => navigate(`/order/${order.id}`)}
            >
              ver detalhes do pedido
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
