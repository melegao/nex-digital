import styled from "styled-components";

export const ModalDeleteContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .modal--delete {
    background-color: var(--grey3);
    width: 17rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
    border-radius: 1rem;
  }

  .modal--close {
    cursor: pointer;
    align-self: flex-end;
  }
`;
