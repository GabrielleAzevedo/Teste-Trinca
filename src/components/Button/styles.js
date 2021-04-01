import styled from 'styled-components';

export const Button = styled.button`
  height: 5rem;
  width: 90vw;
  max-width: 300px;

  margin-top: 3.6rem;

  font-weight: 700;
  color: var(--color-font-negative);

  background-color: var(--color-bg-button);

  border: none;
  border-radius: 18px;

  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);

  cursor: pointer;

  transition: .1s;

  &:focus,
  &:hover{
    outline:none;
    font-size: 2rem;
  }
`;
