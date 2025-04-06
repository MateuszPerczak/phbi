import styled from "@emotion/styled";

export const StyledNavHamburger = styled.button`
  display: grid;
  place-items: center;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  padding: 10px;
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
