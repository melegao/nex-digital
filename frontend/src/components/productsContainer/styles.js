import styled from "styled-components";

export const ProductContainerStyle = styled.div`
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-bottom: 3rem;

    .isOwner {
      display: flex;
      gap: 1rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .isOwner {
      display: flex;
      gap: 1rem;
    }
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    width: 100vw;

    .isOwner {
      display: flex;
      gap: 1rem;
    }
  }
`;
