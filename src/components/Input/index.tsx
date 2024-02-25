interface Props {
  label: string;
  type?: string;

  value?: string;
  onChange?: (value: string) => void;
}

export function Input({ label, type = "text", value, onChange }: Props) {
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
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
}
