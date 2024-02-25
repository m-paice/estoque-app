export interface PaymentProps {
  payment: string;
}

const paymentMethods: { [key: string]: string } = {
  card: "Cartão de crédito / débito",
  cash: "Dinheiro",
  pix: "Pix",
};

export function Payment({ payment }: PaymentProps) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: 10,
        borderRadius: 10,
      }}
    >
      <h4>Forma de pagamento</h4>

      <p>{paymentMethods[payment] || "Não identificado"}</p>
    </div>
  );
}
