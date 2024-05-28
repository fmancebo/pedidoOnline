import { createContext, useState, useEffect, useMemo, ReactNode } from "react";
import { SnackData } from "../interfaces/SnackData";
import { getBurgers, getDrinks, getIceCreams, getPizzas } from "../services/api";

interface SnackContextProps {
  burgers: SnackData[];
  pizzas: SnackData[];
  drinks: SnackData[];
  iceCreams: SnackData[];
}

export const SnackContext = createContext({} as SnackContextProps);

interface SnackProviderProps {
  children: ReactNode;
}

function SnackProvider({ children }: SnackProviderProps) {
  const [burgers, setBurgers] = useState<SnackData[]>([]);
  const [pizzas, setPizzas] = useState<SnackData[]>([]);
  const [drinks, setDrinks] = useState<SnackData[]>([]);
  const [iceCreams, setIceCreams] = useState<SnackData[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const burgerRequest = getBurgers;
        const pizzaRequest = getPizzas;
        const drinksRequest = getDrinks;
        const iceCreamsRequest = getIceCreams;

        const requests = [burgerRequest, pizzaRequest, drinksRequest, iceCreamsRequest];

        const [burgerResponse, pizzaResponse, drinksResponse, iceCreamsResponse] =
          await Promise.all(requests);

        setBurgers(burgerResponse);
        setPizzas(pizzaResponse);
        setDrinks(drinksResponse);
        setIceCreams(iceCreamsResponse);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    })();
  }, []);

  const contextValue = useMemo(
    () => ({ burgers, pizzas, drinks, iceCreams }),
    [burgers, pizzas, drinks, iceCreams],
  );

  return <SnackContext.Provider value={contextValue}>{children}</SnackContext.Provider>;
}

export default SnackProvider;
