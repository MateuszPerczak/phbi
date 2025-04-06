import { StyledNavItem } from "./NavItem.styles";
import type { NavItemProps } from "./NavItem.types";

export const NavItem = ({ label }: NavItemProps): JSX.Element => {
  return <StyledNavItem>{label}</StyledNavItem>;
};
