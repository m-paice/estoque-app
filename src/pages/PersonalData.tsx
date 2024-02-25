import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useUserContext } from "../context/Auth";
import { useState } from "react";

export function PersonalData() {
  const navigate = useNavigate();
  const { handleupdatePersonalData, user } = useUserContext();

  const [fields, setFields] = useState({
    name: user.name,
    cellPhone: user.cellPhone,
    document: user.document,
  });

  const handleSubmit = () => {
    handleupdatePersonalData({
      name: fields.name,
      cellPhone: fields.cellPhone.replace(/\D/g, ""),
      document: fields.document.replace(/\D/g, ""),
    });

    navigate("/resume");
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
        <p style={{ fontSize: 20 }}>Dados Pessoais</p>
      </div>

      <div
        style={{
          marginBottom: 40,
        }}
      >
        <Input
          value={fields.name}
          onChange={(value) => setFields({ ...fields, name: value })}
          label="Nome"
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 10,
          }}
        >
          <Input
            value={fields.cellPhone.replace(
              /(\d{2})(\d{5})(\d{4})/,
              "($1) $2-$3"
            )}
            onChange={(value) => setFields({ ...fields, cellPhone: value })}
            label="Telefone"
          />
          <Input
            value={fields.document.replace(
              /(\d{3})(\d{3})(\d{3})(\d{2})/,
              "$1.$2.$3-$4"
            )}
            onChange={(value) => setFields({ ...fields, document: value })}
            label="CPF"
          />
        </div>
      </div>

      <Button onClick={handleSubmit}>Salvar</Button>
    </div>
  );
}
