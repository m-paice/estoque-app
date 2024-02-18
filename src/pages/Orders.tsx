import { useNavigate } from "react-router-dom";

import { Button } from "../components/Button";

const orders = [
  {
    id: 1,
    client: "João",
    status: "Aguardando confirmação",
    date: "10/10/2024 10:50:00",
    total: 100,
  },
  {
    id: 2,
    client: "Maria",
    status: "A caminho",
    date: "10/10/2024 22:50:00",
    total: 100,
  },
  {
    id: 3,
    client: "José",
    status: "Entregue",
    date: "10/10/2024 23:50:00",
    total: 100,
  },
  {
    id: 4,
    client: "Pedro",
    status: "Entregue",
    date: "10/10/2024 23:50:00",
    total: 100,
  },
];

export function Orders() {
  const navigate = useNavigate();

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
              <p>Cliente: {order.client}</p>
              <p>Data: {order.date}</p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p>Status: {order.status}</p>
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
