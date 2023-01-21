import styled from "styled-components";

export const FormLoginContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 25rem;

    @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 17rem;
  }
`