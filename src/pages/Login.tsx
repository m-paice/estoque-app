import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useUserContext } from "../context/Auth";
import { useState } from "react";

export function Login() {
  const navigate = useNavigate();
  const { handleLogin } = useUserContext();

  const [fields, setFields] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = () => {
    handleLogin({ username: fields.username, password: fields.password });
  };

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
          <Input
            value={fields.username}
            onChange={(value) => setFields({ ...fields, username: value })}
            label="Telefone"
          />
          <Input
            value={fields.password}
            onChange={(value) => setFields({ ...fields, password: value })}
            label="Senha"
            type="password"
          />
        </div>

        <Button onClick={handleSubmit}>Login</Button>
      </div>

      <Button variant="text" onClick={() => navigate("/register")}>
        registrar agora
      </Button>
    </div>
  );
}
