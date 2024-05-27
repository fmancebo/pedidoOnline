import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Container } from "./styles";
import { ReactComponent as BurguerIcon } from "../../assets/burger.svg";
import { ReactComponent as PizzaIcon } from "../../assets/pizza.svg";
import { ReactComponent as SodaPopIcon } from "../../assets/soda.svg";
import { ReactComponent as IceCreamIcon } from "../../assets/ice-cream.svg";

import MenuImg from "../../assets/menu.svg";

function Sidebar() {
  const [menuOpen, setMenuOPen] = useState(false);

  function HandletoggleMenu() {
    setMenuOPen(!menuOpen);
  }

  return (
    <div>
      <Container isMenuOpen={menuOpen}>
        <button type='button' onClick={HandletoggleMenu}>
          <img src={MenuImg} alt='icon-menu' />
        </button>
        <nav>
          <ul>
            <li>
              <NavLink to='/'>
                <BurguerIcon />
                <span>Hambúrgueres</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='pizzas'>
                <PizzaIcon />
                <span>Pizzas</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='drinks'>
                <SodaPopIcon />
                <span>Bebidas</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='icecreams'>
                <IceCreamIcon />
                <span>Sobremesas</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
}

export default Sidebar;
