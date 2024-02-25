import { Link } from "react-router-dom";
import { useSidebarContext } from "../../context/Sidebar";
import {
  ClipboardIcon,
  HomeIcon,
  WrenchIcon,
  XCircleIcon,
} from "@heroicons/react/16/solid";
import { useUserContext } from "../../context/Auth";

const items = [
  {
    name: "Início",
    path: "/",
    icon: HomeIcon,
  },
  {
    name: "Pedidos",
    path: "/orders",
    icon: ClipboardIcon,
  },

  {
    name: "Configurações",
    path: "/settings",
    icon: WrenchIcon,
  },
];

export function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useSidebarContext();
  const { user, isLogged, handleLogout } = useUserContext();

  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
        zIndex: 100,
        transition: "0.3s",
        display: isSidebarOpen ? "block" : "none",
      }}
      onClick={closeSidebar}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "white",
          width: 300,
          padding: 20,
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 40,
          }}
        >
          <h2>My Store</h2>
          <button
            style={{
              padding: 10,
              backgroundColor: "#ebf3fe",
              border: "none",
              borderRadius: 10,
              cursor: "pointer",
            }}
            onClick={closeSidebar}
          >
            <XCircleIcon width={20} />
          </button>
        </div>
        {isLogged ? (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 20,
              marginBottom: 40,
            }}
          >
            <div>
              <h4>{user.name}</h4>
            </div>
            <p>
              <Link
                to="/"
                onClick={() => {
                  handleLogout();
                  closeSidebar();
                }}
              >
                Sair
              </Link>
            </p>
          </div>
        ) : (
          <div style={{ textAlign: "center", width: "100%" }}>
            <Link to="/login" onClick={closeSidebar}>
              Login
            </Link>
          </div>
        )}
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {(isLogged ? items : items.slice(0, 1)).map((item, index) => (
            <li
              key={index}
              style={{
                marginBottom: 30,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <item.icon width={30} color="#2a3547" />
              <Link
                to={item.path}
                onClick={closeSidebar}
                style={{
                  textDecoration: "none",
                  color: "#2a3547",
                }}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <span>versão 1.0.0</span>
      </div>
    </div>
  );
}
