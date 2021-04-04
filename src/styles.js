import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`   
    :root{
        --font: 'Raleway', sans-serif;
        --color-font: rgba(0, 0, 0, 0.8);
        --color-font-title: #000000;
        --color-font-negative: #FFFFFF;

        --color-primary: #FFD836;
        --color-primary-darker: #998220; 
        --color-secondary: #000000;

        --color-bg: #FAFAFA;

        --color-bg-button: #000000;

        --color-bg-card: #FFFFFF;
        --color-bg-card-secondary: #F1F1F1;


        font-size: 62.5%;
    }

    * {
        box-sizing: border-box;

        margin: 0;
        padding: 0;
    }

    html, body{  
        background-color: var(--color-bg);
        overflow-x: hidden;
    }

    body{
        min-height: 100vh;
    }

    body,
    input,
    button,
    select,
    textarea {
        font: 500 1.6rem var(--font);
        color: var(--color-font);
    }

    a{
        text-decoration: none;
        color: var(--color-font);


        &:visited,
        &:hover,
        &:active{
            color: var(--color-font);
        }
    }

    @media (min-width: 700px){
        :root{
            font-size: 67%;
        }
    }

`;
  
export default GlobalStyle;
