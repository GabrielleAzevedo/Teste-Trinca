import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 650px) {
    flex-direction: column;   
  }

`;

export const Info = styled.div`
  width: 60%;

  @media(max-width: 650px) {
    width: 80%;   
  }

`;

export const Date = styled.h1`
  margin-bottom: .6rem;

  font-weight: 800;
`;

export const Title = styled.h1`
  margin-bottom: .6rem;
  
  font-size: 4.2rem;
`;

export const Description = styled.div`
  font-size: 1.6rem;
  font-style: italic;
`;

export const IconsDetail = styled.div`
  height: 20vh;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media(max-width: 650px) {
    width: 80%;

    flex-direction: row;
    justify-content: space-between;   
  }

`;

export const IconInfo = styled.div`
  display: flex;
  align-items: center;

  margin-right: 1rem;
`;

export const Icon = styled.img`
  width: 2rem;

  margin-right: .8rem;
`;

export const DataIcon = styled.span`
  font-size: 1.6rem;
`;
