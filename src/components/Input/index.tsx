interface Props {
  label: string;
  type?: string;
}

export function Input({ label, type = "text" }: Props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <label htmlFor="">{label}</label>
      <input
        type={type}
        style={{
          padding: 10,
          borderRadius: 7,
          border: "1px solid #ccc",
          fontSize: 16,
          width: "100%",
        }}
      />
    </div>
  );
}
