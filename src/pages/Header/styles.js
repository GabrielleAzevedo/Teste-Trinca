import styled from 'styled-components';

export const Header = styled.div`
    width: 100vw;
    height: 20vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--color-primary);
`;

export const PatternBBq = styled.img`
    width: 100vw;
    height: 100%;

    position: relative;

    object-fit: cover;
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: 3.8rem;
  
  position: absolute;
`;

export const FadePattern = styled.div `
  width: 100vw;
  height: 10vh;

  position: absolute;
  
  align-self: flex-end;

  background: linear-gradient(0deg, var(--color-primary) 0%, rgba(255, 216, 54, 0) 100%);
  `;