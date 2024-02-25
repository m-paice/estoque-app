import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import { Product } from "./Cart";
import { User } from "./Auth";

interface Order {
  id: string;
  status: string;
  total: number;
  payment: string;
  products: Product[];
  user: Omit<User, "password" & "username">;
  createdAt: Date;
}

interface OrderContext {
  orders: Order[];
  recent: string;
  handleAddOrder: (order: Order) => void;
}

export const OrdersContext = createContext({} as OrderContext);

export const OrdersProvider = ({ children }: { children: React.ReactNode }) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [recent, setRecent] = useState("");

  const handleAddOrder = useCallback((order: Order) => {
    setOrders((prev) => [...prev, order]);
    setRecent(order.id);
  }, []);

  const value = useMemo(
    () => ({
      orders,
      recent,
      handleAddOrder,
    }),
    [orders, recent, handleAddOrder]
  );

  return (
    <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>
  );
};

export const useOrderContext = () => {
  const context = useContext(OrdersContext);
  return context;
};
