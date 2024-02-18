interface Props {
  children: React.ReactNode;
  color?: "info" | "success" | "warning" | "danger";
  variant?: "outlined" | "contained" | "text";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

const colors = {
  info: "#5d87ff",
  success: "#00b894",
  warning: "#ffeaa7",
  danger: "#fa896b",
};

const sizes = {
  small: "16px",
  medium: "20px",
  large: "24px",
};

export function Button({
  children,
  color = "info",
  variant = "contained",
  size = "medium",

  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        borderRadius: 5,
        border:
          variant === "outlined"
            ? `1px solid ${colors[color]}`
            : variant === "text"
            ? "none"
            : "none",
        backgroundColor:
          variant === "contained"
            ? colors[color]
            : variant === "text"
            ? "transparent"
            : "white",
        color: variant === "contained" ? "white" : colors[color],
        fontSize: sizes[size],
        textDecoration: variant === "text" ? "underline" : "none",
        width: "100%",
      }}
    >
      {children}
    </button>
  );
}
