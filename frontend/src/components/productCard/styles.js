import styled from "styled-components";

export const ProductCardContainer = styled.div`
  @media (max-width: 767px) {
    background-color: var(--grey7);
    margin: 0.5rem 1rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    .title {
      color: var(--grey0);
      font-size: 1rem;
    }

    .description {
      font-size: 0.9rem;
    }

    .price {
      font-size: 0.9rem;
    }

    .isOwner {
      align-self: flex-end;
    }

    .icon {
      font-size: 0.8rem;
      color: var(--grey1);
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    background-color: var(--grey7);
    margin: 0.5rem 1rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    .title {
      color: var(--grey0);
      font-size: 1rem;
    }

    .description {
      font-size: 0.9rem;
    }

    .price {
      font-size: 0.9rem;
    }

    .isOwner {
      align-self: flex-end;
    }

    .icon {
      font-size: 0.8rem;
      color: var(--grey1);
      cursor: pointer;
    }
  }

  @media (min-width: 1024px) {
    background-color: var(--grey7);
    margin: 0.5rem 1rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    width: 50rem;

    .title {
      color: var(--grey0);
      font-size: 1rem;
    }

    .description {
      font-size: 0.9rem;
    }

    .price {
      font-size: 0.9rem;
    }

    .isOwner {
      align-self: flex-end;
    }

    .icon {
      font-size: 0.8rem;
      color: var(--grey1);
      cursor: pointer;
    }
  }
`;
