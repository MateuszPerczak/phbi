import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledNavLogo = styled(NavLink)`
  display: grid;
  place-items: center;
  user-select: none;
  background-color: #1d2340;
  transition: background-color 150ms;
  border-radius: 4px;
  &:hover {
    background-color: #2f344c;
  }
  &:active {
    background-color: #262b46;
  }
`;
