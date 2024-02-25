import { Link } from "react-router-dom";
import { useUserContext } from "../../context/Auth";

export function Address() {
  const { user } = useUserContext();

  const address = user.addresses.length > 0 ? user.addresses[0] : null;

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
          <p>{address?.zipcode.replace(/(\d{5})(\d{3})/, "$1-$2")}</p>
          <p>
            {address?.street}, {address?.number}
          </p>
          <p>{address?.complement}</p>
          <p>{address?.neighborhood}</p>
          <p>
            {address?.city} - {address?.state}
          </p>
        </div>
      </div>
    </div>
  );
}
