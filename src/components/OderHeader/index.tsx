import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/logo.svg";
import { Container } from "./styles";
import useCart from "../../hooks/useCart";
import { ReactComponent as CartIcon } from "../../assets/shopping-cart.svg";

function OderHeader() {
  const { cart } = useCart();

  return (
    <Container>
      <Link to='/'>
        <img src={LogoImg} alt='Food Commerce' />
      </Link>
      <div>
        <div>
          <h3>Meu Carrinho</h3>
          <span>
            <strong>{`${cart.length}`.padStart(2, "0")}</strong> Pedido(s)
          </span>
        </div>
        <CartIcon />
      </div>
    </Container>
  );
}

export default OderHeader;
