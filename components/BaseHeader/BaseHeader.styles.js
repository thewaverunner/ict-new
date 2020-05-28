import styled from 'styled-components'

import { BREAKPOINTS } from '../../utils/constants'


export const HeaderNew = styled.header`
    width: 100%;
    background-color: #ffffff;
    border: 1px solid rgba(112, 112, 112, 0.08);
`

export const HeaderNewContainer = styled.div`
    @media screen and (min-width: ${BREAKPOINTS.sm}px){ 
        max-width: 1350px;

        margin: 0 auto;
        padding: 27px 25px;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    @media screen and (min-width: ${BREAKPOINTS.xl}px){ 
        padding: 27px 0;
    }
`

export const HeaderNewLogo = styled.div``


// export const Header = styled.header`
//     position: absolute;
//     left: 0; 
//     right: 0;
//     margin: 35px auto 0;

//     @media screen and (max-width: ${BREAKPOINTS.sm}px){
//         margin: 0 auto;
//     }
// `

// export const HeaderContainer = styled.div`
//     width: 1350px;
//     margin: 0 auto;
// `

// export const HeaderNavWrapper = styled.div`
//     display: flex;
//     justify-content: space-between;

//     @media screen and (max-width: ${BREAKPOINTS.sm}px){ 
//         display: none;
//     }
// `

// export const HeaderMobileNav = styled.div`
//     background-color: #fff;
//     padding: 27px 25px;

//     display: flex;
//     justify-content: space-between;
//     align-items: center;
// `

// export const HeaderMobileLogo = styled.div`
//     cursor: pointer;
// `

// export const HeaderLogo = styled.div`
//     cursor: pointer;
// `

export const Header = styled.header`
    padding: 0;
    box-sizing: border-box;

    position: ${props => props.isFixed ? 'absolute' : ''};
    width: ${props => props.isFixed ? '100%': ''};
    border: ${props => props.isFixed ? '' : '1px solid rgba(112, 112, 112, 0.08)'};
    background: ${props => props.isFixed ? 'transparent' : '#fff'};

    @media screen and (min-width: 769px){ 
        padding: 28px;
    }
`

export const HeaderContainer = styled.div`
    max-width: 1350px;
    margin: 0 auto;

`

export const HeaderNavWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: ${BREAKPOINTS.sm}px){ 
        display: none;
    }
`

export const HeaderMobileNav = styled.div`
    background-color: #fff;
    padding: 17px 25px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const HeaderMobileLogo = styled.div`
    cursor: pointer;
`

export const HeaderLogo = styled.div`
    cursor: pointer;
`