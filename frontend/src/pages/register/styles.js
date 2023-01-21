import styled from "styled-components";

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  height: 100vh;
  background-color: var(--grey10);

  .navitation-link {
    font-size: 0.9rem;
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }
`;
