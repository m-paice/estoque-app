import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

interface OrderProducts {
  amount: number;
  subtotal: number;
}

export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  amount: number;
  color: string;
  size: string;
  oldPrice?: number;
  OrderProducts: OrderProducts;
}

export interface CartContextProps {
  products: Product[];
  value: number;
  addProduct: (product: Product, amount: number) => void;
  removeProduct: (productIndex: number) => void;
  clearCart: () => void;
}

const CartContext = createContext({} as CartContextProps);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = useCallback(
    (product: Product, amount: number) => {
      const productExist = products.find(
        (item) =>
          item.id === product.id &&
          item.color === product.color &&
          item.size === product.size
      );
      if (productExist) {
        productExist.amount += amount;
        setProducts((prevState) =>
          prevState.map((item) =>
            item.id === product.id &&
            item.color === product.color &&
            item.size === product.size
              ? productExist
              : item
          )
        );
      } else {
        setProducts([...products, { ...product, amount }]);
      }
    },
    [products]
  );

  const removeProduct = useCallback(
    (index: number) => {
      const newProducts = products.filter((_, i) => i !== index);
      setProducts(newProducts);
    },
    [products]
  );

  const clearCart = useCallback(() => {
    setProducts([]);
  }, []);

  const value = useMemo(
    () => ({
      products,
      value: products.reduce((acc, product) => acc + product.price, 0),
      addProduct,
      removeProduct,
      clearCart,
    }),
    [products, addProduct, removeProduct, clearCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  return context;
};
