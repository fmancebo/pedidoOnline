import { createContext, useState, useMemo, ReactNode, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { SnackData } from "../interfaces/SnackData";
import SnackEmoji from "../helpers/SnackEmoji";
import { CustomerData } from "../interfaces/CustomerData";

interface Snack extends SnackData {
  quantity: number;
  subtotal: number;
}

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextProps {
  cart: Snack[];

  addSnackIntoCart: (snack: SnackData) => void;
  removeSnackFromCart: (snack: Snack) => void;
  snackCartIncrement: (snack: Snack) => void;
  snackCartDecrement: (snack: Snack) => void;
  confirmOrder: () => void;
  payOrder: (customer: CustomerData) => void;
}

export const CartContext = createContext({} as CartContextProps);

const localStorageKey = "@FoodCommerce:cart";

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Snack[]>(() => {
    const storedCart = localStorage.getItem(localStorageKey);
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const saveCart = useCallback((items: Snack[]): void => {
    setCart(items);
    localStorage.setItem(localStorageKey, JSON.stringify(items));
  }, []);

  const clearCart = useCallback((): void => {
    localStorage.removeItem(localStorageKey);
  }, []);

  const navigate = useNavigate();

  const addSnackIntoCart = useCallback(
    (snack: SnackData): void => {
      const snackExistentIntoCart = cart.find(
        (item) => item.snack === snack.snack && item.id === snack.id,
      );
      if (snackExistentIntoCart) {
        const newCart = cart.map((item) => {
          if (item.id === snack.id) {
            const quantity = item.quantity + 1;
            const subtotal = item.price * quantity;

            return { ...item, quantity, subtotal };
          }
          return item;
        });
        // console.log("newcart atualizado", newCart);
        toast.success(`Outro(a) ${SnackEmoji(snack.snack)} ${snack.name} adicionado nos pedidos`);
        saveCart(newCart);
        return;
      }

      const newSnack = { ...snack, quantity: 1, subtotal: snack.price };
      const newCart = [...cart, newSnack];

      // console.log("newcart adiçao", newCart);
      toast.success(`${SnackEmoji(snack.snack)} ${snack.name} adicionado nos pedidos`);
      saveCart(newCart);
    },
    [cart, saveCart],
  );

  const removeSnackFromCart = useCallback(
    (snack: Snack): void => {
      const newcart = cart.filter((item) => !(item.id === snack.id && item.snack === snack.snack));

      saveCart(newcart);
    },
    [cart, saveCart],
  );

  const updateSnackQuantity = useCallback(
    (snack: Snack, newQuantity: number) => {
      if (newQuantity <= 0) return;

      const snackExistentInCart = cart.find(
        (item) => item.id === snack.id && item.snack === snack.snack,
      );

      if (!snackExistentInCart) return;

      const newCart = cart.map((item) => {
        if (item.id === snackExistentInCart.id && item.snack === snackExistentInCart.snack) {
          return {
            ...item,
            quantity: newQuantity,
            subtotal: item.price * newQuantity,
          };
        }
        return item;
      });
      saveCart(newCart);
    },
    [cart, saveCart],
  );

  const snackCartIncrement = useCallback(
    (snack: Snack): void => {
      updateSnackQuantity(snack, snack.quantity + 1);
    },
    [updateSnackQuantity],
  );

  const snackCartDecrement = useCallback(
    (snack: Snack): void => {
      updateSnackQuantity(snack, snack.quantity - 1);
    },
    [updateSnackQuantity],
  );

  const confirmOrder = useCallback((): void => {
    navigate("/payment");
  }, [navigate]);

  const payOrder = useCallback(
    (customer: CustomerData): void => {
      console.log("payorder", cart, customer);
      // chamada de api para o back end
      clearCart(); // deve ser executado apos retorno psoitivo da API
    },
    [cart, clearCart],
  );

  const value = useMemo(
    () => ({
      cart,
      addSnackIntoCart,
      removeSnackFromCart,
      snackCartIncrement,
      snackCartDecrement,
      confirmOrder,
      payOrder,
    }),
    [
      cart,
      addSnackIntoCart,
      removeSnackFromCart,
      snackCartIncrement,
      snackCartDecrement,
      confirmOrder,
      payOrder,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
