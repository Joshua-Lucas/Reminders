import { createGlobalStyle } from 'styled-components'
import bodyFont from '../../../fonts/primaryFont.ttf'
import headerFont from '../../../fonts/headerFont.ttf'
import { primaryFont, secondaryFont } from './Typography'
import { normalize } from 'polished'

const GlobalStyle = createGlobalStyle`
    ${normalize()}
    @font-face {
        font-family: 'Hind';
        src: url(${bodyFont});
    }
    @font-face {
        font-family: 'Hind';
        src: url(${headerFont});
    }
    
    
    html {
        font-size: 16px;
        box-sizing: border-box;    

    }

    * , *:before, *:after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        font-family: ${primaryFont}; 
    }

    h1 , h2 ,h3 , h4, h5 { 
        font-family: ${secondaryFont}
    }

    h1 {
        font-size: 1.8rem;
    }

    h2 {
        font-size: 1.6rem;
    }

    h3 {
        font-size: 1.4rem
    }

    h4 {
        font-size: 1.2rem
    }

    h5 {
        font-size: 1.1rem
    }




`

export default GlobalStyle
