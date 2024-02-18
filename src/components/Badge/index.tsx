interface Props {
  children: React.ReactNode;
}

export function Badge({ children }: Props) {
  return (
    <span
      style={{
        backgroundColor: "#13deb9",
        color: "white",
        padding: "5px 10px",
        borderRadius: 5,
      }}
    >
      {children}
    </span>
  );
}
