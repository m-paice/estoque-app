interface Props {
  colors: string[];
}

export function Colors({ colors = [] }: Props) {
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
        {colors.map((color) => (
          <span
            key={color}
            style={{
              width: 30,
              height: 30,

              padding: "5px 10px",
              borderRadius: 5,
              backgroundColor: color,
            }}
          />
        ))}
      </div>
    </div>
  );
}
