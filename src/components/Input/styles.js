import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  margin-bottom: 2.4rem;
`;

export const Label = styled.label`
  font-weight: 700;
  font-size: 2.1rem;

  margin-bottom: 1rem;
`;

export const Input = styled.input`
  height: 5rem;
  width: 90vw;
  max-width: 300px;
  
  padding: 2rem;
  
  border: none;
  border-radius: 2px;

  box-shadow: 0 0 1.6rem rgba(0, 0, 0, 0.06);

  &:focus{
      outline:none;
  }

  &::placeholder{
      font-style: italic;
  }

  @media(max-width: 650px) {
    width: 90%;    
  }

`;

