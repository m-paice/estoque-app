import { Outlet, useNavigate } from "react-router-dom";
import {
  Bars3BottomLeftIcon,
  ShoppingCartIcon,
} from "@heroicons/react/16/solid";
import { useSidebarContext } from "../context/Sidebar";
import { Sidebar } from "../components/Sidebar";

export function Layout() {
  const navigate = useNavigate();
  const { closeSidebar, isSidebarOpen, openSidebar } = useSidebarContext();

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
        <div
          style={{
            display: "flex",
            gap: 20,
            alignItems: "center",
          }}
        >
          <button
            style={{
              padding: 10,
              backgroundColor: "#ebf3fe",
              border: "none",
              borderRadius: 10,
              cursor: "pointer",
            }}
            onClick={isSidebarOpen ? closeSidebar : openSidebar}
          >
            <Bars3BottomLeftIcon width={20} />
          </button>
          <h1 onClick={() => navigate("")}>My Store</h1>
        </div>
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
          height: "calc(100vh - 140px)",
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

      <Sidebar />
    </div>
  );
}
