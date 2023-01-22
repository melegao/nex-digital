import styled from "styled-components";

export const Button = styled.button`
  width: ${(props) => props.width};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: 500;
  font-family: "Inter", sans-serif;
  color: var(--whiteFixed);
  background-color: var(--grey0);
  border: 1px solid var(--grey0);
  padding: 0.5rem 0rem;

  &:hover {
    background-color: var(--grey1);
    border: 1px solid var(--grey1);
  }
`;
