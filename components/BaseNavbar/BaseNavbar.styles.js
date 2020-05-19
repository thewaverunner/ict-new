import styled from 'styled-components'


export const Header = styled.header`
    position: absolute;
    left: 0; 
    right: 0;
    margin: 35px auto 0;

    @media screen and (max-width: 768px){
        margin: 0 auto;
    }
`

export const HeaderContainer = styled.div`
    width: 1170px;
    margin: 0 auto;

    @media screen and (max-width: 1170px){
        max-width: 950px;
    }

    @media screen and (max-width:992px){
        max-width: 720px;
    }

    @media screen and (max-width: 768px){
        max-width: 520px;
    }  
`

export const HeaderNavWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 768px){ 
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