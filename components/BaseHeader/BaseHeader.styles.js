import styled from 'styled-components'

import { BREAKPOINTS } from '../../utils/constants'

export const Header = styled.header`
    padding: 0;
    box-sizing: border-box;

    position: ${props => props.isFixed ? 'absolute' : ''};
    width: ${props => props.isFixed ? '100%': ''};
    border: ${props => props.isFixed ? '' : '1px solid rgba(112, 112, 112, 0.08)'};
    background: ${props => props.isFixed ? 'transparent' : '#fff'};

    @media screen and (min-width: 769px){ 
        padding: 18px 25px;
    }
`

export const HeaderContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`

export const HeaderNavWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: ${BREAKPOINTS.sm}px){ 
        display: none;
    }
`

export const HeaderMobileNav = styled.div`
    background-color: #fff;
    padding: 17px 25px;

    border:1px solid rgba(112, 112, 112, 0.08);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 2;
    
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