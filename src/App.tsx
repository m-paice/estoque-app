import { CartProvider } from "./context/Cart";
import { SidebarProvider } from "./context/Sidebar";
import { Routes } from "./routes";

export function App() {
  return (
    <div
      style={{
        maxWidth: 800,
        margin: "0 auto",
      }}
    >
      <CartProvider>
        <SidebarProvider>
          <Routes />
        </SidebarProvider>
      </CartProvider>
    </div>
  );
}
