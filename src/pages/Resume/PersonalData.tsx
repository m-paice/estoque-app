import { Link } from "react-router-dom";

export function PersonalData() {
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
        <h4>Dados pessoais</h4>
        <Link to="/personal-data">editar</Link>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "100px 1fr",
          gap: 10,
        }}
      >
        <div>
          <p>Nome</p>
          <p>Telefone</p>
          <p>CPF</p>
        </div>
        <div>
          <p>João da Silva</p>
          <p>(11) 99999-9999</p>
          <p>999.999.999-99</p>
        </div>
      </div>
    </div>
  );
}
