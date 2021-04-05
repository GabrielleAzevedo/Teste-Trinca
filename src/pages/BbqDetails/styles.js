import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  
  display:flex;
  justify-content: center;

  margin: 5rem 0;
`;

export const Card = styled.div`
  width: 60vw;

  background-color: var(--color-bg-card);

  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
  border-radius: 2px; 

  padding: 2rem;

`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  flex-direction: column;
  
`;

export const Content = styled.form`
  display: flex;
  justify-content: space-between;
  
`;


export const Select = styled.select`
  height: 5rem;
  width: 90vw;
  max-width: 300px;
 
  font-style: italic;

  margin-top:1rem;
  padding-right: 1.5rem;

  border: none;
  border-radius: 2px;

  box-shadow: 0 0 1.6rem rgba(0, 0, 0, 0.06);

  &:focus{
      outline:none;
  }


`;

export const Option = styled.option`
  font-style: italic;
`;

export const Button = styled.button`
  height: 5rem;
  width: 10vw;
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


export const AddPerson = styled.div`
  
`;
export const List = styled.div`
  
`;

// export const Container = styled.div`
  
// `;
// export const Container = styled.div`
  
// `;
