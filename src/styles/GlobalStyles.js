import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root {

  /* Primary */

  --desaturated-dark-cyan: hsl(180, 29%, 50%);

/* Neutral */

--bg-main: hsl(180, 52%, 96%);
--filter-tablets: hsl(180, 31%, 95%);
--dark-grayish-cyan: hsl(180, 8%, 52%);
--very-dark-grayish-cyan: hsl(180, 14%, 20%);


}


*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
}

body {
    font-size: 1.5rem;
    font-family: 'Spartan', sans-serif;
    background-color: var(--bg-main);
    
   
}

#root{
  min-height: 100vh;
  width: 100%;
  padding: 2rem;
}
`;

export default GlobalStyle;
