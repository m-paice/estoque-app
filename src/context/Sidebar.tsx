import { createContext, useContext, useState } from "react";

interface SidebarContextProps {
  isSidebarOpen: boolean;
  closeSidebar: () => void;
  openSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextProps>(
  {} as SidebarContextProps
);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  function openSidebar() {
    setIsSidebarOpen(true);
  }

  return (
    <SidebarContext.Provider
      value={{
        isSidebarOpen,
        closeSidebar,
        openSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebarContext() {
  const context = useContext(SidebarContext);

  return context;
}
