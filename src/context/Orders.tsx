import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { Product } from "./Cart";
import { User } from "./Auth";

export interface Order {
  id: string;
  products: Product[];
  user: User;
  paymentMethod: string;
  status: string;
  total: number;
  createdAt: Date;
}

interface OrderContext {
  recent: string;

  handleSetRecent: (id: string) => void;
}

export const OrdersContext = createContext({} as OrderContext);

export const OrdersProvider = ({ children }: { children: React.ReactNode }) => {
  const [recent, setRecent] = useState("");

  const handleSetRecent = useCallback((id: string) => {
    setRecent(id);
  }, []);

  const value = useMemo(
    () => ({
      recent,
      handleSetRecent,
    }),
    [recent, handleSetRecent]
  );

  return (
    <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>
  );
};

export const useOrderContext = () => {
  const context = useContext(OrdersContext);
  return context;
};
