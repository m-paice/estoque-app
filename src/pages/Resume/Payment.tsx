export function Payment() {
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
        }}
      >
        <h4>
          Forma de pagamento{" "}
          <span
            style={{
              fontWeight: "normal",
            }}
          >
            {" "}
            (o pagamento será feito na entrega)
          </span>
        </h4>
      </div>

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
    </div>
  );
}
