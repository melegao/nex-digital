import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: var(--grey3);

  @media (max-width: 767px) {
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0.2rem 1rem;

      img {
        width: 4rem;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0.4rem 3rem;

      img {
        width: 5rem;
      }
    }
  }

  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0.4rem 0rem;
      width: 50rem;

      img {
        width: 5rem;
      }
    }
  }
`;
