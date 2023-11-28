import React from "react";
import {
  Logo,
  NavbarContainer,
  NavbarContent,
  NavbarTogglerButton,
  NavbarMenu,
  NavbarList,
  NavbarListItem,
  NavbarLink,
} from "./navbar";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarContent>
        <Logo />
        <NavbarTogglerButton type="button">
          <span>&#9776;</span>
        </NavbarTogglerButton>
        <NavbarMenu>
          <NavbarList>
            <NavbarListItem>
              <NavbarLink href="/">Home</NavbarLink>
            </NavbarListItem>
            <NavbarListItem>
              <NavbarLink href="/sobre">Sobre</NavbarLink>
            </NavbarListItem>
            <NavbarListItem>
              <NavbarLink href="/contato">Contato</NavbarLink>
            </NavbarListItem>
          </NavbarList>
        </NavbarMenu>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;