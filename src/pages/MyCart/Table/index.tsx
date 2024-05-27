import { useEffect, useState } from "react";
import TableDesktop from "./TableDesktop";
import useCart from "../../../hooks/useCart";
import TableMobile from "./TableMobile";
import EmptyCart from "../../../components/EmptyCart";

function Table() {
  const [windowWidth, setWindowWidth] = useState(document.documentElement.clientWidth);
  const { cart } = useCart();

  useEffect(() => {
    function updateTAbleComponentBAsedWindowWidth() {
      const currentWidth = document.documentElement.clientWidth;
      setWindowWidth(currentWidth);
    }
    window.addEventListener("resize", updateTAbleComponentBAsedWindowWidth);

    return () => {
      window.removeEventListener("resize", updateTAbleComponentBAsedWindowWidth);
    };
  }, []);

  if (cart.length === 0)
    return <EmptyCart title='Ops! Parece que você ainda não tem pedidos, peça já!' />;
  return windowWidth > 768 ? <TableDesktop /> : <TableMobile />;
}

export default Table;
