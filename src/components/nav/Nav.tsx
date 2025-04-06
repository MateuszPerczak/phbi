import { NavHamburger, NavItem, NavLogo } from "./components";
import { StyledNav } from "./Nav.styles";

export const Nav = (): JSX.Element => {
  return (
    <StyledNav>
      <div className="nav-wrapper">
        <NavLogo />
        <div className="nav-links">
          {/* <NavItem label="Oferta" />
          <NavItem label="O nas" />
          <NavItem label="Strefa wiedzy" />
          <NavItem label="Kontakt" /> */}
          {/* <NavHamburger /> */}
        </div>
      </div>
    </StyledNav>
  );
};
