import { Link } from "react-router-dom";

export function Address() {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: 10,
        borderRadius: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h4>Endereço</h4>
        <Link to="/address">editar</Link>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "100px 1fr",
          gap: 10,
        }}
      >
        <div>
          <p>CEP</p>
          <p>Rua</p>
          <p>Complemento</p>
          <p>Bairro</p>
          <p>Cidade</p>
        </div>
        <div>
          <p>99999-999</p>
          <p>Rua das Flores, 123</p>
          <p>Apto 123</p>
          <p>Jardim das Flores</p>
          <p>São Paulo - SP</p>
        </div>
      </div>
    </div>
  );
}
