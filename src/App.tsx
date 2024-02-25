import { CartProvider } from "./context/Cart";
import { OrdersProvider } from "./context/Orders";
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
          <OrdersProvider>
            <Routes />
          </OrdersProvider>
        </SidebarProvider>
      </CartProvider>
    </div>
  );
}
