import styled from "styled-components";

export const ModalNewProductContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .modal--newProduct {
    background-color: var(--grey3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
    border-radius: 1rem;

    p{
        align-self: flex-end;
        cursor: pointer;
    }
  }
`;
