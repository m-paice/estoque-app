interface PaymentProps {
  payment: string;
  changePayment: (payment: string) => void;
}

export function Payment({ payment, changePayment }: PaymentProps) {
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
            (O pagamento será feito na entrega)
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
          <input
            onChange={() => changePayment("card")}
            checked={payment === "card"}
            type="radio"
            name="payment"
            id="card"
          />
          <label htmlFor="card">Cartão de crédito / débito</label>
        </div>
        <div
          style={{
            display: "flex",
            gap: 10,
          }}
        >
          <input
            onChange={() => changePayment("cash")}
            checked={payment === "cash"}
            type="radio"
            name="payment"
            id="cash"
          />
          <label htmlFor="cash">Dinheiro</label>
        </div>
        <div
          style={{
            display: "flex",
            gap: 10,
          }}
        >
          <input
            onChange={() => changePayment("pix")}
            checked={payment === "pix"}
            type="radio"
            name="payment"
            id="pix"
          />
          <label htmlFor="pix">Pix</label>
        </div>
      </div>
    </div>
  );
}
