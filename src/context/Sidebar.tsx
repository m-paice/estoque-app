import { createContext, useContext, useMemo, useState } from "react";

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

  const value = useMemo(
    () => ({
      isSidebarOpen,
      closeSidebar,
      openSidebar,
    }),
    [isSidebarOpen]
  );

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
}

export function useSidebarContext() {
  const context = useContext(SidebarContext);

  return context;
}
