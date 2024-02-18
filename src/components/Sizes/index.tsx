interface Props {
  sizes: string[];
}

export function Sizes({ sizes = [] }: Props) {
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
          gap: 5,
        }}
      >
        {sizes.map((size) => (
          <span
            key={size}
            style={{
              padding: "5px 10px",
              borderRadius: 5,
              border: "1px solid #ccc",
              backgroundColor: "white",
              fontSize: 20,
            }}
          >
            {size}
          </span>
        ))}
      </div>
    </div>
  );
}
