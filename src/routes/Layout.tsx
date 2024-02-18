import { Outlet, useNavigate } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/16/solid";

export function Layout() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "80px auto 50px",
      }}
    >
      <header
        style={{
          padding: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 onClick={() => navigate("")}>My Store</h1>
        <div
          onClick={() => navigate("cart")}
          style={{
            position: "relative",
          }}
        >
          <ShoppingCartIcon width={40} />
          <span
            style={{
              position: "absolute",
              bottom: 0,
              left: -10,
              backgroundColor: "red",
              color: "white",
              borderRadius: "50%",
              padding: "5px 10px",
              fontSize: 16,
            }}
          >
            2
          </span>
        </div>
      </header>
      <section
        style={{
          height: "calc(100vh - 130px)",
          overflowY: "auto",
        }}
      >
        <Outlet />
      </section>
      <footer
        style={{
          marginBottom: 40,
        }}
      >
        <p
          style={{
            textAlign: "center",
          }}
        >
          &copy; {new Date().getFullYear()} My Store
        </p>
        <p
          style={{
            textAlign: "center",
          }}
        >
          My Store - CNPJ: 00.000.000/0000-00
        </p>
      </footer>
    </div>
  );
}
