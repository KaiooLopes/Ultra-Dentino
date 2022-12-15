import React, { useEffect, useState } from "react";
import {
  NavList,
  HamburguerMenu,
  NavBarContainer,
  LogoDiv,
  Logo,
} from "./styles";
import LogoImg from "./images/logo.jpg";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  window.addEventListener("resize", () => {
    if (window.innerWidth > 994) {
      setOpenMenu(true);
    }
    if (window.innerWidth < 994) {
      setOpenMenu(false);
    }
  });

  return (
    <NavBarContainer>
      <LogoDiv>
        <img src={LogoImg} alt="Logo Ultra Dentino"></img>
      </LogoDiv>
      <HamburguerMenu
        openMenu={openMenu}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <div></div>
        <div></div>
        <div></div>
      </HamburguerMenu>
      <NavList openMenu={openMenu}>
        <ul>
          <li>
            <a href="#ReferenceSection">Sobre UltraDentino</a>
          </li>
          <li>
            <a href="#ProductComposition">Ingredientes</a>
          </li>
          <li>
            <a href="#FAQ">FAQ</a>
          </li>
          <li>
            <a href="#PriceBox">OrderNow</a>
          </li>
        </ul>
      </NavList>
    </NavBarContainer>
  );
};

export default NavBar;
