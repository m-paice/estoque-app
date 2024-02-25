import { Outlet, useNavigate } from "react-router-dom";
import {
  Bars3BottomLeftIcon,
  ShoppingCartIcon,
} from "@heroicons/react/16/solid";
import { useSidebarContext } from "../context/Sidebar";
import { Sidebar } from "../components/Sidebar";
import { useCartContext } from "../context/Cart";
import { UserProvider } from "../context/Auth";

export function Layout() {
  const navigate = useNavigate();
  const { closeSidebar, isSidebarOpen, openSidebar } = useSidebarContext();
  const { products } = useCartContext();

  return (
    <UserProvider>
      <div
        style={{
          display: "grid",
          gridTemplateRows: "80px auto",
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
            {products.length > 0 && (
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
                {products.length}
              </span>
            )}
          </div>
        </header>
        <section
          style={{
            height: "calc(100vh - 130px)",
            overflowY: "auto",
            padding: 20,
          }}
        >
          <Outlet />
        </section>

        <Sidebar />
      </div>
    </UserProvider>
  );
}
