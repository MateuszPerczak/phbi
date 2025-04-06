import Logo from "@assets/logo.svg?react";

import { StyledNavLogo } from "./NavLogo.styles";

export const NavLogo = (): JSX.Element => {
  return (
    <StyledNavLogo to="/">
      <Logo width={200} height={60} />
    </StyledNavLogo>
  );
};
