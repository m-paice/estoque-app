export function Payment() {
  return (
    <div>
      <h4>Forma de pagamento</h4>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 10,
          }}
        >
          <input type="radio" name="payment" id="credit-card" />
          <label htmlFor="credit-card">Cartão de crédito / débito</label>
        </div>
        <div
          style={{
            display: "flex",
            gap: 10,
          }}
        >
          <input type="radio" name="payment" id="dinheiro" />
          <label htmlFor="dinheiro">Dinheiro</label>
        </div>
        <div
          style={{
            display: "flex",
            gap: 10,
          }}
        >
          <input type="radio" name="payment" id="pix" />
          <label htmlFor="pix">Pix</label>
        </div>
      </div>

      <p>O pagamento será realizado na entrega</p>
    </div>
  );
}
