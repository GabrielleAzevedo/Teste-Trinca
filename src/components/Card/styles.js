import styled from 'styled-components';

export const Card = styled.div`
  width: 45vw;
  max-width: 300px;
  height: 35vw;
  max-height: 230px;

  padding: 2rem;


  display: flex;
  flex-direction: column;
  justify-content: space-between;

  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);

  border-radius: 2px;

  background-color: var(--color-bg-card);

`;

export const CardInfo = styled.div``;

export const Date = styled.h1`
  font-size: 2.8rem;

  margin-bottom: .8rem;
`;

export const Title = styled.h2`
  font-size: 2.1rem;

  margin-bottom: .8rem;
`;

export const Description = styled.p`
  font-size: 1.4rem;
  font-style: italic;
`;

export const CardIcons = styled.div`
  display: flex;
  justify-content: space-between;

`;

export const Number = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.img`
  width: 2.2rem;

  margin-right: .8rem;
`;

export const DataIcon = styled.span`
  font-size: 2.1rem;
`;




