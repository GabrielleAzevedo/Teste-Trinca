import styled from 'styled-components';

export const Container = styled.div`
  padding: 5rem 0;

  display: flex;
  justify-content: center;
  
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 3rem;
`;

export const CardNewBbq = styled.div`
  width: 45vw;
  max-width: 300px;
  height: 35vw;
  max-height: 230px;

  background-color: var(--color-bg-card-secondary);

  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  cursor: pointer;
`;

export const Circle = styled.div`
  width: 10rem;
  height: 10rem;

  margin-bottom: 2rem;

  background-color: var(--color-primary);

  border-radius: 75px;

  display: flex;
  justify-content: center;
  align-items: center;

`;

export const ChurrasIcon = styled.img`
  width:55%;
`;

export const TextNewBbq = styled.h2`
  font-size: 2.1rem;
`;

// export const Container = styled.div`
  
// `;
