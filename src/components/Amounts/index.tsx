interface Props {
  value: number;
}

export function Amounts({ value }: Props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 10,
          alignItems: "center",
        }}
      >
        <button
          style={{
            padding: "5px 20px",
            borderRadius: 5,
            border: "1px solid #ccc",
            backgroundColor: "white",
            fontSize: 20,
          }}
        >
          -
        </button>
        <p
          style={{
            fontSize: 24,
          }}
        >
          {value}
        </p>
        <button
          style={{
            padding: "5px 20px",
            borderRadius: 5,
            border: "1px solid #ccc",
            backgroundColor: "white",
            fontSize: 20,
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
