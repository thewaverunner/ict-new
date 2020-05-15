import styled from 'styled-components'

export const Footer = styled.footer`
    width: 100%;
    background-color: #fafafa;
`

export const FooterWrapper = styled.div`
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

export const FooterTopContent = styled.div`
    display: flex;
    padding: 70px 0 45px;
    justify-content: space-between;
    border-bottom: 1px solid #ededed;

    @media screen and (max-width: 850px){
        padding: 30px 0;
    }

    @media screen and (max-width: 600px){
        flex-wrap: wrap;
        display: flex;
    }
` 

export const FooterChangeLanguage = styled.div`
    flex-basis: 10%;
    font-size: 16px;
    font-family: 'DM Sans Bold';
    color: #000000;

    @media screen and (max-width: 600px){
        flex: 1 1 50%;   
    }
`

export const FooterLinks = styled.div`
    flex-basis: 22%;

    @media screen and (max-width: 600px){
        flex: 1 1 40%;  
        margin: 0 10px;

        &:nth-child(1),
        &:nth-child(2) {
            margin-bottom: 30px;
        } 
    }
`

export const FooterLinksTitle = styled.div`
    margin-bottom: 10px;
    font-size: 16px;
    font-family: 'DM Sans Bold';
    color: #000000;
`

export const FooterLinksList = styled.ul``

export const FooterLinksItem = styled.li`
    line-height: 40px;
`

export const FooterLinksItemLink = styled.a`
    font-size: 14px;
    font-family: 'DM Sans Medium';
    color:#1D1D20;
    text-decoration: none;

    &:hover {
        opacity: 0.5;
        transition: opacity .3s ease-in-out;
    }
`

export const FooterBottomContent = styled.div`
    width: 100%;
`

export const FooterBottomWrapper = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;

    @media screen and (max-width: 750px){
        flex-direction: column;
    }

    @media screen and (max-width: 440px){
        text-align: center;
    }
`

export const FooterCopyright = styled.div`
    font-size: 14px;
    color: #a3a3a4;
    font-family: 'DM Sans Medium';

    @media screen and (max-width: 750px){
        margin-bottom: 20px;
    }
`

export const FooterBottomPolicyList = styled.ul`
    list-style: none;
`

export const FooterBottomPolicyItem = styled.li`
    display: inline-block;
    padding-right: 15px;

    &:last-child {
        padding-right: 0;
    }
`

export const FooterBottomPolicyItemLink = styled.a`
    font-size: 14px;
    color: #a3a3a4;
    text-decoration: none;
    font-family: 'DM Sans Medium';

    &:hover {
        color: #000000;
        transition: color 0.3s ease-in-out;
    }
`