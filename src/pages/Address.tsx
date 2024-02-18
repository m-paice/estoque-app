import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function Address() {
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
        <p style={{ fontSize: 20 }}>Endereço</p>
      </div>

      <div
        style={{
          marginBottom: 40,
        }}
      >
        <Input label="CEP" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "3fr 1fr",
            gap: 10,
          }}
        >
          <Input label="Rua" />
          <Input label="Número" />
        </div>
        <Input label="Complemento" />
        <Input label="Bairro" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "3fr 1fr",
            gap: 10,
          }}
        >
          <Input label="Cidade" />
          <Input label="Estado" />
        </div>
      </div>

      <Button onClick={() => navigate("/resume")}>Salvar</Button>
    </div>
  );
}
