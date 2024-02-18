export function Address() {
  return (
    <div>
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
