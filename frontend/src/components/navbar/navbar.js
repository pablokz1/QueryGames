import styled from "styled-components";

export const NavbarContainer = styled.nav`
  background-color: #f8f9fa; /* Set your background color */
  padding: 15px 0;
`;

export const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px; /* Set your max width */
  margin: 0 auto;
`;

export const Logo = styled.img`
  max-height: 40px;
`;

export const NavbarTogglerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

export const NavbarMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const NavbarList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

export const NavbarListItem = styled.li`
  margin-right: 20px;
`;

export const NavbarLink = styled.a`
  text-decoration: none;
  color: #343a40; /* Set your text color */
  font-weight: 500;
  font-size: 16px;
`;