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
      <SidebarProvider>
        <Routes />
      </SidebarProvider>
    </div>
  );
}
