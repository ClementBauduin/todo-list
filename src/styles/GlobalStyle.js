import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  body {
      background-color: #660708;
      font-size: 16px;
      font-family: 'Roboto', sans-serif;
      color: white;
  }

  .h1-title {
    font-weight:700;
    margin-bottom:2rem;
    text-shadow: 2px 2px #610505;
  }

  .p-task-number {
    margin-bottom:2rem;
    text-shadow: 2px 2px #610505;
  }
  
  html {
    box-sizing: border-box;
    font-size: 16px;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }

  *,*:focus,*:hover{
    outline:none;
  } 

  ol, ul {
    list-style: none;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
`;
 
export default GlobalStyle;