import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  height: 100vh;
  background-color: var(--grey3);

  p {
    font-size: 0.9rem;

    span {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
