import styled from "styled-components";

export const NotLoggedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem;
  gap: 1rem;
  width: 100vw;
  height: 100vh;
  background-color: var(--grey3);

  img {
    width: 8rem;
  }

  h2 {
    color: var(--alert1);
  }

  span {
    cursor: pointer;
    text-decoration: underline;
  }
`;
