import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function PersonalData() {
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
        <p style={{ fontSize: 20 }}>Dados Pessoais</p>
      </div>

      <div
        style={{
          marginBottom: 40,
        }}
      >
        <Input label="Nome" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 10,
          }}
        >
          <Input label="Telefone" />
          <Input label="CPF" />
        </div>
      </div>

      <Button onClick={() => navigate("/resume")}>Salvar</Button>
    </div>
  );
}
