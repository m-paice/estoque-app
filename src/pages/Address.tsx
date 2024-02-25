import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useState } from "react";
import { useUserContext } from "../context/Auth";

export function Address() {
  const navigate = useNavigate();
  const { handleUpdateAddress, user } = useUserContext();
  const [fields, setFields] = useState({
    zipcode: user.address.zipcode,
    street: user.address.street,
    number: user.address.number,
    complement: user.address.complement,
    neighborhood: user.address.neighborhood,
    city: user.address.city,
    state: user.address.state,
  });

  const handleSubmit = () => {
    handleUpdateAddress({
      zipcode: fields.zipcode.replace(/\D/g, ""),
      street: fields.street,
      number: fields.number,
      complement: fields.complement,
      neighborhood: fields.neighborhood,
      city: fields.city,
      state: fields.state,
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
        <p style={{ fontSize: 20 }}>Endereço</p>
      </div>

      <div
        style={{
          marginBottom: 40,
        }}
      >
        <Input
          value={fields.zipcode}
          onChange={(value) => setFields({ ...fields, zipcode: value })}
          label="CEP"
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "3fr 1fr",
            gap: 10,
          }}
        >
          <Input
            value={fields.street}
            onChange={(value) => setFields({ ...fields, street: value })}
            label="Rua"
          />
          <Input
            value={fields.number}
            onChange={(value) => setFields({ ...fields, number: value })}
            label="Número"
          />
        </div>
        <Input
          value={fields.complement}
          onChange={(value) => setFields({ ...fields, complement: value })}
          label="Complemento"
        />
        <Input
          value={fields.neighborhood}
          onChange={(value) => setFields({ ...fields, neighborhood: value })}
          label="Bairro"
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "3fr 1fr",
            gap: 10,
          }}
        >
          <Input
            value={fields.city}
            onChange={(value) => setFields({ ...fields, city: value })}
            label="Cidade"
          />
          <Input
            value={fields.state}
            onChange={(value) => setFields({ ...fields, state: value })}
            label="Estado"
          />
        </div>
      </div>

      <Button onClick={handleSubmit}>Salvar</Button>
    </div>
  );
}
