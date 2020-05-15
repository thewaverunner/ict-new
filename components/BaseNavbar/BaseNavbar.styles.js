import styled from 'styled-components'

export const HeaderContainer = styled.div`
    max-width: 1800px;
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

export const Header = styled.header`
    padding-top: 35px;
    margin-bottom: 16px;
    height: 810px;
    display: flex;
    flex-direction: column;
    background: url('../../static/images/header-background.svg');
    background-size: cover;

    @media screen and (max-width: 750px){
        padding-top: 0;
    }
`

export const HeaderDescriptionWrapper = styled.div`
    max-width: 49%;
    transform: translateY(77%);

    @media screen and (max-width:1360px){
        max-width: 55%;
        transform: translateY(50%);
    }

    @media screen and (max-width: 1150px){
        max-width: 63%;
    }

    @media screen and (max-width: 1000px){
        max-width: 75%;
    }

    @media screen and (max-width: 600px){
        transform: translateY(40%);
    } 

    @media screen and (max-width: 440px){
        max-width: 100%;
        text-align: center;
        transform: none;
        padding: 0 10px;
    }    
`

export const HeaderTitle = styled.h1`
    font-size: 47px;
    font-family: 'DM Sans Bold';
    color:#ffffff;
    margin-bottom: 20px;
    line-height: 70px;

    @media screen and (max-width: 1000px){
        font-size: 35px;
    }

    @media screen and (max-width: 850px){
        font-size: 32px;
    }

    @media screen and (max-width: 600px){
        font-size: 28px;
        line-height: 40px;
        margin-top: 40px;
    }
`

export const HeaderMobileNav = styled.div`
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 15px 25px;
    align-items: center;
`

export const HeaderDescription = styled.p`
    font-size: 21px;
    color: #ffffff;
    margin-bottom: 60px;
    font-family: 'DM Sans Regular';
    line-height: 35px;

    @media screen and (max-width: 1000px){
        font-size: 19px;
    }

    @media screen and (max-width: 850px){
        font-size: 17px;
    }

`

export const HeaderMobileLogo = styled.div``
export const HeaderLogo = styled.div``