import { Address as IAddress } from "../../context/Auth";

interface AddressProps {
  address: IAddress;
}

export function Address({ address }: AddressProps) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: 10,
        borderRadius: 10,
      }}
    >
      <h4>Endereço</h4>

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
          <p>{address.zipcode}</p>
          <p>
            {address.street}, {address.number}
          </p>
          <p>{address.complement}</p>
          <p>{address.neighborhood}</p>
          <p>
            {address.city} - {address.state}
          </p>
        </div>
      </div>
    </div>
  );
}
