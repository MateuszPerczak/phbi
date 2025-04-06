import styled from "@emotion/styled";

export const StyledNavItem = styled.button`
  all: unset;
  display: grid;
  place-items: center;
  border: none;
  color: #fff;
  font-size: 0.9rem;
  padding: 10px;
  color: #cccccc;
  background-color: #1d2340;
  transition: background-color 150ms, color 150ms;
  border-radius: 4px;
  &:hover {
    background-color: #2f344c;
    color: #fff;
  }
  &:active {
    background-color: #262b46;
    color: #fff;
  }
`;
