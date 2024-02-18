import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function Register() {
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
        <p style={{ fontSize: 20 }}>Dados pessoais</p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 40,
        }}
      >
        <div>
          <h4>Dados Pessoais</h4>
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

        <div>
          <h4>Dados de acesso</h4>
          <Input label="Senha" />
          <Input label="Confirmação de senha" />
        </div>

        <div>
          <h4>Endereço</h4>
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
        <Button onClick={() => navigate("/")}>Criar</Button>
      </div>
    </div>
  );
}
