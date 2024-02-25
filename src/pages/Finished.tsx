import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { useOrderContext } from "../context/Orders";

export function Finished() {
  const navigate = useNavigate();
  const { recent } = useOrderContext();

  return (
    <div>
      <div
        style={{
          padding: 10,
          borderRadius: 10,
          display: "flex",
          flexDirection: "column",
          gap: 20,
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <img src="/ok.png" alt="ok" />
        <p style={{ fontSize: 20 }}>Pedido realizado com sucesso!</p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <Button onClick={() => navigate("/")}>Voltar para inicio</Button>
        <Button variant="outlined" onClick={() => navigate(`/order/${recent}`)}>
          Ver detalhes{" "}
        </Button>
      </div>
    </div>
  );
}
