import styled from 'styled-components'

// import { BREAKPOINTS } from '../../utils/constants'

// export const TEST_REMOVE_LATER = styled.header`
//     position: absolute;
//     left: 0; 
//     right: 0;
//     margin: 35px auto 0;

//     @media screen and (max-width: ${BREAKPOINTS.lg}px){
//         margin: 0 auto;
//     }
// `

export const Header = styled.header`
    position: absolute;
    left: 0; 
    right: 0;
    margin: 25px auto 0;

    @media screen and (max-width: 750px){
        margin: 0 auto;
    }
`

export const HeaderContainer = styled.div`
    width: 1800px;
    margin: 0 auto;

    @media screen and (max-width:1920px){
        max-width: 1320px;
    }

    @media screen and (max-width:1360px){
        max-width: 1100px;
    }

    @media screen and (max-width: 1150px){
        max-width: 950px;
    }

    @media screen and (max-width: 1000px){
        max-width: 800px;
    }
    
    @media screen and (max-width: 850px){
        max-width: 700px;
    }
    
    @media screen and (max-width: 750px){
        max-width: 550px;
    }
    
    @media screen and (max-width: 600px){
        max-width: 400px;
    }
    
    @media screen and (max-width: 440px){
        max-width: 310px;
    }   
`

export const HeaderNavWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 750px){ 
        display: none;
    }
`

export const HeaderMobileNav = styled.div`
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 15px 25px;
    align-items: center;
`

export const HeaderMobileLogo = styled.div``
export const HeaderLogo = styled.div``