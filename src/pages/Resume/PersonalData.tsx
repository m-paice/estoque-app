import { Link } from "react-router-dom";
import { useUserContext } from "../../context/Auth";

export function PersonalData() {
  const { user } = useUserContext();

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
          <p>{user.name}</p>
          <p>{user.cellphone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")}</p>
          <p>
            {user.document.replace(
              /(\d{3})(\d{3})(\d{3})(\d{2})/,
              "$1.$2.$3-$4"
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
