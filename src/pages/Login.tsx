import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function Login() {
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
        <p style={{ fontSize: 20 }}>Login</p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 40,
        }}
      >
        <div>
          <h4>Dados de acesso</h4>
          <Input label="Telefone" />
          <Input label="Senha" />
        </div>

        <Button onClick={() => navigate("/resume")}>Login</Button>
      </div>

      <Button variant="text" onClick={() => navigate("/register")}>
        registrar agora
      </Button>
    </div>
  );
}
