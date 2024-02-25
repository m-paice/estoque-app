import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../services/api";

export interface Address {
  zipcode: string;
  street: string;
  number: string;
  complement: string;
  city: string;
  neighborhood: string;
  state: string;
}

export interface User {
  id: string;
  name: string;
  cellPhone: string;
  document: string;
  addresses: Address[];
}

export interface UserContextProps {
  user: User;
  token: string;
  isLogged: boolean;
  handleLogin: (data: { username: string; password: string }) => void;
  handleLogout: () => void;
  handleUpdateAddress: (address: Address) => void;
  handleupdatePersonalData: (data: {
    name: string;
    cellPhone: string;
    document: string;
  }) => void;
}

const UserContext = createContext({} as UserContextProps);

const initialUser = {
  id: "",
  name: "",
  cellPhone: "",
  document: "",
  addresses: [],
};

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<User>(initialUser);
  const [isLogged, setIsLogged] = useState(false);

  const handleLogout = useCallback(() => {
    setUser(initialUser);
    setIsLogged(false);
  }, []);

  const handleUpdateAddress = useCallback((address: Address) => {
    setUser((user) => ({ ...user, address }));
  }, []);

  const handleupdatePersonalData = useCallback(
    (data: { name: string; cellPhone: string; document: string }) => {
      setUser((user) => ({ ...user, ...data }));
    },
    []
  );

  const handleLogin = useCallback(
    ({ username, password }: { username: string; password: string }) => {
      api
        .post("/auth/login", { cellPhone: username, password })
        .then((response) => {
          const { data } = response;
          if (data) {
            if (user) {
              setUser({
                id: data.id,
                name: data.name ?? "",
                cellPhone: data.cellPhone ?? "",
                document: data.document ?? "",
                addresses: data.addresses ?? [],
              });
              setIsLogged(true);
              navigate("/");
            } else alert("Usuário ou senha inválidos");
          }
        });
    },
    []
  );

  const value = useMemo(
    () => ({
      user,
      isLogged,
      token: "",
      handleLogin,
      handleLogout,
      handleUpdateAddress,
      handleupdatePersonalData,
    }),
    [
      user,
      isLogged,
      handleLogin,
      handleLogout,
      handleUpdateAddress,
      handleupdatePersonalData,
    ]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  return context;
};
