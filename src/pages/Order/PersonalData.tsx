import { User } from "../../context/Auth";

interface PersonalDataProps {
  user: User;
}

export function PersonalData({ user }: PersonalDataProps) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: 10,
        borderRadius: 10,
      }}
    >
      <h4>Dados pessoais</h4>

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
          <p>{user.cellPhone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")}</p>
          <p>
            {user.document?.replace(
              /(\d{3})(\d{3})(\d{3})(\d{2})/,
              "$1.$2.$3-$4"
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
